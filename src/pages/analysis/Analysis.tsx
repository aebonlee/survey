import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import TipBox from '../../components/TipBox';
import type { ReactElement } from 'react';

/* ------------------------------------------------------------------ */
/*  Section metadata                                                   */
/* ------------------------------------------------------------------ */

const SECTIONS = [
  { id: 'overview', icon: 'fa-chart-line', ko: '자료분석 개요', en: 'Analysis Overview' },
  { id: 'quantitative', icon: 'fa-calculator', ko: '양적분석', en: 'Quantitative Analysis' },
  { id: 'qualitative', icon: 'fa-feather', ko: '질적분석', en: 'Qualitative Analysis' },
  { id: 'software', icon: 'fa-laptop-code', ko: '통계 소프트웨어 활용', en: 'Statistical Software' },
  { id: 'presenting', icon: 'fa-table', ko: '분석 결과 제시', en: 'Presenting Results' },
  { id: 'reliability', icon: 'fa-check-double', ko: '신뢰도와 타당도', en: 'Reliability & Validity' },
  { id: 'references', icon: 'fa-bookmark', ko: '참고문헌', en: 'References' },
];

/* ------------------------------------------------------------------ */
/*  Section 1 — Analysis Overview (자료분석 개요)                        */
/* ------------------------------------------------------------------ */
function OverviewSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2 className="guide-section-title">
        <i className="fa-solid fa-chart-line" />
        {isKo ? '자료분석 개요' : 'Analysis Overview'}
      </h2>

      {/* --- What is data analysis --- */}
      <h3>{isKo ? '자료분석이란 무엇인가?' : 'What Is Data Analysis?'}</h3>
      <p>
        {isKo
          ? '자료분석(Data Analysis)은 연구를 통해 수집된 자료에서 의미 있는 패턴, 관계, 경향을 발견하고 해석하는 체계적인 과정입니다. 자료분석은 연구 질문에 대한 답변을 도출하고, 가설을 검증하며, 연구 결과의 신뢰성과 타당성을 확보하기 위한 핵심 단계입니다. 양적 연구에서는 통계적 기법을 활용하여 수치 데이터를 분석하고, 질적 연구에서는 텍스트, 이미지, 관찰 자료 등을 체계적으로 코딩하고 해석합니다.'
          : 'Data analysis is a systematic process of discovering and interpreting meaningful patterns, relationships, and trends from data collected through research. It is a critical step for deriving answers to research questions, testing hypotheses, and ensuring the reliability and validity of research findings. In quantitative research, statistical techniques are used to analyze numerical data, while in qualitative research, text, images, and observational data are systematically coded and interpreted.'}
      </p>
      <p>
        {isKo
          ? '효과적인 자료분석을 위해서는 연구 설계 단계에서부터 분석 방법을 계획해야 합니다. 연구 질문의 유형, 변수의 특성, 표본 크기, 자료의 측정 수준(명목, 서열, 등간, 비율) 등이 적절한 분석 방법 선택에 영향을 미칩니다. 잘못된 분석 방법의 선택은 연구 결과의 왜곡을 초래할 수 있으므로, 분석 전략 수립에 충분한 시간을 투자해야 합니다.'
          : 'Effective data analysis requires planning the analysis methods from the research design stage. The type of research question, characteristics of variables, sample size, and level of measurement (nominal, ordinal, interval, ratio) all influence the selection of appropriate analysis methods. Choosing an incorrect analysis method can distort research findings, so sufficient time should be invested in developing the analysis strategy.'}
      </p>

      {/* --- Analysis workflow --- */}
      <h3>{isKo ? '자료분석의 전체 흐름' : 'The Data Analysis Workflow'}</h3>
      <p>
        {isKo
          ? '자료분석은 일반적으로 다음과 같은 단계를 따릅니다. 각 단계는 순차적으로 진행되며, 이전 단계의 결과가 다음 단계에 영향을 미칩니다.'
          : 'Data analysis generally follows the steps below. Each stage proceeds sequentially, and the results of the previous stage influence the next.'}
      </p>
      <ol>
        <li>
          <strong>{isKo ? '자료 정리 및 코딩 (Data Cleaning & Coding)' : 'Data Cleaning & Coding'}</strong> —{' '}
          {isKo
            ? '수집된 원시 자료(raw data)를 분석 가능한 형태로 변환합니다. 결측값(missing data) 처리, 이상치(outlier) 확인, 변수 코딩 및 리코딩을 수행합니다.'
            : 'Transform collected raw data into an analyzable format. Handle missing data, check for outliers, and perform variable coding and recoding.'}
        </li>
        <li>
          <strong>{isKo ? '기술통계 분석 (Descriptive Statistics)' : 'Descriptive Statistics'}</strong> —{' '}
          {isKo
            ? '자료의 전반적인 특성을 파악하기 위해 빈도, 평균, 표준편차, 왜도, 첨도 등을 산출합니다.'
            : 'Calculate frequencies, means, standard deviations, skewness, and kurtosis to understand the overall characteristics of the data.'}
        </li>
        <li>
          <strong>{isKo ? '가정 점검 (Assumption Checking)' : 'Assumption Checking'}</strong> —{' '}
          {isKo
            ? '추론통계를 적용하기 전에 정규성, 등분산성, 독립성, 선형성 등의 기본 가정을 점검합니다.'
            : 'Before applying inferential statistics, check basic assumptions such as normality, homogeneity of variance, independence, and linearity.'}
        </li>
        <li>
          <strong>{isKo ? '추론통계 분석 (Inferential Statistics)' : 'Inferential Statistics'}</strong> —{' '}
          {isKo
            ? '연구 가설을 검증하기 위해 t-검정, ANOVA, 회귀분석, 카이제곱 검정 등을 수행합니다.'
            : 'Conduct t-tests, ANOVA, regression, chi-square tests, etc. to test research hypotheses.'}
        </li>
        <li>
          <strong>{isKo ? '결과 해석 및 보고 (Interpretation & Reporting)' : 'Interpretation & Reporting'}</strong> —{' '}
          {isKo
            ? '분석 결과를 연구 질문과 연결하여 해석하고, APA 양식에 맞추어 표, 그림, 통계값을 보고합니다.'
            : 'Interpret analysis results in connection with research questions and report tables, figures, and statistics in APA format.'}
        </li>
      </ol>

      <TipBox type="tip" title={isKo ? '분석 전 자료 점검의 중요성' : 'Importance of Pre-Analysis Data Inspection'}>
        <p>
          {isKo
            ? '본격적인 분석에 앞서 반드시 자료의 품질을 점검하세요. 결측값이 5% 이상인 변수는 삭제 또는 대체(imputation)를 고려하고, 이상치는 상자 그림(box plot)이나 Z-점수(|Z| > 3)를 활용하여 확인합니다. "쓰레기가 들어가면 쓰레기가 나온다(Garbage In, Garbage Out)"는 자료분석의 기본 원칙입니다.'
            : 'Always inspect data quality before beginning formal analysis. Consider deletion or imputation for variables with more than 5% missing values, and check for outliers using box plots or Z-scores (|Z| > 3). "Garbage In, Garbage Out" is a fundamental principle of data analysis.'}
        </p>
      </TipBox>

      {/* --- Choosing the right method --- */}
      <h3>{isKo ? '적절한 분석 방법 선택' : 'Choosing the Right Analysis Method'}</h3>
      <p>
        {isKo
          ? '분석 방법의 선택은 연구 질문의 유형과 변수의 특성에 따라 결정됩니다. 집단 간 차이를 비교하는 질문에는 t-검정이나 ANOVA가, 변수 간 관계를 탐색하는 질문에는 상관분석이나 회귀분석이, 범주형 변수의 관련성을 확인하는 질문에는 카이제곱 검정이 적합합니다. 연구 질문과 분석 방법을 정확하게 매칭하는 것이 타당한 연구 결과를 도출하는 첫걸음입니다.'
          : 'The choice of analysis method is determined by the type of research question and the characteristics of the variables. For questions comparing differences between groups, t-tests or ANOVA are appropriate; for questions exploring relationships between variables, correlation or regression analysis; for questions examining associations between categorical variables, chi-square tests. Accurately matching research questions with analysis methods is the first step toward producing valid research findings.'}
      </p>

      <TipBox type="important" title={isKo ? '측정 수준과 분석 방법' : 'Measurement Levels and Analysis Methods'}>
        <p>
          {isKo
            ? '명목(nominal) 변수와 서열(ordinal) 변수에는 비모수(nonparametric) 검정을, 등간(interval) 변수와 비율(ratio) 변수에는 모수(parametric) 검정을 적용하는 것이 원칙입니다. 리커트(Likert) 척도의 경우, 개별 문항은 서열 수준이지만 여러 문항의 합산 점수는 등간 수준으로 간주하는 것이 일반적입니다.'
            : 'In principle, nonparametric tests are applied to nominal and ordinal variables, while parametric tests are applied to interval and ratio variables. For Likert scales, individual items are ordinal-level, but summated scores of multiple items are generally treated as interval-level data.'}
        </p>
      </TipBox>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 2 — Quantitative Analysis (양적분석)                         */
