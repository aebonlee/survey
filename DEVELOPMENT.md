# DreamIT Survey - 개발 문서

## 프로젝트 개요

**논문작성 학습 사이트** — 학술 논문작성의 전 과정을 체계적으로 학습할 수 있는 웹 플랫폼

| 항목 | 내용 |
|------|------|
| 사이트명 | DreamIT Survey (Survey Master) |
| 도메인 | https://survey.dreamitbiz.com |
| 리포지토리 | https://github.com/aebonlee/survey |
| DB Prefix | `sv_` |
| 개발 포트 | 5183 |
| 테마 색상 | #0F766E (Teal) |

---

## 기술 스택

- **프레임워크**: React 19.2 + TypeScript
- **빌드 도구**: Vite 7.3
- **라우팅**: React Router DOM 7.13
- **백엔드**: Supabase (Auth + Database + Storage)
- **결제**: PortOne Browser SDK
- **배포**: GitHub Pages (gh-pages)
- **아이콘**: Font Awesome 6

---

## 프로젝트 구조

```
survey/
├── public/
│   ├── CNAME                    # survey.dreamitbiz.com
│   ├── favicon.svg / .png       # Teal "S" 파비콘
│   ├── og-image.png             # OG 이미지
│   ├── manifest.json
│   ├── robots.txt
│   ├── sitemap.xml
│   └── 404.html
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       # 8개 학습 경로 네비게이션
│   │   │   └── Footer.tsx       # 브랜드, 빠른 링크, 연락처
│   │   ├── SEOHead.tsx          # React 19 native head hoisting
│   │   ├── TipBox.tsx           # tip/warning/important/danger 박스
│   │   ├── HeroBackground.tsx   # 히어로 배경 애니메이션
│   │   ├── HeroCarousel.tsx     # 히어로 슬라이드
│   │   └── FeatureCard.tsx      # 기능 카드 컴포넌트
│   ├── config/
│   │   ├── site.ts              # SITE_CONFIG + LEARNING_PATHS (8개)
│   │   └── admin.ts             # 관리자 설정
│   ├── contexts/
│   │   ├── LanguageContext.tsx   # 한/영 전환
│   │   ├── ThemeContext.tsx      # 5가지 컬러 테마 + 다크모드
│   │   └── AuthContext.tsx       # Supabase Auth
│   ├── hooks/                   # Custom hooks
│   ├── layouts/
│   │   └── PublicLayout.tsx     # 메인 라우팅 (8개 학습 페이지)
│   ├── pages/
│   │   ├── Home.tsx             # 메인 페이지
│   │   ├── Login.tsx            # 로그인
│   │   ├── Register.tsx         # 회원가입
│   │   ├── ForgotPassword.tsx   # 비밀번호 찾기
│   │   ├── MyPage.tsx           # 마이페이지
│   │   ├── NotFound.tsx         # 404 페이지
│   │   ├── proposal/
│   │   │   └── Proposal.tsx     # 연구계획서 가이드
│   │   ├── literature/
│   │   │   └── Literature.tsx   # 문헌검토 가이드
│   │   ├── methods/
│   │   │   └── Methods.tsx      # 연구방법 가이드
│   │   ├── data-collection/
│   │   │   └── DataCollection.tsx # 자료수집 가이드
│   │   ├── analysis/
│   │   │   └── Analysis.tsx     # 분석 가이드
│   │   ├── interpretation/
│   │   │   └── Interpretation.tsx # 결과해석 가이드
│   │   ├── writing/
│   │   │   └── Writing.tsx      # 논문작성 가이드
│   │   └── irb-ethics/
│   │       └── IrbEthics.tsx    # IRB윤리 가이드
│   ├── styles/
│   │   └── base.css             # 전체 스타일 (Teal 테마)
│   ├── types/
│   │   └── index.ts             # TypeScript 타입 정의
│   └── utils/
│       ├── translations.ts      # 한/영 번역 데이터
│       └── supabase.ts          # Supabase 클라이언트
├── scripts/
│   ├── generate-favicon.mjs     # 파비콘 생성 (Teal "S")
│   └── generate-og-image.mjs    # OG 이미지 생성
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Actions 배포
├── package.json
├── vite.config.ts               # port: 5183
├── tsconfig.json
└── index.html                   # 메타태그 (survey.dreamitbiz.com)
```

---

## 8개 학습 경로

| # | 경로 | 한글 | English | 색상 | 아이콘 |
|---|------|------|---------|------|--------|
| 1 | /proposal | 연구계획서 | Research Proposal | #0F766E | fa-file-pen |
| 2 | /literature | 문헌검토 | Literature Review | #7C3AED | fa-book-open-reader |
| 3 | /methods | 연구방법 | Research Methods | #2563EB | fa-microscope |
| 4 | /data-collection | 자료수집 | Data Collection | #D97706 | fa-database |
| 5 | /analysis | 분석 | Analysis | #DC2626 | fa-chart-line |
| 6 | /interpretation | 결과해석 | Result Interpretation | #9333EA | fa-magnifying-glass-chart |
| 7 | /writing | 논문작성 | Paper Writing | #0891B2 | fa-pen-nib |
| 8 | /irb-ethics | IRB윤리 | IRB & Ethics | #EA580C | fa-shield-halved |

### 각 학습 페이지 섹션 구성

**1. 연구계획서 (Proposal.tsx)**
- 연구계획서 개요 / 연구 주제 선정 / 연구 목적과 필요성 / 연구 질문과 가설 / 이론적 배경 작성 / 연구계획서 작성 실전 / 참고문헌

