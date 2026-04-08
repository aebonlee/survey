import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import TipBox from '../../components/TipBox';
import type { ReactElement } from 'react';

const SECTIONS = [
  { id: 'overview', icon: 'fa-file-pen', ko: '연구계획서 개요', en: 'Proposal Overview' },
  { id: 'topic-selection', icon: 'fa-lightbulb', ko: '연구 주제 선정', en: 'Topic Selection' },
  { id: 'purpose', icon: 'fa-bullseye', ko: '연구 목적과 필요성', en: 'Purpose & Significance' },
  { id: 'questions', icon: 'fa-question-circle', ko: '연구 질문과 가설', en: 'Questions & Hypotheses' },
  { id: 'background', icon: 'fa-book-open', ko: '이론적 배경 작성', en: 'Theoretical Background' },
  { id: 'practice', icon: 'fa-pen-nib', ko: '연구계획서 작성 실전', en: 'Writing Practice' },
  { id: 'references', icon: 'fa-bookmark', ko: '참고문헌', en: 'References' },
];

/* ------------------------------------------------------------------ */
/*  Section 1 – Proposal Overview                                      */
/* ------------------------------------------------------------------ */
function OverviewSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>{isKo ? '연구계획서 개요' : 'Proposal Overview'}</h2>

      {/* What is a Research Proposal? */}
      <h3>{isKo ? '연구계획서란 무엇인가?' : 'What Is a Research Proposal?'}</h3>
      <p>
        {isKo
          ? '연구계획서(Research Proposal)는 연구자가 수행하고자 하는 연구의 목적, 방법, 절차, 기대 결과 등을 체계적으로 기술한 공식 문서입니다. 이 문서는 연구의 청사진(blueprint) 역할을 하며, 연구의 타당성과 실현 가능성을 사전에 검증받기 위해 작성됩니다. 학위 논문, 연구비 신청, 기관 내 연구 승인 등 다양한 상황에서 연구계획서가 요구됩니다.'
          : 'A research proposal is a formal document that systematically describes the purpose, methods, procedures, and expected outcomes of a study that a researcher intends to conduct. It serves as a blueprint for the research and is written to have the validity and feasibility of the study reviewed in advance. Research proposals are required in various contexts, including thesis and dissertation work, grant applications, and institutional research approvals.'}
      </p>
      <p>
        {isKo
          ? '잘 작성된 연구계획서는 연구자 자신에게도 중요합니다. 연구를 시작하기 전에 전체 과정을 면밀히 계획함으로써, 연구 수행 과정에서 발생할 수 있는 문제를 사전에 예방하고, 시간과 자원을 효율적으로 배분할 수 있습니다. 또한 지도교수, 심사위원, 연구비 지원기관 등의 이해관계자를 설득하는 핵심 도구이기도 합니다.'
          : 'A well-written research proposal is also important for the researcher themselves. By carefully planning the entire process before starting the research, potential problems during the study can be prevented, and time and resources can be allocated efficiently. It also serves as a key tool for persuading stakeholders such as advisors, review committees, and funding agencies.'}
      </p>

      {/* Core Components */}
      <h3>{isKo ? '연구계획서의 핵심 구성 요소' : 'Core Components of a Research Proposal'}</h3>
      <p>
        {isKo
          ? '연구계획서는 학문 분야와 기관에 따라 형식이 다소 다를 수 있지만, 일반적으로 다음과 같은 핵심 요소를 포함합니다.'
          : 'While the format of a research proposal may vary by discipline and institution, it generally includes the following core components.'}
      </p>
      <ul>
        <li><strong>{isKo ? '연구 제목 (Title)' : 'Title'}</strong>: {isKo ? '연구 내용을 명확하고 간결하게 반영하는 제목을 설정합니다.' : 'A title that clearly and concisely reflects the content of the research.'}</li>
        <li><strong>{isKo ? '서론 / 연구 배경 (Introduction)' : 'Introduction / Background'}</strong>: {isKo ? '연구의 필요성과 배경, 연구 문제를 소개합니다.' : 'Introduces the necessity, background, and research problem.'}</li>
        <li><strong>{isKo ? '문헌 검토 (Literature Review)' : 'Literature Review'}</strong>: {isKo ? '선행연구를 분석하여 이론적 토대를 제시합니다.' : 'Analyzes prior research to present the theoretical foundation.'}</li>
        <li><strong>{isKo ? '연구 질문 및 가설 (Research Questions & Hypotheses)' : 'Research Questions & Hypotheses'}</strong>: {isKo ? '구체적인 연구 질문과 검증할 가설을 제시합니다.' : 'Presents specific research questions and hypotheses to be tested.'}</li>
        <li><strong>{isKo ? '연구 방법 (Methodology)' : 'Methodology'}</strong>: {isKo ? '연구 설계, 표본, 자료 수집 및 분석 방법을 기술합니다.' : 'Describes the research design, sample, data collection, and analysis methods.'}</li>
        <li><strong>{isKo ? '기대 효과 및 한계 (Expected Outcomes & Limitations)' : 'Expected Outcomes & Limitations'}</strong>: {isKo ? '연구의 학술적·실무적 기여와 예상 한계를 명시합니다.' : 'Specifies the academic and practical contributions and anticipated limitations.'}</li>
        <li><strong>{isKo ? '연구 일정 (Timeline)' : 'Timeline'}</strong>: {isKo ? '연구 수행의 단계별 일정을 제시합니다.' : 'Presents a step-by-step schedule for conducting the research.'}</li>
        <li><strong>{isKo ? '참고문헌 (References)' : 'References'}</strong>: {isKo ? '인용된 모든 문헌의 목록을 작성합니다.' : 'Lists all cited literature.'}</li>
      </ul>

      <TipBox type="important">
        <p>
          {isKo
            ? '연구계획서는 "앞으로 할 연구"를 기술하는 문서이므로, 미래 시제를 사용하여 작성합니다. 단, 선행연구 검토 부분은 과거 시제를 사용합니다. 이러한 시제의 일관성은 계획서의 전문성을 높이는 중요한 요소입니다.'
            : 'Since a research proposal describes research "to be conducted," it is written in the future tense. However, the literature review section uses the past tense. Consistency in tense usage is an important factor that enhances the professionalism of the proposal.'}
        </p>
      </TipBox>

      {/* Why Proposals Matter */}
      <h3>{isKo ? '연구계획서가 중요한 이유' : 'Why Research Proposals Matter'}</h3>
      <p>
        {isKo
          ? '연구계획서는 단순한 형식적 절차가 아니라, 연구의 질을 결정짓는 핵심 단계입니다. 체계적인 연구계획서 작성은 연구의 방향성을 명확히 하고, 잠재적 문제점을 사전에 파악하며, 연구의 윤리적 측면을 고려할 기회를 제공합니다.'
          : 'A research proposal is not merely a formal procedure but a critical step that determines the quality of research. Systematic proposal writing clarifies the direction of research, identifies potential problems in advance, and provides an opportunity to consider the ethical aspects of the study.'}
      </p>
      <ul>
        <li>{isKo ? '연구의 논리적 일관성을 확보할 수 있습니다.' : 'It ensures logical consistency in the research.'}</li>
        <li>{isKo ? '지도교수 및 심사위원과의 효과적인 소통 도구가 됩니다.' : 'It serves as an effective communication tool with advisors and reviewers.'}</li>
        <li>{isKo ? '연구비 확보의 필수 조건입니다.' : 'It is a prerequisite for securing research funding.'}</li>
        <li>{isKo ? 'IRB(연구윤리위원회) 승인을 위한 기본 서류입니다.' : 'It is a basic document required for IRB (Institutional Review Board) approval.'}</li>
        <li>{isKo ? '연구 과정에서의 시행착오를 최소화합니다.' : 'It minimizes trial and error during the research process.'}</li>
      </ul>

      {/* Types of Proposals */}
      <h3>{isKo ? '연구계획서의 유형' : 'Types of Research Proposals'}</h3>
      <p>
        {isKo
          ? '연구계획서는 그 목적과 맥락에 따라 여러 유형으로 분류할 수 있습니다. 각 유형은 요구되는 내용의 깊이와 형식이 다르므로, 자신의 상황에 맞는 유형을 파악하는 것이 중요합니다.'
          : 'Research proposals can be classified into several types depending on their purpose and context. Since each type differs in the required depth and format of content, it is important to identify the type that fits your situation.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '학위논문 계획서 (Thesis/Dissertation Proposal)' : 'Thesis/Dissertation Proposal'}</strong>:
          {isKo ? ' 석사 또는 박사 학위 취득을 위해 작성하는 계획서로, 가장 상세한 형태입니다. 심사위원회의 승인을 받아야 하며, 연구의 전 과정을 포괄적으로 기술해야 합니다.' : ' The most detailed form, written for obtaining a master\'s or doctoral degree. It must be approved by the review committee and comprehensively describe the entire research process.'}
        </li>
        <li>
          <strong>{isKo ? '연구비 신청서 (Grant Proposal)' : 'Grant Proposal'}</strong>:
          {isKo ? ' 한국연구재단(NRF), NSF 등 연구비 지원기관에 제출하는 계획서입니다. 연구의 학술적 기여뿐 아니라 예산 계획, 인력 구성 등을 포함해야 합니다.' : ' A proposal submitted to funding agencies such as NRF (Korea) or NSF (US). It must include not only the academic contributions of the research but also budget plans and personnel composition.'}
        </li>
        <li>
          <strong>{isKo ? '학술 대회 발표 제안서 (Conference Proposal)' : 'Conference Proposal'}</strong>:
          {isKo ? ' 학술 대회 발표를 위해 제출하는 간략한 형태의 계획서입니다. 일반적으로 초록(abstract) 형태로 300~500 단어 정도로 작성됩니다.' : ' A brief proposal submitted for conference presentations. It is generally written in abstract form, approximately 300-500 words.'}
        </li>
        <li>
          <strong>{isKo ? '기관 내부 연구 계획서 (Internal Research Proposal)' : 'Internal Research Proposal'}</strong>:
          {isKo ? ' 기업이나 공공기관 내부에서 연구 프로젝트의 승인을 받기 위해 작성하는 계획서입니다. 실용적 가치와 조직 목표와의 연관성을 강조합니다.' : ' A proposal written to obtain approval for a research project within a company or public institution. It emphasizes practical value and relevance to organizational goals.'}
        </li>
      </ul>

      <TipBox type="tip">
        <p>
          {isKo
            ? '연구계획서를 작성하기 전에 반드시 제출 기관의 양식과 가이드라인을 먼저 확인하세요. 기관마다 요구하는 형식, 분량, 포함 항목이 다르며, 이를 준수하지 않으면 심사 대상에서 제외될 수 있습니다.'
            : 'Before writing your research proposal, always check the submission guidelines and templates of the target institution first. Each institution has different requirements for format, length, and required sections, and non-compliance may result in exclusion from review.'}
        </p>
      </TipBox>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 2 – Topic Selection                                        */
/* ------------------------------------------------------------------ */
function TopicSelectionSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>{isKo ? '연구 주제 선정' : 'Topic Selection'}</h2>

      {/* How to Choose a Topic */}
      <h3>{isKo ? '연구 주제를 어떻게 선정하는가?' : 'How to Choose a Research Topic'}</h3>
      <p>
        {isKo
          ? '연구 주제 선정은 연구의 첫 번째이자 가장 중요한 단계입니다. 좋은 연구 주제는 연구자의 학문적 관심사와 현실적 필요성이 교차하는 지점에서 발견됩니다. 주제 선정 과정은 광범위한 관심 영역에서 시작하여 점차 구체적이고 연구 가능한 형태로 좁혀나가는 깔때기(funnel) 형태를 따릅니다.'
          : 'Topic selection is the first and most important step in research. A good research topic is found at the intersection of the researcher\'s academic interests and practical needs. The topic selection process follows a funnel shape, starting from a broad area of interest and gradually narrowing it down to a specific and researchable form.'}
      </p>
      <p>
        {isKo
          ? '주제를 발견하는 주요 원천으로는 선행연구의 후속 연구 제안, 일상적 관찰에서의 의문, 사회적 이슈, 실무 현장의 문제, 기존 이론의 확장 또는 검증 필요성 등이 있습니다. 특히 선행연구를 읽으면서 "이 연구에서 다루지 않은 부분은 무엇인가?"라는 질문을 지속적으로 던지는 것이 효과적입니다.'
          : 'Major sources for discovering topics include future research suggestions from prior studies, questions from everyday observations, social issues, problems in professional practice, and the need to extend or verify existing theories. It is particularly effective to continuously ask "What has this study not addressed?" while reading prior research.'}
      </p>

      {/* Selection Criteria */}
      <h3>{isKo ? '주제 선정 기준' : 'Topic Selection Criteria'}</h3>
      <p>
        {isKo
          ? '연구 주제를 평가할 때 다음과 같은 기준을 활용하면 보다 체계적으로 적절한 주제를 선별할 수 있습니다.'
          : 'When evaluating a research topic, using the following criteria can help you systematically select an appropriate topic.'}
      </p>
      <ul>
        <li><strong>{isKo ? '학술적 기여도 (Academic Contribution)' : 'Academic Contribution'}</strong>: {isKo ? '기존 문헌에 새로운 지식이나 관점을 추가할 수 있는가?' : 'Can it add new knowledge or perspectives to existing literature?'}</li>
        <li><strong>{isKo ? '실용적 가치 (Practical Value)' : 'Practical Value'}</strong>: {isKo ? '연구 결과가 현실 문제 해결이나 정책 수립에 기여할 수 있는가?' : 'Can the findings contribute to solving real-world problems or informing policy?'}</li>
        <li><strong>{isKo ? '연구자의 관심과 역량 (Interest & Competence)' : 'Interest & Competence'}</strong>: {isKo ? '연구자가 해당 주제에 충분한 관심과 전문 지식을 가지고 있는가?' : 'Does the researcher have sufficient interest and expertise in the topic?'}</li>
        <li><strong>{isKo ? '자료 접근 가능성 (Data Accessibility)' : 'Data Accessibility'}</strong>: {isKo ? '필요한 자료를 실제로 수집할 수 있는가?' : 'Can the necessary data actually be collected?'}</li>
        <li><strong>{isKo ? '시의성 (Timeliness)' : 'Timeliness'}</strong>: {isKo ? '현재 학계나 사회에서 관심을 받고 있는 주제인가?' : 'Is the topic currently receiving attention in academia or society?'}</li>
        <li><strong>{isKo ? '윤리적 적절성 (Ethical Appropriateness)' : 'Ethical Appropriateness'}</strong>: {isKo ? '연구 수행 과정에서 윤리적 문제가 발생하지 않는가?' : 'Will no ethical issues arise during the research process?'}</li>
      </ul>

      <TipBox type="tip">
        <p>
          {isKo
            ? '관심 주제가 떠오르면 즉시 메모하는 습관을 들이세요. "연구 아이디어 노트"를 만들어 떠오르는 생각, 읽은 논문에서의 영감, 일상에서의 의문점 등을 기록하면, 주제 선정 단계에서 풍부한 아이디어 풀(pool)을 활용할 수 있습니다.'
            : 'Make it a habit to jot down ideas immediately when a topic of interest comes to mind. By creating a "research idea notebook" and recording thoughts, inspirations from papers, and everyday questions, you can draw from a rich pool of ideas during the topic selection stage.'}
        </p>
      </TipBox>

      {/* Narrowing Down */}
      <h3>{isKo ? '주제 구체화 (좁히기)' : 'Narrowing Down the Topic'}</h3>
      <p>
        {isKo
          ? '광범위한 관심 영역을 연구 가능한 구체적 주제로 좁히는 과정은 연구 주제 선정에서 가장 어려운 단계입니다. 이 과정에서는 "누가(who)", "무엇을(what)", "어디서(where)", "언제(when)", "어떻게(how)"라는 질문을 활용하여 점차 범위를 줄여나갑니다.'
          : 'Narrowing a broad area of interest into a specific, researchable topic is the most challenging stage of topic selection. In this process, use the questions "who," "what," "where," "when," and "how" to gradually reduce the scope.'}
      </p>
      <p>
        {isKo
          ? '예를 들어, "리더십"이라는 광범위한 주제에서 시작하면: 리더십 -> 변혁적 리더십 -> 변혁적 리더십이 조직 성과에 미치는 영향 -> 중소기업에서 변혁적 리더십이 직원 혁신 행동에 미치는 영향: 심리적 안전감의 매개효과. 이처럼 단계적으로 구체화하면 명확한 연구 질문을 도출할 수 있습니다.'
          : 'For example, starting from the broad topic of "leadership": Leadership -> Transformational Leadership -> The Effect of Transformational Leadership on Organizational Performance -> The Effect of Transformational Leadership on Employee Innovative Behavior in SMEs: The Mediating Role of Psychological Safety. By specifying step by step, you can derive clear research questions.'}
      </p>
      <ol>
        <li>{isKo ? '광범위한 관심 영역 설정 (예: 조직 행동, 교육 정책, 소비자 행동)' : 'Set a broad area of interest (e.g., organizational behavior, education policy, consumer behavior)'}</li>
        <li>{isKo ? '하위 주제 탐색 및 선행연구 검토' : 'Explore sub-topics and review prior research'}</li>
        <li>{isKo ? '연구 대상과 맥락 특정 (예: 특정 집단, 지역, 시기)' : 'Specify the research subjects and context (e.g., specific group, region, period)'}</li>
        <li>{isKo ? '핵심 변수 및 관계 설정' : 'Define key variables and their relationships'}</li>
        <li>{isKo ? '최종 연구 제목 확정' : 'Finalize the research title'}</li>
      </ol>

      {/* Feasibility Assessment */}
      <h3>{isKo ? '실현 가능성 평가' : 'Feasibility Assessment'}</h3>
      <p>
        {isKo
          ? '아무리 학술적으로 훌륭한 주제라도 실제로 수행할 수 없다면 의미가 없습니다. 연구 주제를 확정하기 전에 반드시 실현 가능성을 평가해야 합니다. 이는 연구를 계획하는 단계에서 현실적 제약 조건을 사전에 파악하고 대비하기 위한 필수적 과정입니다.'
          : 'No matter how academically excellent a topic may be, it is meaningless if it cannot actually be carried out. Before finalizing a research topic, you must assess its feasibility. This is an essential process for identifying and preparing for practical constraints at the planning stage.'}
      </p>
      <ul>
        <li><strong>{isKo ? '시간 (Time)' : 'Time'}</strong>: {isKo ? '주어진 기간 내에 연구를 완료할 수 있는가? 석사 논문은 보통 6개월~1년, 박사 논문은 2~3년이 소요됩니다.' : 'Can the research be completed within the given timeframe? A master\'s thesis typically takes 6 months to 1 year, and a doctoral dissertation 2-3 years.'}</li>
        <li><strong>{isKo ? '비용 (Cost)' : 'Cost'}</strong>: {isKo ? '설문 인쇄, 조사 도구 구입, 연구 참여자 보상, 통계 소프트웨어 라이선스 등에 필요한 예산을 확보할 수 있는가?' : 'Can you secure the budget for survey printing, instrument purchases, participant compensation, and statistical software licenses?'}</li>
        <li><strong>{isKo ? '연구 대상 접근성 (Access to Participants)' : 'Access to Participants'}</strong>: {isKo ? '충분한 수의 연구 참여자를 모집할 수 있는가? 특수한 집단의 경우 접근이 어려울 수 있습니다.' : 'Can you recruit a sufficient number of research participants? Access may be difficult for specialized groups.'}</li>
        <li><strong>{isKo ? '기술적 역량 (Technical Competence)' : 'Technical Competence'}</strong>: {isKo ? '필요한 분석 방법(예: 구조방정식, 질적 분석)을 수행할 수 있는 역량이 있는가?' : 'Do you have the capability to perform the required analysis methods (e.g., structural equation modeling, qualitative analysis)?'}</li>
      </ul>

      <TipBox type="warning">
        <p>
          {isKo
            ? '첫 번째 연구(석사 논문 등)에서는 너무 야심 찬 주제를 선택하지 마세요. 현실적으로 수행 가능한 범위 내에서 연구의 질을 높이는 것이 더 중요합니다. 좁지만 깊이 있는 연구가 넓지만 피상적인 연구보다 학술적 가치가 높습니다.'
            : 'For your first research project (such as a master\'s thesis), do not choose an overly ambitious topic. It is more important to improve research quality within a realistically feasible scope. A narrow but in-depth study has greater academic value than a broad but superficial one.'}
        </p>
      </TipBox>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 3 – Purpose & Significance                                 */
/* ------------------------------------------------------------------ */
function PurposeSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>{isKo ? '연구 목적과 필요성' : 'Purpose & Significance'}</h2>

      {/* Writing Research Purpose */}
      <h3>{isKo ? '연구 목적 작성하기' : 'Writing the Research Purpose'}</h3>
      <p>
        {isKo
          ? '연구 목적(Research Purpose)은 연구를 통해 달성하고자 하는 핵심 목표를 명확하게 기술한 것입니다. 연구 목적은 연구 전체의 방향을 설정하며, 모든 후속 결정(연구 설계, 자료 수집, 분석 방법 등)의 기준이 됩니다. 연구 목적은 보통 한두 문장으로 간결하게 작성하되, 연구의 핵심 의도를 정확하게 전달해야 합니다.'
          : 'The research purpose clearly states the core goals to be achieved through the study. It sets the direction of the entire research and serves as the basis for all subsequent decisions (research design, data collection, analysis methods, etc.). The research purpose is usually written concisely in one or two sentences but must accurately convey the core intent of the study.'}
      </p>
      <p>
        {isKo
          ? '연구 목적을 작성할 때는 "본 연구의 목적은 ~을 밝히는 것이다" 또는 "본 연구는 ~을 목적으로 한다"와 같은 형식을 사용합니다. 영문의 경우 "The purpose of this study is to examine..." 또는 "This study aims to investigate..." 등의 표현이 일반적입니다.'
          : 'When writing the research purpose, use formulations such as "The purpose of this study is to examine..." or "This study aims to investigate..." Choose active and precise verbs that accurately describe your research intent, such as "examine," "explore," "compare," "determine," or "evaluate."'}
      </p>
      <ul>
        <li>{isKo ? '"본 연구의 목적은 소셜 미디어 사용이 청소년의 자아 존중감에 미치는 영향을 규명하는 것이다."' : '"The purpose of this study is to examine the impact of social media usage on adolescents\' self-esteem."'}</li>
        <li>{isKo ? '"본 연구는 변혁적 리더십과 조직 시민행동 간의 관계에서 심리적 자본의 매개효과를 분석하고자 한다."' : '"This study aims to analyze the mediating effect of psychological capital on the relationship between transformational leadership and organizational citizenship behavior."'}</li>
      </ul>

      {/* Significance and Justification */}
      <h3>{isKo ? '연구의 필요성과 정당성' : 'Research Significance and Justification'}</h3>
      <p>
        {isKo
          ? '연구의 필요성(Research Significance)은 "왜 이 연구가 수행되어야 하는가?"에 대한 설득력 있는 답변입니다. 이 부분은 연구계획서에서 심사자를 설득하는 가장 중요한 부분 중 하나이며, 학술적 필요성과 실용적 필요성을 모두 다루어야 합니다.'
          : 'Research significance provides a convincing answer to the question "Why should this research be conducted?" This is one of the most important parts of a research proposal for persuading reviewers, and it should address both academic and practical significance.'}
      </p>
      <p>
        {isKo
          ? '학술적 필요성은 기존 연구의 한계나 공백(gap)을 지적하고, 본 연구가 이를 어떻게 보완할 수 있는지를 설명합니다. 실용적 필요성은 연구 결과가 현실 세계의 정책, 실무, 교육 등에 어떤 시사점을 제공할 수 있는지를 기술합니다.'
          : 'Academic significance points out the limitations or gaps in existing research and explains how the current study can address them. Practical significance describes how the research findings can provide implications for real-world policies, practices, education, etc.'}
      </p>

      <TipBox type="tip">
        <p>
          {isKo
            ? '연구의 필요성을 작성할 때는 "~에 대한 연구가 부족하다"라는 단순한 주장에 그치지 말고, 구체적인 근거를 제시하세요. 선행연구의 인용, 통계 자료, 사회적 현상 등을 활용하면 설득력이 높아집니다.'
            : 'When writing research significance, do not simply state "research on X is lacking." Provide specific evidence. Citing prior studies, presenting statistical data, and referencing social phenomena will enhance your persuasiveness.'}
        </p>
      </TipBox>

      {/* Academic vs Practical Significance */}
      <h3>{isKo ? '학술적 기여와 실무적 기여' : 'Academic and Practical Contributions'}</h3>
      <p>
        {isKo
          ? '학술적 기여(Academic Contribution)는 연구가 해당 학문 분야의 이론 발전에 어떻게 기여하는지를 설명합니다. 새로운 이론의 제안, 기존 이론의 확장, 연구 방법론의 혁신, 새로운 변수 관계의 발견 등이 이에 해당합니다.'
          : 'Academic contribution explains how the research contributes to theoretical development in the field. This includes proposing new theories, extending existing theories, innovating research methodologies, and discovering new variable relationships.'}
      </p>
      <p>
        {isKo
          ? '실무적 기여(Practical Contribution)는 연구 결과가 현장에서 어떻게 활용될 수 있는지를 기술합니다. 정책 제안, 교육 프로그램 개발, 조직 관리 전략, 임상 실무 개선 등이 실무적 기여의 예입니다. 좋은 연구는 학술적 기여와 실무적 기여를 모두 갖추고 있습니다.'
          : 'Practical contribution describes how research findings can be applied in practice. Policy recommendations, educational program development, organizational management strategies, and clinical practice improvement are examples. Good research possesses both academic and practical contributions.'}
      </p>
      <ul>
        <li><strong>{isKo ? '학술적 기여의 예' : 'Examples of Academic Contributions'}</strong>:
          <ul>
            <li>{isKo ? '기존 모형에 새로운 매개/조절 변수를 추가하여 설명력을 향상' : 'Adding new mediating/moderating variables to existing models to improve explanatory power'}</li>
            <li>{isKo ? '국내 맥락에서 검증되지 않은 서구 이론의 적용 가능성 탐색' : 'Exploring the applicability of untested Western theories in a domestic context'}</li>
            <li>{isKo ? '상충하는 선행연구 결과에 대한 통합적 설명 제공' : 'Providing an integrative explanation for conflicting prior research findings'}</li>
          </ul>
        </li>
        <li><strong>{isKo ? '실무적 기여의 예' : 'Examples of Practical Contributions'}</strong>:
          <ul>
            <li>{isKo ? '효과적인 리더십 훈련 프로그램 개발을 위한 근거 제공' : 'Providing evidence for developing effective leadership training programs'}</li>
            <li>{isKo ? '교육 정책 수립 시 고려해야 할 요인 제시' : 'Presenting factors to consider when establishing educational policies'}</li>
            <li>{isKo ? '소비자 행동 예측을 위한 실무 지침 도출' : 'Deriving practical guidelines for predicting consumer behavior'}</li>
          </ul>
        </li>
      </ul>

      {/* Writing the Justification Section */}
      <h3>{isKo ? '연구 필요성 작성 전략' : 'Strategies for Writing Research Justification'}</h3>
      <p>
        {isKo
          ? '설득력 있는 연구 필요성을 작성하기 위한 효과적인 전략은 다음과 같습니다. 이 전략들은 심사자가 연구의 가치를 명확하게 인식할 수 있도록 도와줍니다.'
          : 'The following are effective strategies for writing persuasive research justification. These strategies help reviewers clearly recognize the value of the research.'}
      </p>
      <ol>
        <li><strong>{isKo ? '사회적 맥락에서 시작하기' : 'Start with the Social Context'}</strong>: {isKo ? '현재 사회에서 해당 주제가 왜 중요한지를 통계, 뉴스, 정책 동향 등으로 설명합니다.' : 'Explain why the topic is important in current society using statistics, news, and policy trends.'}</li>
        <li><strong>{isKo ? '선행연구의 공백 지적하기' : 'Identify Gaps in Prior Research'}</strong>: {isKo ? '체계적 문헌 검토를 통해 발견한 연구 공백을 구체적으로 제시합니다.' : 'Specifically present research gaps identified through systematic literature review.'}</li>
        <li><strong>{isKo ? '본 연구의 차별점 강조하기' : 'Emphasize the Distinctiveness of Your Study'}</strong>: {isKo ? '선행연구와 비교하여 본 연구가 어떤 점에서 새롭고 독창적인지 설명합니다.' : 'Explain what is new and original about your study compared to prior research.'}</li>
        <li><strong>{isKo ? '기대 효과 명시하기' : 'State Expected Outcomes'}</strong>: {isKo ? '연구 결과가 학계와 실무에 미칠 구체적인 영향을 서술합니다.' : 'Describe the specific impact that research findings will have on academia and practice.'}</li>
      </ol>

      <TipBox type="important">
        <p>
          {isKo
            ? '연구 필요성은 연구 목적과 논리적으로 연결되어야 합니다. "이러한 공백이 존재하므로(필요성) → 본 연구는 이를 해결하고자 한다(목적)"의 흐름이 자연스럽게 이어져야 합니다. 필요성과 목적이 분리된 느낌을 주면 계획서의 논리적 일관성이 약화됩니다.'
            : 'Research significance must be logically connected to the research purpose. The flow of "These gaps exist (significance) -> This study aims to address them (purpose)" should follow naturally. If the significance and purpose feel disconnected, the logical coherence of the proposal is weakened.'}
        </p>
      </TipBox>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 4 – Questions & Hypotheses                                 */
/* ------------------------------------------------------------------ */
function QuestionsSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>{isKo ? '연구 질문과 가설' : 'Questions & Hypotheses'}</h2>

      {/* Formulating Research Questions */}
      <h3>{isKo ? '연구 질문 수립하기' : 'Formulating Research Questions'}</h3>
      <p>
        {isKo
          ? '연구 질문(Research Question)은 연구를 통해 답하고자 하는 핵심적인 물음입니다. 좋은 연구 질문은 연구의 범위를 명확히 하고, 방법론 선택의 기준이 되며, 결과 해석의 틀을 제공합니다. 연구 질문은 연구 목적을 질문 형태로 변환한 것으로, 하나의 연구에서 보통 1~3개의 연구 질문을 설정합니다.'
          : 'A research question is the core inquiry that the study seeks to answer. A good research question clarifies the scope of research, provides a basis for methodology selection, and offers a framework for interpreting results. Research questions are the research purpose converted into question form, and a study typically sets 1-3 research questions.'}
      </p>
      <p>
        {isKo
          ? '연구 질문은 크게 기술적(descriptive) 질문, 관계적(relational) 질문, 비교적(comparative) 질문으로 분류할 수 있습니다. 기술적 질문은 "무엇이 있는가?"를 묻고, 관계적 질문은 "어떤 관계가 있는가?"를 묻으며, 비교적 질문은 "차이가 있는가?"를 묻습니다.'
          : 'Research questions can be broadly classified into descriptive questions ("What exists?"), relational questions ("What relationship exists?"), and comparative questions ("Is there a difference?"). Each type requires different research designs and analytical approaches.'}
      </p>
      <ul>
        <li><strong>{isKo ? '기술적 질문' : 'Descriptive Question'}</strong>: {isKo ? '"한국 대학생의 디지털 리터러시 수준은 어떠한가?"' : '"What is the level of digital literacy among Korean college students?"'}</li>
        <li><strong>{isKo ? '관계적 질문' : 'Relational Question'}</strong>: {isKo ? '"업무 자율성과 직무 만족도 사이에는 어떤 관계가 있는가?"' : '"What is the relationship between work autonomy and job satisfaction?"'}</li>
        <li><strong>{isKo ? '비교적 질문' : 'Comparative Question'}</strong>: {isKo ? '"온라인 교육과 대면 교육 간에 학습 효과의 차이가 있는가?"' : '"Is there a difference in learning outcomes between online and face-to-face education?"'}</li>
      </ul>

      <TipBox type="tip">
        <p>
          {isKo
            ? '연구 질문을 수립할 때 SMART 기준을 적용해 보세요: Specific(구체적), Measurable(측정 가능), Achievable(달성 가능), Relevant(관련성), Time-bound(시간 제한). 이 기준을 충족하는 연구 질문은 실제 연구 수행에서도 효과적입니다.'
            : 'Try applying SMART criteria when formulating research questions: Specific, Measurable, Achievable, Relevant, and Time-bound. Research questions that meet these criteria are also effective in actual research implementation.'}
        </p>
      </TipBox>

      {/* Types of Hypotheses */}
      <h3>{isKo ? '가설의 유형과 설정' : 'Types and Formulation of Hypotheses'}</h3>
      <p>
        {isKo
          ? '가설(Hypothesis)은 연구 질문에 대한 잠정적인 답변으로, 두 개 이상의 변수 사이의 관계에 대한 예측적 진술입니다. 가설은 이론적 근거와 선행연구에 기반하여 설정되어야 하며, 경험적으로 검증 가능해야 합니다. 양적 연구에서는 가설 검증이 핵심적인 연구 활동이 됩니다.'
          : 'A hypothesis is a tentative answer to a research question - a predictive statement about the relationship between two or more variables. It must be based on theoretical rationale and prior research and must be empirically testable. In quantitative research, hypothesis testing is a central research activity.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '영가설 (Null Hypothesis, H₀)' : 'Null Hypothesis (H₀)'}</strong>:
          {isKo ? ' 변수 간에 유의미한 관계나 차이가 없다는 진술입니다. 통계적 검증의 출발점이 됩니다.' : ' A statement that there is no significant relationship or difference between variables. It serves as the starting point for statistical testing.'}
        </li>
        <li>
          <strong>{isKo ? '연구가설 / 대립가설 (Alternative Hypothesis, H₁)' : 'Alternative Hypothesis (H₁)'}</strong>:
          {isKo ? ' 변수 간에 유의미한 관계나 차이가 있다는 진술입니다. 연구자가 실제로 검증하고자 하는 가설입니다.' : ' A statement that there is a significant relationship or difference between variables. This is the hypothesis the researcher actually seeks to test.'}
        </li>
        <li>
          <strong>{isKo ? '방향적 가설 (Directional Hypothesis)' : 'Directional Hypothesis'}</strong>:
          {isKo ? ' 관계의 방향(정적 또는 부적)을 명시합니다. 예: "직무 스트레스가 높을수록 이직 의도가 높아질 것이다."' : ' Specifies the direction of the relationship (positive or negative). Example: "Higher job stress will lead to higher turnover intention."'}
        </li>
        <li>
          <strong>{isKo ? '비방향적 가설 (Non-directional Hypothesis)' : 'Non-directional Hypothesis'}</strong>:
          {isKo ? ' 관계의 존재만 예측하고 방향은 명시하지 않습니다. 선행연구의 결과가 상충할 때 사용합니다.' : ' Predicts only the existence of a relationship without specifying direction. Used when prior research findings conflict.'}
        </li>
      </ul>

      {/* Operationalization */}
      <h3>{isKo ? '변수의 조작적 정의' : 'Operationalization of Variables'}</h3>
      <p>
        {isKo
          ? '조작적 정의(Operational Definition)는 추상적인 개념을 측정 가능한 형태로 변환하는 과정입니다. 연구에서 사용하는 개념은 종종 추상적이므로, 이를 실제로 관찰하고 측정할 수 있는 구체적인 지표로 정의해야 합니다. 조작적 정의가 명확하지 않으면 연구의 타당성과 재현 가능성이 위협받습니다.'
          : 'Operational definition is the process of converting abstract concepts into measurable forms. Since concepts used in research are often abstract, they must be defined as specific indicators that can actually be observed and measured. Without clear operational definitions, the validity and reproducibility of research are threatened.'}
      </p>
      <p>
        {isKo
          ? '예를 들어, "직무 만족도"라는 추상적 개념을 조작적으로 정의하면: "본 연구에서 직무 만족도란 Smith et al.(1969)이 개발한 JDI(Job Descriptive Index)를 사용하여 측정한 직무 자체, 급여, 승진, 동료, 상사에 대한 만족 수준을 의미한다."와 같이 측정 도구를 명시합니다.'
          : 'For example, operationally defining the abstract concept of "job satisfaction": "In this study, job satisfaction refers to the level of satisfaction with the job itself, pay, promotion, coworkers, and supervisor, as measured using the Job Descriptive Index (JDI) developed by Smith et al. (1969)." The measurement instrument is explicitly specified.'}
      </p>

      <TipBox type="important">
        <p>
          {isKo
            ? '조작적 정의를 내릴 때는 반드시 선행연구에서 검증된 측정 도구를 기반으로 해야 합니다. 연구자가 임의로 정의를 내리면 측정의 타당성이 확보되지 않으며, 연구 결과의 신뢰성도 의심받게 됩니다.'
            : 'Operational definitions must be based on measurement instruments validated in prior research. If a researcher defines them arbitrarily, measurement validity is not ensured, and the reliability of research results will be questioned.'}
        </p>
      </TipBox>

      {/* Research Model */}
      <h3>{isKo ? '연구 모형 구성' : 'Constructing the Research Model'}</h3>
      <p>
        {isKo
          ? '연구 모형(Research Model)은 연구에서 다루는 변수들 간의 관계를 시각적으로 표현한 것입니다. 연구 모형을 통해 독립변수, 종속변수, 매개변수, 조절변수 간의 관계를 한눈에 파악할 수 있으며, 연구의 전체적인 구조를 명확하게 전달할 수 있습니다.'
          : 'A research model is a visual representation of the relationships between variables in a study. Through the research model, the relationships between independent, dependent, mediating, and moderating variables can be understood at a glance, and the overall structure of the research can be clearly communicated.'}
      </p>
      <ul>
        <li><strong>{isKo ? '독립변수 (Independent Variable)' : 'Independent Variable'}</strong>: {isKo ? '다른 변수에 영향을 미치는 원인 변수 (예: 리더십 스타일)' : 'The causal variable that affects other variables (e.g., leadership style)'}</li>
        <li><strong>{isKo ? '종속변수 (Dependent Variable)' : 'Dependent Variable'}</strong>: {isKo ? '영향을 받는 결과 변수 (예: 직무 성과)' : 'The outcome variable that is affected (e.g., job performance)'}</li>
        <li><strong>{isKo ? '매개변수 (Mediating Variable)' : 'Mediating Variable'}</strong>: {isKo ? '독립변수와 종속변수 사이의 과정을 설명하는 변수 (예: 직무 동기)' : 'A variable that explains the process between independent and dependent variables (e.g., work motivation)'}</li>
        <li><strong>{isKo ? '조절변수 (Moderating Variable)' : 'Moderating Variable'}</strong>: {isKo ? '독립변수와 종속변수의 관계 강도를 변화시키는 변수 (예: 근속 연수)' : 'A variable that changes the strength of the relationship between independent and dependent variables (e.g., tenure)'}</li>
      </ul>

      <TipBox type="tip">
        <p>
          {isKo
            ? '연구 모형은 가능한 한 간결하게 유지하세요. 너무 많은 변수를 포함하면 모형의 복잡성이 증가하고, 각 관계를 통계적으로 검증하기 위해 더 큰 표본이 필요합니다. 석사 논문에서는 3~5개의 주요 변수로 시작하는 것을 권장합니다.'
            : 'Keep your research model as concise as possible. Including too many variables increases model complexity and requires larger samples to statistically test each relationship. For a master\'s thesis, starting with 3-5 key variables is recommended.'}
        </p>
      </TipBox>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 5 – Theoretical Background                                 */
/* ------------------------------------------------------------------ */
function BackgroundSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>{isKo ? '이론적 배경 작성' : 'Theoretical Background'}</h2>

      {/* Role of Theoretical Framework */}
      <h3>{isKo ? '이론적 배경의 역할' : 'The Role of the Theoretical Framework'}</h3>
      <p>
        {isKo
          ? '이론적 배경(Theoretical Background)은 연구계획서에서 연구의 학문적 토대를 제공하는 핵심 장(chapter)입니다. 이 부분은 연구 주제와 관련된 기존 이론, 선행연구, 핵심 개념을 체계적으로 정리하여 연구의 논리적 근거를 마련합니다. 이론적 배경은 연구자가 해당 분야에 대한 충분한 이해를 갖추고 있음을 보여주는 동시에, 연구 질문과 가설의 이론적 정당성을 제공합니다.'
          : 'The theoretical background is a key chapter in a research proposal that provides the academic foundation for the study. It systematically organizes existing theories, prior research, and core concepts related to the research topic to establish the logical basis for the research. It demonstrates that the researcher has sufficient understanding of the field while providing theoretical justification for the research questions and hypotheses.'}
      </p>
      <p>
        {isKo
          ? '이론적 배경은 단순한 선행연구 나열이 아니라, 비판적 분석과 종합을 통해 연구의 필요성을 논리적으로 도출하는 과정입니다. "어떤 연구가 있었다"에서 "그래서 이 연구가 필요하다"로 이어지는 논리적 흐름이 핵심입니다.'
          : 'The theoretical background is not merely a listing of prior studies, but a process of logically deriving the need for research through critical analysis and synthesis. The key is the logical flow from "what research has been done" to "therefore this research is needed."'}
      </p>

      {/* Literature Search and Selection */}
      <h3>{isKo ? '문헌 검색과 선별' : 'Literature Search and Selection'}</h3>
      <p>
        {isKo
          ? '체계적인 문헌 검색은 이론적 배경 작성의 첫 단계입니다. 학술 데이터베이스(RISS, KCI, Google Scholar, Web of Science, Scopus, PubMed 등)를 활용하여 관련 문헌을 포괄적으로 검색해야 합니다. 키워드 검색, 참고문헌 추적(backward search), 인용 추적(forward search) 등의 전략을 병행하면 효과적입니다.'
          : 'Systematic literature search is the first step in writing the theoretical background. Use academic databases (RISS, KCI, Google Scholar, Web of Science, Scopus, PubMed, etc.) to comprehensively search for relevant literature. Combining strategies such as keyword search, backward reference search, and forward citation search is effective.'}
      </p>
      <ul>
        <li><strong>{isKo ? '핵심 논문 (Seminal Works)' : 'Seminal Works'}</strong>: {isKo ? '해당 분야의 기초를 형성한 고전적 연구를 반드시 포함합니다.' : 'Always include classic studies that formed the foundation of the field.'}</li>
        <li><strong>{isKo ? '최신 연구 (Recent Studies)' : 'Recent Studies'}</strong>: {isKo ? '최근 3~5년 이내의 연구를 우선적으로 검토하여 현재의 연구 동향을 파악합니다.' : 'Prioritize reviewing studies from the last 3-5 years to understand current research trends.'}</li>
        <li><strong>{isKo ? '메타분석 및 리뷰 논문' : 'Meta-analyses and Review Papers'}</strong>: {isKo ? '특정 주제에 대한 연구 결과를 종합적으로 파악할 수 있어 매우 유용합니다.' : 'Very useful for comprehensively understanding research findings on a specific topic.'}</li>
        <li><strong>{isKo ? '국내외 연구의 균형' : 'Balance of Domestic and International Studies'}</strong>: {isKo ? '국내 맥락의 특수성과 국제적 연구 동향을 모두 반영합니다.' : 'Reflect both the specificity of the domestic context and international research trends.'}</li>
      </ul>

      <TipBox type="tip">
        <p>
          {isKo
            ? '문헌을 읽을 때 단순히 요약하지 말고, 각 연구의 강점, 한계, 본 연구와의 관련성을 메모하세요. 이 메모가 후에 비판적 문헌 검토의 기초가 됩니다. 참고문헌 관리 소프트웨어(Zotero, Mendeley, EndNote 등)를 활용하면 효율적입니다.'
            : 'When reading literature, do not merely summarize; note each study\'s strengths, limitations, and relevance to your research. These notes will later form the basis of your critical literature review. Using reference management software (Zotero, Mendeley, EndNote, etc.) is efficient.'}
        </p>
      </TipBox>

      {/* Literature Synthesis */}
      <h3>{isKo ? '문헌의 비판적 종합' : 'Critical Literature Synthesis'}</h3>
      <p>
        {isKo
          ? '문헌 종합(Literature Synthesis)은 개별 선행연구를 단순히 나열하는 것이 아니라, 주제나 개념을 중심으로 여러 연구의 결과를 통합적으로 분석하는 것입니다. 좋은 문헌 종합은 연구들 간의 공통점, 차이점, 상충하는 결과, 그리고 연구의 공백을 체계적으로 드러냅니다.'
          : 'Literature synthesis is not merely listing individual prior studies, but integrating the results of multiple studies around themes or concepts. Good literature synthesis systematically reveals commonalities, differences, conflicting results, and gaps among studies.'}
      </p>
      <p>
        {isKo
          ? '효과적인 문헌 종합을 위해서는 주제별(thematic) 구성이 시간순(chronological) 구성보다 우월합니다. 예를 들어, "리더십과 조직 성과"에 관한 문헌을 검토할 때, 연도순으로 나열하는 대신 "리더십 스타일별 효과", "매개 메커니즘", "맥락 요인" 등의 주제로 구성하면 더 의미 있는 분석이 가능합니다.'
          : 'For effective literature synthesis, thematic organization is superior to chronological organization. For example, when reviewing literature on "leadership and organizational performance," instead of listing by year, organizing by themes such as "effects by leadership style," "mediating mechanisms," and "contextual factors" enables more meaningful analysis.'}
      </p>

      {/* Conceptual Framework */}
      <h3>{isKo ? '개념적 틀 구축' : 'Building a Conceptual Framework'}</h3>
      <p>
        {isKo
          ? '개념적 틀(Conceptual Framework)은 이론적 배경을 바탕으로 연구에서 다루는 주요 개념들 간의 관계를 구조화한 것입니다. 개념적 틀은 연구 모형의 이론적 근거를 제공하며, 연구자가 선행연구에서 도출한 핵심 관계를 시각적으로 표현합니다.'
          : 'A conceptual framework is a structured representation of the relationships between key concepts in the study, based on the theoretical background. It provides the theoretical rationale for the research model and visually represents the key relationships derived from prior research.'}
      </p>
      <p>
        {isKo
          ? '개념적 틀을 구축하는 과정은 다음과 같습니다: (1) 핵심 이론 선정, (2) 주요 개념/변수 도출, (3) 변수 간 관계 설정, (4) 관계의 이론적 근거 제시. 이 과정에서 선행연구의 결과와 이론적 논의를 근거로 각 관계의 방향과 메커니즘을 설명해야 합니다.'
          : 'The process of building a conceptual framework is: (1) selecting core theories, (2) deriving key concepts/variables, (3) establishing relationships between variables, and (4) presenting theoretical rationale for relationships. In this process, the direction and mechanism of each relationship must be explained based on prior research findings and theoretical discussions.'}
      </p>

      <TipBox type="warning">
        <p>
          {isKo
            ? '이론적 배경에서 가장 흔한 실수는 선행연구를 "연구 1은 ~을 발견했다. 연구 2는 ~을 발견했다." 식으로 나열하는 것입니다. 이는 "annotated bibliography"에 불과합니다. 대신 연구들을 비교·대조하고, 일관된 결과와 상충하는 결과를 분석하여 비판적 관점을 보여주어야 합니다.'
            : 'The most common mistake in the theoretical background is listing prior studies as "Study 1 found X. Study 2 found Y." This is merely an annotated bibliography. Instead, you should compare and contrast studies, analyze consistent and conflicting results, and demonstrate a critical perspective.'}
        </p>
      </TipBox>

      {/* Writing Tips for the Background */}
      <h3>{isKo ? '이론적 배경 작성 요령' : 'Writing Tips for the Theoretical Background'}</h3>
      <p>
        {isKo
          ? '이론적 배경을 효과적으로 작성하기 위한 핵심 요령을 정리하면 다음과 같습니다.'
          : 'Key tips for effectively writing the theoretical background are as follows.'}
      </p>
      <ol>
        <li>{isKo ? '넓은 주제에서 좁은 주제로 진행하는 깔때기(funnel) 구조를 사용합니다.' : 'Use a funnel structure that progresses from broad to narrow topics.'}</li>
        <li>{isKo ? '각 하위 절(subsection)은 명확한 소제목과 논리적 전환문(transition)으로 연결합니다.' : 'Connect each subsection with clear subheadings and logical transitions.'}</li>
        <li>{isKo ? '직접 인용보다는 간접 인용(paraphrasing)을 주로 사용하되, 핵심 정의는 직접 인용합니다.' : 'Use paraphrasing rather than direct quotes mainly, but directly quote key definitions.'}</li>
        <li>{isKo ? '각 단락의 마지막에 해당 내용이 본 연구와 어떻게 관련되는지 연결합니다.' : 'At the end of each paragraph, connect how the content relates to your study.'}</li>
        <li>{isKo ? '이론적 배경의 마지막에는 문헌 검토의 요약과 연구 공백(gap)을 명시적으로 기술합니다.' : 'At the end of the theoretical background, explicitly describe a summary of the literature review and the research gap.'}</li>
      </ol>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 6 – Writing Practice                                       */
/* ------------------------------------------------------------------ */
function PracticeSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>{isKo ? '연구계획서 작성 실전' : 'Writing Practice'}</h2>

      {/* Complete Proposal Structure */}
      <h3>{isKo ? '연구계획서 전체 구조' : 'Complete Proposal Structure'}</h3>
      <p>
        {isKo
          ? '연구계획서의 전체 구조는 논리적 일관성을 바탕으로 각 장이 유기적으로 연결되어야 합니다. 아래는 사회과학 분야에서 일반적으로 사용되는 연구계획서 구조입니다. 기관이나 학문 분야에 따라 세부 항목이 달라질 수 있으나, 기본적인 흐름은 유사합니다.'
          : 'The overall structure of a research proposal must have each chapter organically connected based on logical consistency. Below is a commonly used proposal structure in the social sciences. While specific items may vary by institution or discipline, the basic flow is similar.'}
      </p>
      <ol>
        <li>
          <strong>{isKo ? '제1장: 서론' : 'Chapter 1: Introduction'}</strong>
          <ul>
            <li>{isKo ? '연구의 배경 및 필요성' : 'Research background and significance'}</li>
            <li>{isKo ? '연구 목적' : 'Research purpose'}</li>
            <li>{isKo ? '연구 질문 및 가설' : 'Research questions and hypotheses'}</li>
            <li>{isKo ? '연구의 범위 및 한계' : 'Scope and limitations of the research'}</li>
          </ul>
        </li>
        <li>
          <strong>{isKo ? '제2장: 이론적 배경' : 'Chapter 2: Theoretical Background'}</strong>
          <ul>
            <li>{isKo ? '핵심 개념 정의 및 이론 검토' : 'Definition of key concepts and theory review'}</li>
            <li>{isKo ? '선행연구 분석 및 종합' : 'Analysis and synthesis of prior research'}</li>
            <li>{isKo ? '연구 모형 및 가설 도출' : 'Research model and hypothesis derivation'}</li>
          </ul>
        </li>
        <li>
          <strong>{isKo ? '제3장: 연구 방법' : 'Chapter 3: Research Methods'}</strong>
          <ul>
            <li>{isKo ? '연구 설계' : 'Research design'}</li>
            <li>{isKo ? '연구 대상 및 표본 추출' : 'Research subjects and sampling'}</li>
            <li>{isKo ? '측정 도구 및 조작적 정의' : 'Measurement instruments and operational definitions'}</li>
            <li>{isKo ? '자료 수집 절차' : 'Data collection procedures'}</li>
            <li>{isKo ? '자료 분석 방법' : 'Data analysis methods'}</li>
          </ul>
        </li>
        <li>
          <strong>{isKo ? '기대 효과 및 활용 방안' : 'Expected Outcomes and Applications'}</strong>
          <ul>
            <li>{isKo ? '학술적 기여' : 'Academic contributions'}</li>
            <li>{isKo ? '실무적 시사점' : 'Practical implications'}</li>
          </ul>
        </li>
        <li>
          <strong>{isKo ? '연구 일정' : 'Research Timeline'}</strong>
        </li>
        <li>
          <strong>{isKo ? '참고문헌' : 'References'}</strong>
        </li>
      </ol>

      {/* Practical Writing Tips */}
      <h3>{isKo ? '실전 작성 요령' : 'Practical Writing Tips'}</h3>
      <p>
        {isKo
          ? '연구계획서를 효과적으로 작성하기 위해서는 내용뿐 아니라 표현 방식과 구성에도 세심한 주의를 기울여야 합니다. 다음의 실전 요령은 계획서의 완성도를 높이는 데 도움이 됩니다.'
          : 'To write an effective research proposal, careful attention must be paid not only to the content but also to the expression and organization. The following practical tips help improve the completeness of the proposal.'}
      </p>
      <ul>
        <li><strong>{isKo ? '논리적 흐름 유지' : 'Maintain Logical Flow'}</strong>: {isKo ? '각 장과 절이 자연스럽게 연결되도록 전환문(transition sentences)을 사용합니다. "따라서", "이에 기반하여", "이를 종합하면" 등의 연결어를 적절히 활용하세요.' : 'Use transition sentences to naturally connect each chapter and section. Appropriately use connectors such as "therefore," "based on this," and "taken together."'}</li>
        <li><strong>{isKo ? '학술적 문체 사용' : 'Use Academic Writing Style'}</strong>: {isKo ? '구어체를 피하고, 객관적이고 정확한 표현을 사용합니다. "~인 것 같다" 대신 "~으로 나타났다"를 사용합니다.' : 'Avoid colloquial language and use objective, precise expressions. Use "the results indicated" rather than "it seems like."'}</li>
        <li><strong>{isKo ? '인용의 정확성' : 'Citation Accuracy'}</strong>: {isKo ? '모든 인용은 APA, AMA, Chicago 등 해당 학문 분야의 양식을 정확하게 따릅니다. 본문 인용과 참고문헌 목록이 일치하는지 반드시 확인하세요.' : 'All citations must accurately follow the style of the relevant discipline (APA, AMA, Chicago, etc.). Always verify that in-text citations match the reference list.'}</li>
        <li><strong>{isKo ? '표와 그림의 활용' : 'Use of Tables and Figures'}</strong>: {isKo ? '연구 모형도, 변수 정리표, 연구 일정표 등을 시각적 자료로 활용하면 가독성이 향상됩니다.' : 'Using visual materials such as research model diagrams, variable summary tables, and research timeline charts improves readability.'}</li>
      </ul>

      <TipBox type="tip">
        <p>
          {isKo
            ? '연구계획서를 처음부터 순서대로 작성할 필요는 없습니다. 많은 연구자들은 이론적 배경 -> 연구 방법 -> 서론 순서로 작성합니다. 서론의 연구 필요성은 이론적 배경을 완성한 후에 더 설득력 있게 작성할 수 있기 때문입니다.'
            : 'You do not need to write the research proposal in order from beginning to end. Many researchers write in the order of theoretical background -> methodology -> introduction. This is because the research justification in the introduction can be written more persuasively after completing the theoretical background.'}
        </p>
      </TipBox>

      {/* Common Mistakes */}
      <h3>{isKo ? '흔한 실수와 주의 사항' : 'Common Mistakes and Cautions'}</h3>
      <p>
        {isKo
          ? '연구계획서 작성 과정에서 자주 발견되는 실수들을 사전에 인지하고 피하는 것이 중요합니다. 심사위원들이 가장 흔히 지적하는 문제점들은 다음과 같습니다.'
          : 'It is important to be aware of and avoid mistakes commonly found in research proposal writing. The following are issues most frequently pointed out by reviewers.'}
      </p>
      <ul>
        <li><strong>{isKo ? '연구 질문과 방법론의 불일치' : 'Mismatch between Research Questions and Methodology'}</strong>: {isKo ? '질적 연구 질문에 양적 방법론을 적용하거나, 그 반대의 경우입니다. 연구 질문의 성격에 맞는 방법론을 선택해야 합니다.' : 'Applying quantitative methodology to qualitative research questions or vice versa. Choose a methodology that matches the nature of the research questions.'}</li>
        <li><strong>{isKo ? '이론적 근거 부족' : 'Insufficient Theoretical Basis'}</strong>: {isKo ? '가설이나 연구 모형이 이론적 배경과 연결되지 않는 경우입니다. 모든 가설은 이론적 배경에서 논의된 내용에서 논리적으로 도출되어야 합니다.' : 'When hypotheses or the research model are not connected to the theoretical background. All hypotheses must be logically derived from the content discussed in the theoretical background.'}</li>
        <li><strong>{isKo ? '범위의 모호성' : 'Ambiguous Scope'}</strong>: {isKo ? '연구의 범위가 너무 넓거나 명확하지 않은 경우입니다. 연구 대상, 지리적 범위, 시간적 범위를 명확히 한정해야 합니다.' : 'When the scope of research is too broad or unclear. The research subjects, geographical scope, and temporal scope must be clearly defined.'}</li>
        <li><strong>{isKo ? '표본 크기의 부적절성' : 'Inappropriate Sample Size'}</strong>: {isKo ? '통계적 검증력을 확보할 수 있는 충분한 표본 크기를 산정하지 않은 경우입니다. G*Power 등의 도구로 사전에 표본 크기를 계산해야 합니다.' : 'When the sample size is not calculated to ensure sufficient statistical power. Sample size should be calculated in advance using tools such as G*Power.'}</li>
        <li><strong>{isKo ? '윤리적 고려 부재' : 'Lack of Ethical Considerations'}</strong>: {isKo ? 'IRB 승인, 사전 동의서, 개인정보 보호 등 연구 윤리에 대한 기술이 누락된 경우입니다.' : 'When descriptions of research ethics such as IRB approval, informed consent, and privacy protection are omitted.'}</li>
      </ul>

      <TipBox type="warning">
        <p>
          {isKo
            ? '표절(Plagiarism)은 연구계획서에서 가장 심각한 문제입니다. 다른 연구자의 아이디어, 텍스트, 데이터를 사용할 때는 반드시 출처를 밝혀야 합니다. 자기 표절(self-plagiarism)도 주의해야 합니다. Turnitin 등의 표절 검사 도구를 활용하여 제출 전에 반드시 확인하세요.'
            : 'Plagiarism is the most serious issue in research proposals. When using other researchers\' ideas, text, or data, you must always cite the source. Self-plagiarism should also be avoided. Use plagiarism detection tools such as Turnitin to check before submission.'}
        </p>
      </TipBox>

      {/* Proposal Checklist */}
      <h3>{isKo ? '연구계획서 최종 점검 체크리스트' : 'Final Proposal Checklist'}</h3>
      <p>
        {isKo
          ? '연구계획서를 제출하기 전에 다음 항목을 하나씩 점검하여 완성도를 확인하세요.'
          : 'Before submitting your research proposal, check the following items one by one to ensure completeness.'}
      </p>
      <ul>
        <li>{isKo ? '연구 제목이 연구 내용을 정확하게 반영하고 있는가?' : 'Does the title accurately reflect the content of the research?'}</li>
        <li>{isKo ? '연구 목적이 명확하고 구체적으로 기술되어 있는가?' : 'Is the research purpose clearly and specifically stated?'}</li>
        <li>{isKo ? '연구의 필요성이 충분한 근거와 함께 제시되어 있는가?' : 'Is the research significance presented with sufficient evidence?'}</li>
        <li>{isKo ? '연구 질문과 가설이 이론적 배경에서 논리적으로 도출되었는가?' : 'Are research questions and hypotheses logically derived from the theoretical background?'}</li>
        <li>{isKo ? '이론적 배경이 비판적이고 체계적으로 작성되었는가?' : 'Is the theoretical background written critically and systematically?'}</li>
        <li>{isKo ? '연구 방법(설계, 표본, 도구, 분석)이 구체적으로 기술되었는가?' : 'Are the research methods (design, sample, instruments, analysis) described in detail?'}</li>
        <li>{isKo ? '변수의 조작적 정의가 명확하게 제시되었는가?' : 'Are operational definitions of variables clearly presented?'}</li>
        <li>{isKo ? '연구 일정이 현실적으로 수립되었는가?' : 'Is the research timeline realistically established?'}</li>
        <li>{isKo ? '참고문헌이 빠짐없이, 정확한 양식으로 기재되었는가?' : 'Are all references listed completely and in the correct format?'}</li>
        <li>{isKo ? '맞춤법, 문법, 형식의 일관성을 최종 확인했는가?' : 'Have you done a final check on spelling, grammar, and formatting consistency?'}</li>
      </ul>

      <TipBox type="important">
        <p>
          {isKo
            ? '연구계획서를 완성한 후 최소 1~2주의 냉각기(cooling period)를 두고 다시 읽어보세요. 시간을 두고 재검토하면 논리적 허점이나 표현의 부족함을 더 잘 발견할 수 있습니다. 또한 동료 연구자나 지도교수에게 피드백을 요청하는 것도 매우 효과적입니다.'
            : 'After completing the proposal, allow a cooling period of at least 1-2 weeks before rereading. Reviewing with time allows you to better identify logical weaknesses or inadequate expressions. Also, requesting feedback from fellow researchers or your advisor is very effective.'}
        </p>
      </TipBox>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 7 – References                                             */
/* ------------------------------------------------------------------ */
function ReferencesSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>{isKo ? '참고문헌' : 'References'}</h2>

      <h3>{isKo ? '연구계획서 작성을 위한 핵심 참고문헌' : 'Key References for Research Proposal Writing'}</h3>
      <p>
        {isKo
          ? '다음은 연구계획서 작성에 필수적인 연구방법론 핵심 문헌입니다. 이 자료들은 연구 설계, 문헌 검토, 자료 수집 및 분석에 대한 체계적인 안내를 제공합니다.'
          : 'The following are essential research methodology references for writing research proposals. These resources provide systematic guidance on research design, literature review, data collection, and analysis.'}
      </p>
      <ul>
        <li>
          Creswell, J. W. (2018). <em>Research Design: Qualitative, Quantitative, and Mixed Methods Approaches</em> (5th ed.). SAGE Publications.
        </li>
        <li>
          Kumar, R. (2019). <em>Research Methodology: A Step-by-Step Guide for Beginners</em> (5th ed.). SAGE Publications.
        </li>
        <li>
          Punch, K. F. (2016). <em>Developing Effective Research Proposals</em> (3rd ed.). SAGE Publications.
        </li>
        <li>
          Locke, L. F., Spirduso, W. W., & Silverman, S. J. (2014). <em>Proposals That Work: A Guide for Planning Dissertations and Grant Proposals</em> (6th ed.). SAGE Publications.
        </li>
        <li>
          Babbie, E. R. (2021). <em>The Practice of Social Research</em> (15th ed.). Cengage Learning.
        </li>
        <li>
          Bryman, A. (2016). <em>Social Research Methods</em> (5th ed.). Oxford University Press.
        </li>
        <li>
          Merriam, S. B., & Tisdell, E. J. (2016). <em>Qualitative Research: A Guide to Design and Implementation</em> (4th ed.). Jossey-Bass.
        </li>
        <li>
          American Psychological Association. (2020). <em>Publication Manual of the American Psychological Association</em> (7th ed.). American Psychological Association.
        </li>
      </ul>

      <h3>{isKo ? '학술 데이터베이스 및 도구' : 'Academic Databases and Tools'}</h3>
      <p>
        {isKo
          ? '효과적인 문헌 검색과 관리를 위해 다음 학술 데이터베이스 및 참고문헌 관리 도구를 활용하세요:'
          : 'Utilize the following academic databases and reference management tools for effective literature search and management:'}
      </p>
      <ul>
        <li>
          {isKo
            ? 'Google Scholar (scholar.google.com): 다양한 학문 분야의 학술 문헌을 무료로 검색'
            : 'Google Scholar (scholar.google.com): Free search across scholarly literature in various disciplines'}
        </li>
        <li>
          {isKo
            ? 'RISS (riss.kr): 국내 학위논문, 학술지 논문, 연구보고서 검색'
            : 'RISS (riss.kr): Search for Korean theses, journal articles, and research reports'}
        </li>
        <li>
          {isKo
            ? 'PubMed, ERIC, SSCI 등: 분야별 전문 학술 데이터베이스'
            : 'PubMed, ERIC, SSCI, etc.: Discipline-specific academic databases'}
        </li>
        <li>
          {isKo
            ? 'Zotero, Mendeley, EndNote: 참고문헌 수집, 정리, 인용 관리 도구'
            : 'Zotero, Mendeley, EndNote: Tools for collecting, organizing, and managing citations'}
        </li>
      </ul>

      <TipBox type="tip">
        {isKo
          ? '참고문헌 관리 도구를 연구 초기 단계부터 사용하면, 논문 작성 시 인용과 참고문헌 목록 작성이 훨씬 효율적이 됩니다. 무료 도구인 Zotero를 추천합니다.'
          : 'Using a reference management tool from the early stages of research makes citation and bibliography creation much more efficient during writing. Zotero, a free tool, is highly recommended.'}
      </TipBox>

      <h3>{isKo ? 'APA 양식 참고문헌 작성법' : 'APA Format Reference Guidelines'}</h3>
      <p>
        {isKo
          ? '사회과학 분야에서 가장 널리 사용되는 APA(American Psychological Association) 양식의 기본 규칙을 숙지하세요:'
          : 'Familiarize yourself with the basic rules of APA (American Psychological Association) format, the most widely used style in social sciences:'}
      </p>
      <ul>
        <li>
          {isKo
            ? '저자명은 성(Last name), 이니셜(Initials) 순으로 표기'
            : 'Author names are listed as Last name, Initials'}
        </li>
        <li>
          {isKo
            ? '출판 연도는 저자명 바로 뒤에 괄호로 표기'
            : 'Publication year follows immediately after the author name in parentheses'}
        </li>
        <li>
          {isKo
            ? '도서 제목은 이탤릭체로, 첫 단어와 고유명사만 대문자로 표기'
            : 'Book titles are italicized with only the first word and proper nouns capitalized'}
        </li>
        <li>
          {isKo
            ? 'DOI가 있는 경우 반드시 포함하여 접근성을 높임'
            : 'Include DOI when available to enhance accessibility'}
        </li>
      </ul>

      <TipBox type="important">
        {isKo
          ? '참고문헌 목록은 본문에서 인용된 자료만 포함해야 합니다. 참고했지만 인용하지 않은 자료를 포함하는 것은 학술 작성 규범에 위배됩니다. APA 7판의 최신 규정을 항상 확인하세요.'
          : 'The reference list should only include sources cited in the text. Including consulted but uncited sources violates academic writing conventions. Always verify the latest APA 7th edition guidelines.'}
      </TipBox>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */
export default function Proposal(): ReactElement {
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
        title={isKo ? '연구계획서 | Survey Master' : 'Research Proposal | Survey Master'}
        description={isKo ? '연구계획서 작성의 전 과정을 체계적으로 학습합니다.' : 'Learn the complete process of writing research proposals.'}
      />
      <div className="guide-page">
        <div className="guide-layout">
          <aside className="guide-sidebar">
            <div className="guide-sidebar-title">{isKo ? '목차' : 'Contents'}</div>
            <ul className="guide-nav">
              {SECTIONS.map((section) => (
                <li key={section.id} className="guide-nav-item">
                  <button className={`guide-nav-link ${activeSection === section.id ? 'active' : ''}`} onClick={() => handleNavClick(section.id)}>
                    <i className={`fa-solid ${section.icon}`} />
                    <span>{isKo ? section.ko : section.en}</span>
                  </button>
                </li>
              ))}
            </ul>
          </aside>
          <main className="guide-content">
            {activeSection === 'overview' && <OverviewSection isKo={isKo} />}
            {activeSection === 'topic-selection' && <TopicSelectionSection isKo={isKo} />}
            {activeSection === 'purpose' && <PurposeSection isKo={isKo} />}
            {activeSection === 'questions' && <QuestionsSection isKo={isKo} />}
            {activeSection === 'background' && <BackgroundSection isKo={isKo} />}
            {activeSection === 'practice' && <PracticeSection isKo={isKo} />}
            {activeSection === 'references' && <ReferencesSection isKo={isKo} />}

            <div className="guide-section-nav">
              <button className="guide-nav-btn prev" onClick={handlePrev} disabled={currentIndex === 0}>
                <i className="fa-solid fa-arrow-left" />
                <span>{currentIndex > 0 ? (isKo ? SECTIONS[currentIndex - 1].ko : SECTIONS[currentIndex - 1].en) : isKo ? '이전' : 'Previous'}</span>
              </button>
              <button className="guide-nav-btn next" onClick={handleNext} disabled={currentIndex === SECTIONS.length - 1}>
                <span>{currentIndex < SECTIONS.length - 1 ? (isKo ? SECTIONS[currentIndex + 1].ko : SECTIONS[currentIndex + 1].en) : isKo ? '다음' : 'Next'}</span>
                <i className="fa-solid fa-arrow-right" />
              </button>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