/* ------------------------------------------------------------------ */
function QuantitativeSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2 className="guide-section-title">
        <i className="fa-solid fa-calculator" />
        {isKo ? '양적분석 (Quantitative Analysis)' : 'Quantitative Analysis'}
      </h2>

      {/* --- Descriptive statistics --- */}
      <h3>{isKo ? '기술통계 (Descriptive Statistics)' : 'Descriptive Statistics'}</h3>
      <p>
        {isKo
          ? '기술통계(Descriptive Statistics)는 수집된 자료의 전반적인 특성을 요약하고 기술하는 통계 기법입니다. 연구 참여자의 인구통계학적 특성(성별, 연령, 학력 등)을 빈도와 백분율로 제시하고, 주요 변수의 평균(Mean), 중앙값(Median), 최빈값(Mode), 표준편차(Standard Deviation), 범위(Range), 왜도(Skewness), 첨도(Kurtosis)를 보고합니다. 기술통계는 본격적인 가설 검증에 앞서 자료의 분포와 경향을 파악하는 데 필수적이며, 정규성 가정의 충족 여부를 판단하는 기초 자료가 됩니다.'
          : 'Descriptive statistics are statistical techniques that summarize and describe the overall characteristics of collected data. Present demographic characteristics (gender, age, education) using frequencies and percentages, and report the mean, median, mode, standard deviation (SD), range, skewness, and kurtosis of key variables. Descriptive statistics are essential for understanding data distributions and trends before hypothesis testing and provide the basis for judging whether normality assumptions are met.'}
      </p>
      <ul>
        <li><strong>{isKo ? '평균 (Mean)' : 'Mean'}</strong>: {isKo ? '모든 값의 합을 사례 수로 나눈 중심 경향치. 이상치에 민감합니다.' : 'The sum of all values divided by the number of cases. Sensitive to outliers.'}</li>
        <li><strong>{isKo ? '중앙값 (Median)' : 'Median'}</strong>: {isKo ? '자료를 크기순으로 정렬했을 때 중앙에 위치하는 값. 이상치에 강건합니다.' : 'The middle value when data are arranged in order. Robust to outliers.'}</li>
        <li><strong>{isKo ? '표준편차 (SD)' : 'Standard Deviation (SD)'}</strong>: {isKo ? '자료의 산포도를 나타내며, 각 관측값이 평균으로부터 얼마나 떨어져 있는지를 보여줍니다.' : 'Indicates the spread of data, showing how far each observation deviates from the mean.'}</li>
      </ul>

      {/* --- t-test --- */}
      <h3>{isKo ? 't-검정 (t-test)' : 't-test'}</h3>
      <p>
        {isKo
          ? 't-검정은 두 집단의 평균 차이가 통계적으로 유의한지를 검증하는 기법입니다. 독립표본 t-검정(Independent Samples t-test)은 서로 다른 두 집단(예: 남성 vs. 여성)의 평균을 비교할 때 사용하며, 대응표본 t-검정(Paired Samples t-test)은 동일 집단의 사전-사후 점수를 비교할 때 사용합니다. t-검정의 기본 가정은 정규성(normality)과 등분산성(homogeneity of variance)이며, Levene 검정으로 등분산성을 확인합니다. 가정이 위배될 경우 Welch의 t-검정이나 비모수 대안인 Mann-Whitney U 검정을 사용합니다.'
          : 'The t-test examines whether the mean difference between two groups is statistically significant. The independent samples t-test compares means of two different groups (e.g., male vs. female), while the paired samples t-test compares pre-post scores within the same group. Key assumptions include normality and homogeneity of variance, with Levene\'s test used to verify equal variances. When assumptions are violated, use Welch\'s t-test or the nonparametric alternative, the Mann-Whitney U test.'}
      </p>

      <TipBox type="tip" title={isKo ? 't-검정 결과 보고 형식' : 't-test Reporting Format'}>
        <p>
          {isKo
            ? 'APA 양식에 따른 t-검정 결과 보고 예시: "독립표본 t-검정 결과, 실험집단(M = 4.25, SD = 0.78)과 통제집단(M = 3.62, SD = 0.91) 간에 통계적으로 유의한 차이가 있었다, t(98) = 3.72, p < .001, d = 0.74." 효과크기(Cohen\'s d)를 반드시 포함하세요: d = 0.2(작은 효과), 0.5(중간 효과), 0.8(큰 효과).'
            : 'Example t-test reporting in APA format: "An independent samples t-test revealed a statistically significant difference between the experimental group (M = 4.25, SD = 0.78) and the control group (M = 3.62, SD = 0.91), t(98) = 3.72, p < .001, d = 0.74." Always include effect size (Cohen\'s d): d = 0.2 (small), 0.5 (medium), 0.8 (large).'}
        </p>
      </TipBox>

      {/* --- ANOVA --- */}
      <h3>{isKo ? '분산분석 (ANOVA)' : 'Analysis of Variance (ANOVA)'}</h3>
      <p>
        {isKo
          ? '분산분석(ANOVA: Analysis of Variance)은 세 개 이상의 집단 간 평균 차이를 검증하는 기법입니다. 일원 분산분석(One-way ANOVA)은 하나의 독립변수에 대해, 이원 분산분석(Two-way ANOVA)은 두 개의 독립변수에 대해 집단 간 차이를 검증합니다. ANOVA에서 유의한 결과가 나오면, 구체적으로 어떤 집단 간에 차이가 있는지를 확인하기 위해 사후 검정(Post-hoc test)을 수행합니다. Tukey HSD, Bonferroni, Scheffé 등이 대표적인 사후 검정 방법이며, 집단 크기가 같을 때는 Tukey HSD, 다를 때는 Games-Howell을 주로 사용합니다. 효과크기는 에타 제곱(eta-squared, η²)이나 부분 에타 제곱(partial η²)으로 보고합니다.'
          : 'ANOVA (Analysis of Variance) tests mean differences among three or more groups. One-way ANOVA tests differences for one independent variable, and two-way ANOVA tests for two independent variables. When ANOVA yields a significant result, post-hoc tests are conducted to determine which specific groups differ. Common post-hoc methods include Tukey HSD, Bonferroni, and Scheffé. Tukey HSD is used when group sizes are equal, and Games-Howell when unequal. Effect size is reported as eta-squared (η²) or partial eta-squared.'}
      </p>

      {/* --- Regression --- */}
      <h3>{isKo ? '회귀분석 (Regression Analysis)' : 'Regression Analysis'}</h3>
      <p>
        {isKo
          ? '회귀분석(Regression Analysis)은 독립변수가 종속변수에 미치는 영향을 분석하는 기법입니다. 단순회귀분석(Simple Regression)은 하나의 독립변수, 다중회귀분석(Multiple Regression)은 두 개 이상의 독립변수가 종속변수에 미치는 영향을 동시에 분석합니다. 회귀분석에서는 결정계수(R²)로 모형의 설명력을, 표준화 회귀계수(β)로 각 독립변수의 상대적 영향력을, F-검정으로 모형의 전체적 유의성을, 그리고 각 회귀계수의 t-검정으로 개별 변수의 유의성을 확인합니다. 다중공선성(multicollinearity)은 VIF(분산팽창인수)로 점검하며, VIF > 10이면 문제가 있는 것으로 판단합니다.'
          : 'Regression analysis examines the effect of independent variables on a dependent variable. Simple regression uses one independent variable, while multiple regression simultaneously analyzes the effects of two or more independent variables. In regression, R-squared indicates model explanatory power, standardized coefficients (β) indicate relative influence of each predictor, the F-test assesses overall model significance, and individual t-tests assess each coefficient. Multicollinearity is checked using VIF (Variance Inflation Factor); VIF > 10 indicates a problem.'}
      </p>

      {/* --- Chi-square --- */}
      <h3>{isKo ? '카이제곱 검정 (Chi-Square Test)' : 'Chi-Square Test'}</h3>
      <p>
        {isKo
          ? '카이제곱 검정(Chi-Square Test)은 범주형(명목) 변수 간의 관련성을 검증하는 비모수 통계 기법입니다. 적합도 검정(Goodness of Fit Test)은 하나의 범주형 변수의 관측 빈도와 기대 빈도가 일치하는지를 검증하며, 독립성 검정(Test of Independence)은 두 범주형 변수 간에 유의한 관련성이 있는지를 검증합니다. 기대 빈도가 5 미만인 셀이 전체의 20%를 초과하면 카이제곱 검정의 가정이 위배되므로, Fisher의 정확 검정(Fisher\'s Exact Test)을 사용해야 합니다. 효과크기는 Cramer\'s V로 보고합니다.'
          : 'The chi-square test is a nonparametric technique for examining associations between categorical (nominal) variables. The goodness of fit test checks whether observed frequencies match expected frequencies for a single categorical variable, while the test of independence examines whether there is a significant association between two categorical variables. If more than 20% of cells have expected frequencies below 5, the chi-square assumptions are violated and Fisher\'s Exact Test should be used. Effect size is reported using Cramer\'s V.'}
      </p>

      <TipBox type="important" title={isKo ? '통계적 유의성과 실질적 유의성' : 'Statistical vs. Practical Significance'}>
        <p>
          {isKo
            ? 'p값이 .05 미만이라고 해서 반드시 의미 있는 결과인 것은 아닙니다. 표본 크기가 매우 큰 경우 사소한 차이도 통계적으로 유의하게 나올 수 있습니다. 반드시 효과크기(effect size)를 함께 보고하여 실질적인 의미를 판단하세요. Cohen(1988)의 기준: d = 0.2(작음), 0.5(중간), 0.8(큰); r = .10(작음), .30(중간), .50(큰); η² = .01(작음), .06(중간), .14(큰).'
            : 'A p-value below .05 does not necessarily mean a meaningful result. With very large samples, trivial differences can be statistically significant. Always report effect sizes to judge practical significance. Cohen\'s (1988) benchmarks: d = 0.2 (small), 0.5 (medium), 0.8 (large); r = .10 (small), .30 (medium), .50 (large); η² = .01 (small), .06 (medium), .14 (large).'}
        </p>
      </TipBox>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 3 — Qualitative Analysis (질적분석)                          */
