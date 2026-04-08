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
      <stop offset="0%" style="stop-color:#0F172A;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#1E3A8A;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1E40AF;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#3B82F6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#8B5CF6;stop-opacity:1" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${width}" height="${height}" fill="url(#bg)" />

  <!-- Decorative circles -->
  <circle cx="100" cy="530" r="180" fill="#1E40AF" opacity="0.3" />
  <circle cx="1100" cy="100" r="200" fill="#3B82F6" opacity="0.15" />
  <circle cx="900" cy="500" r="120" fill="#8B5CF6" opacity="0.1" />

  <!-- Grid pattern -->
  <line x1="0" y1="210" x2="1200" y2="210" stroke="#3B82F6" stroke-width="0.5" opacity="0.15" />
  <line x1="0" y1="420" x2="1200" y2="420" stroke="#3B82F6" stroke-width="0.5" opacity="0.15" />
  <line x1="400" y1="0" x2="400" y2="630" stroke="#3B82F6" stroke-width="0.5" opacity="0.15" />
  <line x1="800" y1="0" x2="800" y2="630" stroke="#3B82F6" stroke-width="0.5" opacity="0.15" />

  <!-- Accent bar -->
  <rect x="80" y="165" width="60" height="4" rx="2" fill="url(#accent)" />

  <!-- Title -->
  <text x="80" y="230" font-family="Arial, sans-serif" font-size="56" font-weight="900" fill="#FFFFFF" letter-spacing="-1">
    DreamIT Research
  </text>

  <!-- Subtitle Korean -->
  <text x="80" y="295" font-family="Arial, sans-serif" font-size="36" font-weight="700" fill="#93C5FD">
    사회과학 조사방법론
  </text>

  <!-- Description -->
  <text x="80" y="355" font-family="Arial, sans-serif" font-size="20" fill="#94A3B8">
    Research Methodology Learning Platform
  </text>

  <!-- 8 Learning Path Icons Row -->
  <g transform="translate(80, 400)">
    <!-- Research Design -->
    <rect x="0" y="0" width="115" height="44" rx="22" fill="#1E40AF" opacity="0.9" />
    <text x="57" y="28" font-family="Arial, sans-serif" font-size="13" fill="#FFFFFF" text-anchor="middle" font-weight="600">연구설계</text>

    <!-- Sampling -->
    <rect x="125" y="0" width="115" height="44" rx="22" fill="#7C3AED" opacity="0.9" />
    <text x="182" y="28" font-family="Arial, sans-serif" font-size="13" fill="#FFFFFF" text-anchor="middle" font-weight="600">표본추출</text>

    <!-- Measurement -->
    <rect x="250" y="0" width="125" height="44" rx="22" fill="#059669" opacity="0.9" />
    <text x="312" y="28" font-family="Arial, sans-serif" font-size="13" fill="#FFFFFF" text-anchor="middle" font-weight="600">측정과 척도</text>

    <!-- Survey -->
    <rect x="385" y="0" width="125" height="44" rx="22" fill="#D97706" opacity="0.9" />
    <text x="447" y="28" font-family="Arial, sans-serif" font-size="13" fill="#FFFFFF" text-anchor="middle" font-weight="600">설문조사법</text>

    <!-- Experiment -->
    <rect x="520" y="0" width="115" height="44" rx="22" fill="#DC2626" opacity="0.9" />
    <text x="577" y="28" font-family="Arial, sans-serif" font-size="13" fill="#FFFFFF" text-anchor="middle" font-weight="600">실험연구</text>

    <!-- Qualitative -->
    <rect x="645" y="0" width="115" height="44" rx="22" fill="#0891B2" opacity="0.9" />
    <text x="702" y="28" font-family="Arial, sans-serif" font-size="13" fill="#FFFFFF" text-anchor="middle" font-weight="600">질적연구</text>

    <!-- Statistics -->
    <rect x="770" y="0" width="115" height="44" rx="22" fill="#9333EA" opacity="0.9" />
    <text x="827" y="28" font-family="Arial, sans-serif" font-size="13" fill="#FFFFFF" text-anchor="middle" font-weight="600">통계분석</text>

    <!-- Ethics -->
    <rect x="895" y="0" width="115" height="44" rx="22" fill="#EA580C" opacity="0.9" />
    <text x="952" y="28" font-family="Arial, sans-serif" font-size="13" fill="#FFFFFF" text-anchor="middle" font-weight="600">연구윤리</text>
  </g>

  <!-- Bottom bar -->
  <rect x="0" y="610" width="1200" height="20" fill="url(#accent)" opacity="0.8" />

  <!-- Domain -->
  <text x="80" y="530" font-family="Arial, sans-serif" font-size="18" fill="#64748B" font-weight="500">
    research.dreamitbiz.com
  </text>

  <!-- Logo area -->
  <text x="1120" y="530" font-family="Arial, sans-serif" font-size="16" fill="#64748B" text-anchor="end" font-weight="600">
    DreamIT Biz
  </text>
</svg>`;

async function generate() {
  await sharp(Buffer.from(svg))
    .png()
    .toFile(outputPath);
  console.log(`OG image generated: ${outputPath}`);
}

generate().catch(console.error);
