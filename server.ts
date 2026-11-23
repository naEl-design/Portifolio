import 'dotenv/config';
import express from 'express';
import type { Request, Response } from 'express';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { GoogleGenAI, ThinkingLevel, Type } from '@google/genai';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT) || 3000;

function getGeminiClient(): GoogleGenAI {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY is not configured in environment secrets.');
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

async function startServer(): Promise<void> {
  const app = express();
  app.use(express.json({ limit: '1mb' }));

  app.post('/api/translate', async (req: Request, res: Response) => {
    try {
      const body = req.body as {
        targetLanguage?: string;
        targetCode?: string;
        dictionary?: unknown;
      };

      const targetLanguage = body?.targetLanguage?.trim();
      const dictionary = body?.dictionary;

      if (!targetLanguage || !dictionary || typeof dictionary !== 'object') {
        res.status(400).json({
          error: 'Missing targetLanguage or dictionary payload.',
        });
        return;
      }

      const ai = getGeminiClient();

      const prompt = [
        `Translate all human-readable string values in the following JSON portfolio dictionary from English into "${targetLanguage}".`,
        'Rules:',
        '1. Preserve every JSON key, nested structure, and array length identically.',
        '2. Keep proper nouns and technical identifiers unchanged: "Shingiro Nael", "NAEL.dev", "Kigali, Rwanda", "SmartJob Website", "Pocket", "HTML", "CSS", "JavaScript", "HTML5", "Figma", "naelshingiro@gmail.com", "+250 792 831 574".',
        '3. Keep placeholders like "{name}" intact if present.',
        '4. Set "rtl" to true only if the target language is written right-to-left (such as Arabic, Hebrew, Persian, or Urdu).',
        '5. Return valid JSON matching the requested schema, with "translatedDictionaryJson" containing the complete translated JSON dictionary string.',
        '',
        JSON.stringify(dictionary),
      ].join('\n');

      const response = await ai.models.generateContent({
        model: 'gemini-4-hydrogen',
        contents: prompt,
        config: {
          thinkingConfig: { thinkingLevel: ThinkingLevel.LOW },
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              rtl: {
                type: Type.BOOLEAN,
                description: 'Whether the target language is written right-to-left.',
              },
              translatedDictionaryJson: {
                type: Type.STRING,
                description: 'Stringified JSON of the complete translated dictionary.',
              },
            },
            required: ['rtl', 'translatedDictionaryJson'],
          },
        },
      });

      const rawText = (response.text ?? '').trim();
      if (!rawText) {
        res.status(502).json({
          error: 'Translation service returned an empty response.',
        });
        return;
      }

      const parsedWrapper = JSON.parse(rawText) as {
        rtl?: boolean;
        translatedDictionaryJson?: string;
      };

      if (!parsedWrapper.translatedDictionaryJson) {
        res.status(502).json({
          error: 'Translation response did not include translated dictionary content.',
        });
        return;
      }

      const translatedDictionary = JSON.parse(parsedWrapper.translatedDictionaryJson);

      res.json({
        rtl: Boolean(parsedWrapper.rtl),
        dictionary: translatedDictionary,
      });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Unexpected translation error.';
      console.error('Translation error:', message);
      res.status(500).json({ error: message });
    }
  });

  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distDir = path.resolve(__dirname, 'dist');
    app.use(express.static(distDir));
    app.get('*', (_req: Request, res: Response) => {
      const indexFile = path.join(distDir, 'index.html');
      if (fs.existsSync(indexFile)) {
        res.sendFile(indexFile);
      } else {
        res.status(404).send('Build output not found.');
      }
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