/* ------------------------------------------------------------------ */
function QualitativeSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2 className="guide-section-title">
        <i className="fa-solid fa-feather" />
        {isKo ? '질적분석 (Qualitative Analysis)' : 'Qualitative Analysis'}
      </h2>

      {/* --- Coding fundamentals --- */}
      <h3>{isKo ? '코딩의 기초 (Coding Fundamentals)' : 'Coding Fundamentals'}</h3>
      <p>
        {isKo
          ? '질적 자료분석에서 코딩(Coding)은 텍스트, 인터뷰 전사본, 관찰 노트 등의 원자료(raw data)에 의미 있는 레이블(label)을 부여하는 과정입니다. 코딩은 자료를 체계적으로 분류하고 패턴을 발견하기 위한 핵심 절차입니다. Saldaña(2021)에 따르면, 코딩은 1차 코딩(initial/open coding)과 2차 코딩(focused/axial coding)의 반복적 과정으로 이루어집니다. 1차 코딩에서는 자료를 줄 단위 또는 문단 단위로 읽으며 개방적으로 코드를 생성하고, 2차 코딩에서는 유사한 코드를 범주화하고 상위 주제로 통합합니다.'
          : 'In qualitative data analysis, coding is the process of assigning meaningful labels to raw data such as text, interview transcripts, and observation notes. Coding is a core procedure for systematically classifying data and discovering patterns. According to Saldaña (2021), coding involves an iterative process of first-cycle coding (initial/open coding) and second-cycle coding (focused/axial coding). In first-cycle coding, data are read line-by-line or paragraph-by-paragraph to generate open codes; in second-cycle coding, similar codes are categorized and integrated into higher-level themes.'}
      </p>
      <ul>
        <li><strong>{isKo ? '서술적 코딩 (Descriptive Coding)' : 'Descriptive Coding'}</strong>: {isKo ? '자료의 내용을 요약하는 명사나 짧은 구절을 코드로 사용합니다.' : 'Uses nouns or short phrases summarizing the content as codes.'}</li>
        <li><strong>{isKo ? 'In Vivo 코딩' : 'In Vivo Coding'}</strong>: {isKo ? '참여자의 실제 언어를 그대로 코드로 사용하여 참여자의 목소리를 보존합니다.' : 'Uses participants\' actual words as codes to preserve their voice.'}</li>
        <li><strong>{isKo ? '과정 코딩 (Process Coding)' : 'Process Coding'}</strong>: {isKo ? '동명사(-ing) 형태를 사용하여 행위나 과정을 코드로 표현합니다.' : 'Uses gerund (-ing) forms to represent actions or processes as codes.'}</li>
        <li><strong>{isKo ? '감정 코딩 (Emotion Coding)' : 'Emotion Coding'}</strong>: {isKo ? '참여자의 감정이나 정서를 코드로 기록합니다.' : 'Records participants\' emotions or affect as codes.'}</li>
      </ul>

      {/* --- Thematic analysis --- */}
      <h3>{isKo ? '주제분석 (Thematic Analysis)' : 'Thematic Analysis'}</h3>
      <p>
        {isKo
          ? '주제분석(Thematic Analysis)은 Braun과 Clarke(2006)가 체계화한 질적 분석 방법으로, 자료에서 반복되는 패턴(주제, theme)을 식별, 분석, 보고하는 절차입니다. 주제분석은 특정 이론적 틀에 종속되지 않아 유연하게 적용할 수 있으며, 질적 연구에서 가장 널리 사용되는 분석 방법 중 하나입니다. Braun과 Clarke는 6단계의 주제분석 절차를 제안합니다: (1) 자료 익숙해지기(familiarization), (2) 초기 코드 생성(generating initial codes), (3) 주제 탐색(searching for themes), (4) 주제 검토(reviewing themes), (5) 주제 정의 및 명명(defining and naming themes), (6) 보고서 작성(producing the report).'
          : 'Thematic analysis, systematized by Braun and Clarke (2006), is a qualitative method for identifying, analyzing, and reporting recurring patterns (themes) in data. It is flexible because it is not tied to a specific theoretical framework and is one of the most widely used qualitative analysis methods. Braun and Clarke propose a six-phase procedure: (1) familiarization with data, (2) generating initial codes, (3) searching for themes, (4) reviewing themes, (5) defining and naming themes, and (6) producing the report.'}
      </p>

      <TipBox type="tip" title={isKo ? '좋은 주제(theme)의 조건' : 'Characteristics of a Good Theme'}>
        <p>
          {isKo
            ? '좋은 주제는 다음 조건을 충족합니다: (1) 연구 질문과 관련성이 있어야 합니다, (2) 여러 참여자의 자료에서 반복적으로 나타나야 합니다, (3) 내적 일관성이 있어야 합니다 -- 하나의 주제 안의 코드들이 의미적으로 연결되어야 합니다, (4) 다른 주제와 명확히 구분되어야 합니다, (5) 자료에 근거(grounded)해야 합니다 -- 연구자의 선입견이 아닌 실제 자료에서 도출되어야 합니다.'
            : 'A good theme meets the following criteria: (1) it must be relevant to the research question, (2) it must appear repeatedly across multiple participants\' data, (3) it must have internal consistency -- codes within a theme should be semantically connected, (4) it must be clearly distinct from other themes, (5) it must be grounded in the data -- derived from actual data rather than researcher preconceptions.'}
        </p>
      </TipBox>

      {/* --- Content analysis --- */}
      <h3>{isKo ? '내용분석 (Content Analysis)' : 'Content Analysis'}</h3>
      <p>
        {isKo
          ? '내용분석(Content Analysis)은 텍스트 자료의 내용을 체계적이고 객관적으로 분석하는 방법입니다. 질적 내용분석(Qualitative Content Analysis)은 텍스트의 의미를 해석하는 데 초점을 두고, 양적 내용분석(Quantitative Content Analysis)은 특정 단어나 범주의 출현 빈도를 계량화합니다. 내용분석의 핵심은 분석 단위(unit of analysis)의 설정, 코딩 체계(coding scheme)의 개발, 코딩의 신뢰도(inter-coder reliability) 확보입니다. 분석 단위는 단어, 문장, 단락, 주제 등 연구 목적에 따라 다양하게 설정할 수 있습니다.'
          : 'Content analysis is a method for systematically and objectively analyzing the content of textual data. Qualitative content analysis focuses on interpreting the meaning of text, while quantitative content analysis quantifies the frequency of specific words or categories. Key elements include establishing the unit of analysis, developing a coding scheme, and ensuring inter-coder reliability. The unit of analysis can vary (word, sentence, paragraph, theme) depending on the research purpose.'}
      </p>

      {/* --- Ensuring rigor --- */}
      <h3>{isKo ? '질적 분석의 엄격성 확보' : 'Ensuring Rigor in Qualitative Analysis'}</h3>
      <p>
        {isKo
          ? '질적 연구에서 분석의 엄격성(rigor)은 연구의 신뢰성을 좌우합니다. Lincoln과 Guba(1985)가 제안한 신뢰성 기준은 다음과 같습니다: (1) 신빙성(credibility) -- 삼각검증(triangulation), 참여자 확인(member checking), 동료 검토(peer debriefing)를 통해 확보, (2) 전이가능성(transferability) -- 풍부한 기술(thick description)을 통해 독자가 자신의 맥락에 적용할 수 있도록 함, (3) 의존가능성(dependability) -- 감사추적(audit trail)을 통해 연구 과정의 투명성 확보, (4) 확인가능성(confirmability) -- 연구자의 편향을 최소화하기 위한 반성적 저널(reflexive journal) 작성.'
          : 'In qualitative research, rigor of analysis determines research trustworthiness. Lincoln and Guba (1985) proposed the following criteria: (1) Credibility -- ensured through triangulation, member checking, and peer debriefing, (2) Transferability -- enabled through thick description so readers can apply findings to their own context, (3) Dependability -- ensured through an audit trail for transparency, (4) Confirmability -- achieved by keeping a reflexive journal to minimize researcher bias.'}
      </p>

      <TipBox type="warning" title={isKo ? '연구자의 주관성 관리' : 'Managing Researcher Subjectivity'}>
        <p>
          {isKo
            ? '질적 연구에서 연구자의 주관성은 완전히 배제할 수 없지만, 체계적으로 관리해야 합니다. 반성적 저널(reflexive journal)에 자신의 가정, 기대, 감정적 반응을 기록하고, 이러한 주관성이 분석에 어떤 영향을 미칠 수 있는지를 성찰하세요. 또한 동료 연구자와의 코딩 비교(peer coding)를 통해 분석의 일관성을 점검하는 것도 효과적입니다.'
            : 'In qualitative research, researcher subjectivity cannot be entirely eliminated but must be systematically managed. Record your assumptions, expectations, and emotional reactions in a reflexive journal and reflect on how such subjectivity may influence the analysis. Additionally, comparing coding with peer researchers (peer coding) is an effective way to check analytical consistency.'}
        </p>
      </TipBox>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 4 — Statistical Software (통계 소프트웨어 활용)                */
