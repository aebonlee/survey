import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import TipBox from '../../components/TipBox';
import type { ReactElement } from 'react';

/* ------------------------------------------------------------------ */
/*  Section metadata                                                   */
/* ------------------------------------------------------------------ */

const SECTIONS = [
  { id: 'purpose', icon: 'fa-bullseye', ko: '문헌검토의 목적', en: 'Purpose of Literature Review' },
  { id: 'search-strategy', icon: 'fa-magnifying-glass', ko: '문헌 탐색 전략', en: 'Search Strategy' },
  { id: 'critical-reading', icon: 'fa-glasses', ko: '비판적 문헌 읽기', en: 'Critical Reading' },
  { id: 'organizing', icon: 'fa-folder-tree', ko: '문헌 정리와 분류', en: 'Organizing Literature' },
  { id: 'writing-review', icon: 'fa-pen-fancy', ko: '문헌검토 작성법', en: 'Writing the Review' },
  { id: 'citation', icon: 'fa-quote-right', ko: '인용과 참고문헌 관리', en: 'Citation Management' },
  { id: 'references', icon: 'fa-bookmark', ko: '참고문헌', en: 'References' },
];

/* ================================================================== */
/*  Section 1 — Purpose of Literature Review                           */
/* ================================================================== */

function PurposeSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>
        <i className="fa-solid fa-bullseye" />
        {isKo ? ' 문헌검토의 목적' : ' Purpose of Literature Review'}
      </h2>

      {/* --- Why literature review matters --- */}
      <h3>{isKo ? '문헌검토란 무엇인가?' : 'What Is a Literature Review?'}</h3>
      <p>
        {isKo
          ? '문헌검토(literature review)는 특정 연구 주제에 관한 기존의 학술 문헌을 체계적으로 탐색, 분석, 종합하는 학술적 활동입니다. 단순히 관련 논문을 나열하는 것이 아니라, 기존 연구의 흐름을 파악하고, 주요 발견과 이론적 논쟁을 정리하며, 현재까지의 지식 상태를 비판적으로 평가하는 과정입니다. 문헌검토는 독립적인 학술 논문으로 출판될 수도 있고, 학위논문이나 연구 논문의 한 장(chapter)으로 포함될 수도 있습니다.'
          : 'A literature review is a scholarly activity that systematically searches, analyzes, and synthesizes existing academic literature on a specific research topic. It is not merely a list of related papers but a process of understanding research trends, organizing key findings and theoretical debates, and critically evaluating the current state of knowledge. A literature review can be published as an independent scholarly article or included as a chapter in a thesis or research paper.'}
      </p>
      <p>
        {isKo
          ? '잘 수행된 문헌검토는 연구의 출발점이자 나침반 역할을 합니다. 연구자가 자신의 연구를 기존 학문적 맥락 속에 위치시키고, 연구의 필요성과 독창성을 논증하는 데 필수적인 기반을 제공합니다. 또한 문헌검토를 통해 연구자는 방법론적 접근 방식에 대한 통찰을 얻고, 잠재적 연구 설계의 강점과 한계를 사전에 파악할 수 있습니다.'
          : 'A well-conducted literature review serves as both the starting point and compass of research. It provides the essential foundation for researchers to situate their work within the existing scholarly context and to argue for the necessity and originality of their study. Through the literature review, researchers also gain insight into methodological approaches and can identify the strengths and limitations of potential research designs in advance.'}
      </p>

      {/* --- Goals of literature review --- */}
      <h3>{isKo ? '문헌검토의 핵심 목표' : 'Core Goals of Literature Review'}</h3>
      <p>
        {isKo
          ? '문헌검토는 다음과 같은 핵심 목표를 달성하기 위해 수행됩니다:'
          : 'Literature reviews are conducted to achieve the following core goals:'}
      </p>
      <ol>
        <li>
          <strong>{isKo ? '지식의 현재 상태 파악' : 'Assessing the Current State of Knowledge'}</strong>
          {' — '}
          {isKo
            ? '특정 주제에 대해 현재까지 무엇이 밝혀졌고, 어떤 이론적 합의와 논쟁이 존재하는지를 종합적으로 파악합니다. 이를 통해 연구자는 불필요한 중복 연구를 피하고, 기존 지식 위에 새로운 기여를 쌓을 수 있습니다.'
            : 'Comprehensively understanding what has been discovered, what theoretical consensus and debates exist on a specific topic. This allows researchers to avoid unnecessary duplication and build new contributions upon existing knowledge.'}
        </li>
        <li>
          <strong>{isKo ? '연구 공백(gap) 식별' : 'Identifying Research Gaps'}</strong>
          {' — '}
          {isKo
            ? '기존 연구에서 아직 충분히 다루어지지 않은 영역, 모순되는 결과, 또는 새로운 접근이 필요한 문제를 발견합니다. 이러한 공백은 새로운 연구의 정당성과 방향을 제시합니다.'
            : 'Discovering areas not yet sufficiently addressed in existing research, contradictory results, or problems requiring new approaches. These gaps provide the justification and direction for new research.'}
        </li>
        <li>
          <strong>{isKo ? '이론적 틀 구축' : 'Building a Theoretical Framework'}</strong>
          {' — '}
          {isKo
            ? '관련 이론, 모델, 개념을 검토하고 통합하여 자신의 연구를 뒷받침하는 이론적 틀(theoretical framework)을 구성합니다. 이론적 틀은 연구 질문의 형성, 변수의 선정, 가설의 도출에 직접적으로 영향을 미칩니다.'
            : 'Reviewing and integrating related theories, models, and concepts to construct a theoretical framework that supports your research. The theoretical framework directly influences the formation of research questions, selection of variables, and derivation of hypotheses.'}
        </li>
        <li>
          <strong>{isKo ? '방법론적 통찰 획득' : 'Gaining Methodological Insight'}</strong>
          {' — '}
          {isKo
            ? '선행 연구에서 사용된 연구 설계, 측정 도구, 분석 방법의 강점과 한계를 검토하여 자신의 연구 방법을 개선하고 정교화할 수 있습니다.'
            : 'By reviewing the strengths and limitations of research designs, measurement tools, and analysis methods used in prior studies, you can improve and refine your own research methodology.'}
        </li>
      </ol>

      {/* --- Types of literature reviews --- */}
      <h3>{isKo ? '문헌검토의 유형' : 'Types of Literature Reviews'}</h3>
      <p>
        {isKo
          ? '문헌검토는 목적과 방법론에 따라 여러 유형으로 구분됩니다. 각 유형은 서로 다른 연구 질문과 상황에 적합합니다:'
          : 'Literature reviews are classified into several types based on their purpose and methodology. Each type is suitable for different research questions and contexts:'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '서술적 문헌검토 (Narrative Review)' : 'Narrative Review'}</strong>
          {' — '}
          {isKo
            ? '가장 전통적인 형태로, 연구자가 특정 주제에 대한 기존 문헌을 종합적으로 요약하고 해석합니다. 검색 과정이 상대적으로 유연하며, 넓은 주제를 개괄적으로 다루는 데 적합합니다. 다만 선택 편향(selection bias)의 위험이 있으므로, 문헌 선정 기준을 가능한 한 명확히 하는 것이 중요합니다.'
            : 'The most traditional form, where the researcher comprehensively summarizes and interprets existing literature on a specific topic. The search process is relatively flexible, making it suitable for broadly overviewing wide topics. However, there is a risk of selection bias, so it is important to clarify literature selection criteria as much as possible.'}
        </li>
        <li>
          <strong>{isKo ? '체계적 문헌검토 (Systematic Review)' : 'Systematic Review'}</strong>
          {' — '}
          {isKo
            ? '사전에 정의된 프로토콜에 따라 문헌을 체계적으로 탐색, 선별, 평가하는 엄격한 방법론을 따릅니다. PRISMA(Preferred Reporting Items for Systematic Reviews and Meta-Analyses) 가이드라인에 따라 수행되며, 검색 전략, 포함/제외 기준, 질 평가 방법을 사전에 명시합니다. 편향을 최소화하고 재현 가능성을 극대화하는 것이 핵심 원칙입니다.'
            : 'Follows a rigorous methodology of systematically searching, selecting, and evaluating literature according to a pre-defined protocol. It is conducted following PRISMA (Preferred Reporting Items for Systematic Reviews and Meta-Analyses) guidelines, specifying search strategies, inclusion/exclusion criteria, and quality assessment methods in advance. Minimizing bias and maximizing reproducibility are core principles.'}
        </li>
        <li>
          <strong>{isKo ? '범위 문헌검토 (Scoping Review)' : 'Scoping Review'}</strong>
          {' — '}
          {isKo
            ? '특정 주제 영역에서 이용 가능한 연구 증거의 범위와 성격을 파악하는 것을 목적으로 합니다. Arksey와 O\'Malley(2005)가 제안한 프레임워크를 기반으로 하며, 체계적 문헌검토보다 탐색적 성격이 강합니다. 연구 질문이 광범위할 때, 또는 체계적 문헌검토 수행 가능성을 사전에 평가할 때 유용합니다.'
            : 'Aims to map the extent and nature of available research evidence in a specific topic area. Based on the framework proposed by Arksey and O\'Malley (2005), it is more exploratory in nature than a systematic review. It is useful when research questions are broad or when assessing the feasibility of conducting a systematic review.'}
        </li>
        <li>
          <strong>{isKo ? '메타분석 (Meta-Analysis)' : 'Meta-Analysis'}</strong>
          {' — '}
          {isKo
            ? '체계적 문헌검토와 함께 수행되며, 여러 연구의 정량적 결과를 통계적으로 결합하여 종합적인 효과 크기(effect size)를 산출합니다. 개별 연구보다 더 정확한 추정치를 제공하며, 연구 간 이질성을 분석할 수 있다는 장점이 있습니다.'
            : 'Conducted alongside systematic reviews, it statistically combines quantitative results from multiple studies to calculate an overall effect size. It offers more precise estimates than individual studies and has the advantage of analyzing heterogeneity across studies.'}
        </li>
      </ul>

      {/* --- Role in the research process --- */}
      <h3>{isKo ? '연구 과정에서의 역할' : 'Role in the Research Process'}</h3>
      <p>
        {isKo
          ? '문헌검토는 연구의 특정 단계에만 국한되지 않고, 연구 과정 전반에 걸쳐 지속적으로 수행됩니다. 연구 초기에는 주제 선정과 연구 질문 형성에 기여하고, 연구 설계 단계에서는 적절한 방법론 선택을 돕습니다. 데이터 수집과 분석 과정에서도 새로운 문헌을 지속적으로 모니터링하며, 논문 작성 단계에서는 연구 결과를 기존 문헌의 맥락에서 해석하고 논의하는 데 핵심적인 역할을 합니다.'
          : 'Literature review is not confined to a specific stage of research but is conducted continuously throughout the entire research process. In the early stages, it contributes to topic selection and research question formulation. During the research design phase, it helps with selecting appropriate methodologies. Throughout data collection and analysis, new literature is continuously monitored. In the writing phase, it plays a central role in interpreting and discussing research results in the context of existing literature.'}
      </p>
      <p>
        {isKo
          ? '특히 학위논문에서 문헌검토 장(chapter)은 독자에게 해당 연구 분야의 지적 지형을 안내하고, 연구자가 어떤 이론적 관점과 방법론적 전통 위에서 연구를 수행하는지를 보여주는 역할을 합니다. 심사위원들은 문헌검토를 통해 연구자의 해당 분야에 대한 이해 깊이와 비판적 사고 능력을 평가합니다.'
          : 'In dissertations especially, the literature review chapter guides readers through the intellectual landscape of the research field and shows which theoretical perspectives and methodological traditions the researcher builds upon. Examiners evaluate the researcher\'s depth of understanding and critical thinking ability through the literature review.'}
      </p>

      <TipBox type="tip" title={isKo ? '효과적인 문헌검토의 시작' : 'Starting an Effective Literature Review'}>
        <p>
          {isKo
            ? '문헌검토를 시작할 때는 먼저 해당 주제의 최신 리뷰 논문(review article)이나 메타분석을 찾아보세요. 이러한 종합 논문은 해당 분야의 전체적인 지형을 빠르게 파악하는 데 매우 유용합니다. 그 다음, 리뷰 논문에서 자주 인용되는 핵심 원전(seminal works)을 확인하고, 최신 연구까지 탐색 범위를 확장해 나가는 "눈덩이 전략(snowballing)"을 활용하세요. 처음부터 완벽한 문헌검토를 작성하려고 하지 마세요. 반복적으로 탐색하고, 읽고, 정리하고, 쓰는 순환적 과정이 자연스럽습니다.'
            : 'When starting a literature review, first look for recent review articles or meta-analyses on your topic. These synthesis papers are very useful for quickly grasping the overall landscape of the field. Then, identify the seminal works frequently cited in these reviews and expand your search to the latest research using a "snowballing" strategy. Do not try to write a perfect literature review from the start. The cyclical process of repeatedly searching, reading, organizing, and writing is natural.'}
        </p>
      </TipBox>
    </section>
  );
}

