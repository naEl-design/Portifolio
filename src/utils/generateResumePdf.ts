/**
 * Generates a clean, valid single-page PDF resume for Shingiro Nael
 * using standard PDF 1.4 Helvetica typography (no external dependencies).
 */

function escapePdfText(text: string): string {
  return text
    .replace(/\\/g, '\\\\')
    .replace(/\(/g, '\\(')
    .replace(/\)/g, '\\)')
    .replace(/[^\x20-\x7E]/g, '-');
}

interface TextLine {
  text: string;
  size: number;
  bold?: boolean;
  color?: [number, number, number];
  gapAfter?: number;
}

function wrapText(text: string, maxChars: number): string[] {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let current = '';

  for (const word of words) {
    if (!current) {
      current = word;
    } else if (current.length + 1 + word.length <= maxChars) {
      current += ` ${word}`;
    } else {
      lines.push(current);
      current = word;
    }
  }
  if (current) lines.push(current);
  return lines;
}

export function downloadResumePdf(): void {
  const lines: TextLine[] = [
    { text: 'SHINGIRO NAEL', size: 20, bold: true, color: [0.76, 0.25, 0.05], gapAfter: 4 },
    { text: 'Frontend Developer & UI/UX Designer  |  Kigali, Rwanda', size: 11, bold: true, color: [0.08, 0.5, 0.24], gapAfter: 4 },
    {
      text: 'Phone: +250 792 831 574  |  Email: naelshingiro@gmail.com  |  GitHub: github.com/naEl-design',
      size: 9.5,
      color: [0.25, 0.3, 0.28],
      gapAfter: 14,
    },

    { text: 'SUMMARY', size: 11, bold: true, color: [0.76, 0.25, 0.05], gapAfter: 5 },
    ...wrapText(
      'Software Development student at Intango Technical School (Level 4 SWD | S5) focused on bridging thoughtful UI/UX design with clean, responsive frontend code. Passionate about building intuitive, accessible web experiences using HTML5, CSS3, JavaScript, and Figma.',
      92
    ).map((t, i, arr) => ({
      text: t,
      size: 10,
      color: [0.15, 0.18, 0.17] as [number, number, number],
      gapAfter: i === arr.length - 1 ? 12 : 3,
    })),

    { text: 'EDUCATION & ACADEMIC FOUNDATION', size: 11, bold: true, color: [0.08, 0.5, 0.24], gapAfter: 5 },
    {
      text: 'Intango Technical School - Kigali, Rwanda',
      size: 10.5,
      bold: true,
      color: [0.1, 0.12, 0.12],
      gapAfter: 3,
    },
    {
      text: 'Trade: Software Development (SWD)  |  Level 4 | S5 (In Progress)',
      size: 9.5,
      color: [0.25, 0.3, 0.28],
      gapAfter: 3,
    },
    ...wrapText(
      'Core coursework: Frontend Web Development, Programming Foundations, Databases, System Design, and Problem-Solving.',
      92
    ).map((t, i, arr) => ({
      text: t,
      size: 9.5,
      color: [0.2, 0.24, 0.22] as [number, number, number],
      gapAfter: i === arr.length - 1 ? 12 : 3,
    })),

    { text: 'SKILLS & TOOLS', size: 11, bold: true, color: [0.76, 0.25, 0.05], gapAfter: 5 },
    {
      text: 'Core Languages: HTML5 (Semantic & Accessible), CSS3 (Flexbox, Grid, Animations), JavaScript (DOM & ES6+)',
      size: 9.5,
      color: [0.15, 0.18, 0.17],
      gapAfter: 4,
    },
    {
      text: 'UI/UX & Design: Figma, Wireframing, Interactive Prototyping, User Flows, Responsive Web Design',
      size: 9.5,
      color: [0.15, 0.18, 0.17],
      gapAfter: 4,
    },
    {
      text: 'Developer Tools & Learning: Git & GitHub, VS Code, Currently Learning React & Tailwind CSS',
      size: 9.5,
      color: [0.15, 0.18, 0.17],
      gapAfter: 12,
    },

    { text: 'SELECTED PROJECTS', size: 11, bold: true, color: [0.08, 0.5, 0.24], gapAfter: 5 },
    {
      text: 'SmartJob Website (smartjobwebsite.netlify.app) - Web Design & Frontend',
      size: 10,
      bold: true,
      color: [0.1, 0.12, 0.12],
      gapAfter: 3,
    },
    ...wrapText(
      'Designed and built a responsive job discovery interface prioritizing scannable listings, mobile-first filtering hierarchy, and fast navigation in HTML5, CSS3, and JavaScript.',
      92
    ).map((t, i, arr) => ({
      text: t,
      size: 9.5,
      color: [0.2, 0.24, 0.22] as [number, number, number],
      gapAfter: i === arr.length - 1 ? 8 : 3,
    })),

    {
      text: 'Pocket (pocket-9kgdhi4eb-nael-designs-projects.vercel.app) - UI/UX & Frontend',
      size: 10,
      bold: true,
      color: [0.1, 0.12, 0.12],
      gapAfter: 3,
    },
    ...wrapText(
      'Designed and implemented a clean personal tracking web application focusing on visual clarity, responsive card layouts, and interactive JavaScript behavior.',
      92
    ).map((t, i, arr) => ({
      text: t,
      size: 9.5,
      color: [0.2, 0.24, 0.22] as [number, number, number],
      gapAfter: i === arr.length - 1 ? 12 : 3,
    })),

    { text: 'AVAILABILITY', size: 11, bold: true, color: [0.76, 0.25, 0.05], gapAfter: 4 },
    {
      text: 'Open to Frontend / UI/UX Internships, Junior Collaborations, and Freelance Web Projects.',
      size: 9.5,
      color: [0.15, 0.18, 0.17],
      gapAfter: 4,
    },
  ];

  // Build PDF content stream (Letter 612 x 792)
  const ops: string[] = [];
  // Top accent rule
  ops.push('0.76 0.25 0.05 rg 48 756 516 3 re f');

  let y = 732;
  for (const line of lines) {
    if (y < 48) break;
    const font = line.bold ? '/F2' : '/F1';
    const [r, g, b] = line.color ?? [0.1, 0.1, 0.1];
    ops.push(`${r.toFixed(2)} ${g.toFixed(2)} ${b.toFixed(2)} rg`);
    ops.push(`BT ${font} ${line.size} Tf 48 ${y.toFixed(1)} Td (${escapePdfText(line.text)}) Tj ET`);
    y -= line.size + (line.gapAfter ?? 4);
  }

  const streamContent = ops.join('\n');
  const objects = [
    '1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n',
    '2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n',
    '3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>\nendobj\n',
    `4 0 obj\n<< /Length ${streamContent.length} >>\nstream\n${streamContent}\nendstream\nendobj\n`,
    '5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n',
    '6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n',
  ];

  let pdf = '%PDF-1.4\n';
  const offsets: number[] = [];
  for (const obj of objects) {
    offsets.push(pdf.length);
    pdf += obj;
  }

  const xrefStart = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n`;
  pdf += '0000000000 65535 f \n';
  for (const offset of offsets) {
    pdf += `${String(offset).padStart(10, '0')} 00000 n \n`;
  }
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;

  const blob = new Blob([pdf], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Shingiro_Nael_CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