/* ------------------------------------------------------------------ */
function SoftwareSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2 className="guide-section-title">
        <i className="fa-solid fa-laptop-code" />
        {isKo ? '통계 소프트웨어 활용' : 'Statistical Software'}
      </h2>

      {/* --- SPSS --- */}
      <h3>{isKo ? 'SPSS (Statistical Package for the Social Sciences)' : 'SPSS'}</h3>
      <p>
        {isKo
          ? 'SPSS는 사회과학 분야에서 가장 널리 사용되는 통계 소프트웨어입니다. 그래픽 사용자 인터페이스(GUI)를 통해 메뉴와 대화상자로 분석을 수행할 수 있어 통계 초보자에게 접근성이 높습니다. 기술통계, t-검정, ANOVA, 회귀분석, 요인분석, 신뢰도 분석 등 사회과학 연구에 필요한 대부분의 통계 기법을 지원합니다. SPSS의 구문(syntax) 편집기를 활용하면 분석 과정을 기록하고 재현할 수 있어, 연구의 투명성과 재현가능성을 높일 수 있습니다. 다만, 구조방정식(SEM) 분석을 위해서는 AMOS와 같은 추가 모듈이 필요합니다.'
          : 'SPSS is the most widely used statistical software in the social sciences. Its graphical user interface (GUI) allows analyses through menus and dialog boxes, making it highly accessible for beginners. It supports most statistical techniques needed for social science research, including descriptive statistics, t-tests, ANOVA, regression, factor analysis, and reliability analysis. Using the syntax editor enables recording and reproducing analysis procedures, enhancing research transparency and reproducibility. However, structural equation modeling (SEM) requires additional modules such as AMOS.'}
      </p>

      {/* --- R --- */}
      <h3>{isKo ? 'R과 RStudio' : 'R and RStudio'}</h3>
      <p>
        {isKo
          ? 'R은 무료 오픈소스 통계 프로그래밍 언어로, 강력한 통계 분석 기능과 고품질 시각화를 제공합니다. RStudio는 R을 위한 통합 개발 환경(IDE)으로, R 코딩을 보다 편리하게 만들어 줍니다. R의 최대 장점은 수천 개의 패키지(예: tidyverse, ggplot2, lavaan, psych)를 통해 거의 모든 통계 분석이 가능하다는 것입니다. 또한 R Markdown을 활용하면 분석 코드와 결과 보고서를 하나의 문서로 통합할 수 있어 재현 가능한 연구(reproducible research)를 실현할 수 있습니다. 초기 학습 곡선이 가파르지만, 장기적으로는 가장 유연하고 확장성 있는 도구입니다.'
          : 'R is a free, open-source statistical programming language offering powerful statistical analysis capabilities and high-quality visualization. RStudio is an integrated development environment (IDE) for R that makes coding more convenient. R\'s greatest strength is that virtually any statistical analysis is possible through thousands of packages (e.g., tidyverse, ggplot2, lavaan, psych). R Markdown integrates analysis code and result reports into a single document, enabling reproducible research. While the initial learning curve is steep, it is the most flexible and extensible tool in the long run.'}
      </p>

      <TipBox type="tip" title={isKo ? 'R 추천 패키지' : 'Recommended R Packages'}>
        <ul>
          <li><strong>tidyverse</strong>: {isKo ? '데이터 정리 및 변환 (dplyr, tidyr, ggplot2 포함)' : 'Data wrangling and transformation (includes dplyr, tidyr, ggplot2)'}</li>
          <li><strong>psych</strong>: {isKo ? '기술통계, 요인분석, 신뢰도 분석' : 'Descriptive statistics, factor analysis, reliability analysis'}</li>
          <li><strong>lavaan</strong>: {isKo ? '구조방정식 모형(SEM), 확인적 요인분석(CFA)' : 'Structural equation modeling (SEM), confirmatory factor analysis (CFA)'}</li>
          <li><strong>lme4</strong>: {isKo ? '혼합효과 모형(Mixed-effects models)' : 'Mixed-effects models'}</li>
          <li><strong>ggplot2</strong>: {isKo ? '고급 데이터 시각화' : 'Advanced data visualization'}</li>
        </ul>
      </TipBox>

      {/* --- Stata --- */}
      <h3>{isKo ? 'Stata' : 'Stata'}</h3>
      <p>
        {isKo
          ? 'Stata는 경제학, 정치학, 역학 등에서 널리 사용되는 통합 통계 소프트웨어입니다. 명령어 기반(command-line) 인터페이스와 메뉴 기반 인터페이스를 모두 제공하며, 패널 데이터 분석, 다수준 모형, 생존분석 등에 강점이 있습니다. Stata의 do-file은 분석 과정을 스크립트로 저장하여 재현성을 확보할 수 있게 해 줍니다. 또한 최신 통계 기법이 빠르게 반영되며, 자체적인 학술 저널(Stata Journal)을 통해 새로운 기능과 사용법이 공유됩니다. 유료 소프트웨어이지만, 학생 라이선스를 통해 비교적 저렴하게 사용할 수 있습니다.'
          : 'Stata is an integrated statistical software widely used in economics, political science, and epidemiology. It provides both command-line and menu-based interfaces and has strengths in panel data analysis, multilevel modeling, and survival analysis. Stata\'s do-files save analysis procedures as scripts for reproducibility. The latest statistical techniques are quickly incorporated, and new features and usage methods are shared through the Stata Journal. While it is commercial software, student licenses are available at relatively low cost.'}
      </p>

      {/* --- NVivo --- */}
      <h3>{isKo ? 'NVivo (질적 분석 소프트웨어)' : 'NVivo (Qualitative Analysis Software)'}</h3>
      <p>
        {isKo
          ? 'NVivo는 질적 자료분석을 위한 대표적인 CAQDAS(Computer-Assisted Qualitative Data Analysis Software)입니다. 인터뷰 전사본, 현장 노트, 문서, 이미지, 오디오, 비디오 등 다양한 형태의 질적 자료를 체계적으로 관리하고 분석할 수 있습니다. NVivo의 주요 기능으로는 노드(node) 기반 코딩, 자동 코딩(auto-coding), 워드 빈도 분석, 텍스트 검색 쿼리, 코딩 비교(coding comparison) 등이 있습니다. 특히 대규모 질적 자료를 다룰 때 수작업 코딩보다 효율적이며, 코딩 과정의 감사 추적(audit trail)을 자동으로 생성하여 연구의 투명성을 높여줍니다.'
          : 'NVivo is a leading CAQDAS (Computer-Assisted Qualitative Data Analysis Software) for qualitative data analysis. It can systematically manage and analyze various forms of qualitative data including interview transcripts, field notes, documents, images, audio, and video. Key features include node-based coding, auto-coding, word frequency analysis, text search queries, and coding comparison. It is more efficient than manual coding for large-scale qualitative data and automatically generates an audit trail to enhance research transparency.'}
      </p>

      <TipBox type="important" title={isKo ? '소프트웨어 선택 기준' : 'Software Selection Criteria'}>
        <p>
          {isKo
            ? '통계 소프트웨어는 만능이 아닙니다. 선택 시 고려할 요소: (1) 연구 분야의 관행 -- 해당 학문 분야에서 주로 사용하는 소프트웨어를 선택하면 동료 검토와 재현에 유리합니다, (2) 분석 기법의 지원 여부 -- 필요한 분석(예: SEM, HLM, IRT)을 지원하는지 확인하세요, (3) 비용과 접근성 -- R은 무료, SPSS와 Stata는 유료이지만 대학 라이선스가 가능할 수 있습니다, (4) 학습 용이성 -- GUI 기반(SPSS)은 배우기 쉽고, 코드 기반(R, Stata)은 유연하지만 학습 시간이 필요합니다.'
            : 'No single software does everything. Factors to consider: (1) Disciplinary conventions -- choosing software commonly used in your field facilitates peer review and replication, (2) Technique support -- verify the software supports your required analyses (e.g., SEM, HLM, IRT), (3) Cost and accessibility -- R is free; SPSS and Stata are commercial but university licenses may be available, (4) Ease of learning -- GUI-based tools (SPSS) are easier to learn; code-based tools (R, Stata) are more flexible but require learning time.'}
        </p>
      </TipBox>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 5 — Presenting Results (분석 결과 제시)                       */