/* ================================================================== */
/*  Section 2 — Search Strategy                                        */
/* ================================================================== */

function SearchStrategySection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>
        <i className="fa-solid fa-magnifying-glass" />
        {isKo ? ' 문헌 탐색 전략' : ' Search Strategy'}
      </h2>

      {/* --- Database selection --- */}
      <h3>{isKo ? '학술 데이터베이스 선택' : 'Selecting Academic Databases'}</h3>
      <p>
        {isKo
          ? '효과적인 문헌 탐색의 첫 번째 단계는 연구 주제와 학문 분야에 적합한 데이터베이스를 선택하는 것입니다. 각 데이터베이스는 고유한 수록 범위와 특성을 가지고 있으므로, 단일 데이터베이스에 의존하면 중요한 문헌을 놓칠 수 있습니다. 최소 2~3개 이상의 데이터베이스를 병행하여 사용하는 것이 권장됩니다.'
          : 'The first step in effective literature searching is selecting databases appropriate for your research topic and discipline. Each database has its own unique coverage and characteristics, so relying on a single database may cause you to miss important literature. Using at least two or three databases in parallel is recommended.'}
      </p>
      <ul>
        <li>
          <strong>PubMed</strong>
          {' — '}
          {isKo
            ? '미국 국립의학도서관(NLM)에서 운영하는 생명과학 및 의학 분야의 대표적 무료 데이터베이스. MEDLINE을 포함하며, MeSH(Medical Subject Headings) 용어를 활용한 정밀 검색이 가능합니다. 의학, 간호학, 보건학, 생명과학 연구에 필수적입니다.'
            : 'A leading free database for biomedical and life sciences operated by the U.S. National Library of Medicine. It includes MEDLINE and enables precise searching using MeSH (Medical Subject Headings) terms. Essential for medical, nursing, public health, and life sciences research.'}
        </li>
        <li>
          <strong>Scopus</strong>
          {' — '}
          {isKo
            ? 'Elsevier에서 운영하는 세계 최대 규모의 초록 및 인용 데이터베이스. 자연과학, 공학, 의학, 사회과학, 인문학 등 광범위한 학문 분야를 포괄합니다. 인용 분석 도구가 강력하며, 연구자 프로필(Scopus Author ID)을 통한 저자 검색이 유용합니다.'
            : 'The world\'s largest abstract and citation database operated by Elsevier. It covers a wide range of disciplines including natural sciences, engineering, medicine, social sciences, and humanities. It offers powerful citation analysis tools, and author searching through Scopus Author ID is particularly useful.'}
        </li>
        <li>
          <strong>Web of Science</strong>
          {' — '}
          {isKo
            ? 'Clarivate에서 운영하는 다학제적 인용 색인 데이터베이스. Science Citation Index(SCI), Social Sciences Citation Index(SSCI), Arts & Humanities Citation Index(A&HCI)를 포함합니다. 인용 추적(cited reference searching)과 h-index 분석에 널리 사용됩니다.'
            : 'A multidisciplinary citation index database operated by Clarivate. It includes Science Citation Index (SCI), Social Sciences Citation Index (SSCI), and Arts & Humanities Citation Index (A&HCI). Widely used for cited reference searching and h-index analysis.'}
        </li>
        <li>
          <strong>RISS</strong>
          {' — '}
          {isKo
            ? '한국교육학술정보원(KERIS)에서 운영하는 국내 최대의 학술정보 서비스. 국내 학위논문, 학술지 논문, 단행본, 연구보고서 등을 종합적으로 검색할 수 있습니다. 한국어로 된 학술 문헌 탐색에 필수적인 데이터베이스입니다.'
            : 'Korea\'s largest academic information service operated by KERIS (Korea Education and Research Information Service). It enables comprehensive searching of domestic theses, journal articles, books, and research reports. It is an essential database for searching Korean-language academic literature.'}
        </li>
        <li>
          <strong>DBpia</strong>
          {' — '}
          {isKo
            ? '누리미디어에서 운영하는 국내 학술지 논문 데이터베이스. 인문학, 사회과학, 자연과학, 예술 등 국내 학술지의 원문을 제공하며, 학회지 중심의 검색에 유용합니다.'
            : 'A domestic journal article database operated by Nurimedia. It provides full-text access to Korean academic journals across humanities, social sciences, natural sciences, and arts, and is useful for society journal-focused searching.'}
        </li>
      </ul>

      {/* --- Keyword strategies --- */}
      <h3>{isKo ? '키워드 전략 수립' : 'Developing Keyword Strategies'}</h3>
      <p>
        {isKo
          ? '효과적인 검색은 적절한 키워드 선정에서 시작됩니다. 연구 주제를 핵심 개념으로 분해하고, 각 개념에 대한 다양한 용어(동의어, 유의어, 관련어, 약어)를 파악하는 것이 중요합니다. 예를 들어, "직무 만족"을 연구한다면 "job satisfaction", "work satisfaction", "employee satisfaction", "occupational contentment" 등 다양한 표현을 고려해야 합니다.'
          : 'Effective searching begins with proper keyword selection. It is important to break down your research topic into core concepts and identify various terms (synonyms, related terms, abbreviations) for each concept. For example, if researching "job satisfaction," you should consider various expressions such as "job satisfaction," "work satisfaction," "employee satisfaction," and "occupational contentment."'}
      </p>
      <p>
        {isKo
          ? 'PICO 프레임워크는 특히 의학 및 보건학 분야에서 검색 전략을 체계화하는 데 유용합니다: P(Population/Patient, 대상), I(Intervention, 중재), C(Comparison, 비교), O(Outcome, 결과). 사회과학에서는 PICo(Population, Interest, Context)가 더 적합할 수 있습니다. 이러한 프레임워크를 활용하면 검색어를 구조적으로 조직할 수 있습니다.'
          : 'The PICO framework is particularly useful for systematizing search strategies in medical and health sciences: P (Population/Patient), I (Intervention), C (Comparison), O (Outcome). In social sciences, PICo (Population, Interest, Context) may be more appropriate. Using such frameworks allows you to organize search terms structurally.'}
      </p>

      {/* --- Boolean operators --- */}
      <h3>{isKo ? '불리언 연산자와 고급 검색' : 'Boolean Operators and Advanced Searching'}</h3>
      <p>
        {isKo
          ? '불리언 연산자(Boolean operators)는 데이터베이스 검색에서 키워드를 논리적으로 결합하는 도구입니다. 세 가지 기본 연산자를 숙지하고 전략적으로 활용해야 합니다:'
          : 'Boolean operators are tools for logically combining keywords in database searches. You must master and strategically use the three basic operators:'}
      </p>
      <ul>
        <li>
          <strong>AND</strong>
          {' — '}
          {isKo
            ? '모든 검색어가 포함된 결과만 반환합니다. 검색 범위를 좁히는 데 사용합니다. 예: "literature review" AND "nursing" — 두 용어가 모두 포함된 결과만 표시됩니다.'
            : 'Returns only results containing all search terms. Used to narrow the search scope. Example: "literature review" AND "nursing" — only results containing both terms are displayed.'}
        </li>
        <li>
          <strong>OR</strong>
          {' — '}
          {isKo
            ? '검색어 중 하나 이상이 포함된 결과를 반환합니다. 동의어나 유의어를 연결하여 검색 범위를 넓히는 데 사용합니다. 예: "job satisfaction" OR "work satisfaction" OR "employee satisfaction"'
            : 'Returns results containing one or more of the search terms. Used to broaden the search scope by connecting synonyms or related terms. Example: "job satisfaction" OR "work satisfaction" OR "employee satisfaction"'}
        </li>
        <li>
          <strong>NOT</strong>
          {' — '}
          {isKo
            ? '특정 검색어를 제외한 결과를 반환합니다. 주의: NOT 연산자는 관련 문헌까지 제외할 위험이 있으므로 신중하게 사용해야 합니다. 예: "anxiety" NOT "medication" — 약물 치료를 다루지 않는 불안 관련 결과만 표시됩니다.'
            : 'Returns results excluding a specific search term. Caution: The NOT operator can risk excluding relevant literature, so use it carefully. Example: "anxiety" NOT "medication" — displays only anxiety-related results that do not address medication treatment.'}
        </li>
      </ul>
      <p>
        {isKo
          ? '추가적인 고급 검색 기법으로는 구문 검색(phrase searching, 큰따옴표 사용), 절단 검색(truncation, 예: educat*로 education, educational, educator 등을 한 번에 검색), 근접 검색(proximity searching, 단어 간 거리 지정), 필드 제한 검색(제목, 초록, 키워드 등 특정 필드로 제한) 등이 있습니다.'
          : 'Additional advanced search techniques include phrase searching (using quotation marks), truncation (e.g., educat* to search education, educational, educator at once), proximity searching (specifying the distance between words), and field-limited searching (restricting to specific fields such as title, abstract, or keywords).'}
      </p>

      {/* --- Inclusion and exclusion criteria --- */}
      <h3>{isKo ? '포함 및 제외 기준 설정' : 'Setting Inclusion and Exclusion Criteria'}</h3>
      <p>
        {isKo
          ? '체계적인 문헌 탐색을 위해서는 검색된 문헌을 선별하는 명확한 기준을 사전에 설정해야 합니다. 포함/제외 기준은 연구 질문과 직접적으로 연결되어야 하며, 일반적으로 다음 요소를 고려합니다:'
          : 'For systematic literature searching, clear criteria for selecting from retrieved literature must be established in advance. Inclusion/exclusion criteria should be directly linked to the research question and typically consider the following factors:'}
      </p>
      <ul>
        <li>{isKo ? '출판 기간 (예: 최근 10년 이내)' : 'Publication period (e.g., within the last 10 years)'}</li>
        <li>{isKo ? '언어 (예: 한국어 및 영어 논문만 포함)' : 'Language (e.g., only Korean and English articles)'}</li>
        <li>{isKo ? '연구 대상 (예: 성인만 포함, 특정 질환 환자 등)' : 'Study population (e.g., adults only, patients with specific conditions)'}</li>
        <li>{isKo ? '연구 설계 유형 (예: 무작위 대조군 실험만 포함)' : 'Study design type (e.g., only randomized controlled trials)'}</li>
        <li>{isKo ? '출판 유형 (예: 동료 심사 학술지 논문만 포함)' : 'Publication type (e.g., only peer-reviewed journal articles)'}</li>
        <li>{isKo ? '주제 관련성 (연구 질문과의 직접적 관련성)' : 'Topic relevance (direct relevance to the research question)'}</li>
      </ul>

      {/* --- Documenting the search --- */}
      <h3>{isKo ? '검색 과정의 문서화' : 'Documenting the Search Process'}</h3>
      <p>
        {isKo
          ? '검색 과정의 투명한 문서화는 문헌검토의 신뢰성을 보장하는 핵심 요소입니다. 체계적 문헌검토에서는 PRISMA 흐름도(flow diagram)를 사용하여 각 단계에서 확인, 선별, 포함된 문헌의 수를 시각적으로 보여줍니다. 서술적 문헌검토에서도 사용한 데이터베이스, 검색어, 검색 기간, 선별 과정을 가능한 한 상세히 기술해야 합니다. 이러한 문서화는 다른 연구자가 동일한 검색을 재현할 수 있게 하며, 심사자와 독자에게 검토의 포괄성과 체계성을 보여줍니다.'
          : 'Transparent documentation of the search process is a key element ensuring the credibility of a literature review. In systematic reviews, a PRISMA flow diagram is used to visually show the number of records identified, screened, and included at each stage. Even in narrative reviews, the databases used, search terms, search periods, and screening process should be described in as much detail as possible. This documentation allows other researchers to reproduce the same search and demonstrates the comprehensiveness and rigor of the review to reviewers and readers.'}
      </p>

      <TipBox type="important" title={isKo ? '검색 전략 팁' : 'Search Strategy Tips'}>
        <p>
          {isKo
            ? '검색 전략을 수립할 때는 도서관 사서(librarian)의 도움을 적극 활용하세요. 특히 체계적 문헌검토를 수행할 때, 전문 사서와의 협업은 검색의 포괄성과 정밀성을 크게 향상시킵니다. 또한 Google Scholar는 보조 도구로 유용하지만, 학술 데이터베이스를 대체할 수 없습니다. Google Scholar는 검색 알고리즘이 투명하지 않고, 동료 심사를 거치지 않은 문헌도 포함되기 때문입니다. 반드시 학술 데이터베이스를 주요 검색 도구로 사용하고, Google Scholar는 보완적으로 활용하세요.'
            : 'When developing search strategies, actively seek help from librarians. Especially when conducting systematic reviews, collaboration with specialist librarians greatly enhances search comprehensiveness and precision. Also, while Google Scholar is useful as a supplementary tool, it cannot replace academic databases. This is because Google Scholar\'s search algorithm is not transparent and includes non-peer-reviewed literature. Always use academic databases as your primary search tools and use Google Scholar as a complement.'}
        </p>
      </TipBox>
    </section>
  );
}