**2. 문헌검토 (Literature.tsx)**
- 문헌검토의 목적 / 문헌 탐색 전략 / 비판적 문헌 읽기 / 문헌 정리와 분류 / 문헌검토 작성법 / 인용과 참고문헌 관리 / 참고문헌

**3. 연구방법 (Methods.tsx)**
- 연구방법론 개요 / 양적연구 vs 질적연구 / 혼합연구방법 / 연구설계 유형 / 변수와 조작적 정의 / 연구방법 섹션 작성 / 참고문헌

**4. 자료수집 (DataCollection.tsx)**
- 자료수집 전략 / 설문조사 설계 / 면접/인터뷰 방법 / 관찰과 실험 / 2차 자료 활용 / 자료수집 윤리 / 참고문헌

**5. 분석 (Analysis.tsx)**
- 자료분석 개요 / 양적분석 / 질적분석 / 통계 소프트웨어 활용 / 분석 결과 제시 / 분석의 신뢰도와 타당도 / 참고문헌

**6. 결과해석 (Interpretation.tsx)**
- 결과해석의 원칙 / 통계적 유의성 해석 / 효과크기와 실질적 유의성 / 선행연구와 비교 / 연구 한계점 기술 / 후속연구 제안 / 참고문헌

**7. 논문작성 (Writing.tsx)**
- 학술논문 구조(IMRaD) / 서론 작성법 / 연구방법 작성법 / 결과 작성법 / 논의 작성법 / 투고와 피어리뷰 / 참고문헌

**8. IRB윤리 (IrbEthics.tsx)**
- 연구윤리 기초 / IRB 심의 절차 / 동의서 작성 / 개인정보 보호 / 연구 부정행위 / 책임있는 연구수행(RCR) / 참고문헌

---

## 학습 페이지 컴포넌트 패턴

모든 학습 페이지는 동일한 패턴으로 구성됩니다:

```tsx
// 1. SECTIONS 배열 정의
const SECTIONS = [
  { id: 'section-id', icon: 'fa-icon', ko: '한글명', en: 'English' },
  // ... 6개 콘텐츠 섹션 + 참고문헌
];

// 2. 각 섹션별 컴포넌트
function SectionName({ isKo }: { isKo: boolean }): ReactElement { ... }

// 3. 메인 컴포넌트
export default function PageName(): ReactElement {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('first-section-id');
  const isKo = language === 'ko';

  return (
    <>
      <SEOHead path="/page-path" />
      <div className="guide-container">
        {/* 사이드바 목차 */}
        <aside className="guide-sidebar">...</aside>
        {/* 콘텐츠 영역 */}
        <div className="guide-content">
          {activeSection === 'id' && <SectionComponent isKo={isKo} />}
          {/* 이전/다음 네비게이션 */}
        </div>
      </div>
    </>
  );
}
```

---

## 주요 기능

### 다국어 지원 (한/영)
- `LanguageContext`를 통한 전역 언어 상태 관리
- `translations.ts`에 모든 번역 키 관리
- 학습 콘텐츠 내부는 `isKo` prop으로 조건부 렌더링

### 테마 시스템
- 5가지 컬러 테마 (Survey Teal, Purple, Blue, Orange, Rose)
- 다크모드 지원
- CSS Custom Properties 기반

### 인증 시스템
- Supabase Auth (이메일/비밀번호)
- Google OAuth, Kakao OAuth 지원
- 프로필 관리 (마이페이지)

### 결제 시스템
- PortOne Browser SDK 통합
- 카드결제, 계좌이체 지원

### SEO
- React 19 native head hoisting (SEOHead 컴포넌트)
- Open Graph 메타태그
- sitemap.xml, robots.txt

---

## 개발 명령어

```bash
# 개발 서버 실행 (포트 5183)
npm run dev

# TypeScript 타입 체크
npm run typecheck

# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview

# GitHub Pages 배포
npm run deploy

# 파비콘 생성
node scripts/generate-favicon.mjs

# OG 이미지 생성
node scripts/generate-og-image.mjs
```

---

## 환경 변수 (.env)

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
VITE_PORTONE_STORE_ID=your-store-id
VITE_PORTONE_CHANNEL_KEY=your-channel-key
VITE_GOOGLE_CLIENT_ID=your-google-client-id
VITE_KAKAO_CLIENT_ID=your-kakao-client-id
VITE_SITE_URL=https://survey.dreamitbiz.com
```

---

## 배포

- **호스팅**: GitHub Pages
- **CI/CD**: GitHub Actions (`deploy.yml`)
- **커스텀 도메인**: survey.dreamitbiz.com (CNAME)
- **빌드 출력**: `dist/` 디렉토리

---

## Family Sites

| 사이트 | 도메인 | 설명 |
|--------|--------|------|
| DreamIT Biz | www.dreamitbiz.com | 메인 사이트 |
| Teaching AI | teaching.dreamitbiz.com | AI 교육 |
| ChatGPT Master | chatgpt.dreamitbiz.com | ChatGPT 학습 |
| Claude Master | claude.dreamitbiz.com | Claude 학습 |
| Study Master | study.dreamitbiz.com | 학습 마스터 |
| Research Master | research.dreamitbiz.com | 연구방법론 |
| **Survey Master** | **survey.dreamitbiz.com** | **논문작성 가이드** |

---

## 개발 이력

- **2025-04-09**: 프로젝트 초기 구축
  - Research 사이트 기반으로 survey 프로젝트 생성
  - 8개 논문작성 학습 경로 페이지 개발
  - 한/영 다국어 콘텐츠 작성
  - Teal (#0F766E) 테마 적용
  - 파비콘 및 OG 이미지 생성
  - GitHub Pages 배포 설정