/* ------------------------------------------------------------------ */
function PresentingSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2 className="guide-section-title">
        <i className="fa-solid fa-table" />
        {isKo ? '분석 결과 제시 (Presenting Results)' : 'Presenting Results'}
      </h2>

      {/* --- APA tables --- */}
      <h3>{isKo ? 'APA 양식 표 작성법' : 'Creating APA-Style Tables'}</h3>
      <p>
        {isKo
          ? 'APA 7판에 따른 표(Table) 작성법: (1) 표 번호(Table 1, Table 2 등)를 표 위에 굵은 글씨로 기재합니다. (2) 표 제목은 표 번호 아래에 이탤릭체로 간결하게 작성합니다. (3) 표 본문에서 세로선(vertical lines)은 사용하지 않으며, 가로선은 표의 상단, 열 머리글 아래, 하단에만 사용합니다. (4) 표 하단에 주석(Note)을 배치하여 약어 설명, 유의수준 표시(* p < .05, ** p < .01, *** p < .001) 등을 기재합니다. (5) 모든 표는 본문에서 반드시 언급해야 합니다.'
          : 'APA 7th edition table formatting: (1) Place the table number (Table 1, Table 2, etc.) above the table in bold. (2) Write the table title below the number in italics, keeping it concise. (3) Do not use vertical lines in the table body; horizontal lines appear only at the top, below column headers, and at the bottom. (4) Place notes below the table for abbreviation explanations, significance markers (* p < .05, ** p < .01, *** p < .001), etc. (5) Every table must be referenced in the text.'}
      </p>

      {/* --- APA figures --- */}
      <h3>{isKo ? 'APA 양식 그림 작성법' : 'Creating APA-Style Figures'}</h3>
      <p>
        {isKo
          ? 'APA 7판에 따른 그림(Figure) 작성법: (1) 그림 번호(Figure 1 등)를 그림 위에 굵은 글씨로 기재합니다. (2) 그림 제목은 번호 아래에 이탤릭체로 작성합니다. (3) 축 레이블(axis labels)을 명확하게 표시하고, 단위를 포함합니다. (4) 범례(legend)는 그림 내부에 배치하여 공간을 효율적으로 사용합니다. (5) 흑백 인쇄에서도 구분 가능하도록 패턴이나 명도 차이를 활용합니다. 그래프의 유형은 자료의 특성에 맞게 선택합니다: 막대그래프(집단 비교), 선그래프(시간에 따른 변화), 산점도(두 변수의 관계), 상자그림(분포 비교).'
          : 'APA 7th edition figure formatting: (1) Place the figure number (Figure 1, etc.) above the figure in bold. (2) Write the figure title below the number in italics. (3) Clearly label axes and include units. (4) Place legends inside the figure for efficient space use. (5) Use patterns or brightness differences to ensure readability in black-and-white printing. Choose graph types to match data characteristics: bar charts (group comparisons), line graphs (changes over time), scatter plots (relationships between variables), box plots (distribution comparisons).'}
      </p>

      <TipBox type="tip" title={isKo ? '효과적인 표와 그림의 원칙' : 'Principles for Effective Tables and Figures'}>
        <p>
          {isKo
            ? '표와 그림은 본문 없이도 독자가 이해할 수 있을 만큼 자기 완결적(self-contained)이어야 합니다. 다음 원칙을 기억하세요: (1) 표는 정확한 수치를 전달할 때, 그림은 경향이나 패턴을 보여줄 때 효과적입니다. (2) 같은 자료를 표와 그림으로 중복 제시하지 마세요. (3) 단순한 결과(예: 두 집단 평균 비교)는 본문에서 직접 보고하고, 복잡한 결과만 표나 그림으로 제시하세요.'
            : 'Tables and figures should be self-contained -- understandable without the main text. Remember these principles: (1) Tables are effective for conveying exact numbers; figures for showing trends or patterns. (2) Do not present the same data in both a table and a figure. (3) Report simple results (e.g., comparing two group means) directly in the text; reserve tables and figures for complex results.'}
        </p>
      </TipBox>

      {/* --- Reporting statistical results --- */}
      <h3>{isKo ? '통계 결과 보고 양식' : 'Statistical Reporting Conventions'}</h3>
      <p>
        {isKo
          ? 'APA 7판에 따른 주요 통계 결과 보고 양식을 정리하면 다음과 같습니다. 모든 통계 기호는 이탤릭체로 표기하며, 통계값은 소수점 둘째 자리, p값은 셋째 자리까지 보고합니다.'
          : 'Key statistical reporting conventions per APA 7th edition are summarized below. All statistical symbols are italicized; statistics are reported to two decimal places and p-values to three.'}
      </p>
      <ul>
        <li><strong>t-test</strong>: <em>t</em>(df) = value, <em>p</em> = value, <em>d</em> = value</li>
        <li><strong>ANOVA</strong>: <em>F</em>(df1, df2) = value, <em>p</em> = value, <em>{isKo ? 'η²' : 'η²'}</em> = value</li>
        <li><strong>{isKo ? '상관' : 'Correlation'}</strong>: <em>r</em>(df) = value, <em>p</em> = value</li>
        <li><strong>{isKo ? '회귀' : 'Regression'}</strong>: <em>β</em> = value, <em>t</em> = value, <em>p</em> = value</li>
        <li><strong>{isKo ? '카이제곱' : 'Chi-square'}</strong>: <em>χ²</em>(df, <em>N</em> = value) = value, <em>p</em> = value</li>
      </ul>

      {/* --- Presenting qualitative results --- */}
      <h3>{isKo ? '질적 결과 제시법' : 'Presenting Qualitative Results'}</h3>
      <p>
        {isKo
          ? '질적 연구 결과는 도출된 주제(theme)를 체계적으로 제시합니다. 각 주제에 대해 (1) 주제명과 간략한 정의, (2) 해당 주제에 대한 설명과 분석, (3) 참여자의 직접 인용문(블록 인용, 참여자 식별 번호 포함)을 순서대로 기술합니다. 주제 간 관계를 보여주는 주제 지도(thematic map)나 개념도를 함께 제시하면 독자의 이해를 돕습니다. 인용문은 대표적이고 풍부한 것을 선별하되, 한 주제당 2~3개가 적절합니다.'
          : 'Qualitative findings are presented by systematically describing the themes derived. For each theme, describe in order: (1) the theme name and brief definition, (2) explanation and analysis of the theme, (3) direct participant quotations (block quotes with participant identifiers). Including a thematic map or concept diagram showing relationships between themes helps reader understanding. Select representative and rich quotations -- 2-3 per theme is appropriate.'}
      </p>

      <TipBox type="important" title={isKo ? '결과 제시 시 흔한 실수' : 'Common Mistakes When Presenting Results'}>
        <ul>
          <li>
            {isKo
              ? '결과 섹션에서 해석이나 논의를 포함하는 실수. 결과 섹션은 "무엇을 발견했는지"만 객관적으로 보고하고, "왜 그런지"는 논의 섹션에서 다루세요.'
              : 'Including interpretation or discussion in the Results section. The Results should objectively report "what was found"; save "why" for the Discussion.'}
          </li>
          <li>
            {isKo
              ? '효과크기나 신뢰구간 없이 p값만 보고하는 실수. 통계적 유의성과 실질적 유의성을 모두 전달하세요.'
              : 'Reporting only p-values without effect sizes or confidence intervals. Convey both statistical and practical significance.'}
          </li>
          <li>
            {isKo
              ? '비유의한 결과를 누락하는 실수. 모든 분석 결과를 투명하게 보고해야 합니다.'
              : 'Omitting non-significant results. All analysis results must be reported transparently.'}
          </li>
        </ul>
      </TipBox>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 6 — Reliability & Validity (신뢰도와 타당도)                   */