/* ================================================================== */
/*  Section 3 — Critical Reading                                       */
/* ================================================================== */

function CriticalReadingSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>
        <i className="fa-solid fa-glasses" />
        {isKo ? ' 비판적 문헌 읽기' : ' Critical Reading'}
      </h2>

      {/* --- What is critical reading --- */}
      <h3>{isKo ? '비판적 읽기란 무엇인가?' : 'What Is Critical Reading?'}</h3>
      <p>
        {isKo
          ? '비판적 읽기(critical reading)는 학술 논문을 수동적으로 수용하는 것이 아니라, 논문의 주장, 근거, 방법론, 논리적 구조를 능동적으로 분석하고 평가하는 것입니다. 모든 연구에는 강점과 한계가 공존하며, 비판적 읽기는 이 두 측면을 균형 있게 파악하는 능력입니다. 이는 기존 문헌을 단순히 요약하는 것과 진정한 문헌검토를 구분하는 가장 중요한 차이점입니다.'
          : 'Critical reading is not passively accepting academic papers but actively analyzing and evaluating the claims, evidence, methodology, and logical structure of papers. Every study has coexisting strengths and limitations, and critical reading is the ability to identify both aspects in a balanced manner. This is the most important difference that distinguishes a true literature review from merely summarizing existing literature.'}
      </p>
      <p>
        {isKo
          ? '비판적 읽기는 타고난 능력이 아니라 훈련을 통해 발전시킬 수 있는 기술입니다. 처음에는 시간이 많이 걸리지만, 꾸준한 연습을 통해 점차 효율적이고 정확하게 논문을 평가할 수 있게 됩니다. 연구 방법론에 대한 이해가 깊어질수록 비판적 읽기 능력도 함께 향상됩니다.'
          : 'Critical reading is not an innate ability but a skill that can be developed through training. While it takes considerable time at first, consistent practice enables you to evaluate papers more efficiently and accurately over time. As your understanding of research methodology deepens, your critical reading ability improves in tandem.'}
      </p>

      {/* --- Evaluating methodology --- */}
      <h3>{isKo ? '연구 방법론 평가' : 'Evaluating Research Methodology'}</h3>
      <p>
        {isKo
          ? '논문의 방법론을 평가할 때는 다음 질문들을 체계적으로 검토합니다:'
          : 'When evaluating a paper\'s methodology, systematically examine the following questions:'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '연구 설계의 적절성' : 'Appropriateness of Research Design'}</strong>
          {' — '}
          {isKo
            ? '연구 질문에 대답하기에 적합한 연구 설계가 사용되었는가? 예를 들어, 인과관계를 주장하면서 횡단 연구(cross-sectional study) 설계를 사용했다면, 이는 방법론적 한계입니다.'
            : 'Was an appropriate research design used to answer the research question? For example, if causality is claimed but a cross-sectional study design was used, this is a methodological limitation.'}
        </li>
        <li>
          <strong>{isKo ? '표본의 대표성' : 'Sample Representativeness'}</strong>
          {' — '}
          {isKo
            ? '표본 크기가 충분한가? 표본 추출 방법은 적절한가? 연구 대상의 특성이 명확히 기술되었는가? 연구 결과를 일반화할 수 있는 범위는 어디까지인가?'
            : 'Is the sample size sufficient? Is the sampling method appropriate? Are participant characteristics clearly described? To what extent can the findings be generalized?'}
        </li>
        <li>
          <strong>{isKo ? '측정 도구의 타당도와 신뢰도' : 'Validity and Reliability of Measurement Tools'}</strong>
          {' — '}
          {isKo
            ? '사용된 측정 도구(설문지, 검사, 척도 등)의 타당도(validity)와 신뢰도(reliability)가 검증되었는가? 해당 연구 맥락에서 적절한 도구가 선택되었는가?'
            : 'Have the validity and reliability of the measurement tools (questionnaires, tests, scales, etc.) been verified? Were appropriate tools selected for the research context?'}
        </li>
        <li>
          <strong>{isKo ? '분석 방법의 적합성' : 'Appropriateness of Analysis Methods'}</strong>
          {' — '}
          {isKo
            ? '데이터의 특성과 연구 질문에 적합한 통계 분석 또는 질적 분석 방법이 사용되었는가? 분석의 가정(assumptions)이 충족되었는가?'
            : 'Were statistical or qualitative analysis methods appropriate for the data characteristics and research question used? Were the assumptions of the analysis met?'}
        </li>
      </ul>

      {/* --- Identifying bias --- */}
      <h3>{isKo ? '편향(bias) 식별하기' : 'Identifying Bias'}</h3>
      <p>
        {isKo
          ? '편향(bias)은 연구 결과를 체계적으로 왜곡시키는 오류입니다. 문헌을 비판적으로 읽을 때 다음과 같은 주요 편향 유형을 확인해야 합니다:'
          : 'Bias is an error that systematically distorts research results. When critically reading literature, you should check for the following major types of bias:'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '선택 편향 (Selection Bias)' : 'Selection Bias'}</strong>
          {' — '}
          {isKo
            ? '연구 대상자의 선정이나 배정 과정에서 발생하는 편향. 무작위 배정이 적절히 이루어지지 않았거나, 특정 특성을 가진 사람들이 과대/과소 대표된 경우 발생합니다.'
            : 'Bias arising from the selection or allocation of study participants. Occurs when randomization is not properly conducted or when people with specific characteristics are over- or under-represented.'}
        </li>
        <li>
          <strong>{isKo ? '수행 편향 (Performance Bias)' : 'Performance Bias'}</strong>
          {' — '}
          {isKo
            ? '연구 참여자나 연구자가 집단 배정을 알고 있어서 행동이 달라지는 경우. 이중 눈가림(double-blinding)이 수행되지 않은 실험 연구에서 특히 주의해야 합니다.'
            : 'Occurs when participants or researchers behave differently because they know the group assignment. Requires particular attention in experimental studies where double-blinding was not performed.'}
        </li>
        <li>
          <strong>{isKo ? '출판 편향 (Publication Bias)' : 'Publication Bias'}</strong>
          {' — '}
          {isKo
            ? '통계적으로 유의한 결과를 보고하는 연구가 그렇지 않은 연구보다 출판될 가능성이 높은 현상. 문헌검토에서 출판 편향은 전체적인 증거의 그림을 왜곡할 수 있습니다.'
            : 'The phenomenon where studies reporting statistically significant results are more likely to be published than those that do not. Publication bias can distort the overall picture of evidence in a literature review.'}
        </li>
        <li>
          <strong>{isKo ? '확인 편향 (Confirmation Bias)' : 'Confirmation Bias'}</strong>
          {' — '}
          {isKo
            ? '연구자가 자신의 가설이나 기대를 확인하는 방향으로 데이터를 해석하거나, 기대에 맞지 않는 결과를 무시하는 경향. 연구자 자신의 문헌검토에서도 이 편향에 주의해야 합니다.'
            : 'The tendency of researchers to interpret data in ways that confirm their hypotheses or expectations, or to ignore results that do not match expectations. You should also be aware of this bias in your own literature review.'}
        </li>
      </ul>

      {/* --- Evaluating evidence quality --- */}
      <h3>{isKo ? '근거의 질 평가' : 'Evaluating Evidence Quality'}</h3>
      <p>
        {isKo
          ? '모든 연구가 동일한 수준의 증거를 제공하는 것은 아닙니다. 근거 기반 의학(EBM)에서는 증거의 피라미드(hierarchy of evidence) 개념을 사용하여 연구 설계에 따른 증거의 강도를 구분합니다. 일반적으로 체계적 문헌검토/메타분석이 가장 높은 수준의 증거를 제공하고, 그 다음으로 무작위 대조 실험(RCT), 코호트 연구, 환자-대조군 연구, 횡단 연구, 사례 보고의 순서로 이어집니다.'
          : 'Not all studies provide the same level of evidence. Evidence-based medicine (EBM) uses the hierarchy of evidence concept to distinguish the strength of evidence by study design. Generally, systematic reviews/meta-analyses provide the highest level of evidence, followed by randomized controlled trials (RCTs), cohort studies, case-control studies, cross-sectional studies, and case reports.'}
      </p>
      <p>
        {isKo
          ? '다만 이 위계는 절대적인 것이 아니며, 잘 설계된 관찰 연구가 부실한 RCT보다 더 신뢰할 수 있는 증거를 제공할 수 있습니다. 중요한 것은 개별 연구의 내적 타당도(internal validity)와 외적 타당도(external validity)를 구체적으로 평가하는 것입니다. CASP(Critical Appraisal Skills Programme) 체크리스트, Joanna Briggs Institute(JBI) 비판적 평가 도구, GRADE(Grading of Recommendations Assessment, Development and Evaluation) 체계 등을 활용하면 체계적인 질 평가가 가능합니다.'
          : 'However, this hierarchy is not absolute, and a well-designed observational study can provide more reliable evidence than a poorly conducted RCT. What matters is specifically evaluating each study\'s internal validity and external validity. Using tools such as the CASP (Critical Appraisal Skills Programme) checklist, Joanna Briggs Institute (JBI) critical appraisal tools, and GRADE (Grading of Recommendations Assessment, Development and Evaluation) framework enables systematic quality assessment.'}
      </p>

      {/* --- Reading strategies --- */}
      <h3>{isKo ? '효율적인 읽기 전략' : 'Efficient Reading Strategies'}</h3>
      <p>
        {isKo
          ? '대량의 문헌을 효율적으로 처리하기 위해서는 체계적인 읽기 전략이 필요합니다. 모든 논문을 처음부터 끝까지 정독할 필요는 없습니다. 다음과 같은 단계적 접근법을 권장합니다:'
          : 'A systematic reading strategy is needed to efficiently process large volumes of literature. You do not need to read every paper from beginning to end. The following staged approach is recommended:'}
      </p>
      <ol>
        <li>
          <strong>{isKo ? '1단계: 훑어읽기 (Skimming)' : 'Stage 1: Skimming'}</strong>
          {' — '}
          {isKo
            ? '제목, 초록, 키워드, 결론을 빠르게 확인하여 해당 논문이 연구 주제와 관련이 있는지 판단합니다. 이 단계에서 관련 없는 문헌을 신속하게 걸러냅니다.'
            : 'Quickly check the title, abstract, keywords, and conclusion to determine if the paper is relevant to your research topic. Rapidly filter out irrelevant literature at this stage.'}
        </li>
        <li>
          <strong>{isKo ? '2단계: 선별적 읽기 (Selective Reading)' : 'Stage 2: Selective Reading'}</strong>
          {' — '}
          {isKo
            ? '관련성이 확인된 논문의 서론, 방법, 결과의 핵심 내용을 중점적으로 읽습니다. 연구 질문, 방법론, 주요 발견을 메모합니다.'
            : 'Focus on reading the key content of the introduction, methods, and results of papers confirmed as relevant. Take notes on research questions, methodology, and key findings.'}
        </li>
        <li>
          <strong>{isKo ? '3단계: 정독 (In-depth Reading)' : 'Stage 3: In-depth Reading'}</strong>
          {' — '}
          {isKo
            ? '핵심 문헌으로 판단된 논문을 전체적으로 꼼꼼하게 읽으며, 방법론의 세부 사항, 결과의 해석, 한계점, 후속 연구 제안 등을 비판적으로 분석합니다.'
            : 'Carefully read the entire paper for studies identified as key literature, critically analyzing methodological details, interpretation of results, limitations, and suggestions for future research.'}
        </li>
      </ol>

      <TipBox type="warning" title={isKo ? '비판적 읽기의 함정' : 'Pitfalls of Critical Reading'}>
        <p>
          {isKo
            ? '비판적 읽기에서 가장 흔한 함정 중 하나는 자신의 가설이나 기대에 부합하는 연구만 긍정적으로 평가하고, 그렇지 않은 연구를 지나치게 엄격하게 비판하는 것입니다. 진정한 비판적 읽기는 모든 연구에 동일한 기준을 적용하는 것입니다. 자신의 가설에 반하는 증거를 발견했을 때, 그것을 회피하지 말고 정직하게 분석하고 논의하세요. 이러한 자세가 학문적 성숙의 지표입니다. 또한 단일 연구의 결과에 과도한 의미를 부여하지 마세요. 여러 연구의 결과를 종합적으로 고려하는 것이 더 신뢰할 수 있는 결론에 도달하는 방법입니다.'
            : 'One of the most common pitfalls in critical reading is positively evaluating only studies that support your hypothesis or expectations while excessively criticizing those that do not. True critical reading applies the same standards to all studies. When you find evidence contradicting your hypothesis, do not avoid it but honestly analyze and discuss it. This attitude is an indicator of academic maturity. Also, do not assign excessive significance to the results of a single study. Considering the results of multiple studies comprehensively is the way to reach more reliable conclusions.'}
        </p>
      </TipBox>
    </section>
  );
}

