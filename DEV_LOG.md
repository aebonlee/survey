# Survey Master - Development Log

> 논문작성 가이드 학습 플랫폼
> URL: https://survey.dreamitbiz.com
> Repository: https://github.com/aebonlee/survey

---

## 2025-04-09 — /methods 하위 3개 방법론 페이지 추가

### 개요

기존 `/methods` (연구방법) 페이지의 하위 메뉴로 **3개 심화 방법론 페이지**를 추가하여 총 **11개** 학습 경로 구성 완료.

### 신규 학습 경로

| # | ID | 한글명 | English | 경로 | 색상 | 아이콘 |
|---|-----|---------|---------|------|------|--------|
| 9 | quantitative-methods | 양적연구방법 | Quantitative Methods | `/quantitative-methods` | `#1D4ED8` | `fa-square-poll-vertical` |
| 10 | qualitative-methods | 질적연구방법 | Qualitative Methods | `/qualitative-methods` | `#7E22CE` | `fa-comments` |
| 11 | ahp | AHP연구방법론 | AHP Methodology | `/ahp` | `#B45309` | `fa-layer-group` |

### 수정된 파일 (6개)

| 파일 | 변경 내용 |
|------|-----------|
| `src/config/site.ts` | `LEARNING_PATHS` 배열에 3개 항목 추가 |
| `src/components/layout/Navbar.tsx` | `NAV_ITEMS`에 Methods 다음에 3개 네비게이션 항목 추가 |
| `src/components/layout/Footer.tsx` | 빠른 링크에 3개 링크 추가 |
| `src/layouts/PublicLayout.tsx` | 3개 `lazy()` import + `<Route>` 추가 |
| `src/pages/Home.tsx` | 통계 수치 업데이트: 가이드 `8+` → `11+`, 토픽 `48+` → `66+`, 카테고리 `8` → `11` |
| `src/pages/methods/Methods.tsx` | 심화 학습 경로 카드 3개 추가 (SUB_PATHS + Link 카드 UI) |

### 신규 생성 파일 (3개)

#### 1. `src/pages/quantitative-methods/QuantitativeMethods.tsx` (1,246줄)

| 섹션 | 내용 |
|------|------|
| 양적연구 개요 | 실증주의 패러다임, 연역적 접근, 양적 vs 질적 비교 |
| 실험설계 | 진실험/준실험/전실험, 내적·외적 타당도 |
| 설문조사방법 | 설문지 설계, 리커트 척도, 파일럿 테스트 |
| 표본추출과 표본크기 | 확률/비확률 표본추출, G*Power |
| 양적자료분석 | t-검정, ANOVA, 회귀분석, SEM |
| 양적연구 논문작성 | IMRaD 구조, APA 양식 |
| 참고문헌 | 18건 |

#### 2. `src/pages/qualitative-methods/QualitativeMethods.tsx` (1,142줄)

| 섹션 | 내용 |
|------|------|
| 질적연구 개요 | 패러다임, Creswell 5대 접근법 |
| 근거이론 | Glaser/Strauss/Charmaz 3대 전통, 코딩 절차 |
| 현상학적 연구 | Moustakas 기술적/van Manen 해석학적 현상학 |
| 사례연구 | Yin/Stake 유형, 다중 자료원 |
| 질적자료 수집과 분석 | 주제분석, 내용분석, 담론분석 |
| 질적연구 신뢰성 확보 | Lincoln & Guba 신뢰성 기준, 삼각검증 |
| 참고문헌 | 22건 |

#### 3. `src/pages/ahp/Ahp.tsx` (1,138줄)

| 섹션 | 내용 |
|------|------|
| AHP 개요 | Saaty(1980), MCDM, AHP vs ANP |
| 계층구조 설계 | 설계 원칙, 7±2 규칙 |
| 쌍대비교와 척도 | Saaty 9점 척도, 행렬 계산 예시 |
| 일관성 검증 | CI/RI/CR, CR < 0.1 기준 |
| AHP 소프트웨어 활용 | Expert Choice, Super Decisions, Excel, R, Python |
| AHP 논문작성 | 논문 구조, 가중치 테이블, 민감도 분석 |
| 참고문헌 | Saaty, 조근태 등 |

### 커밋 이력

| 해시 | 메시지 |
|------|--------|
| `004f26f` | feat: /methods 하위에 3개 방법론 페이지 추가 |

### 전체 학습 경로 목록 (11개)

| # | 경로 | 한글명 |
|---|------|--------|
| 1 | `/proposal` | 연구계획서 |
| 2 | `/literature` | 문헌검토 |
| 3 | `/methods` | 연구방법 |
| 4 | `/quantitative-methods` | 양적연구방법 |
| 5 | `/qualitative-methods` | 질적연구방법 |
| 6 | `/ahp` | AHP연구방법론 |
| 7 | `/data-collection` | 자료수집 |
| 8 | `/analysis` | 분석 |
| 9 | `/interpretation` | 결과해석 |
| 10 | `/writing` | 논문작성 |
| 11 | `/irb-ethics` | IRB윤리 |
