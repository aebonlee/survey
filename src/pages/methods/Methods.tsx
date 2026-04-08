import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import TipBox from '../../components/TipBox';
import type { ReactElement } from 'react';

const SECTIONS = [
  { id: 'overview', icon: 'fa-circle-info', ko: '연구방법론 개요', en: 'Methodology Overview' },
  { id: 'quant-qual', icon: 'fa-arrows-left-right', ko: '양적연구 vs 질적연구', en: 'Quantitative vs Qualitative' },
  { id: 'mixed', icon: 'fa-shuffle', ko: '혼합연구방법', en: 'Mixed Methods' },
  { id: 'design-types', icon: 'fa-sitemap', ko: '연구설계 유형', en: 'Research Design Types' },
  { id: 'variables', icon: 'fa-sliders', ko: '변수와 조작적 정의', en: 'Variables & Definitions' },
  { id: 'writing-methods', icon: 'fa-pen-to-square', ko: '연구방법 섹션 작성', en: 'Writing Methods Section' },
  { id: 'references', icon: 'fa-bookmark', ko: '참고문헌', en: 'References' },
];

/* ------------------------------------------------------------------ */
/*  Section 1 - Methodology Overview                                   */
/* ------------------------------------------------------------------ */
function OverviewSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2 className="guide-section-title">
        <i className="fa-solid fa-circle-info" />
        {isKo ? '연구방법론 개요' : 'Methodology Overview'}
      </h2>

      {/* What is Research Methodology */}
      <h3>{isKo ? '연구방법론이란 무엇인가?' : 'What Is Research Methodology?'}</h3>
      <p>
        {isKo
          ? '연구방법론(Research Methodology)은 연구 질문에 답하기 위해 자료를 수집하고 분석하는 체계적인 절차와 원리를 의미합니다. 단순한 기법(method)과는 구별되는 개념으로, 방법론은 연구의 철학적 토대, 접근 방식, 전략, 구체적 기법을 모두 포함하는 상위 개념입니다. 연구자가 어떤 방법론을 선택하느냐에 따라 연구 질문의 형태, 자료 수집 방법, 분석 기법, 결과 해석 방식이 모두 달라집니다.'
          : 'Research methodology refers to the systematic procedures and principles for collecting and analyzing data to answer research questions. Distinct from mere methods or techniques, methodology is a broader concept encompassing the philosophical foundation, approach, strategy, and specific techniques of research. The choice of methodology determines the form of research questions, data collection methods, analytical techniques, and how results are interpreted.'}
      </p>
      <p>
        {isKo
          ? 'Creswell과 Creswell(2018)은 연구방법론을 선택할 때 세 가지 수준의 의사결정이 필요하다고 설명합니다: (1) 철학적 세계관(philosophical worldview), (2) 연구 설계(research design), (3) 구체적 연구 방법(specific methods). 이 세 수준은 상호 연결되어 있으며, 일관성 있는 선택이 연구의 질을 결정합니다.'
          : 'Creswell and Creswell (2018) explain that selecting a research methodology requires three levels of decision-making: (1) philosophical worldview, (2) research design, and (3) specific methods. These three levels are interconnected, and consistent choices across them determine the quality of research.'}
      </p>

      {/* Research Paradigms */}
      <h3>{isKo ? '연구 패러다임 (Research Paradigms)' : 'Research Paradigms'}</h3>
      <p>
        {isKo
          ? '연구 패러다임은 연구자의 세계관(worldview)을 반영하며, 존재론(ontology), 인식론(epistemology), 방법론(methodology)에 대한 기본 가정의 체계입니다. 어떤 패러다임을 채택하느냐에 따라 연구의 전체적인 방향과 접근 방식이 결정됩니다.'
          : 'Research paradigms reflect the researcher\'s worldview and constitute a system of fundamental assumptions about ontology, epistemology, and methodology. The paradigm adopted determines the overall direction and approach of research.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '실증주의 (Positivism)' : 'Positivism'}:</strong>{' '}
          {isKo
            ? '객관적이고 측정 가능한 현실이 존재한다고 가정합니다. 연구자는 관찰자로서 가설을 설정하고 경험적 자료를 통해 검증합니다. 양적연구의 철학적 토대가 되며, 일반화 가능한 법칙을 발견하는 것을 목표로 합니다. 연역적 접근을 취하며, 변수 간 인과관계를 규명하고자 합니다.'
            : 'Assumes that an objective, measurable reality exists. The researcher, as an observer, formulates hypotheses and tests them through empirical data. It serves as the philosophical foundation for quantitative research and aims to discover generalizable laws. It takes a deductive approach and seeks to identify causal relationships between variables.'}
        </li>
        <li>
          <strong>{isKo ? '해석주의 (Interpretivism)' : 'Interpretivism'}:</strong>{' '}
          {isKo
            ? '현실은 사회적으로 구성되며, 개인의 주관적 경험과 해석에 따라 다양하게 존재한다고 봅니다. 연구자는 참여자의 관점에서 현상의 의미를 이해하고자 합니다. 질적연구의 철학적 토대가 되며, 귀납적 접근을 통해 깊이 있는 이해를 추구합니다. 맥락(context)의 중요성을 강조하며, 연구자와 참여자 간의 상호작용을 인정합니다.'
            : 'Views reality as socially constructed and existing in multiple forms depending on individuals\' subjective experiences and interpretations. The researcher seeks to understand the meaning of phenomena from the participant\'s perspective. It forms the philosophical foundation for qualitative research and pursues deep understanding through an inductive approach. It emphasizes the importance of context and acknowledges the interaction between researcher and participant.'}
        </li>
        <li>
          <strong>{isKo ? '실용주의 (Pragmatism)' : 'Pragmatism'}:</strong>{' '}
          {isKo
            ? '연구 문제를 해결하는 데 가장 효과적인 방법을 선택하는 것이 중요하다고 봅니다. 특정 철학적 입장에 구속되지 않으며, 양적 방법과 질적 방법을 모두 활용할 수 있습니다. 혼합연구방법의 철학적 토대가 되며, 연구 질문에 가장 적합한 방법을 유연하게 선택합니다. Tashakkori와 Teddlie(2010)는 실용주의가 혼합연구의 가장 적절한 철학적 기반이라고 주장합니다.'
            : 'Holds that what matters most is choosing the most effective method for solving the research problem. It is not bound to a specific philosophical stance and can utilize both quantitative and qualitative methods. It serves as the philosophical foundation for mixed methods research and flexibly selects the most appropriate method for the research question. Tashakkori and Teddlie (2010) argue that pragmatism is the most appropriate philosophical basis for mixed methods research.'}
        </li>
      </ul>

      <TipBox type="tip" title={isKo ? '패러다임 선택의 중요성' : 'Importance of Paradigm Selection'}>
        <p>
          {isKo
            ? '연구 패러다임은 단순한 철학적 논의가 아니라, 연구의 모든 결정에 영향을 미치는 실질적인 선택입니다. 패러다임을 명시적으로 밝히면 연구의 일관성을 확보하고, 심사자에게 방법론적 선택의 근거를 설명할 수 있습니다. 학위논문에서는 연구방법 장의 첫 부분에서 채택한 패러다임을 설명하는 것이 바람직합니다.'
            : 'A research paradigm is not merely a philosophical discussion but a practical choice that influences every decision in research. Explicitly stating your paradigm ensures research consistency and helps explain the rationale for methodological choices to reviewers. In a thesis or dissertation, it is advisable to explain the adopted paradigm at the beginning of the methods chapter.'}
        </p>
      </TipBox>

      {/* Deductive vs Inductive */}
      <h3>{isKo ? '연역적 접근과 귀납적 접근' : 'Deductive and Inductive Approaches'}</h3>
      <p>
        {isKo
          ? '연역적 접근(deductive approach)은 기존 이론에서 가설을 도출하고, 자료 수집과 분석을 통해 가설을 검증하는 "이론 -> 관찰" 방향의 논리입니다. 양적연구에서 주로 사용되며, 연구 시작 전에 명확한 가설과 변수가 설정됩니다. 반면, 귀납적 접근(inductive approach)은 관찰과 자료에서 출발하여 패턴을 발견하고 이론을 구축하는 "관찰 -> 이론" 방향의 논리입니다. 질적연구에서 주로 사용되며, 자료 수집 과정에서 연구 방향이 점진적으로 구체화됩니다.'
          : 'The deductive approach follows a "theory -> observation" logic, deriving hypotheses from existing theories and testing them through data collection and analysis. It is primarily used in quantitative research, with clear hypotheses and variables established before research begins. In contrast, the inductive approach follows an "observation -> theory" logic, starting from observations and data to discover patterns and build theories. It is mainly used in qualitative research, with the research direction gradually becoming more specific during data collection.'}
      </p>
      <p>
        {isKo
          ? 'Bryman(2016)은 실제 연구에서는 순수한 연역이나 귀납보다는 두 접근의 혼합이 일반적이라고 지적합니다. 예를 들어, 양적 연구자도 탐색적 분석을 통해 새로운 패턴을 발견할 수 있고, 질적 연구자도 기존 이론에서 출발할 수 있습니다. 따라서 "어떤 접근이 더 우월한가"보다는 "연구 질문에 어떤 접근이 더 적합한가"를 판단하는 것이 중요합니다.'
          : 'Bryman (2016) points out that in actual research, a mixture of both approaches is more common than purely deductive or inductive reasoning. For example, quantitative researchers may discover new patterns through exploratory analysis, and qualitative researchers may start from existing theories. Therefore, rather than asking "which approach is superior," it is more important to determine "which approach is more appropriate for the research question."'}
      </p>

      <TipBox type="important" title={isKo ? '방법론적 일관성 확보' : 'Ensuring Methodological Consistency'}>
        <p>
          {isKo
            ? '연구의 철학적 패러다임, 접근 방식(연역/귀납), 연구 설계, 자료 수집 방법, 분석 기법은 모두 논리적으로 일관되어야 합니다. 예를 들어, 실증주의 패러다임을 채택하면서 근거이론(grounded theory)을 사용하거나, 해석주의를 표방하면서 대규모 설문조사를 실시하는 것은 방법론적 모순입니다. 이러한 불일치는 연구의 내적 타당성을 심각하게 위협합니다.'
            : 'The philosophical paradigm, approach (deductive/inductive), research design, data collection methods, and analytical techniques of a study must all be logically consistent. For example, adopting a positivist paradigm while using grounded theory, or claiming interpretivism while conducting large-scale surveys, constitutes methodological contradiction. Such inconsistencies seriously threaten the internal validity of research.'}
        </p>
      </TipBox>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 2 - Quantitative vs Qualitative                            */
/* ------------------------------------------------------------------ */
function QuantQualSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2 className="guide-section-title">
        <i className="fa-solid fa-arrows-left-right" />
        {isKo ? '양적연구 vs 질적연구' : 'Quantitative vs Qualitative'}
      </h2>

      {/* Quantitative research */}
      <h3>{isKo ? '양적연구의 특성 (Quantitative Research)' : 'Characteristics of Quantitative Research'}</h3>
      <p>
        {isKo
          ? '양적연구(quantitative research)는 수치 데이터를 수집하고 통계적 방법을 사용하여 변수 간의 관계를 분석하는 연구 접근법입니다. 실증주의 패러다임에 기반하며, 가설 검증, 일반화, 객관성을 강조합니다. 연구 설계가 사전에 엄격하게 구조화되며, 표준화된 측정 도구를 사용하여 자료를 수집합니다.'
          : 'Quantitative research is a research approach that collects numerical data and uses statistical methods to analyze relationships between variables. Based on the positivist paradigm, it emphasizes hypothesis testing, generalization, and objectivity. The research design is rigorously structured in advance, and data are collected using standardized measurement instruments.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '목적' : 'Purpose'}:</strong>{' '}
          {isKo
            ? '변수 간의 관계 규명, 인과관계 검증, 현상의 빈도와 분포 파악, 일반화 가능한 결론 도출'
            : 'Identifying relationships between variables, verifying causal relationships, determining frequency and distribution of phenomena, drawing generalizable conclusions'}
        </li>
        <li>
          <strong>{isKo ? '자료 수집' : 'Data Collection'}:</strong>{' '}
          {isKo
            ? '설문조사(survey), 실험(experiment), 이차 자료 분석(secondary data analysis), 체계적 관찰(systematic observation)'
            : 'Surveys, experiments, secondary data analysis, systematic observation'}
        </li>
        <li>
          <strong>{isKo ? '분석 방법' : 'Analysis Methods'}:</strong>{' '}
          {isKo
            ? '기술통계, t-검정, ANOVA, 회귀분석, 구조방정식 모형(SEM), 다층 모형(HLM) 등'
            : 'Descriptive statistics, t-tests, ANOVA, regression analysis, structural equation modeling (SEM), hierarchical linear modeling (HLM), etc.'}
        </li>
        <li>
          <strong>{isKo ? '표본' : 'Sample'}:</strong>{' '}
          {isKo
            ? '대규모 표본(일반적으로 100명 이상), 확률적 표본추출을 통해 모집단 대표성 확보'
            : 'Large samples (typically 100 or more), probability sampling to ensure population representativeness'}
        </li>
      </ul>

      {/* Qualitative research */}
      <h3>{isKo ? '질적연구의 특성 (Qualitative Research)' : 'Characteristics of Qualitative Research'}</h3>
      <p>
        {isKo
          ? '질적연구(qualitative research)는 참여자의 경험, 관점, 의미를 깊이 있게 탐구하는 연구 접근법입니다. 해석주의 패러다임에 기반하며, 맥락 속에서 현상을 이해하고, 풍부한 기술(thick description)을 통해 연구 결과를 제시합니다. 연구 설계가 유연하며, 자료 수집 과정에서 점진적으로 연구 방향이 구체화됩니다.'
          : 'Qualitative research is a research approach that deeply explores participants\' experiences, perspectives, and meanings. Based on the interpretivist paradigm, it seeks to understand phenomena within their context and presents findings through thick description. The research design is flexible, and the research direction becomes progressively more specific during data collection.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '목적' : 'Purpose'}:</strong>{' '}
          {isKo
            ? '현상의 의미와 본질 탐구, 과정과 맥락 이해, 참여자 관점에서의 경험 해석, 새로운 이론 생성'
            : 'Exploring meaning and essence of phenomena, understanding processes and contexts, interpreting experiences from the participant perspective, generating new theory'}
        </li>
        <li>
          <strong>{isKo ? '자료 수집' : 'Data Collection'}:</strong>{' '}
          {isKo
            ? '심층 인터뷰(in-depth interview), 참여관찰(participant observation), 포커스 그룹(focus group), 문서 분석(document analysis)'
            : 'In-depth interviews, participant observation, focus groups, document analysis'}
        </li>
        <li>
          <strong>{isKo ? '분석 방법' : 'Analysis Methods'}:</strong>{' '}
          {isKo
            ? '주제 분석(thematic analysis), 근거이론(grounded theory), 내러티브 분석(narrative analysis), 현상학적 분석(phenomenological analysis), 담론 분석(discourse analysis)'
            : 'Thematic analysis, grounded theory, narrative analysis, phenomenological analysis, discourse analysis'}
        </li>
        <li>
          <strong>{isKo ? '표본' : 'Sample'}:</strong>{' '}
          {isKo
            ? '소규모 표본(일반적으로 5~30명), 목적적 표본추출(purposive sampling)을 통해 정보가 풍부한 사례 선정'
            : 'Small samples (typically 5-30), purposive sampling to select information-rich cases'}
        </li>
      </ul>

      {/* Key differences */}
      <h3>{isKo ? '양적연구와 질적연구의 핵심 차이' : 'Key Differences Between Quantitative and Qualitative Research'}</h3>
      <p>
        {isKo
          ? '양적연구와 질적연구는 단순히 숫자 대 텍스트의 차이가 아니라, 연구의 철학적 기반, 목적, 과정에서 근본적으로 다른 접근입니다. 양적연구가 "얼마나(how much)"와 "얼마나 자주(how often)"를 묻는다면, 질적연구는 "어떻게(how)"와 "왜(why)"를 묻습니다. 양적연구는 넓이(breadth)를 추구하고, 질적연구는 깊이(depth)를 추구합니다.'
          : 'The difference between quantitative and qualitative research is not simply numbers versus text, but fundamentally different approaches in philosophical foundations, purposes, and processes. While quantitative research asks "how much" and "how often," qualitative research asks "how" and "why." Quantitative research seeks breadth, while qualitative research seeks depth.'}
      </p>
      <p>
        {isKo
          ? '그러나 두 접근은 상호 배타적이 아니며, 각각 고유한 강점과 한계를 가지고 있습니다. 양적연구는 일반화에 강하지만 맥락적 이해가 부족할 수 있고, 질적연구는 깊이 있는 이해를 제공하지만 일반화에 한계가 있습니다. 따라서 연구 질문의 성격에 따라 적절한 접근을 선택하거나, 두 접근을 결합하는 혼합연구방법을 고려할 수 있습니다.'
          : 'However, the two approaches are not mutually exclusive and each has unique strengths and limitations. Quantitative research excels in generalization but may lack contextual understanding, while qualitative research provides deep understanding but has limitations in generalizability. Therefore, depending on the nature of the research question, you can choose the appropriate approach or consider mixed methods that combine both.'}
      </p>

      <TipBox type="tip" title={isKo ? '연구 접근법 선택 기준' : 'Criteria for Choosing a Research Approach'}>
        <p>
          {isKo
            ? '연구 접근법 선택 시 가장 중요한 기준은 연구 질문의 성격입니다. "A가 B에 미치는 영향은 어떠한가?"와 같은 질문은 양적 접근이 적합하고, "참여자들은 이 경험을 어떻게 의미화하는가?"와 같은 질문은 질적 접근이 적합합니다. 연구 질문을 먼저 수립한 후 그에 맞는 방법론을 선택하세요. 방법론에 연구 질문을 끼워 맞추는 것은 바람직하지 않습니다.'
            : 'The most important criterion when choosing a research approach is the nature of the research question. Questions like "What is the effect of A on B?" are suited to quantitative approaches, while "How do participants make meaning of this experience?" calls for qualitative approaches. Establish your research questions first, then select the matching methodology. Fitting research questions to a methodology is not advisable.'}
        </p>
      </TipBox>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 3 - Mixed Methods                                          */
/* ------------------------------------------------------------------ */
function MixedSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2 className="guide-section-title">
        <i className="fa-solid fa-shuffle" />
        {isKo ? '혼합연구방법' : 'Mixed Methods'}
      </h2>

      {/* What is mixed methods */}
      <h3>{isKo ? '혼합연구방법이란?' : 'What Are Mixed Methods?'}</h3>
      <p>
        {isKo
          ? '혼합연구방법(mixed methods research)은 하나의 연구 내에서 양적 접근과 질적 접근을 모두 사용하여 자료를 수집하고 분석하는 연구 방법론입니다. Creswell과 Plano Clark(2018)은 혼합연구를 "연구자가 양적 자료와 질적 자료를 모두 수집하고, 두 가지 형태의 자료를 통합하며, 양적 또는 질적 접근만으로는 제공할 수 없는 보다 완전한 이해를 추구하는 접근"으로 정의합니다.'
          : 'Mixed methods research is a methodology that uses both quantitative and qualitative approaches to collect and analyze data within a single study. Creswell and Plano Clark (2018) define mixed methods as "an approach in which the researcher collects both quantitative and qualitative data, integrates the two forms of data, and pursues a more complete understanding than either quantitative or qualitative approaches alone could provide."'}
      </p>
      <p>
        {isKo
          ? '혼합연구의 핵심은 단순히 양적 자료와 질적 자료를 함께 수집하는 것이 아니라, 두 유형의 자료를 체계적으로 "통합(integration)"하는 데 있습니다. 통합이 이루어지지 않으면 두 개의 독립된 연구를 하나의 보고서에 합쳐 놓은 것에 불과합니다. 실용주의(pragmatism) 철학에 기반하여 연구 문제 해결에 가장 효과적인 방법을 유연하게 결합합니다.'
          : 'The essence of mixed methods is not merely collecting quantitative and qualitative data together, but systematically "integrating" the two types of data. Without integration, it is merely two independent studies combined into one report. Based on pragmatist philosophy, mixed methods flexibly combine the most effective methods for solving the research problem.'}
      </p>

      {/* Convergent design */}
      <h3>{isKo ? '수렴적 설계 (Convergent Design)' : 'Convergent Design'}</h3>
      <p>
        {isKo
          ? '수렴적 설계(convergent design)는 양적 자료와 질적 자료를 동시에(concurrently) 수집하고, 각각 독립적으로 분석한 후, 결과를 비교하거나 통합하는 설계입니다. 양적 결과와 질적 결과가 수렴(converge)하는지, 상충하는지를 확인함으로써 연구 질문에 대한 보다 완전한 이해를 도모합니다. 동시에 두 가지 자료를 수집하므로 시간이 절약되지만, 양적 결과와 질적 결과가 상충할 때 이를 해결하는 방법에 대한 사전 계획이 필요합니다.'
          : 'Convergent design collects quantitative and qualitative data concurrently, analyzes each independently, and then compares or integrates the results. By examining whether quantitative and qualitative results converge or diverge, it seeks a more complete understanding of the research question. Collecting both types of data simultaneously saves time, but advance planning is needed for resolving conflicts between quantitative and qualitative findings.'}
      </p>

      {/* Explanatory sequential design */}
      <h3>{isKo ? '설명적 순차 설계 (Explanatory Sequential Design)' : 'Explanatory Sequential Design'}</h3>
      <p>
        {isKo
          ? '설명적 순차 설계(explanatory sequential design)는 먼저 양적 자료를 수집하고 분석한 후, 그 결과를 바탕으로 질적 자료를 수집하는 2단계 설계입니다. 양적 분석에서 나타난 결과를 질적 자료를 통해 설명(explain)하고 심화하는 것이 목적입니다. 예를 들어, 설문조사에서 예상치 못한 결과가 나타났을 때, 후속 인터뷰를 통해 그 이유를 탐구할 수 있습니다. 양적 단계의 결과가 질적 단계의 참여자 선정과 질문 설계에 직접적으로 영향을 미칩니다.'
          : 'Explanatory sequential design is a two-phase design in which quantitative data are collected and analyzed first, followed by qualitative data collection based on those results. The purpose is to explain and deepen quantitative findings through qualitative data. For example, when unexpected results emerge from a survey, follow-up interviews can explore the reasons. Results from the quantitative phase directly influence participant selection and question design in the qualitative phase.'}
      </p>

      {/* Exploratory sequential design */}
      <h3>{isKo ? '탐색적 순차 설계 (Exploratory Sequential Design)' : 'Exploratory Sequential Design'}</h3>
      <p>
        {isKo
          ? '탐색적 순차 설계(exploratory sequential design)는 설명적 순차 설계와 반대로, 먼저 질적 자료를 수집하고 분석한 후, 그 결과를 바탕으로 양적 연구를 수행하는 설계입니다. 기존 이론이나 측정 도구가 부족한 분야에서 특히 유용합니다. 질적 단계에서 발견한 주제나 범주를 양적 설문 문항으로 개발하거나, 질적 결과에서 도출한 가설을 양적 분석으로 검증합니다. 새로운 측정 도구를 개발하거나, 특정 집단에 대한 이해가 부족할 때 효과적입니다.'
          : 'Exploratory sequential design is the reverse of explanatory sequential design: qualitative data are collected and analyzed first, followed by quantitative research based on those results. It is particularly useful in areas where existing theories or measurement instruments are lacking. Themes or categories discovered in the qualitative phase are developed into quantitative survey items, or hypotheses derived from qualitative findings are tested through quantitative analysis. It is effective when developing new measurement instruments or when understanding of a specific group is limited.'}
      </p>

      <TipBox type="important" title={isKo ? '혼합연구의 자료 통합' : 'Data Integration in Mixed Methods'}>
        <p>
          {isKo
            ? '혼합연구에서 가장 중요한 단계는 자료 통합(data integration)입니다. 단순히 양적 결과와 질적 결과를 병렬적으로 나열하는 것은 진정한 혼합연구가 아닙니다. 통합 전략으로는 결과 비교(side-by-side comparison), 공동 표시(joint display), 변환(transformation, 예: 질적 자료의 양적화) 등이 있습니다. Creswell과 Plano Clark(2018)은 통합이 이루어지는 시점과 방법을 연구 설계 단계에서 미리 계획해야 한다고 강조합니다.'
            : 'The most critical step in mixed methods research is data integration. Simply listing quantitative and qualitative results side by side is not genuine mixed methods research. Integration strategies include side-by-side comparison, joint display, and transformation (e.g., quantitizing qualitative data). Creswell and Plano Clark (2018) emphasize that the timing and method of integration should be planned in advance at the research design stage.'}
        </p>
      </TipBox>

      <TipBox type="tip" title={isKo ? '혼합연구 설계 선택 가이드' : 'Mixed Methods Design Selection Guide'}>
        <p>
          {isKo
            ? '설계 선택 시 다음을 고려하세요: (1) 수렴적 설계 - 양적, 질적 결과를 비교하여 현상을 다각도로 이해하고 싶을 때, (2) 설명적 순차 설계 - 양적 결과를 질적 자료로 설명하고 싶을 때, (3) 탐색적 순차 설계 - 새로운 도구를 개발하거나, 질적 탐색 결과를 양적으로 검증하고 싶을 때. 각 설계는 서로 다른 연구 질문 유형에 적합하므로, 연구 목적에 따라 신중하게 선택하세요.'
            : 'When selecting a design, consider: (1) Convergent design - when you want to compare quantitative and qualitative results to understand a phenomenon from multiple angles, (2) Explanatory sequential design - when you want to explain quantitative results with qualitative data, (3) Exploratory sequential design - when you want to develop new instruments or quantitatively verify qualitative exploratory findings. Each design suits different types of research questions, so choose carefully based on your research purpose.'}
        </p>
      </TipBox>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 4 - Research Design Types                                  */
/* ------------------------------------------------------------------ */
function DesignTypesSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2 className="guide-section-title">
        <i className="fa-solid fa-sitemap" />
        {isKo ? '연구설계 유형' : 'Research Design Types'}
      </h2>

      {/* Experimental design */}
      <h3>{isKo ? '실험 설계 (Experimental Design)' : 'Experimental Design'}</h3>
      <p>
        {isKo
          ? '실험 설계(experimental design)는 독립변수를 의도적으로 조작(manipulation)하고, 외생변수를 통제(control)하며, 참여자를 무작위로 배정(random assignment)하여 인과관계를 검증하는 가장 엄격한 연구 설계입니다. Shadish, Cook과 Campbell(2002)은 진실험(true experiment)의 세 가지 핵심 요소로 조작, 통제, 무작위 배정을 제시합니다.'
          : 'Experimental design is the most rigorous research design for verifying causal relationships by deliberately manipulating the independent variable, controlling extraneous variables, and randomly assigning participants. Shadish, Cook, and Campbell (2002) identify three core elements of true experiments: manipulation, control, and random assignment.'}
      </p>
      <p>
        {isKo
          ? '실험 설계의 유형으로는 사전-사후 통제집단 설계(pretest-posttest control group design), 솔로몬 4집단 설계(Solomon four-group design), 사후검사 통제집단 설계(posttest-only control group design) 등이 있습니다. 무작위 배정을 통해 실험집단과 통제집단의 동질성을 확보하므로, 관찰된 효과가 독립변수의 조작에 의한 것임을 가장 강력하게 주장할 수 있습니다.'
          : 'Types of experimental design include pretest-posttest control group design, Solomon four-group design, and posttest-only control group design. Because random assignment ensures homogeneity between experimental and control groups, this design allows the strongest claims that observed effects are attributable to manipulation of the independent variable.'}
      </p>

      {/* Quasi-experimental design */}
      <h3>{isKo ? '준실험 설계 (Quasi-Experimental Design)' : 'Quasi-Experimental Design'}</h3>
      <p>
        {isKo
          ? '준실험 설계(quasi-experimental design)는 진실험의 세 요소 중 무작위 배정이 불가능한 상황에서 사용하는 설계입니다. 현실적으로 교육, 조직, 의료 등의 현장에서 참여자를 무작위로 배정하는 것이 어려운 경우가 많으므로, 사회과학 연구에서 가장 빈번하게 사용되는 설계입니다.'
          : 'Quasi-experimental design is used when random assignment, one of the three core elements of true experiments, is not feasible. Since it is often difficult to randomly assign participants in real-world settings such as education, organizations, and healthcare, it is the most frequently used design in social science research.'}
      </p>
      <p>
        {isKo
          ? '대표적인 준실험 설계로는 비동등 통제집단 설계(nonequivalent control group design), 시계열 설계(interrupted time series design), 회귀불연속 설계(regression discontinuity design) 등이 있습니다. 무작위 배정이 이루어지지 않으므로, 선택 편향(selection bias)과 같은 내적 타당도 위협에 취약합니다. 이를 보완하기 위해 성향점수 매칭(propensity score matching), 통계적 통제 등의 기법을 사용합니다.'
          : 'Representative quasi-experimental designs include nonequivalent control group design, interrupted time series design, and regression discontinuity design. Since random assignment is not performed, these designs are vulnerable to threats to internal validity such as selection bias. To address this, techniques such as propensity score matching and statistical controls are used.'}
      </p>

      {/* Non-experimental design */}
      <h3>{isKo ? '비실험 설계 (Non-Experimental Design)' : 'Non-Experimental Design'}</h3>
      <p>
        {isKo
          ? '비실험 설계(non-experimental design)는 독립변수를 조작하지 않고, 이미 존재하는 변수의 특성이나 관계를 조사하는 설계입니다. 설문조사 연구(survey research)가 대표적이며, 횡단적 설계(cross-sectional design)와 종단적 설계(longitudinal design)로 나뉩니다.'
          : 'Non-experimental design investigates the characteristics or relationships of variables as they naturally exist, without manipulating the independent variable. Survey research is the most representative type, and it is divided into cross-sectional design and longitudinal design.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '횡단적 설계 (Cross-sectional)' : 'Cross-sectional Design'}:</strong>{' '}
          {isKo
            ? '한 시점에서 자료를 수집합니다. 비용이 적고 신속하지만, 변수 간의 인과관계를 추론하기 어렵습니다. 시간적 선행성을 확인할 수 없기 때문입니다.'
            : 'Data are collected at a single point in time. It is cost-effective and quick, but it is difficult to infer causal relationships between variables because temporal precedence cannot be established.'}
        </li>
        <li>
          <strong>{isKo ? '종단적 설계 (Longitudinal)' : 'Longitudinal Design'}:</strong>{' '}
          {isKo
            ? '동일한 대상을 여러 시점에 걸쳐 반복 측정합니다. 패널 연구(panel study), 추세 연구(trend study), 코호트 연구(cohort study)로 구분됩니다. 시간에 따른 변화를 관찰할 수 있어 인과 추론에 유리하지만, 시간과 비용이 많이 소요되고 참여자 탈락(attrition)의 문제가 있습니다.'
            : 'Repeatedly measures the same subjects over multiple time points. It is classified into panel studies, trend studies, and cohort studies. It allows observation of changes over time, which is advantageous for causal inference, but requires substantial time and cost and faces participant attrition issues.'}
        </li>
      </ul>

      {/* Design selection */}
      <h3>{isKo ? '연구설계 선택 시 고려사항' : 'Considerations When Selecting a Research Design'}</h3>
      <p>
        {isKo
          ? '연구설계를 선택할 때는 다음 요인을 종합적으로 고려해야 합니다: (1) 연구 질문의 유형 - 인과관계를 검증하려면 실험 또는 준실험 설계가 필요하고, 변수 간 관계 탐색이 목적이면 비실험 설계가 적합합니다. (2) 현실적 제약 - 무작위 배정이 가능한지, 충분한 시간과 예산이 있는지를 고려합니다. (3) 내적 타당도와 외적 타당도의 균형 - 실험실 실험은 내적 타당도가 높지만 외적 타당도(일반화 가능성)가 제한될 수 있고, 현장 연구는 외적 타당도가 높지만 내적 타당도가 위협받을 수 있습니다.'
          : 'When selecting a research design, consider the following factors comprehensively: (1) Type of research question - experimental or quasi-experimental designs are needed to verify causal relationships, while non-experimental designs are suitable for exploring variable relationships. (2) Practical constraints - whether random assignment is feasible, whether sufficient time and budget are available. (3) Balance of internal and external validity - laboratory experiments have high internal validity but may have limited external validity (generalizability), while field studies have high external validity but internal validity may be threatened.'}
      </p>

      <TipBox type="warning" title={isKo ? '인과관계 추론의 한계' : 'Limitations of Causal Inference'}>
        <p>
          {isKo
            ? '비실험 설계(특히 횡단적 설문조사)에서는 "A가 B에 영향을 미친다"라는 인과관계를 주장하기 어렵습니다. 상관관계는 인과관계를 의미하지 않습니다. 인과관계를 주장하려면 세 가지 조건이 충족되어야 합니다: (1) 공변성(covariation) - 원인과 결과가 함께 변한다, (2) 시간적 선행성(temporal precedence) - 원인이 결과보다 앞선다, (3) 비허위성(nonspuriousness) - 제3의 변수가 관계를 설명하지 않는다. 비실험 연구에서 인과적 언어 사용은 주의해야 합니다.'
            : 'In non-experimental designs (especially cross-sectional surveys), it is difficult to claim that "A affects B" as a causal relationship. Correlation does not imply causation. Three conditions must be met to claim causality: (1) Covariation - cause and effect vary together, (2) Temporal precedence - the cause precedes the effect, (3) Nonspuriousness - a third variable does not explain the relationship. Caution must be exercised when using causal language in non-experimental research.'}
        </p>
      </TipBox>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 5 - Variables & Operational Definitions                    */
/* ------------------------------------------------------------------ */
function VariablesSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2 className="guide-section-title">
        <i className="fa-solid fa-sliders" />
        {isKo ? '변수와 조작적 정의' : 'Variables & Definitions'}
      </h2>

      {/* Types of variables */}
      <h3>{isKo ? '변수의 유형 (Types of Variables)' : 'Types of Variables'}</h3>
      <p>
        {isKo
          ? '변수(variable)는 연구에서 측정하거나 조작하는 특성으로, 둘 이상의 값을 가질 수 있는 속성입니다. 연구에서 변수의 역할을 정확히 이해하고 구분하는 것은 연구 설계와 분석의 핵심입니다.'
          : 'A variable is a characteristic that is measured or manipulated in research, an attribute that can take on two or more values. Accurately understanding and distinguishing the roles of variables in research is central to research design and analysis.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '독립변수 (Independent Variable, IV)' : 'Independent Variable (IV)'}:</strong>{' '}
          {isKo
            ? '다른 변수에 영향을 미치는 것으로 가정되는 원인 변수입니다. 실험연구에서는 연구자가 의도적으로 조작하며, 비실험연구에서는 이미 존재하는 특성(예: 성별, 리더십 유형)을 독립변수로 설정합니다. 예를 들어, "교수법이 학업 성취도에 미치는 영향" 연구에서 교수법이 독립변수입니다.'
            : 'A causal variable assumed to influence other variables. In experimental research, the researcher deliberately manipulates it; in non-experimental research, already existing characteristics (e.g., gender, leadership type) are designated as independent variables. For example, in a study of "the effect of teaching methods on academic achievement," the teaching method is the independent variable.'}
        </li>
        <li>
          <strong>{isKo ? '종속변수 (Dependent Variable, DV)' : 'Dependent Variable (DV)'}:</strong>{' '}
          {isKo
            ? '독립변수의 영향을 받는 것으로 가정되는 결과 변수입니다. 연구의 핵심 관심사이며, 독립변수의 변화에 따라 어떻게 변하는지를 측정합니다. 위의 예에서 학업 성취도가 종속변수입니다. 종속변수는 신뢰도와 타당도가 확보된 측정 도구로 측정해야 합니다.'
            : 'An outcome variable assumed to be affected by the independent variable. It is the central focus of the study, and how it changes in response to variations in the independent variable is measured. In the above example, academic achievement is the dependent variable. Dependent variables must be measured with instruments that have established reliability and validity.'}
        </li>
        <li>
          <strong>{isKo ? '매개변수 (Mediator Variable)' : 'Mediator Variable'}:</strong>{' '}
          {isKo
            ? '독립변수가 종속변수에 영향을 미치는 과정(메커니즘)을 설명하는 변수입니다. "왜" 또는 "어떻게" 효과가 발생하는지를 밝힙니다. 예를 들어, "변혁적 리더십(IV) -> 심리적 임파워먼트(매개) -> 직무 성과(DV)"에서 심리적 임파워먼트는 리더십이 성과에 영향을 미치는 메커니즘을 설명합니다. Baron과 Kenny(1986)의 매개효과 검증 절차나 부트스트래핑 방법으로 검증합니다.'
            : 'A variable that explains the process (mechanism) through which the independent variable affects the dependent variable. It reveals "why" or "how" the effect occurs. For example, in "transformational leadership (IV) -> psychological empowerment (mediator) -> job performance (DV)," psychological empowerment explains the mechanism by which leadership affects performance. It is tested using Baron and Kenny\'s (1986) mediation testing procedure or bootstrapping methods.'}
        </li>
        <li>
          <strong>{isKo ? '조절변수 (Moderator Variable)' : 'Moderator Variable'}:</strong>{' '}
          {isKo
            ? '독립변수와 종속변수 간 관계의 강도나 방향을 변화시키는 변수입니다. "어떤 조건에서" 효과가 강해지거나 약해지는지를 밝힙니다. 예를 들어, "업무 스트레스(IV)가 소진(DV)에 미치는 영향에서 사회적 지지(조절)의 역할" 연구에서, 사회적 지지가 높은 집단은 스트레스가 소진에 미치는 영향이 약화될 수 있습니다. 상호작용 효과(interaction effect)로 분석합니다.'
            : 'A variable that changes the strength or direction of the relationship between independent and dependent variables. It reveals "under what conditions" the effect becomes stronger or weaker. For example, in a study of "the role of social support (moderator) in the effect of work stress (IV) on burnout (DV)," the effect of stress on burnout may be weakened in groups with high social support. It is analyzed through interaction effects.'}
        </li>
        <li>
          <strong>{isKo ? '통제변수 (Control Variable)' : 'Control Variable'}:</strong>{' '}
          {isKo
            ? '연구 결과에 영향을 미칠 수 있지만, 연구의 주된 관심사가 아닌 변수입니다. 이러한 변수의 효과를 통제함으로써 독립변수의 순수한 효과를 추정합니다. 인구통계학적 변수(성별, 연령, 학력, 근속연수 등)가 대표적인 통제변수입니다. 통계 분석에서 공변량(covariate)으로 투입하여 그 영향을 제거합니다.'
            : 'Variables that may affect research results but are not the primary focus of the study. By controlling their effects, the pure effect of the independent variable can be estimated. Demographic variables (gender, age, education level, tenure, etc.) are representative control variables. They are entered as covariates in statistical analysis to remove their influence.'}
        </li>
      </ul>

      {/* Operational definitions */}
      <h3>{isKo ? '조작적 정의 (Operational Definitions)' : 'Operational Definitions'}</h3>
      <p>
        {isKo
          ? '조작적 정의(operational definition)란 추상적인 개념을 경험적으로 측정 가능한 형태로 구체화하는 과정입니다. 연구에서 사용하는 대부분의 개념(예: 자아존중감, 직무만족도, 조직몰입)은 직접 관찰할 수 없는 잠재 변수(latent variable)이므로, 이를 관찰 가능한 지표(indicator)로 변환해야 합니다.'
          : 'An operational definition is the process of specifying abstract concepts into empirically measurable forms. Most concepts used in research (e.g., self-esteem, job satisfaction, organizational commitment) are latent variables that cannot be directly observed, so they must be converted into observable indicators.'}
      </p>
      <p>
        {isKo
          ? '좋은 조작적 정의는 다음 요건을 충족합니다: (1) 사용하는 측정 도구(척도)를 명시합니다. (2) 측정 방법과 절차를 구체적으로 기술합니다. (3) 선행연구에서 신뢰도와 타당도가 검증된 도구를 기반으로 합니다. (4) 다른 연구자가 동일하게 재현할 수 있을 만큼 구체적입니다. 예를 들어, "본 연구에서 조직몰입이란 Allen과 Meyer(1990)가 개발한 조직몰입 척도(OCQ)의 정서적 몰입 하위 요인 8문항으로 측정한 점수를 의미한다"와 같이 작성합니다.'
          : 'A good operational definition meets the following requirements: (1) Specifies the measurement instrument (scale) used. (2) Describes the measurement method and procedures in detail. (3) Is based on instruments with established reliability and validity from prior research. (4) Is specific enough that other researchers can replicate it identically. For example: "In this study, organizational commitment refers to the score measured by 8 items of the affective commitment subscale from the Organizational Commitment Questionnaire (OCQ) developed by Allen and Meyer (1990)."'}
      </p>

      {/* Measurement levels */}
      <h3>{isKo ? '측정 수준과 변수 유형' : 'Measurement Levels and Variable Types'}</h3>
      <p>
        {isKo
          ? '변수의 측정 수준은 적절한 통계 분석 방법을 선택하는 데 핵심적인 역할을 합니다. Stevens(1946)의 분류에 따라 네 가지 측정 수준이 있습니다.'
          : 'The measurement level of variables plays a critical role in selecting appropriate statistical analysis methods. According to Stevens\' (1946) classification, there are four measurement levels.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '명목 척도 (Nominal)' : 'Nominal Scale'}:</strong>{' '}
          {isKo
            ? '범주를 구분하는 데만 사용됩니다. 수학적 연산이 의미 없으며, 빈도와 최빈값만 계산 가능합니다. 예: 성별(남/여), 종교, 거주 지역.'
            : 'Used only to distinguish categories. Mathematical operations are meaningless, and only frequency and mode can be calculated. Examples: gender (male/female), religion, residential area.'}
        </li>
        <li>
          <strong>{isKo ? '서열 척도 (Ordinal)' : 'Ordinal Scale'}:</strong>{' '}
          {isKo
            ? '범주 간 순서(서열)가 존재하지만, 간격이 동일하다고 가정할 수 없습니다. 중앙값과 비모수 검정을 사용합니다. 예: 교육 수준(초졸, 중졸, 고졸, 대졸), 만족도 순위.'
            : 'Categories have an order (rank), but equal intervals cannot be assumed. Median and non-parametric tests are used. Examples: education level (elementary, middle, high school, college), satisfaction ranking.'}
        </li>
        <li>
          <strong>{isKo ? '등간 척도 (Interval)' : 'Interval Scale'}:</strong>{' '}
          {isKo
            ? '범주 간 간격이 동일하지만, 절대 영점(true zero)이 없습니다. 평균, 표준편차 등 대부분의 통계 분석이 가능합니다. 예: 온도(섭씨), 리커트 척도(관례적으로 등간으로 취급).'
            : 'Intervals between categories are equal, but there is no true zero point. Most statistical analyses including mean and standard deviation are possible. Examples: temperature (Celsius), Likert scales (conventionally treated as interval).'}
        </li>
        <li>
          <strong>{isKo ? '비율 척도 (Ratio)' : 'Ratio Scale'}:</strong>{' '}
          {isKo
            ? '등간 척도의 특성에 절대 영점이 추가됩니다. 모든 수학적 연산이 가능합니다. 예: 연령, 소득, 체중, 시간.'
            : 'Has all the properties of interval scale plus a true zero point. All mathematical operations are possible. Examples: age, income, weight, time.'}
        </li>
      </ul>

      <TipBox type="tip" title={isKo ? '리커트 척도의 측정 수준 논쟁' : 'The Measurement Level Debate on Likert Scales'}>
        <p>
          {isKo
            ? '리커트 척도(예: 1=전혀 그렇지 않다 ~ 5=매우 그렇다)가 서열 척도인지 등간 척도인지에 대한 논쟁이 있습니다. 엄밀히 말하면 서열 척도이지만, 사회과학 연구에서는 관례적으로 등간 척도로 취급하여 평균, 표준편차, 모수 검정을 적용합니다. 이 관례가 성립하려면 응답 범주가 충분히(보통 5점 이상) 있어야 하며, 문항이 복수일 경우 합산 점수는 정규분포에 가까워지므로 등간 척도 가정이 더 타당해집니다.'
            : 'There is debate about whether Likert scales (e.g., 1=strongly disagree ~ 5=strongly agree) are ordinal or interval. Strictly speaking, they are ordinal, but in social science research, they are conventionally treated as interval scales, allowing the application of means, standard deviations, and parametric tests. For this convention to hold, there should be sufficient response categories (usually 5 or more), and when multiple items are summed, the composite score approaches a normal distribution, making the interval assumption more defensible.'}
        </p>
      </TipBox>

      <TipBox type="important" title={isKo ? '변수 관계의 시각화' : 'Visualizing Variable Relationships'}>
        <p>
          {isKo
            ? '연구 모형을 작성할 때 변수 간 관계를 도식화하면 연구의 구조를 명확하게 전달할 수 있습니다. 독립변수에서 종속변수로 향하는 화살표는 직접 효과를, 매개변수를 경유하는 화살표는 간접 효과를, 조절변수에서 경로 위로 향하는 화살표는 조절 효과를 나타냅니다. 이러한 도식은 학위논문이나 학술 논문의 연구방법 섹션에서 반드시 포함되어야 하는 핵심 요소입니다.'
            : 'When constructing a research model, diagramming the relationships between variables clearly communicates the structure of the research. Arrows from independent to dependent variables represent direct effects, arrows through mediating variables represent indirect effects, and arrows from moderating variables pointing to a path represent moderating effects. Such diagrams are essential elements that must be included in the methods section of theses and academic papers.'}
        </p>
      </TipBox>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 6 - Writing the Methods Section                            */
/* ------------------------------------------------------------------ */
function WritingMethodsSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2 className="guide-section-title">
        <i className="fa-solid fa-pen-to-square" />
        {isKo ? '연구방법 섹션 작성' : 'Writing Methods Section'}
      </h2>

      {/* Purpose of the methods section */}
      <h3>{isKo ? '연구방법 섹션의 목적과 중요성' : 'Purpose and Importance of the Methods Section'}</h3>
      <p>
        {isKo
          ? '연구방법(Methods) 섹션은 연구가 어떻게 수행되었는지(또는 수행될 것인지)를 상세하게 기술하는 부분으로, 연구의 재현 가능성(replicability)을 보장하는 핵심 장입니다. APA 제7판(2020)에 따르면, 연구방법 섹션은 다른 연구자가 동일한 연구를 재현할 수 있을 만큼 충분히 상세해야 합니다. 연구방법 섹션은 일반적으로 연구 설계, 참여자(표본), 측정 도구, 자료 수집 절차, 자료 분석 방법의 하위 섹션으로 구성됩니다.'
          : 'The Methods section describes in detail how the research was conducted (or will be conducted) and is the key chapter that ensures the replicability of the study. According to APA 7th edition (2020), the methods section must be sufficiently detailed for another researcher to replicate the study. The methods section typically consists of subsections covering research design, participants (sample), measurement instruments, data collection procedures, and data analysis methods.'}
      </p>

      {/* Research design subsection */}
      <h3>{isKo ? '연구 설계 기술하기' : 'Describing the Research Design'}</h3>
      <p>
        {isKo
          ? '연구 설계 하위 섹션에서는 채택한 연구 방법론과 설계 유형을 명시하고, 그 선택의 근거를 설명합니다. 양적연구인지, 질적연구인지, 혼합연구인지를 밝히고, 구체적인 설계 유형(예: 사전-사후 준실험 설계, 횡단적 설문조사 설계, 탐색적 순차 혼합 설계)을 명시합니다. 선택한 설계가 연구 질문에 답하는 데 왜 가장 적합한지를 논리적으로 설명해야 합니다.'
          : 'In the research design subsection, specify the adopted methodology and design type and explain the rationale for the choice. State whether it is quantitative, qualitative, or mixed methods, and specify the particular design type (e.g., pretest-posttest quasi-experimental design, cross-sectional survey design, exploratory sequential mixed design). You must logically explain why the chosen design is most suitable for answering the research questions.'}
      </p>

      {/* Participants subsection */}
      <h3>{isKo ? '참여자 및 표본 기술하기' : 'Describing Participants and Sample'}</h3>
      <p>
        {isKo
          ? '참여자(participants) 하위 섹션에서는 다음 사항을 기술합니다: (1) 모집단(target population)의 정의, (2) 표본추출 방법(확률적/비확률적), (3) 표본 크기 및 산출 근거(예: G*Power를 사용한 통계적 검정력 분석), (4) 참여자의 인구통계학적 특성(성별, 연령, 학력 등), (5) 참여자 모집 절차, (6) 포함/배제 기준(inclusion/exclusion criteria). 양적연구에서는 표본의 모집단 대표성을, 질적연구에서는 표본의 정보 풍부성(information richness)을 강조합니다.'
          : 'The participants subsection describes: (1) definition of the target population, (2) sampling method (probability/non-probability), (3) sample size and calculation rationale (e.g., statistical power analysis using G*Power), (4) demographic characteristics of participants (gender, age, education, etc.), (5) participant recruitment procedures, (6) inclusion/exclusion criteria. Quantitative research emphasizes population representativeness of the sample, while qualitative research emphasizes information richness.'}
      </p>

      {/* Instruments and analysis */}
      <h3>{isKo ? '측정 도구와 분석 방법 기술하기' : 'Describing Instruments and Analysis Methods'}</h3>
      <p>
        {isKo
          ? '측정 도구(instruments) 하위 섹션에서는 각 변수를 측정하기 위해 사용한 척도를 상세히 기술합니다. 각 척도에 대해 원저자, 문항 수, 응답 형식(예: 5점 리커트), 하위 요인 구성, 선행연구에서의 신뢰도(Cronbach alpha), 본 연구에서의 신뢰도를 보고합니다. 번역 척도의 경우 번역-역번역(translation-back translation) 절차를 기술합니다.'
          : 'The instruments subsection describes in detail the scales used to measure each variable. For each scale, report the original author, number of items, response format (e.g., 5-point Likert), subscale structure, reliability (Cronbach\'s alpha) from prior studies, and reliability in the current study. For translated scales, describe the translation-back translation procedure.'}
      </p>
      <p>
        {isKo
          ? '자료 분석(data analysis) 하위 섹션에서는 사용한 통계 기법과 소프트웨어를 기술합니다. 각 연구 질문이나 가설에 대응하는 분석 방법을 명시하고, 통계적 유의수준(예: alpha = .05), 가정 검증 방법(정규성, 등분산성 등), 결측값 처리 방법을 보고합니다. 예를 들어, "가설 1은 독립표본 t-검정으로 분석하였으며, 가설 2와 3은 위계적 회귀분석(hierarchical regression)으로 분석하였다"와 같이 기술합니다.'
          : 'The data analysis subsection describes the statistical techniques and software used. Specify the analysis method corresponding to each research question or hypothesis, and report the significance level (e.g., alpha = .05), assumption testing methods (normality, homogeneity of variance, etc.), and missing data treatment. For example: "Hypothesis 1 was tested using independent-samples t-test, and Hypotheses 2 and 3 were tested using hierarchical regression analysis."'}
      </p>

      <TipBox type="tip" title={isKo ? 'APA 양식 연구방법 작성 요령' : 'Tips for Writing APA-Style Methods'}>
        <p>
          {isKo
            ? '연구방법 섹션은 과거 시제로 작성합니다(완료된 연구의 경우). 연구계획서에서는 미래 시제를 사용합니다. 불필요한 수식어를 피하고, 간결하면서도 충분히 상세하게 기술하세요. "적절한 통계 방법을 사용하였다"와 같은 모호한 표현 대신 "SPSS 28.0을 사용하여 위계적 다중회귀분석을 실시하였다"와 같이 구체적으로 작성합니다. 윤리적 절차(IRB 승인 번호, 사전 동의 절차 등)를 반드시 포함하세요.'
            : 'Write the methods section in past tense (for completed research). Use future tense in research proposals. Avoid unnecessary modifiers and write concisely yet sufficiently detailed. Instead of vague expressions like "appropriate statistical methods were used," write specifically: "Hierarchical multiple regression analysis was conducted using SPSS 28.0." Always include ethical procedures (IRB approval number, informed consent procedures, etc.).'}
        </p>
      </TipBox>

      <TipBox type="warning" title={isKo ? '연구방법 섹션의 흔한 오류' : 'Common Errors in the Methods Section'}>
        <p>
          {isKo
            ? '연구방법 섹션에서 자주 발견되는 오류: (1) 표본 크기의 근거를 제시하지 않는 경우 - 반드시 통계적 검정력 분석이나 선행연구 근거를 제시하세요. (2) 측정 도구의 신뢰도를 보고하지 않는 경우 - 원척도와 본 연구의 신뢰도를 모두 제시합니다. (3) 분석 방법과 연구 질문의 불일치 - 각 가설에 대응하는 분석 기법을 명확히 연결하세요. (4) 윤리적 절차의 누락 - IRB 승인과 동의 절차는 필수입니다.'
            : 'Common errors in the methods section: (1) Not providing rationale for sample size - always present statistical power analysis or prior research justification. (2) Not reporting instrument reliability - present reliability for both the original scale and the current study. (3) Mismatch between analysis methods and research questions - clearly link the analytical technique to each hypothesis. (4) Omission of ethical procedures - IRB approval and consent procedures are mandatory.'}
        </p>
      </TipBox>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 7 - References                                             */
/* ------------------------------------------------------------------ */
function ReferencesSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <>
      <div className="guide-content-header">
        <h1>{isKo ? '참고문헌' : 'References'}</h1>
        <p>{isKo ? '연구방법론 학습에 활용된 주요 참고문헌입니다.' : 'Key references used in the study of research methods.'}</p>
      </div>
      <div className="guide-section">
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>
            Creswell, J. W., & Creswell, J. D. (2018). <em>Research Design: Qualitative, Quantitative, and Mixed Methods Approaches</em> (5th ed.). SAGE Publications.
          </li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>
            Creswell, J. W., & Plano Clark, V. L. (2018). <em>Designing and Conducting Mixed Methods Research</em> (3rd ed.). SAGE Publications.
          </li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>
            Tashakkori, A., & Teddlie, C. (Eds.). (2010). <em>SAGE Handbook of Mixed Methods in Social & Behavioral Research</em> (2nd ed.). SAGE Publications.
          </li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>
            Bryman, A. (2016). <em>Social Research Methods</em> (5th ed.). Oxford University Press.
          </li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>
            Shadish, W. R., Cook, T. D., & Campbell, D. T. (2002). <em>Experimental and Quasi-Experimental Designs for Generalized Causal Inference</em>. Houghton Mifflin.
          </li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>
            American Psychological Association. (2020). <em>Publication Manual of the American Psychological Association</em> (7th ed.). American Psychological Association.
          </li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>
            Baron, R. M., & Kenny, D. A. (1986). The moderator-mediator variable distinction in social psychological research. <em>Journal of Personality and Social Psychology</em>, 51(6), 1173-1182.
          </li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>
            Stevens, S. S. (1946). On the theory of scales of measurement. <em>Science</em>, 103(2684), 677-680.
          </li>
        </ul>
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */
export default function Methods(): ReactElement {
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
        title={isKo ? '연구방법 | Survey Master' : 'Research Methods | Survey Master'}
        description={
          isKo
            ? '양적, 질적, 혼합연구방법론을 체계적으로 학습합니다.'
            : 'Learn quantitative, qualitative, and mixed research methods systematically.'
        }
      />
      <div className="guide-page">
        <div className="guide-layout">
          <aside className="guide-sidebar">
            <div className="guide-sidebar-title">{isKo ? '목차' : 'Contents'}</div>
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
          <main className="guide-content">
            {activeSection === 'overview' && <OverviewSection isKo={isKo} />}
            {activeSection === 'quant-qual' && <QuantQualSection isKo={isKo} />}
            {activeSection === 'mixed' && <MixedSection isKo={isKo} />}
            {activeSection === 'design-types' && <DesignTypesSection isKo={isKo} />}
            {activeSection === 'variables' && <VariablesSection isKo={isKo} />}
            {activeSection === 'writing-methods' && <WritingMethodsSection isKo={isKo} />}
            {activeSection === 'references' && <ReferencesSection isKo={isKo} />}

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