/* ================================================================== */
/*  Section 4 — Organizing Literature                                  */
/* ================================================================== */

function OrganizingSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>
        <i className="fa-solid fa-folder-tree" />
        {isKo ? ' 문헌 정리와 분류' : ' Organizing Literature'}
      </h2>

      {/* --- Matrix method --- */}
      <h3>{isKo ? '문헌 매트릭스 방법' : 'The Literature Matrix Method'}</h3>
      <p>
        {isKo
          ? '문헌 매트릭스(literature matrix)는 수집한 문헌의 정보를 체계적으로 정리하는 효과적인 도구입니다. Garrard(2017)가 체계화한 이 방법은 스프레드시트(Excel, Google Sheets 등)를 활용하여 각 논문의 핵심 정보를 행과 열로 구조화합니다. 행(row)에는 개별 논문을 배치하고, 열(column)에는 분석 항목(저자/연도, 연구 목적, 연구 설계, 표본 특성, 주요 변수, 측정 도구, 핵심 결과, 한계점, 자신의 연구와의 관련성 등)을 배치합니다.'
          : 'The literature matrix is an effective tool for systematically organizing information from collected literature. This method, systematized by Garrard (2017), uses spreadsheets (Excel, Google Sheets, etc.) to structure key information from each paper into rows and columns. Individual papers are placed in rows, and analysis categories (author/year, research purpose, study design, sample characteristics, key variables, measurement tools, main findings, limitations, relevance to your research, etc.) are placed in columns.'}
      </p>
      <p>
        {isKo
          ? '문헌 매트릭스의 장점은 다음과 같습니다: (1) 대량의 문헌 정보를 한눈에 비교할 수 있습니다, (2) 연구 간 패턴, 공통점, 차이점을 쉽게 파악할 수 있습니다, (3) 연구 공백(gap)을 시각적으로 확인할 수 있습니다, (4) 문헌검토 작성 시 필요한 정보를 빠르게 찾을 수 있습니다. 매트릭스를 만드는 데 시간이 걸리지만, 이후 분석과 작성 과정에서 투자한 시간을 충분히 회수할 수 있습니다.'
          : 'The advantages of a literature matrix include: (1) comparing large amounts of literature information at a glance, (2) easily identifying patterns, commonalities, and differences across studies, (3) visually identifying research gaps, and (4) quickly finding needed information when writing the literature review. While creating the matrix takes time, the investment is more than recovered during the subsequent analysis and writing process.'}
      </p>

      {/* --- Thematic organization --- */}
      <h3>{isKo ? '주제별 분류 (Thematic Organization)' : 'Thematic Organization'}</h3>
      <p>
        {isKo
          ? '주제별 분류는 문헌을 개별 논문 단위가 아닌 주제(theme) 또는 개념(concept) 중심으로 묶는 방법입니다. 이 접근법은 문헌검토를 개별 논문의 요약 나열이 아닌, 주제에 대한 통합적 분석으로 발전시키는 데 핵심적입니다. 예를 들어, "조직 몰입"에 관한 문헌을 검토한다면, "조직 몰입의 선행 요인", "조직 몰입과 성과의 관계", "조직 몰입 측정 방법의 발전", "문화적 맥락에 따른 차이" 등의 주제로 분류할 수 있습니다.'
          : 'Thematic organization groups literature by themes or concepts rather than by individual papers. This approach is essential for developing the literature review from a list of individual paper summaries into an integrated thematic analysis. For example, when reviewing literature on "organizational commitment," you could categorize it into themes such as "antecedents of organizational commitment," "relationship between commitment and performance," "evolution of commitment measurement methods," and "differences across cultural contexts."'}
      </p>
      <p>
        {isKo
          ? '주제를 도출하는 방법으로는 (1) 반복적으로 등장하는 키워드와 개념을 포스트잇이나 마인드맵으로 정리하는 방법, (2) 문헌 매트릭스에서 유사한 연구 목적이나 결과를 가진 논문을 그룹화하는 방법, (3) 해당 분야의 주요 이론이나 모델의 구성 요소를 주제 분류 기준으로 활용하는 방법 등이 있습니다.'
          : 'Methods for deriving themes include: (1) organizing repeatedly appearing keywords and concepts using sticky notes or mind maps, (2) grouping papers with similar research purposes or findings in the literature matrix, and (3) using components of major theories or models in the field as criteria for thematic classification.'}
      </p>

      {/* --- Chronological vs conceptual --- */}
      <h3>{isKo ? '시간순 vs 개념적 구조화' : 'Chronological vs. Conceptual Structuring'}</h3>
      <p>
        {isKo
          ? '문헌을 구조화하는 두 가지 주요 접근법은 시간순(chronological) 구조화와 개념적(conceptual) 구조화입니다. 시간순 구조화는 연구의 역사적 발전 과정을 보여주는 데 적합합니다. 특정 이론이나 개념이 어떻게 발전해 왔는지를 설명할 때, 또는 연구 방법론의 변화 추이를 보여줄 때 효과적입니다. 그러나 단순히 논문을 출판 연도 순서로 나열하는 것은 피해야 합니다.'
          : 'Two main approaches to structuring literature are chronological and conceptual. Chronological structuring is suitable for showing the historical development of research. It is effective when explaining how a specific theory or concept has evolved or when showing trends in methodological changes. However, simply listing papers in order of publication date should be avoided.'}
      </p>
      <p>
        {isKo
          ? '개념적 구조화는 핵심 개념, 이론, 주제를 중심으로 문헌을 조직하는 방법으로, 대부분의 문헌검토에서 더 권장되는 접근법입니다. 이 방법은 연구자의 분석적 사고를 더 효과적으로 보여주며, 서로 다른 시기의 연구를 하나의 주제 아래에서 비교하고 종합할 수 있게 합니다. 실제로는 두 접근법을 혼합하여 사용하는 경우가 많습니다. 예를 들어, 전체적으로는 개념적 구조를 따르되, 특정 주제 내에서는 시간순으로 연구의 발전 과정을 서술할 수 있습니다.'
          : 'Conceptual structuring organizes literature around core concepts, theories, and themes, and is the more recommended approach for most literature reviews. This method more effectively demonstrates the researcher\'s analytical thinking and allows comparison and synthesis of studies from different periods under a single theme. In practice, a mixture of both approaches is often used. For example, following a conceptual structure overall while describing the development of research chronologically within specific topics.'}
      </p>

      {/* --- Reference managers --- */}
      <h3>{isKo ? '참고문헌 관리 소프트웨어' : 'Reference Management Software'}</h3>
      <p>
        {isKo
          ? '참고문헌 관리 소프트웨어(reference manager)는 문헌의 수집, 정리, 인용, 참고문헌 목록 생성을 자동화하여 연구자의 생산성을 크게 향상시킵니다. 주요 도구의 특징을 비교하면 다음과 같습니다:'
          : 'Reference management software dramatically improves researcher productivity by automating literature collection, organization, citation, and bibliography generation. Key tools are compared as follows:'}
      </p>
      <ul>
        <li>
          <strong>Zotero</strong>
          {' — '}
          {isKo
            ? '오픈소스 무료 프로그램으로, 웹 브라우저 확장 기능을 통해 논문 정보를 한 번의 클릭으로 저장할 수 있습니다. 다양한 인용 스타일(CSL)을 지원하며, Word, Google Docs, LibreOffice와 통합됩니다. 그룹 라이브러리 기능으로 공동 연구에도 활용할 수 있습니다. 무료 저장 공간(300MB)이 제한적이지만, 유료 플랜이나 WebDAV를 통해 확장 가능합니다.'
            : 'An open-source free program that saves paper information with a single click through a web browser extension. It supports various citation styles (CSL) and integrates with Word, Google Docs, and LibreOffice. Group library features make it useful for collaborative research. Free storage (300MB) is limited but expandable through paid plans or WebDAV.'}
        </li>
        <li>
          <strong>Mendeley</strong>
          {' — '}
          {isKo
            ? 'Elsevier에서 운영하는 참고문헌 관리 도구이자 학술 소셜 네트워크. PDF 주석 기능, 문헌 추천 기능, 연구자 네트워킹 기능을 제공합니다. 무료 계정으로 2GB의 클라우드 저장 공간을 제공하며, Scopus와의 연동이 원활합니다.'
            : 'A reference management tool and academic social network operated by Elsevier. It provides PDF annotation, literature recommendation, and researcher networking features. The free account offers 2GB of cloud storage, and integration with Scopus is seamless.'}
        </li>
        <li>
          <strong>EndNote</strong>
          {' — '}
          {isKo
            ? 'Clarivate에서 개발한 상용 소프트웨어로, 가장 오랜 역사와 넓은 사용자 기반을 가지고 있습니다. 대규모 라이브러리 관리에 강점이 있으며, Web of Science와의 직접 연동이 가능합니다. 기관 라이선스를 통해 제공되는 경우가 많으며, 고급 검색과 그룹 관리 기능이 우수합니다.'
            : 'Commercial software developed by Clarivate with the longest history and widest user base. It excels at large-scale library management and offers direct integration with Web of Science. Often provided through institutional licenses, it has excellent advanced search and group management features.'}
        </li>
      </ul>

      {/* --- Annotation and notes --- */}
      <h3>{isKo ? '주석 달기와 메모 전략' : 'Annotation and Note-Taking Strategies'}</h3>
      <p>
        {isKo
          ? '효과적인 문헌 정리를 위해서는 논문을 읽으면서 체계적으로 주석을 달고 메모를 작성하는 습관이 중요합니다. 각 논문에 대해 다음 사항을 기록하는 것을 권장합니다: (1) 핵심 주장과 발견의 요약(1-2문장), (2) 방법론의 강점과 한계, (3) 자신의 연구와의 관련성과 활용 방안, (4) 다른 논문과의 연결점(동의, 반박, 확장), (5) 직접 인용할 만한 핵심 문장(페이지 번호 포함). 이러한 메모는 이후 문헌검토를 작성할 때 소중한 자원이 됩니다.'
          : 'For effective literature organization, the habit of systematically annotating and taking notes while reading papers is important. For each paper, it is recommended to record: (1) a summary of key arguments and findings (1-2 sentences), (2) strengths and limitations of the methodology, (3) relevance and potential use for your research, (4) connections with other papers (agreement, contradiction, extension), and (5) key sentences worth directly quoting (with page numbers). These notes become valuable resources when writing the literature review later.'}
      </p>

      <TipBox type="tip" title={isKo ? '디지털 정리 전략' : 'Digital Organization Strategy'}>
        <p>
          {isKo
            ? '참고문헌 관리 소프트웨어를 선택할 때는 자신의 연구 환경과 필요에 맞는 도구를 선택하세요. 처음에는 무료이고 접근성이 좋은 Zotero로 시작하는 것을 추천합니다. 어떤 도구를 선택하든, 처음부터 일관된 태그(tag) 체계와 폴더 구조를 만들어 두면 문헌이 수백 편으로 늘어났을 때도 효율적으로 관리할 수 있습니다. 또한 Zotero의 ZotFile 플러그인이나 Notion, Obsidian 같은 노트 앱과 연동하면 더욱 강력한 지식 관리 체계를 구축할 수 있습니다.'
            : 'When choosing reference management software, select a tool that fits your research environment and needs. Starting with Zotero, which is free and accessible, is recommended for beginners. Whichever tool you choose, establishing a consistent tag system and folder structure from the beginning allows efficient management even when your literature grows to hundreds of papers. Additionally, integrating with Zotero\'s ZotFile plugin or note apps like Notion or Obsidian can build an even more powerful knowledge management system.'}
        </p>
      </TipBox>
    </section>
  );
}

