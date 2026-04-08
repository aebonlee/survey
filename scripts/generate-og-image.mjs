import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputPath = join(__dirname, '..', 'public', 'og-image.png');

const width = 1200;
const height = 630;

const svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#042F2E;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#0D6560;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0F766E;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#14B8A6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#10B981;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#bg)" />
  <circle cx="100" cy="530" r="180" fill="#0F766E" opacity="0.3" />
  <circle cx="1100" cy="100" r="200" fill="#14B8A6" opacity="0.15" />
  <circle cx="900" cy="500" r="120" fill="#10B981" opacity="0.1" />
  <line x1="0" y1="210" x2="1200" y2="210" stroke="#14B8A6" stroke-width="0.5" opacity="0.15" />
  <line x1="0" y1="420" x2="1200" y2="420" stroke="#14B8A6" stroke-width="0.5" opacity="0.15" />
  <line x1="400" y1="0" x2="400" y2="630" stroke="#14B8A6" stroke-width="0.5" opacity="0.15" />
  <line x1="800" y1="0" x2="800" y2="630" stroke="#14B8A6" stroke-width="0.5" opacity="0.15" />
  <rect x="80" y="165" width="60" height="4" rx="2" fill="url(#accent)" />
  <text x="80" y="230" font-family="Arial, sans-serif" font-size="56" font-weight="900" fill="#FFFFFF" letter-spacing="-1">DreamIT Survey</text>
  <text x="80" y="295" font-family="Arial, sans-serif" font-size="36" font-weight="700" fill="#5EEAD4">논문작성 가이드</text>
  <text x="80" y="355" font-family="Arial, sans-serif" font-size="20" fill="#94A3B8">Academic Paper Writing Guide Platform</text>
  <g transform="translate(80, 400)">
    <rect x="0" y="0" width="115" height="44" rx="22" fill="#0F766E" opacity="0.9" />
    <text x="57" y="28" font-family="Arial, sans-serif" font-size="13" fill="#FFFFFF" text-anchor="middle" font-weight="600">연구계획서</text>
    <rect x="125" y="0" width="115" height="44" rx="22" fill="#7C3AED" opacity="0.9" />
    <text x="182" y="28" font-family="Arial, sans-serif" font-size="13" fill="#FFFFFF" text-anchor="middle" font-weight="600">문헌검토</text>
    <rect x="250" y="0" width="115" height="44" rx="22" fill="#2563EB" opacity="0.9" />
    <text x="307" y="28" font-family="Arial, sans-serif" font-size="13" fill="#FFFFFF" text-anchor="middle" font-weight="600">연구방법</text>
    <rect x="375" y="0" width="115" height="44" rx="22" fill="#D97706" opacity="0.9" />
    <text x="432" y="28" font-family="Arial, sans-serif" font-size="13" fill="#FFFFFF" text-anchor="middle" font-weight="600">자료수집</text>
    <rect x="500" y="0" width="95" height="44" rx="22" fill="#DC2626" opacity="0.9" />
    <text x="547" y="28" font-family="Arial, sans-serif" font-size="13" fill="#FFFFFF" text-anchor="middle" font-weight="600">분석</text>
    <rect x="605" y="0" width="115" height="44" rx="22" fill="#9333EA" opacity="0.9" />
    <text x="662" y="28" font-family="Arial, sans-serif" font-size="13" fill="#FFFFFF" text-anchor="middle" font-weight="600">결과해석</text>
    <rect x="730" y="0" width="115" height="44" rx="22" fill="#0891B2" opacity="0.9" />
    <text x="787" y="28" font-family="Arial, sans-serif" font-size="13" fill="#FFFFFF" text-anchor="middle" font-weight="600">논문작성</text>
    <rect x="855" y="0" width="115" height="44" rx="22" fill="#EA580C" opacity="0.9" />
    <text x="912" y="28" font-family="Arial, sans-serif" font-size="13" fill="#FFFFFF" text-anchor="middle" font-weight="600">IRB윤리</text>
  </g>
  <rect x="0" y="610" width="1200" height="20" fill="url(#accent)" opacity="0.8" />
  <text x="80" y="530" font-family="Arial, sans-serif" font-size="18" fill="#64748B" font-weight="500">survey.dreamitbiz.com</text>
  <text x="1120" y="530" font-family="Arial, sans-serif" font-size="16" fill="#64748B" text-anchor="end" font-weight="600">DreamIT Biz</text>
</svg>`;

async function generate() {
  await sharp(Buffer.from(svg)).png().toFile(outputPath);
  console.log(`OG image generated: ${outputPath}`);
}

generate().catch(console.error);