/* ------------------------------------------------------------------ */
function ReliabilitySection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2 className="guide-section-title">
        <i className="fa-solid fa-check-double" />
        {isKo ? '신뢰도와 타당도 (Reliability & Validity)' : 'Reliability & Validity'}
      </h2>

      {/* --- Cronbach's alpha --- */}
      <h3>{isKo ? 'Cronbach\'s Alpha (내적 일관성 신뢰도)' : 'Cronbach\'s Alpha (Internal Consistency)'}</h3>
      <p>
        {isKo
          ? 'Cronbach\'s alpha(크론바흐 알파)는 측정 도구의 내적 일관성(internal consistency)을 평가하는 가장 널리 사용되는 신뢰도 계수입니다. 이 계수는 동일한 구성개념을 측정하는 문항들이 얼마나 일관되게 응답되는지를 나타내며, 0과 1 사이의 값을 가집니다. 일반적으로 α ≥ .70이면 수용 가능한 수준으로 판단하며, α ≥ .80이면 양호, α ≥ .90이면 우수한 것으로 해석합니다(Hair et al., 2019). 다만 문항 수가 많을수록 α값이 높아지는 경향이 있으므로, 문항 수를 함께 보고해야 합니다. α값이 지나치게 높으면(> .95) 문항 간 중복 가능성을 의심해야 합니다.'
          : 'Cronbach\'s alpha is the most widely used reliability coefficient for evaluating internal consistency of measurement instruments. It indicates how consistently items measuring the same construct are answered and ranges between 0 and 1. Generally, α >= .70 is considered acceptable, α >= .80 good, and α >= .90 excellent (Hair et al., 2019). However, since alpha tends to increase with more items, the number of items should be reported alongside. Excessively high alpha (> .95) may indicate item redundancy.'}
      </p>

      {/* --- Inter-rater reliability --- */}
      <h3>{isKo ? '평가자 간 신뢰도 (Inter-Rater Reliability)' : 'Inter-Rater Reliability'}</h3>
      <p>
        {isKo
          ? '평가자 간 신뢰도(Inter-Rater Reliability)는 두 명 이상의 평가자(코더)가 동일한 자료를 평가할 때 일치하는 정도를 나타냅니다. 내용분석, 행동 관찰, 질적 코딩 등에서 필수적으로 보고해야 하는 지표입니다. Cohen\'s kappa는 두 명의 평가자 간 범주형 평정의 일치도를 우연 일치를 보정하여 산출하며, .41~.60이면 보통(moderate), .61~.80이면 상당한(substantial), .81 이상이면 거의 완전한(almost perfect) 일치로 해석합니다. 세 명 이상의 평가자가 있는 경우 Fleiss\'s kappa를, 연속형 평정의 경우 급내상관계수(ICC: Intraclass Correlation Coefficient)를 사용합니다.'
          : 'Inter-rater reliability indicates the degree of agreement when two or more raters (coders) evaluate the same data. It is an essential metric in content analysis, behavioral observation, and qualitative coding. Cohen\'s kappa calculates agreement between two raters for categorical ratings, correcting for chance agreement: .41-.60 is moderate, .61-.80 substantial, and .81+ almost perfect. For three or more raters, use Fleiss\'s kappa; for continuous ratings, use the Intraclass Correlation Coefficient (ICC).'}
      </p>

      <TipBox type="tip" title={isKo ? '신뢰도 보고 방법' : 'How to Report Reliability'}>
        <p>
          {isKo
            ? '연구 논문에서 신뢰도를 보고할 때는 다음을 포함하세요: (1) 원도구(original instrument)의 신뢰도 계수, (2) 본 연구에서 측정한 신뢰도 계수, (3) 하위 요인별 신뢰도(해당되는 경우), (4) 사용한 신뢰도 측정 방법의 유형. 예: "본 연구에서 직무 만족도 척도의 Cronbach\'s alpha는 .87로 양호한 내적 일관성을 보였다. 하위 요인별로는 직무 자체 .82, 급여 .79, 동료 관계 .85로 나타났다."'
            : 'When reporting reliability, include: (1) reliability coefficients from the original instrument, (2) reliability coefficients measured in the current study, (3) reliability by subscale (if applicable), (4) the type of reliability measure used. Example: "Cronbach\'s alpha for the job satisfaction scale in this study was .87, indicating good internal consistency. By subscale: job itself .82, pay .79, coworker relations .85."'}
        </p>
      </TipBox>

      {/* --- Content validity --- */}
      <h3>{isKo ? '내용 타당도 (Content Validity)' : 'Content Validity'}</h3>
      <p>
        {isKo
          ? '내용 타당도(Content Validity)는 측정 도구가 측정하고자 하는 구성개념의 내용을 얼마나 포괄적으로 대표하는지를 평가합니다. 내용 타당도는 통계적으로 산출되기보다는 전문가 판단(expert judgment)에 의해 평가됩니다. 일반적으로 5~7명의 해당 분야 전문가에게 각 문항이 해당 구성개념을 적절하게 측정하는지를 평가하게 하고, 내용타당도 지수(CVI: Content Validity Index)를 산출합니다. CVI는 전문가들이 "적절하다"고 평가한 비율로, .80 이상이면 양호한 것으로 판단합니다. 내용 타당도 검증 과정에서 전문가의 의견을 반영하여 문항을 수정, 삭제, 추가할 수 있습니다.'
          : 'Content validity evaluates how comprehensively a measurement instrument represents the content of the construct it intends to measure. It is typically assessed through expert judgment rather than statistical computation. Usually, 5-7 domain experts evaluate whether each item adequately measures the construct, and the Content Validity Index (CVI) is calculated. CVI is the proportion of experts rating an item as "appropriate"; values above .80 are considered good. Based on expert feedback, items may be modified, deleted, or added.'}
      </p>

      {/* --- Construct validity --- */}
      <h3>{isKo ? '구성 타당도 (Construct Validity)' : 'Construct Validity'}</h3>
      <p>
        {isKo
          ? '구성 타당도(Construct Validity)는 측정 도구가 이론적 구성개념(construct)을 얼마나 정확하게 측정하는지를 평가합니다. 구성 타당도는 수렴 타당도(convergent validity)와 판별 타당도(discriminant validity)로 구성됩니다. 수렴 타당도는 이론적으로 관련된 측정치 간에 높은 상관이 있는지를 확인하며, 평균분산추출(AVE: Average Variance Extracted) ≥ .50이 기준입니다. 판별 타당도는 이론적으로 구분되는 구성개념 간에 낮은 상관이 있는지를 확인하며, 각 구성개념의 AVE 제곱근이 다른 구성개념과의 상관보다 높아야 합니다(Fornell-Larcker 기준). 확인적 요인분석(CFA: Confirmatory Factor Analysis)을 통해 구성 타당도를 통계적으로 검증할 수 있습니다.'
          : 'Construct validity evaluates how accurately a measurement instrument measures the theoretical construct. It consists of convergent validity and discriminant validity. Convergent validity verifies high correlations among theoretically related measures, with Average Variance Extracted (AVE) >= .50 as the criterion. Discriminant validity verifies low correlations between theoretically distinct constructs; the square root of each construct\'s AVE should exceed its correlations with other constructs (Fornell-Larcker criterion). Confirmatory Factor Analysis (CFA) statistically tests construct validity.'}
      </p>

      <TipBox type="warning" title={isKo ? '신뢰도와 타당도의 관계' : 'Relationship Between Reliability and Validity'}>
        <p>
          {isKo
            ? '신뢰도와 타당도의 관계를 정확히 이해하는 것이 중요합니다. 신뢰도는 타당도의 필요조건이지만 충분조건은 아닙니다. 즉, 신뢰도가 높더라도 타당도가 보장되지 않습니다(예: 체중계로 키를 측정하면 일관된 결과는 나오지만 타당하지 않음). 반면, 타당도가 높으면 신뢰도도 어느 정도 보장됩니다. 따라서 연구에서는 신뢰도와 타당도를 모두 검증하고 보고해야 합니다.'
            : 'Understanding the relationship between reliability and validity is crucial. Reliability is a necessary but not sufficient condition for validity. High reliability does not guarantee validity (e.g., using a scale to measure height yields consistent but invalid results). Conversely, high validity generally implies adequate reliability. Therefore, both reliability and validity should be verified and reported in research.'}
        </p>
      </TipBox>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 7 — References (참고문헌)                                    */