/* ================================================================== */
/*  Section 5 — Writing the Review                                     */
/* ================================================================== */

function WritingReviewSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>
        <i className="fa-solid fa-pen-fancy" />
        {isKo ? ' 문헌검토 작성법' : ' Writing the Review'}
      </h2>

      {/* --- Structure of a literature review --- */}
      <h3>{isKo ? '문헌검토의 구조' : 'Structure of the Literature Review'}</h3>
      <p>
        {isKo
          ? '잘 구성된 문헌검토는 명확한 구조를 가지고 있어야 합니다. 독립적인 리뷰 논문이든 학위논문의 한 장이든, 일반적으로 다음과 같은 구성 요소를 포함합니다:'
          : 'A well-organized literature review must have a clear structure. Whether as an independent review article or a chapter in a thesis, it generally includes the following components:'}
      </p>
      <ol>
        <li>
          <strong>{isKo ? '도입부' : 'Introduction'}</strong>
          {' — '}
          {isKo
            ? '문헌검토의 범위와 목적을 명시합니다. 왜 이 주제의 문헌검토가 필요한지, 어떤 질문에 답하려고 하는지, 검토의 범위는 어디까지인지를 독자에게 안내합니다. 검토의 조직 방식(주제별, 시간순 등)을 미리 제시하면 독자의 이해를 돕습니다.'
            : 'States the scope and purpose of the literature review. It guides readers on why a literature review on this topic is needed, what questions it seeks to answer, and what the scope of the review is. Previewing the organizational approach (thematic, chronological, etc.) helps reader comprehension.'}
        </li>
        <li>
          <strong>{isKo ? '본문 (주제별 섹션)' : 'Body (Thematic Sections)'}</strong>
          {' — '}
          {isKo
            ? '핵심 주제별로 구성된 여러 섹션으로 이루어집니다. 각 섹션은 하위 주제에 대한 기존 연구를 분석하고 종합하며, 연구 간의 관계, 합의점, 논쟁점, 공백을 논의합니다. 단순한 논문별 요약이 아닌, 주제 중심의 통합적 서술이 되어야 합니다.'
            : 'Comprises multiple sections organized by core themes. Each section analyzes and synthesizes existing research on sub-topics, discussing relationships between studies, points of consensus, areas of debate, and gaps. It should be an integrated thematic narrative, not a paper-by-paper summary.'}
        </li>
        <li>
          <strong>{isKo ? '결론' : 'Conclusion'}</strong>
          {' — '}
          {isKo
            ? '검토한 문헌에서 도출된 핵심 발견과 통찰을 종합합니다. 현재 지식의 상태를 요약하고, 확인된 연구 공백을 명시하며, 이를 바탕으로 자신의 연구가 어떤 기여를 할 것인지를 논증합니다.'
            : 'Synthesizes the key findings and insights derived from the reviewed literature. Summarizes the current state of knowledge, identifies confirmed research gaps, and argues how your research will contribute based on these findings.'}
        </li>
      </ol>

      {/* --- Synthesis vs summary --- */}
      <h3>{isKo ? '종합(Synthesis) vs 요약(Summary)' : 'Synthesis vs. Summary'}</h3>
      <p>
        {isKo
          ? '문헌검토에서 가장 흔한 실수는 개별 논문을 하나씩 요약하는 것에 그치는 것입니다. "A는 ~를 발견했다. B는 ~를 주장했다. C는 ~를 보고했다."와 같은 나열식 서술은 요약(summary)에 불과합니다. 반면, 종합(synthesis)은 여러 연구의 결과를 연결하고 비교하여 더 큰 그림을 그리는 것입니다.'
          : 'The most common mistake in literature reviews is merely summarizing individual papers one by one. A listing approach like "A found that... B argued that... C reported that..." is merely a summary. In contrast, synthesis connects and compares findings from multiple studies to paint a bigger picture.'}
      </p>
      <p>
        {isKo
          ? '효과적인 종합의 예를 들어보겠습니다. 요약 방식: "Kim(2020)은 온라인 학습이 효과적이라고 보고했다. Lee(2021)는 혼합 학습이 더 효과적이라고 주장했다. Park(2022)은 면대면 학습을 선호하는 학생이 많다고 보고했다." 종합 방식: "교수 방식의 효과에 관한 연구들은 일관되지 않은 결과를 보여주고 있다. 온라인 학습의 효과를 지지하는 연구(Kim, 2020)가 있는 반면, 혼합 학습 방식이 더 효과적이라는 증거(Lee, 2021)도 제시되었다. 이러한 차이는 학습 맥락과 학습자 특성에 따라 최적의 교수법이 달라질 수 있음을 시사한다(Park, 2022)."'
          : 'Here is an example of effective synthesis. Summary approach: "Kim (2020) reported that online learning is effective. Lee (2021) argued that blended learning is more effective. Park (2022) reported that many students prefer face-to-face learning." Synthesis approach: "Research on the effectiveness of teaching methods shows inconsistent results. While some studies support the effectiveness of online learning (Kim, 2020), evidence has also been presented that blended learning is more effective (Lee, 2021). These differences suggest that optimal teaching methods may vary depending on the learning context and learner characteristics (Park, 2022)."'}
      </p>

      {/* --- Identifying and articulating gaps --- */}
      <h3>{isKo ? '연구 공백 식별과 표현' : 'Identifying and Articulating Research Gaps'}</h3>
      <p>
        {isKo
          ? '문헌검토의 가장 중요한 기능 중 하나는 기존 연구에서 아직 충분히 다루어지지 않은 공백(gap)을 식별하는 것입니다. 연구 공백은 다양한 유형으로 나타납니다:'
          : 'One of the most important functions of a literature review is identifying gaps not yet sufficiently addressed in existing research. Research gaps appear in various forms:'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '주제적 공백' : 'Topical Gap'}</strong>
          {' — '}
          {isKo
            ? '특정 주제나 변수의 관계에 대한 연구가 아직 수행되지 않은 경우'
            : 'When research on a specific topic or the relationship between variables has not yet been conducted'}
        </li>
        <li>
          <strong>{isKo ? '방법론적 공백' : 'Methodological Gap'}</strong>
          {' — '}
          {isKo
            ? '특정 방법론을 활용한 연구가 부족한 경우 (예: 대부분 양적 연구만 존재하고 질적 연구가 부족한 경우)'
            : 'When research using specific methodologies is lacking (e.g., mostly quantitative studies exist while qualitative research is insufficient)'}
        </li>
        <li>
          <strong>{isKo ? '맥락적 공백' : 'Contextual Gap'}</strong>
          {' — '}
          {isKo
            ? '특정 맥락(문화, 지역, 인구 집단)에서의 연구가 부족한 경우'
            : 'When research in specific contexts (cultures, regions, populations) is lacking'}
        </li>
        <li>
          <strong>{isKo ? '이론적 공백' : 'Theoretical Gap'}</strong>
          {' — '}
          {isKo
            ? '기존 이론이 특정 현상을 충분히 설명하지 못하거나, 이론 간 통합이 시도되지 않은 경우'
            : 'When existing theories do not sufficiently explain certain phenomena, or when integration between theories has not been attempted'}
        </li>
        <li>
          <strong>{isKo ? '결과의 불일치' : 'Conflicting Results'}</strong>
          {' — '}
          {isKo
            ? '기존 연구들이 서로 모순되는 결과를 보고하여 추가적인 검증이 필요한 경우'
            : 'When existing studies report contradictory results, requiring additional verification'}
        </li>
      </ul>

      {/* --- Writing transitions --- */}
      <h3>{isKo ? '전환 표현과 논리적 흐름' : 'Transitions and Logical Flow'}</h3>
      <p>
        {isKo
          ? '문헌검토의 각 섹션과 단락이 논리적으로 연결되어야 합니다. 적절한 전환 표현(transition phrases)은 글의 흐름을 자연스럽게 만들고, 독자가 논의의 진행 방향을 파악하는 데 도움을 줍니다. 다음은 문헌검토에서 자주 사용되는 전환 표현입니다:'
          : 'Each section and paragraph of the literature review should be logically connected. Appropriate transition phrases create a natural flow and help readers follow the direction of the discussion. The following are commonly used transition expressions in literature reviews:'}
      </p>
      <ul>
        <li>{isKo ? '유사성 표현: "마찬가지로(Similarly)", "같은 맥락에서(In the same vein)", "이와 일관되게(Consistent with this)"' : 'Similarity: "Similarly," "In the same vein," "Consistent with this," "Along these lines"'}</li>
        <li>{isKo ? '대조 표현: "그러나(However)", "반면에(In contrast)", "이와 달리(Conversely)", "한편(On the other hand)"' : 'Contrast: "However," "In contrast," "Conversely," "On the other hand," "Nevertheless"'}</li>
        <li>{isKo ? '추가 표현: "더 나아가(Furthermore)", "또한(Moreover)", "이에 더하여(In addition)"' : 'Addition: "Furthermore," "Moreover," "In addition," "Building on this"'}</li>
        <li>{isKo ? '인과 표현: "따라서(Therefore)", "결과적으로(Consequently)", "이로 인해(As a result)"' : 'Causation: "Therefore," "Consequently," "As a result," "This suggests that"'}</li>
        <li>{isKo ? '요약 표현: "요약하면(In summary)", "종합하면(Taken together)", "전체적으로(Overall)"' : 'Summary: "In summary," "Taken together," "Overall," "Collectively, these findings"'}</li>
      </ul>

      {/* --- Maintaining your voice --- */}
      <h3>{isKo ? '자신의 학술적 목소리 유지하기' : 'Maintaining Your Scholarly Voice'}</h3>
      <p>
        {isKo
          ? '문헌검토는 기존 연구를 보고하는 것이지만, 그것이 단순한 전달에 그쳐서는 안 됩니다. 연구자 자신의 분석적 목소리(voice)가 글 전체에 관통해야 합니다. 이는 기존 연구에 대한 비판적 평가, 연구 간 관계에 대한 해석, 그리고 전체적인 논의의 방향 설정을 통해 나타납니다. "~라고 보고했다(reported that)"보다는 "~라는 증거를 제시했다(provided evidence that)", "~임을 입증했다(demonstrated that)", "~라고 주장했으나, 이는 ~의 한계가 있다(argued that... however, this is limited by...)" 등의 표현을 사용하면 연구자의 비판적 시각이 더 잘 드러납니다.'
          : 'While a literature review reports on existing research, it should not be mere transmission. The researcher\'s own analytical voice must permeate the entire text. This manifests through critical evaluation of existing research, interpretation of relationships between studies, and setting the overall direction of discussion. Using expressions like "provided evidence that," "demonstrated that," or "argued that... however, this is limited by..." rather than simply "reported that" better reveals the researcher\'s critical perspective.'}
      </p>
      <p>
        {isKo
          ? '또한 보고 동사(reporting verbs)의 선택은 해당 연구에 대한 자신의 평가를 미묘하게 전달합니다. "주장했다(claimed)"는 다소 회의적인 태도를, "입증했다(demonstrated)"는 강한 동의를, "제안했다(suggested)"는 잠정적 수용을 암시합니다. 이러한 동사의 뉘앙스를 이해하고 의도적으로 활용하면 더 정교한 학술적 글쓰기가 가능합니다.'
          : 'Additionally, the choice of reporting verbs subtly conveys your evaluation of the research. "Claimed" implies a somewhat skeptical attitude, "demonstrated" implies strong agreement, and "suggested" implies tentative acceptance. Understanding and intentionally utilizing these verb nuances enables more sophisticated academic writing.'}
      </p>

      <TipBox type="important" title={isKo ? '문헌검토 작성의 황금률' : 'Golden Rules of Writing Literature Reviews'}>
        <p>
          {isKo
            ? '(1) 논문별 나열이 아닌 주제별 종합으로 작성하세요. (2) 모든 주장에는 근거를 제시하되, 자신의 분석적 목소리를 잃지 마세요. (3) 연구의 강점뿐 아니라 한계도 공정하게 논의하세요. (4) 문헌검토의 마지막은 항상 연구 공백의 식별과 자신의 연구가 이 공백을 어떻게 메울 것인지에 대한 논증으로 끝내세요. (5) 초안을 작성한 후에는 반드시 시간을 두고 다시 읽으며 수정하세요. 좋은 글쓰기는 곧 좋은 다시쓰기(rewriting)입니다.'
            : '(1) Write thematic syntheses, not paper-by-paper summaries. (2) Provide evidence for all claims while maintaining your analytical voice. (3) Discuss both strengths and limitations of studies fairly. (4) Always end the literature review with identifying research gaps and arguing how your study will fill them. (5) After drafting, always revisit and revise after some time. Good writing is good rewriting.'}
        </p>
      </TipBox>
    </section>
  );
}

/* ================================================================== */
/*  Section 6 — Citation Management                                    */
/* ================================================================== */

function CitationSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>
        <i className="fa-solid fa-quote-right" />
        {isKo ? ' 인용과 참고문헌 관리' : ' Citation Management'}
      </h2>

      {/* --- Citation styles --- */}
      <h3>{isKo ? '주요 인용 스타일' : 'Major Citation Styles'}</h3>
      <p>
        {isKo
          ? '학술 논문에서 인용 스타일(citation style)은 학문 분야와 학술지의 요구에 따라 달라집니다. 주요 인용 스타일의 특징을 이해하고, 자신의 분야에서 사용되는 스타일을 정확히 숙지해야 합니다:'
          : 'Citation styles in academic papers vary depending on the discipline and journal requirements. You must understand the characteristics of major citation styles and master the one used in your field:'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? 'APA 스타일 (American Psychological Association)' : 'APA Style (American Psychological Association)'}</strong>
          {' — '}
          {isKo
            ? '사회과학, 교육학, 심리학, 간호학 등에서 가장 널리 사용됩니다. 저자-연도(author-date) 체계를 사용하며, 본문 내 인용은 (저자, 연도) 형식입니다. 예: (Kim, 2023) 또는 Kim(2023)에 따르면. 현재 APA 7판이 최신판으로, 6판에서 여러 변경 사항이 있으므로 주의가 필요합니다. DOI는 가능한 한 항상 포함하며, https://doi.org/ 형식을 사용합니다.'
            : 'Most widely used in social sciences, education, psychology, nursing, etc. Uses an author-date system with in-text citations in the format (Author, Year). Example: (Kim, 2023) or According to Kim (2023). The current APA 7th edition has several changes from the 6th edition, so caution is needed. DOIs should always be included when available, using the https://doi.org/ format.'}
        </li>
        <li>
          <strong>{isKo ? 'MLA 스타일 (Modern Language Association)' : 'MLA Style (Modern Language Association)'}</strong>
          {' — '}
          {isKo
            ? '인문학, 문학, 언어학, 문화 연구 등에서 주로 사용됩니다. 저자-페이지(author-page) 체계를 사용하며, 본문 내 인용은 (저자 페이지번호) 형식입니다. 예: (Kim 45) 또는 Kim은 "직접 인용"이라고 밝혔다(45). 참고문헌 목록의 명칭은 "Works Cited"입니다. MLA 9판이 최신판입니다.'
            : 'Primarily used in humanities, literature, linguistics, and cultural studies. Uses an author-page system with in-text citations in the format (Author Page). Example: (Kim 45) or Kim stated "direct quote" (45). The bibliography is titled "Works Cited." The MLA 9th edition is the current version.'}
        </li>
        <li>
          <strong>{isKo ? 'Chicago 스타일 (Chicago Manual of Style)' : 'Chicago Style (Chicago Manual of Style)'}</strong>
          {' — '}
          {isKo
            ? '역사학, 예술, 일부 사회과학 분야에서 사용됩니다. 두 가지 방식이 있습니다: (1) 각주-참고문헌(Notes-Bibliography) 체계 — 인문학에서 주로 사용. 각주(footnote)나 미주(endnote)로 인용하고, 참고문헌(Bibliography)을 작성합니다. (2) 저자-연도(Author-Date) 체계 — 과학 분야에서 사용. APA와 유사하지만 세부 형식이 다릅니다.'
            : 'Used in history, arts, and some social science fields. It has two systems: (1) Notes-Bibliography system — primarily used in humanities. Cites using footnotes or endnotes with a Bibliography. (2) Author-Date system — used in sciences. Similar to APA but with different formatting details.'}
        </li>
      </ul>

      {/* --- In-text citation --- */}
      <h3>{isKo ? '본문 내 인용 (In-Text Citation)' : 'In-Text Citation'}</h3>
      <p>
        {isKo
          ? '본문 내 인용은 직접 인용(direct quotation)과 간접 인용(paraphrasing)으로 나뉩니다. 직접 인용은 원문의 표현을 그대로 가져오는 것으로, 반드시 따옴표(" ")로 표시하고 출처와 페이지 번호를 명시해야 합니다. 40단어(APA 기준) 이상의 긴 직접 인용은 블록 인용(block quotation) 형식으로 별도의 들여쓰기 단락으로 표시합니다.'
          : 'In-text citations are divided into direct quotations and paraphrasing. Direct quotation takes expressions exactly from the source, which must be enclosed in quotation marks with the source and page number indicated. Long direct quotations exceeding 40 words (APA standard) are formatted as block quotations in a separate indented paragraph.'}
      </p>
      <p>
        {isKo
          ? '간접 인용(패러프레이징)은 원저자의 아이디어를 자신의 표현으로 재서술하는 것입니다. 학술적 글쓰기에서는 직접 인용보다 간접 인용이 더 일반적이며 권장됩니다. 다만 원문의 단어 몇 개만 바꾸는 것은 올바른 패러프레이징이 아닙니다. 원저자의 핵심 아이디어를 충분히 이해한 후, 자신의 문장 구조와 어휘로 완전히 재작성해야 합니다. 간접 인용에도 반드시 출처를 표시해야 합니다.'
          : 'Paraphrasing restates the original author\'s ideas in your own words. In academic writing, paraphrasing is more common and recommended than direct quotation. However, merely changing a few words from the original is not proper paraphrasing. After fully understanding the original author\'s core ideas, you must completely rewrite them using your own sentence structure and vocabulary. Sources must also be cited for paraphrased content.'}
      </p>

      {/* --- Reference list --- */}
      <h3>{isKo ? '참고문헌 목록 작성' : 'Compiling the Reference List'}</h3>
      <p>
        {isKo
          ? '참고문헌 목록은 논문에서 인용한 모든 출처를 체계적으로 정리한 목록입니다. 정확한 참고문헌 목록 작성을 위한 핵심 원칙은 다음과 같습니다:'
          : 'The reference list is a systematic compilation of all sources cited in the paper. Key principles for accurate reference list preparation include:'}
      </p>
      <ul>
        <li>{isKo ? '본문에서 인용한 모든 출처가 참고문헌 목록에 포함되어야 하고, 참고문헌 목록의 모든 항목은 본문에서 인용되어야 합니다 (1:1 대응 원칙).' : 'All sources cited in the text must be included in the reference list, and all entries in the reference list must be cited in the text (1:1 correspondence principle).'}</li>
        <li>{isKo ? '각 항목은 해당 인용 스타일의 형식을 정확히 따라야 합니다. 저자명, 연도, 제목, 학술지명, 권호, 페이지, DOI 등의 요소를 빠뜨리지 마세요.' : 'Each entry must precisely follow the format of the applicable citation style. Do not omit elements such as author name, year, title, journal name, volume, issue, pages, and DOI.'}</li>
        <li>{isKo ? '일반적으로 저자 성(last name)의 알파벳 순서로 정렬합니다.' : 'Entries are generally arranged in alphabetical order by author\'s last name.'}</li>
        <li>{isKo ? 'DOI(Digital Object Identifier)가 있는 경우 반드시 포함하세요. DOI는 해당 문헌에 대한 영구적인 고유 식별자를 제공합니다.' : 'Always include the DOI (Digital Object Identifier) when available. DOIs provide a permanent unique identifier for the document.'}</li>
        <li>{isKo ? '들여쓰기(hanging indent)를 적용하여 각 항목의 첫 줄 이후의 줄을 들여씁니다.' : 'Apply a hanging indent so that lines after the first line of each entry are indented.'}</li>
      </ul>

      {/* --- Plagiarism prevention --- */}
      <h3>{isKo ? '표절 예방' : 'Plagiarism Prevention'}</h3>
      <p>
        {isKo
          ? '표절(plagiarism)은 타인의 아이디어, 표현, 연구 결과를 적절한 출처 표시 없이 자신의 것처럼 사용하는 학술적 부정행위입니다. 의도적이든 비의도적이든, 표절은 심각한 학문적 제재의 대상이 됩니다. 특히 다음과 같은 유형에 주의해야 합니다:'
          : 'Plagiarism is academic misconduct that uses others\' ideas, expressions, or research results as one\'s own without proper attribution. Whether intentional or unintentional, plagiarism is subject to serious academic sanctions. Be particularly cautious of the following types:'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '직접적 표절' : 'Direct Plagiarism'}</strong>
          {' — '}
          {isKo
            ? '타인의 글을 그대로 복사하여 인용 표시 없이 사용하는 것. 가장 명백한 형태의 표절입니다.'
            : 'Copying someone else\'s text verbatim and using it without citation. The most obvious form of plagiarism.'}
        </li>
        <li>
          <strong>{isKo ? '모자이크 표절 (Patchwriting)' : 'Mosaic Plagiarism (Patchwriting)'}</strong>
          {' — '}
          {isKo
            ? '여러 출처에서 문장이나 구절을 가져와 약간의 수정(동의어 치환, 어순 변경 등)을 한 후 조합하는 것. 겉보기에는 자신의 글처럼 보이지만, 실질적으로는 원문의 구조와 표현에 크게 의존하고 있어 표절에 해당합니다.'
            : 'Taking sentences or phrases from multiple sources, making slight modifications (synonym substitution, word order changes, etc.), and combining them. While appearing to be original writing, it substantially relies on the structure and expression of the sources and constitutes plagiarism.'}
        </li>
        <li>
          <strong>{isKo ? '자기 표절' : 'Self-Plagiarism'}</strong>
          {' — '}
          {isKo
            ? '자신의 이전 저작물을 새로운 논문에서 적절한 표시 없이 재사용하는 것. 이미 출판된 자신의 연구를 새로운 연구인 것처럼 제시하는 것도 학술적 부정행위에 해당합니다.'
            : 'Reusing one\'s own previous work in a new paper without proper indication. Presenting previously published research as if it were new also constitutes academic misconduct.'}
        </li>
        <li>
          <strong>{isKo ? '아이디어 표절' : 'Idea Plagiarism'}</strong>
          {' — '}
          {isKo
            ? '타인의 독창적인 아이디어, 이론, 분석 틀을 출처 표시 없이 사용하는 것. 표현은 자신의 것이더라도, 핵심 아이디어의 원천을 밝히지 않으면 표절이 됩니다.'
            : 'Using another person\'s original ideas, theories, or analytical frameworks without attribution. Even if the expression is your own, failing to acknowledge the source of the core idea constitutes plagiarism.'}
        </li>
      </ul>

      {/* --- Citation tools --- */}
      <h3>{isKo ? '인용 도구 활용' : 'Using Citation Tools'}</h3>
      <p>
        {isKo
          ? '표절을 예방하고 정확한 인용을 보장하기 위해 다양한 도구를 활용할 수 있습니다:'
          : 'Various tools can be used to prevent plagiarism and ensure accurate citation:'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '참고문헌 관리 소프트웨어' : 'Reference Management Software'}</strong>
          {' — '}
          {isKo
            ? 'Zotero, Mendeley, EndNote 등의 도구를 사용하면 인용과 참고문헌 목록이 자동으로 형식화되므로, 형식 오류를 크게 줄일 수 있습니다. Word나 Google Docs 플러그인을 통해 글을 쓰면서 실시간으로 인용을 삽입할 수 있습니다.'
            : 'Using tools like Zotero, Mendeley, or EndNote automatically formats citations and reference lists, greatly reducing formatting errors. Word and Google Docs plugins allow real-time citation insertion while writing.'}
        </li>
        <li>
          <strong>{isKo ? '표절 검사 도구' : 'Plagiarism Detection Tools'}</strong>
          {' — '}
          {isKo
            ? 'Turnitin, iThenticate, CopyKiller(카피킬러) 등의 표절 검사 소프트웨어를 활용하여 제출 전에 의도치 않은 표절을 확인할 수 있습니다. 많은 대학에서 학위논문 제출 시 표절 검사를 의무화하고 있습니다.'
            : 'Plagiarism detection software such as Turnitin, iThenticate, and CopyKiller can be used to check for unintentional plagiarism before submission. Many universities mandate plagiarism checks for thesis submission.'}
        </li>
        <li>
          <strong>{isKo ? '인용 생성 도구' : 'Citation Generation Tools'}</strong>
          {' — '}
          {isKo
            ? 'Google Scholar의 인용 내보내기 기능, CrossRef의 DOI 기반 인용 생성, 각 데이터베이스의 인용 내보내기 기능 등을 활용하면 참고문헌 정보를 정확하게 수집할 수 있습니다. 다만 자동 생성된 인용 정보도 반드시 검증해야 합니다.'
            : 'Google Scholar\'s citation export feature, CrossRef\'s DOI-based citation generation, and database citation export functions enable accurate collection of reference information. However, automatically generated citation information must always be verified.'}
        </li>
      </ul>

      <TipBox type="danger" title={isKo ? '표절에 대한 경고' : 'Warning About Plagiarism'}>
        <p>
          {isKo
            ? '"출처를 나중에 추가하려고 했다"는 것은 표절에 대한 변명이 되지 않습니다. 문헌검토를 작성할 때는 처음부터 모든 인용의 출처를 정확하게 기록하세요. 메모 단계에서부터 인용 정보를 함께 기록하는 습관을 들이고, 참고문헌 관리 소프트웨어를 적극 활용하세요. 직접 인용할 때는 반드시 따옴표와 페이지 번호를 포함하고, 패러프레이징할 때는 원문과 충분히 다른 표현으로 재작성했는지 확인하세요. 학위논문 제출 전에는 반드시 표절 검사를 실시하여 의도하지 않은 표절 가능성을 점검하세요.'
            : '"I planned to add the source later" is not an excuse for plagiarism. When writing a literature review, accurately record the source of every citation from the beginning. Develop the habit of recording citation information from the note-taking stage, and actively use reference management software. When directly quoting, always include quotation marks and page numbers. When paraphrasing, verify that you have rewritten in expressions sufficiently different from the original. Before submitting a thesis, always run a plagiarism check to inspect for unintentional plagiarism.'}
        </p>
      </TipBox>
    </section>
  );
}