/* ------------------------------------------------------------------ */
function ReferencesSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <>
      <div className="guide-content-header">
        <h1>{isKo ? '참고문헌' : 'References'}</h1>
        <p>{isKo ? '자료분석 학습에 활용된 주요 참고문헌입니다.' : 'Key references used for learning about data analysis.'}</p>
      </div>
      <div className="guide-section">
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Field, A. (2018). <em>Discovering Statistics Using IBM SPSS Statistics</em> (5th ed.). SAGE Publications.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Pallant, J. (2020). <em>SPSS Survival Manual: A Step by Step Guide to Data Analysis Using IBM SPSS</em> (7th ed.). Open University Press.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Braun, V., & Clarke, V. (2006). Using thematic analysis in psychology. <em>Qualitative Research in Psychology</em>, 3(2), 77-101.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Saldaña, J. (2021). <em>The Coding Manual for Qualitative Researchers</em> (4th ed.). SAGE Publications.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Hair, J. F., Black, W. C., Babin, B. J., & Anderson, R. E. (2019). <em>Multivariate Data Analysis</em> (8th ed.). Cengage Learning.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Cohen, J. (1988). <em>Statistical Power Analysis for the Behavioral Sciences</em> (2nd ed.). Lawrence Erlbaum Associates.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Tabachnick, B. G., & Fidell, L. S. (2019). <em>Using Multivariate Statistics</em> (7th ed.). Pearson.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Lincoln, Y. S., & Guba, E. G. (1985). <em>Naturalistic Inquiry</em>. SAGE Publications.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>American Psychological Association. (2020). <em>Publication Manual of the American Psychological Association</em> (7th ed.). American Psychological Association.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>성태제 (2019). <em>현대 기초통계학: 이해와 적용</em> (8판). 학지사.</li>
        </ul>
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                      */
/* ------------------------------------------------------------------ */
export default function Analysis(): ReactElement {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('overview');
  const isKo = language === 'ko';
  const currentIndex = SECTIONS.findIndex((s) => s.id === activeSection);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setActiveSection(SECTIONS[currentIndex - 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  const handleNext = () => {
    if (currentIndex < SECTIONS.length - 1) {
      setActiveSection(SECTIONS[currentIndex + 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  const handleNavClick = (id: string) => {
    setActiveSection(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <SEOHead
        title={
          isKo
            ? '분석 | Survey Master'
            : 'Analysis | Survey Master'
        }
        description={
          isKo
            ? '양적·질적 분석 방법과 통계 소프트웨어 활용법을 학습합니다.'
            : 'Learn quantitative and qualitative analysis methods and statistical software.'
        }
      />
      <div className="guide-page">
        <div className="guide-layout">
          {/* ---------- sidebar ---------- */}
          <aside className="guide-sidebar">
            <div className="guide-sidebar-title">
              {isKo ? '목차' : 'Contents'}
            </div>
            <ul className="guide-nav">
              {SECTIONS.map((section) => (
                <li key={section.id} className="guide-nav-item">
                  <button
                    className={`guide-nav-link ${activeSection === section.id ? 'active' : ''}`}
                    onClick={() => handleNavClick(section.id)}
                  >
                    <i className={`fa-solid ${section.icon}`} />
                    <span>{isKo ? section.ko : section.en}</span>
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* ---------- content ---------- */}
          <main className="guide-content">
            {activeSection === 'overview' && (
              <OverviewSection isKo={isKo} />
            )}
            {activeSection === 'quantitative' && (
              <QuantitativeSection isKo={isKo} />
            )}
            {activeSection === 'qualitative' && (
              <QualitativeSection isKo={isKo} />
            )}
            {activeSection === 'software' && (
              <SoftwareSection isKo={isKo} />
            )}
            {activeSection === 'presenting' && (
              <PresentingSection isKo={isKo} />
            )}
            {activeSection === 'reliability' && (
              <ReliabilitySection isKo={isKo} />
            )}
            {activeSection === 'references' && <ReferencesSection isKo={isKo} />}

            {/* ---------- prev / next nav ---------- */}
            <div className="guide-section-nav">
              <button
                className="guide-nav-btn prev"
                onClick={handlePrev}
                disabled={currentIndex === 0}
              >
                <i className="fa-solid fa-arrow-left" />
                <span>
                  {currentIndex > 0
                    ? isKo
                      ? SECTIONS[currentIndex - 1].ko
                      : SECTIONS[currentIndex - 1].en
                    : isKo
                      ? '이전'
                      : 'Previous'}
                </span>
              </button>
              <button
                className="guide-nav-btn next"
                onClick={handleNext}
                disabled={currentIndex === SECTIONS.length - 1}
              >
                <span>
                  {currentIndex < SECTIONS.length - 1
                    ? isKo
                      ? SECTIONS[currentIndex + 1].ko
                      : SECTIONS[currentIndex + 1].en
                    : isKo
                      ? '다음'
                      : 'Next'}
                </span>
                <i className="fa-solid fa-arrow-right" />
              </button>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