/* ================================================================== */
/*  Section 7 — References                                             */
/* ================================================================== */

function ReferencesSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <>
      <div className="guide-content-header">
        <h1>{isKo ? '참고문헌' : 'References'}</h1>
        <p>{isKo ? '문헌검토 방법론 학습에 활용된 주요 참고문헌입니다.' : 'Key references used in the study of literature review methodology.'}</p>
      </div>
      <div className="guide-section">
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Hart, C. (2018). <em>Doing a Literature Review: Releasing the Research Imagination</em> (2nd ed.). SAGE Publications.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Booth, A., Sutton, A., & Papaioannou, D. (2016). <em>Systematic Approaches to a Successful Literature Review</em> (2nd ed.). SAGE Publications.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Garrard, J. (2017). <em>Health Sciences Literature Review Made Easy: The Matrix Method</em> (5th ed.). Jones & Bartlett Learning.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Fink, A. (2019). <em>Conducting Research Literature Reviews: From the Internet to Paper</em> (5th ed.). SAGE Publications.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Arksey, H., & O'Malley, L. (2005). Scoping studies: Towards a methodological framework. <em>International Journal of Social Research Methodology</em>, 8(1), 19-32.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Moher, D., Liberati, A., Tetzlaff, J., & Altman, D. G. (2009). Preferred reporting items for systematic reviews and meta-analyses: The PRISMA statement. <em>PLoS Medicine</em>, 6(7), e1000097.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Snyder, H. (2019). Literature review as a research methodology: An overview and guidelines. <em>Journal of Business Research</em>, 104, 333-339.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Pautasso, M. (2013). Ten simple rules for writing a literature review. <em>PLoS Computational Biology</em>, 9(7), e1003149.</li>
        </ul>
      </div>
    </>
  );
}

/* ================================================================== */
/*  Main page component                                                */
/* ================================================================== */

export default function Literature(): ReactElement {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('purpose');
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
        title={isKo ? '문헌검토 | Survey Master' : 'Literature Review | Survey Master'}
        description={
          isKo
            ? '학술 논문 작성을 위한 문헌검토 방법론을 체계적으로 학습합니다. 탐색 전략, 비판적 읽기, 인용 관리까지.'
            : 'Systematically learn literature review methodology for academic paper writing. From search strategies to critical reading and citation management.'
        }
      />

      <div className="guide-page">
        <div className="guide-layout">
          {/* ---------- Sidebar navigation ---------- */}
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

          {/* ---------- Main content ---------- */}
          <main className="guide-content">
            {activeSection === 'purpose' && <PurposeSection isKo={isKo} />}
            {activeSection === 'search-strategy' && <SearchStrategySection isKo={isKo} />}
            {activeSection === 'critical-reading' && <CriticalReadingSection isKo={isKo} />}
            {activeSection === 'organizing' && <OrganizingSection isKo={isKo} />}
            {activeSection === 'writing-review' && <WritingReviewSection isKo={isKo} />}
            {activeSection === 'citation' && <CitationSection isKo={isKo} />}
            {activeSection === 'references' && <ReferencesSection isKo={isKo} />}

            {/* ---------- Section navigation ---------- */}
            <div className="guide-section-nav">
              <button className="guide-nav-btn prev" onClick={handlePrev} disabled={currentIndex === 0}>
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
