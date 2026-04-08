import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import TipBox from '../../components/TipBox';
import type { ReactElement } from 'react';

const SECTIONS = [
  { id: 'purpose', icon: 'fa-bullseye', ko: '문헌검토의 목적', en: 'Purpose of Literature Review' },
  { id: 'search-strategy', icon: 'fa-magnifying-glass', ko: '문헌 탐색 전략', en: 'Search Strategy' },
  { id: 'critical-reading', icon: 'fa-glasses', ko: '비판적 문헌 읽기', en: 'Critical Reading' },
  { id: 'organizing', icon: 'fa-folder-tree', ko: '문헌 정리와 분류', en: 'Organizing Literature' },
  { id: 'writing-review', icon: 'fa-pen-to-square', ko: '문헌검토 작성법', en: 'Writing the Review' },
  { id: 'citation', icon: 'fa-quote-right', ko: '인용과 참고문헌 관리', en: 'Citation Management' },
  { id: 'references', icon: 'fa-bookmark', ko: '참고문헌', en: 'References' },
];

/* ------------------------------------------------------------------ */
/*  Section 1 – Purpose of Literature Review                           */
/* ------------------------------------------------------------------ */
function PurposeSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>{isKo ? '문헌검토의 목적' : 'Purpose of Literature Review'}</h2>

      {/* What is a Literature Review? */}
      <h3>{isKo ? '문헌검토란 무엇인가?' : 'What Is a Literature Review?'}</h3>
      <p>
        {isKo
          ? '문헌검토(Literature Review)는 특정 연구 주제와 관련된 기존의 학술 문헌을 체계적으로 탐색, 분석, 종합하는 과정입니다. 단순히 선행연구를 요약하는 것이 아니라, 기존 연구의 흐름을 비판적으로 평가하고, 연구 공백(gap)을 발견하며, 새로운 연구의 방향성을 제시하는 학술적 활동입니다. Hart(1998)는 문헌검토를 "특정 주제에 관한 출판된 정보에 대한 선별, 분석, 평가"로 정의하였습니다.'
          : 'A literature review is a systematic process of searching, analyzing, and synthesizing existing academic literature related to a specific research topic. It is not merely summarizing prior studies, but rather a scholarly activity that critically evaluates the trajectory of existing research, identifies research gaps, and suggests directions for new studies. Hart (1998) defined a literature review as "the selection, analysis, and evaluation of published information on a particular topic."'}
      </p>
      <p>
        {isKo
          ? '문헌검토는 학위논문, 학술 논문, 연구 보고서 등 거의 모든 유형의 학술 글쓰기에서 필수적인 구성 요소입니다. 독립적인 논문(review article)으로 출판되기도 하며, 연구계획서나 학위논문의 한 장(chapter)으로 포함되기도 합니다. 어떤 형태이든 문헌검토의 핵심은 기존 지식을 체계적으로 정리하여 연구의 이론적 토대를 마련하는 것입니다.'
          : 'A literature review is an essential component of virtually all types of academic writing, including theses, journal articles, and research reports. It may be published as a standalone review article or included as a chapter in a research proposal or dissertation. Regardless of its form, the core purpose of a literature review is to systematically organize existing knowledge to establish the theoretical foundation for research.'}
      </p>

      {/* Why Conduct a Literature Review? */}
      <h3>{isKo ? '문헌검토를 수행하는 이유' : 'Why Conduct a Literature Review?'}</h3>
      <p>
        {isKo
          ? '문헌검토는 연구 과정에서 여러 가지 중요한 기능을 수행합니다. Ridley(2012)는 문헌검토의 목적을 다음과 같이 정리하였습니다. 문헌검토를 통해 연구자는 자신의 연구가 기존 학문적 담론 속에서 어디에 위치하는지를 명확히 할 수 있습니다.'
          : 'A literature review serves several important functions in the research process. Ridley (2012) summarized the purposes of a literature review as follows. Through a literature review, researchers can clearly establish where their study is positioned within existing academic discourse.'}
      </p>
      <ul>
        <li><strong>{isKo ? '연구 맥락 설정' : 'Establishing Research Context'}</strong>: {isKo ? '연구 주제가 기존 학문적 논의와 어떻게 연결되는지 보여줍니다.' : 'Demonstrates how the research topic connects to existing scholarly discussions.'}</li>
        <li><strong>{isKo ? '연구 공백 발견' : 'Identifying Research Gaps'}</strong>: {isKo ? '기존 연구에서 아직 탐구되지 않은 영역이나 해결되지 않은 문제를 파악합니다.' : 'Identifies areas not yet explored or unresolved issues in existing research.'}</li>
        <li><strong>{isKo ? '이론적 틀 구축' : 'Building a Theoretical Framework'}</strong>: {isKo ? '연구의 개념적 토대가 되는 이론과 모형을 확인하고 적용합니다.' : 'Identifies and applies theories and models that form the conceptual foundation of the research.'}</li>
        <li><strong>{isKo ? '방법론적 통찰 확보' : 'Gaining Methodological Insights'}</strong>: {isKo ? '선행연구에서 사용된 연구 방법의 강점과 한계를 파악하여 자신의 연구 설계에 반영합니다.' : 'Understands the strengths and limitations of research methods used in prior studies and incorporates them into your own research design.'}</li>
        <li><strong>{isKo ? '중복 연구 방지' : 'Avoiding Duplication'}</strong>: {isKo ? '이미 수행된 연구를 불필요하게 반복하는 것을 방지합니다.' : 'Prevents unnecessary repetition of studies already conducted.'}</li>
        <li><strong>{isKo ? '연구의 정당성 확보' : 'Justifying the Research'}</strong>: {isKo ? '해당 연구가 왜 필요한지에 대한 근거를 선행연구를 통해 제시합니다.' : 'Provides evidence through prior research for why the study is necessary.'}</li>
      </ul>

      <TipBox type="important">
        <p>
          {isKo
            ? '문헌검토는 연구를 시작하기 전에 한 번 수행하고 끝나는 것이 아닙니다. 연구의 전 과정에 걸쳐 지속적으로 업데이트해야 합니다. 새로운 연구가 계속 출판되고 있으므로, 논문을 완성할 때까지 정기적으로 문헌을 검색하고 검토하는 습관을 유지하세요.'
            : 'A literature review is not something you do once before starting your research and then finish. It must be continuously updated throughout the entire research process. Since new research is constantly being published, maintain the habit of regularly searching for and reviewing literature until your paper is complete.'}
        </p>
      </TipBox>

      {/* Types of Literature Reviews */}
      <h3>{isKo ? '문헌검토의 유형' : 'Types of Literature Reviews'}</h3>
      <p>
        {isKo
          ? '문헌검토는 그 목적, 범위, 방법론에 따라 여러 유형으로 분류됩니다. 각 유형은 서로 다른 연구 질문에 적합하며, 요구되는 체계성의 수준이 다릅니다. Booth et al.(2016)은 다양한 문헌검토 유형을 포괄적으로 분류한 바 있습니다.'
          : 'Literature reviews are classified into several types based on their purpose, scope, and methodology. Each type is suited to different research questions and requires varying levels of systematicity. Booth et al. (2016) provided a comprehensive classification of various literature review types.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '서술적 문헌검토 (Narrative Review)' : 'Narrative Review'}</strong>:
          {isKo ? ' 가장 전통적인 형태로, 특정 주제에 대한 기존 연구를 광범위하게 요약하고 해석합니다. 체계적 검색 프로토콜이 필수적이지 않아 유연하지만, 주관적 편향의 위험이 있습니다.' : ' The most traditional form, broadly summarizing and interpreting existing research on a specific topic. It is flexible because a systematic search protocol is not mandatory, but there is a risk of subjective bias.'}
        </li>
        <li>
          <strong>{isKo ? '체계적 문헌검토 (Systematic Review)' : 'Systematic Review'}</strong>:
          {isKo ? ' 사전에 정의된 검색 전략과 포함/배제 기준에 따라 관련 문헌을 포괄적으로 검색하고 선별합니다. PRISMA 가이드라인을 따르며, 연구의 재현 가능성과 투명성을 보장합니다.' : ' Comprehensively searches for and selects relevant literature according to predefined search strategies and inclusion/exclusion criteria. Follows PRISMA guidelines and ensures reproducibility and transparency of the research.'}
        </li>
        <li>
          <strong>{isKo ? '메타분석 (Meta-Analysis)' : 'Meta-Analysis'}</strong>:
          {isKo ? ' 체계적 문헌검토의 한 형태로, 여러 연구의 통계적 결과를 정량적으로 통합하여 전체적인 효과 크기를 산출합니다. 개별 연구보다 높은 통계적 검증력을 제공합니다.' : ' A form of systematic review that quantitatively integrates statistical results from multiple studies to calculate an overall effect size. Provides greater statistical power than individual studies.'}
        </li>
        <li>
          <strong>{isKo ? '범위 문헌검토 (Scoping Review)' : 'Scoping Review'}</strong>:
          {isKo ? ' 특정 연구 분야의 범위와 성격을 매핑(mapping)하는 것을 목적으로 합니다. 아직 충분히 연구되지 않은 분야에서 연구 방향을 설정하는 데 유용합니다.' : ' Aims to map the scope and nature of a specific research area. Useful for setting research directions in fields that have not yet been sufficiently studied.'}
        </li>
      </ul>

      <TipBox type="tip">
        <p>
          {isKo
            ? '학위논문에서의 문헌검토는 대부분 서술적 문헌검토의 형태를 취하지만, 체계적 문헌검토의 요소(명확한 검색 전략, 포함 기준 등)를 일부 도입하면 검토의 신뢰성과 완성도를 크게 높일 수 있습니다.'
            : 'Literature reviews in theses mostly take the form of narrative reviews, but incorporating elements of systematic reviews (clear search strategies, inclusion criteria, etc.) can significantly enhance the reliability and completeness of your review.'}
        </p>
      </TipBox>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 2 – Search Strategy                                        */
/* ------------------------------------------------------------------ */
function SearchStrategySection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>{isKo ? '문헌 탐색 전략' : 'Search Strategy'}</h2>

      {/* Academic Databases */}
      <h3>{isKo ? '주요 학술 데이터베이스' : 'Major Academic Databases'}</h3>
      <p>
        {isKo
          ? '효과적인 문헌 탐색을 위해서는 연구 분야에 적합한 학술 데이터베이스를 활용해야 합니다. 각 데이터베이스는 수록 범위, 분야 특성, 검색 기능이 다르므로, 여러 데이터베이스를 병행하여 검색하는 것이 포괄적인 문헌검토의 핵심입니다.'
          : 'For effective literature searching, you need to utilize academic databases appropriate for your research field. Since each database differs in coverage, field characteristics, and search functions, searching across multiple databases is key to a comprehensive literature review.'}
      </p>
      <ul>
        <li><strong>PubMed</strong>: {isKo ? '의학, 보건학, 생명과학 분야의 대표적 데이터베이스로, MEDLINE을 기반으로 합니다. MeSH(Medical Subject Headings) 용어를 활용한 정밀 검색이 가능합니다.' : 'A leading database for medicine, health sciences, and life sciences, based on MEDLINE. Enables precise searching using MeSH (Medical Subject Headings) terms.'}</li>
        <li><strong>ERIC</strong>: {isKo ? '교육학 분야의 핵심 데이터베이스로, 미국 교육부에서 운영합니다. 학술 논문뿐 아니라 교육 보고서, 정책 문서 등도 수록하고 있습니다.' : 'A core database for education, operated by the U.S. Department of Education. Includes not only academic papers but also educational reports and policy documents.'}</li>
        <li><strong>JSTOR</strong>: {isKo ? '인문학, 사회과학 분야의 핵심 학술지 아카이브입니다. 과거 호(back issues)까지 포괄적으로 수록하고 있어 학문적 흐름을 추적하는 데 유용합니다.' : 'A core academic journal archive for humanities and social sciences. Comprehensively covers back issues, making it useful for tracking scholarly trends.'}</li>
        <li><strong>Google Scholar</strong>: {isKo ? '학문 분야를 가리지 않는 범용 학술 검색 엔진입니다. 접근성이 높고 인용 추적 기능이 편리하지만, 품질 필터링이 부족할 수 있으므로 결과의 비판적 평가가 필요합니다.' : 'A general-purpose academic search engine covering all disciplines. Highly accessible with convenient citation tracking, but may lack quality filtering, so critical evaluation of results is necessary.'}</li>
        <li><strong>Web of Science / Scopus</strong>: {isKo ? '다학제적 인용 색인 데이터베이스로, 논문의 피인용 횟수, 저널 영향력 지수(Impact Factor) 등의 계량서지학적 분석이 가능합니다.' : 'Multidisciplinary citation index databases that enable bibliometric analyses such as citation counts and journal Impact Factors.'}</li>
        <li><strong>{isKo ? 'RISS / KCI (한국)' : 'RISS / KCI (Korea)'}</strong>: {isKo ? '한국 학술 문헌 검색을 위한 필수 데이터베이스입니다. RISS는 학위논문과 학술지 논문을, KCI는 한국연구재단 등재지 논문을 중심으로 수록합니다.' : 'Essential databases for searching Korean academic literature. RISS covers theses and journal articles, while KCI focuses on papers from NRF-listed journals.'}</li>
      </ul>

      {/* Keyword Strategy */}
      <h3>{isKo ? '키워드 검색 전략' : 'Keyword Search Strategy'}</h3>
      <p>
        {isKo
          ? '효과적인 키워드 전략은 문헌 탐색의 성패를 좌우합니다. 검색어가 너무 광범위하면 관련 없는 결과가 대량으로 나타나고, 너무 협소하면 중요한 문헌을 놓칠 수 있습니다. 불리언 연산자(Boolean Operators)를 활용하면 검색의 정밀도와 재현율을 효과적으로 조절할 수 있습니다.'
          : 'An effective keyword strategy determines the success of literature searching. If search terms are too broad, irrelevant results appear in large quantities; if too narrow, important literature may be missed. Using Boolean Operators can effectively control search precision and recall.'}
      </p>
      <ul>
        <li><strong>AND</strong>: {isKo ? '두 키워드가 모두 포함된 결과를 검색합니다. 검색 범위를 좁힙니다. 예: "leadership AND job satisfaction"' : 'Searches for results containing both keywords. Narrows the search scope. Example: "leadership AND job satisfaction"'}</li>
        <li><strong>OR</strong>: {isKo ? '두 키워드 중 하나 이상 포함된 결과를 검색합니다. 동의어나 관련어를 포함할 때 사용합니다. 예: "adolescent OR teenager OR youth"' : 'Searches for results containing one or more of the keywords. Used to include synonyms or related terms. Example: "adolescent OR teenager OR youth"'}</li>
        <li><strong>NOT</strong>: {isKo ? '특정 키워드를 제외합니다. 동음이의어를 배제할 때 유용합니다. 예: "mercury NOT planet"' : 'Excludes specific keywords. Useful for excluding homonyms. Example: "mercury NOT planet"'}</li>
        <li><strong>{isKo ? '인용 부호 ("")' : 'Quotation Marks ("")'}</strong>: {isKo ? '정확한 구(phrase)를 검색합니다. 예: "transformational leadership"은 두 단어가 연속으로 나오는 결과만 반환합니다.' : 'Searches for an exact phrase. Example: "transformational leadership" returns only results where the two words appear consecutively.'}</li>
        <li><strong>{isKo ? '절단 기호 (*)' : 'Truncation (*)'}</strong>: {isKo ? '어근을 기반으로 다양한 변형을 검색합니다. 예: "educat*"은 education, educational, educator 등을 모두 포함합니다.' : 'Searches for various forms based on a root word. Example: "educat*" includes education, educational, educator, etc.'}</li>
      </ul>

      <TipBox type="tip">
        <p>
          {isKo
            ? '검색 전략을 문서화하세요. 어떤 데이터베이스에서, 어떤 키워드 조합으로, 언제 검색했는지를 기록하면 검색의 재현 가능성을 확보할 수 있고, 체계적 문헌검토(Systematic Review)의 요건을 충족하는 데에도 도움이 됩니다.'
            : 'Document your search strategy. Recording which databases you searched, what keyword combinations you used, and when you searched ensures the reproducibility of your search and helps meet the requirements of a systematic review.'}
        </p>
      </TipBox>

      {/* Snowball and Citation Tracking */}
      <h3>{isKo ? '눈덩이 검색과 인용 추적' : 'Snowball Searching and Citation Tracking'}</h3>
      <p>
        {isKo
          ? '데이터베이스 키워드 검색만으로는 모든 관련 문헌을 찾기 어렵습니다. 눈덩이 검색(Snowball Search) 기법을 활용하면 데이터베이스 검색에서 발견하지 못한 중요 문헌을 추가로 확보할 수 있습니다.'
          : 'It is difficult to find all relevant literature through database keyword searching alone. Using snowball search techniques allows you to additionally identify important literature not found through database searches.'}
      </p>
      <ul>
        <li><strong>{isKo ? '후방 검색 (Backward Search)' : 'Backward Search'}</strong>: {isKo ? '핵심 논문의 참고문헌 목록을 추적하여 해당 논문이 인용한 선행연구를 찾습니다. 분야의 고전적 연구(seminal works)를 발견하는 데 효과적입니다.' : 'Traces the reference list of key papers to find prior studies cited by that paper. Effective for discovering seminal works in the field.'}</li>
        <li><strong>{isKo ? '전방 검색 (Forward Search)' : 'Forward Search'}</strong>: {isKo ? '핵심 논문을 인용한 후속 연구를 추적합니다. Google Scholar의 "인용" 기능이나 Web of Science의 "Cited References" 기능을 활용합니다. 최신 연구 동향을 파악하는 데 유용합니다.' : 'Tracks subsequent studies that cited a key paper. Uses Google Scholar\'s "Cited by" feature or Web of Science\'s "Cited References" function. Useful for understanding recent research trends.'}</li>
      </ul>
      <p>
        {isKo
          ? '이 두 가지 방법을 조합하면, 핵심 논문을 중심으로 연구의 학문적 계보(genealogy)를 체계적으로 추적할 수 있습니다. 특히 전방 검색은 특정 이론이나 방법론이 어떻게 발전해 왔는지를 이해하는 데 매우 효과적입니다.'
          : 'Combining these two methods allows you to systematically trace the academic genealogy of research centered on key papers. Forward searching is particularly effective for understanding how specific theories or methodologies have evolved.'}
      </p>

      <TipBox type="warning">
        <p>
          {isKo
            ? 'Google Scholar는 편리하지만, 학술적 품질이 검증되지 않은 문헌(비학술 자료, 미출판 원고 등)이 포함될 수 있습니다. Google Scholar에서 발견한 문헌은 반드시 출처의 학술적 신뢰성(동료 심사 여부, 출판 저널의 평판 등)을 확인한 후 인용하세요.'
            : 'While Google Scholar is convenient, it may include literature whose academic quality has not been verified (non-academic materials, unpublished manuscripts, etc.). Always verify the scholarly credibility of sources found on Google Scholar (peer-review status, journal reputation, etc.) before citing them.'}
        </p>
      </TipBox>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 3 – Critical Reading                                       */
/* ------------------------------------------------------------------ */
function CriticalReadingSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>{isKo ? '비판적 문헌 읽기' : 'Critical Reading'}</h2>

      {/* What is Critical Reading? */}
      <h3>{isKo ? '비판적 읽기란 무엇인가?' : 'What Is Critical Reading?'}</h3>
      <p>
        {isKo
          ? '비판적 읽기(Critical Reading)는 문헌의 내용을 수동적으로 받아들이는 것이 아니라, 저자의 주장, 근거, 방법론, 결론의 타당성을 능동적으로 평가하며 읽는 과정입니다. Galvan & Galvan(2017)은 문헌검토에서 비판적 읽기의 중요성을 강조하며, 단순 요약이 아닌 평가적 분석이 학술적 문헌검토의 핵심이라고 주장하였습니다.'
          : 'Critical reading is a process of actively evaluating the validity of an author\'s arguments, evidence, methodology, and conclusions rather than passively accepting the content. Galvan & Galvan (2017) emphasized the importance of critical reading in literature reviews, arguing that evaluative analysis, rather than simple summarization, is the core of scholarly literature review.'}
      </p>
      <p>
        {isKo
          ? '비판적 읽기는 문헌을 부정적으로 평가하는 것이 아닙니다. 강점과 한계를 균형 있게 평가하고, 해당 연구가 학문적 지식에 기여한 부분과 개선이 필요한 부분을 객관적으로 분석하는 것입니다. 이를 통해 연구자는 기존 문헌의 한계를 보완하는 자신만의 연구를 설계할 수 있습니다.'
          : 'Critical reading is not about evaluating literature negatively. It involves objectively analyzing the strengths and limitations in a balanced manner, identifying where the study contributes to scholarly knowledge and where improvement is needed. Through this process, researchers can design their own studies to address the limitations of existing literature.'}
      </p>

      {/* Critical Appraisal Framework */}
      <h3>{isKo ? '비판적 평가 프레임워크' : 'Critical Appraisal Framework'}</h3>
      <p>
        {isKo
          ? '문헌을 비판적으로 평가할 때 다음과 같은 질문을 체계적으로 적용하면 일관되고 심도 있는 분석이 가능합니다. 이 프레임워크는 양적 연구와 질적 연구 모두에 적용할 수 있으나, 각 연구 유형에 따라 강조점이 달라집니다.'
          : 'When critically appraising literature, systematically applying the following questions enables consistent and in-depth analysis. This framework can be applied to both quantitative and qualitative research, though the emphasis varies by research type.'}
      </p>
      <ul>
        <li><strong>{isKo ? '연구 목적의 명확성' : 'Clarity of Research Purpose'}</strong>: {isKo ? '연구 목적이 명확하게 진술되었는가? 연구 질문이 구체적이고 연구 가능한 형태인가?' : 'Is the research purpose clearly stated? Are the research questions specific and researchable?'}</li>
        <li><strong>{isKo ? '이론적 근거' : 'Theoretical Foundation'}</strong>: {isKo ? '연구가 적절한 이론적 틀에 기반하고 있는가? 선행연구와의 연결이 논리적인가?' : 'Is the research grounded in an appropriate theoretical framework? Is the connection to prior studies logical?'}</li>
        <li><strong>{isKo ? '방법론적 적절성' : 'Methodological Appropriateness'}</strong>: {isKo ? '연구 설계가 연구 질문에 적합한가? 표본 크기와 추출 방법이 적절한가? 측정 도구의 신뢰도와 타당도가 확보되었는가?' : 'Is the research design appropriate for the research questions? Are the sample size and sampling method adequate? Has the reliability and validity of measurement instruments been established?'}</li>
        <li><strong>{isKo ? '분석의 적절성' : 'Appropriateness of Analysis'}</strong>: {isKo ? '사용된 분석 방법이 연구 질문과 데이터 특성에 부합하는가? 통계적 가정이 충족되었는가?' : 'Do the analytical methods used match the research questions and data characteristics? Have statistical assumptions been met?'}</li>
        <li><strong>{isKo ? '결과 해석의 타당성' : 'Validity of Result Interpretation'}</strong>: {isKo ? '결론이 데이터에 의해 충분히 뒷받침되는가? 과도한 일반화는 없는가?' : 'Are conclusions sufficiently supported by the data? Is there over-generalization?'}</li>
        <li><strong>{isKo ? '연구 윤리' : 'Research Ethics'}</strong>: {isKo ? 'IRB 승인, 사전 동의, 이해관계 충돌 등의 윤리적 측면이 적절히 다루어졌는가?' : 'Have ethical aspects such as IRB approval, informed consent, and conflicts of interest been adequately addressed?'}</li>
      </ul>

      <TipBox type="tip">
        <p>
          {isKo
            ? '처음에는 비판적 읽기가 시간이 많이 걸릴 수 있습니다. 핵심 논문 5~10편을 깊이 있게 분석하는 것이 수십 편을 피상적으로 읽는 것보다 훨씬 효과적입니다. 각 논문에 대해 비판적 평가 메모를 작성하는 습관을 들이세요.'
            : 'Critical reading may be time-consuming at first. Deeply analyzing 5-10 key papers is far more effective than superficially reading dozens. Develop the habit of writing critical appraisal notes for each paper.'}
        </p>
      </TipBox>

      {/* Reading Strategy */}
      <h3>{isKo ? '효율적인 문헌 읽기 전략' : 'Efficient Literature Reading Strategy'}</h3>
      <p>
        {isKo
          ? '대량의 문헌을 효율적으로 처리하기 위해서는 단계적 읽기 전략이 필요합니다. 모든 논문을 처음부터 끝까지 정독할 필요는 없으며, 관련성과 중요도에 따라 읽기의 깊이를 조절해야 합니다.'
          : 'A staged reading strategy is necessary to efficiently process large volumes of literature. Not every paper needs to be read thoroughly from beginning to end; the depth of reading should be adjusted according to relevance and importance.'}
      </p>
      <ol>
        <li><strong>{isKo ? '1단계: 훑어보기 (Skimming)' : 'Stage 1: Skimming'}</strong>: {isKo ? '제목, 초록, 키워드, 결론을 빠르게 읽고 관련성을 판단합니다. 이 단계에서 전체 문헌의 약 60~70%를 걸러냅니다.' : 'Quickly read the title, abstract, keywords, and conclusion to judge relevance. About 60-70% of literature is filtered out at this stage.'}</li>
        <li><strong>{isKo ? '2단계: 선택적 읽기 (Selective Reading)' : 'Stage 2: Selective Reading'}</strong>: {isKo ? '연구 방법, 결과, 논의 부분을 중심으로 읽습니다. 본 연구와의 관련성을 평가하고 핵심 내용을 메모합니다.' : 'Read focusing on the methods, results, and discussion sections. Evaluate relevance to your study and take notes on key content.'}</li>
        <li><strong>{isKo ? '3단계: 정독 (Intensive Reading)' : 'Stage 3: Intensive Reading'}</strong>: {isKo ? '핵심 논문은 전체를 꼼꼼하게 읽고 비판적으로 분석합니다. 연구 설계의 강점과 한계, 결과의 의미, 후속 연구 제안 등을 상세히 메모합니다.' : 'Read key papers thoroughly and analyze them critically. Take detailed notes on the strengths and limitations of the research design, the meaning of results, and suggestions for future research.'}</li>
      </ol>

      <TipBox type="important">
        <p>
          {isKo
            ? '문헌을 읽을 때 반드시 출처 정보(저자, 연도, 제목, 저널, 페이지 등)를 정확하게 기록하세요. 나중에 인용할 때 출처를 다시 찾는 것은 매우 비효율적입니다. Zotero나 Mendeley 같은 참고문헌 관리 도구를 처음부터 활용하면 이 문제를 예방할 수 있습니다.'
            : 'When reading literature, always accurately record source information (author, year, title, journal, pages, etc.). Searching for sources again later when citing is very inefficient. Using reference management tools like Zotero or Mendeley from the start can prevent this problem.'}
        </p>
      </TipBox>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 4 – Organizing Literature                                  */
/* ------------------------------------------------------------------ */
function OrganizingSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>{isKo ? '문헌 정리와 분류' : 'Organizing Literature'}</h2>

      {/* Literature Matrix */}
      <h3>{isKo ? '문헌 매트릭스 활용' : 'Using a Literature Matrix'}</h3>
      <p>
        {isKo
          ? '문헌 매트릭스(Literature Matrix)는 수집한 문헌을 체계적으로 정리하는 가장 효과적인 도구 중 하나입니다. 스프레드시트 형태로 작성하며, 각 행에는 개별 문헌을, 각 열에는 분석 항목(저자, 연도, 연구 목적, 방법론, 주요 결과, 한계점, 본 연구와의 관련성 등)을 배치합니다.'
          : 'A literature matrix is one of the most effective tools for systematically organizing collected literature. It is created in spreadsheet form, with individual publications in each row and analysis categories (author, year, research purpose, methodology, key findings, limitations, relevance to your study, etc.) in each column.'}
      </p>
      <p>
        {isKo
          ? '문헌 매트릭스를 작성하면 여러 연구를 한눈에 비교할 수 있고, 연구들 간의 공통점과 차이점을 쉽게 파악할 수 있습니다. 또한 문헌검토를 작성할 때 주제별로 문헌을 묶어 논의하는 데 큰 도움이 됩니다.'
          : 'Creating a literature matrix allows you to compare multiple studies at a glance and easily identify commonalities and differences among studies. It also greatly helps in grouping literature by theme when writing the literature review.'}
      </p>
      <ul>
        <li><strong>{isKo ? '서지 정보' : 'Bibliographic Information'}</strong>: {isKo ? '저자, 연도, 제목, 저널명' : 'Author, year, title, journal name'}</li>
        <li><strong>{isKo ? '연구 목적' : 'Research Purpose'}</strong>: {isKo ? '해당 연구가 밝히고자 한 핵심 질문' : 'The core question the study sought to answer'}</li>
        <li><strong>{isKo ? '연구 방법' : 'Research Methods'}</strong>: {isKo ? '연구 설계, 표본 크기, 분석 방법' : 'Research design, sample size, analysis methods'}</li>
        <li><strong>{isKo ? '주요 결과' : 'Key Findings'}</strong>: {isKo ? '연구의 핵심 발견사항' : 'Core findings of the study'}</li>
        <li><strong>{isKo ? '한계점' : 'Limitations'}</strong>: {isKo ? '저자가 밝힌 한계 및 비판적 평가를 통해 발견한 한계' : 'Limitations stated by the author and identified through critical appraisal'}</li>
        <li><strong>{isKo ? '본 연구와의 관련성' : 'Relevance to Your Study'}</strong>: {isKo ? '본 연구에 어떤 시사점을 제공하는지' : 'What implications it provides for your study'}</li>
      </ul>

      <TipBox type="tip">
        <p>
          {isKo
            ? 'Excel, Google Sheets, Notion 등의 도구로 문헌 매트릭스를 작성하세요. 색상 코딩을 활용하면(예: 주제별로 다른 색상) 시각적으로 문헌을 분류하는 데 도움이 됩니다. 문헌의 수가 많아지면 필터 기능을 활용하여 특정 조건의 문헌만 추출할 수도 있습니다.'
            : 'Create your literature matrix using tools like Excel, Google Sheets, or Notion. Using color coding (e.g., different colors for each theme) helps visually categorize literature. As the number of sources grows, you can use filter functions to extract only literature meeting specific criteria.'}
        </p>
      </TipBox>

      {/* Thematic Organization */}
      <h3>{isKo ? '주제별 분류 체계' : 'Thematic Organization System'}</h3>
      <p>
        {isKo
          ? '수집한 문헌을 주제(theme)별로 분류하는 것은 문헌검토 작성의 핵심 준비 과정입니다. 주제별 분류를 통해 관련 연구를 그룹화하고, 각 주제 안에서의 연구 동향, 합의점, 논쟁점을 파악할 수 있습니다.'
          : 'Categorizing collected literature by theme is a core preparation step for writing the literature review. Through thematic classification, you can group related studies and identify research trends, points of consensus, and debates within each theme.'}
      </p>
      <p>
        {isKo
          ? '주제별 분류는 연역적 접근(이론에서 도출된 범주 사용)과 귀납적 접근(문헌을 읽으면서 자연스럽게 떠오르는 범주 사용)을 병행하는 것이 효과적입니다. 처음에는 넓은 범주로 시작하여 점차 하위 범주로 세분화해 나갑니다.'
          : 'It is effective to combine deductive approaches (using categories derived from theory) and inductive approaches (using categories that naturally emerge while reading literature). Start with broad categories and gradually refine them into subcategories.'}
      </p>
      <ol>
        <li>{isKo ? '핵심 개념별 분류: 연구의 주요 변수나 개념을 중심으로 분류합니다.' : 'Classification by key concepts: Organize around the major variables or concepts of your research.'}</li>
        <li>{isKo ? '이론적 관점별 분류: 적용된 이론이나 패러다임에 따라 분류합니다.' : 'Classification by theoretical perspective: Organize by applied theory or paradigm.'}</li>
        <li>{isKo ? '방법론별 분류: 양적/질적/혼합 연구, 실험/비실험 연구 등으로 분류합니다.' : 'Classification by methodology: Organize by quantitative/qualitative/mixed methods, experimental/non-experimental, etc.'}</li>
        <li>{isKo ? '시기별 분류: 연구 흐름의 발전 과정을 추적할 때 유용합니다.' : 'Chronological classification: Useful for tracking the developmental process of research trends.'}</li>
      </ol>

      {/* Concept Mapping */}
      <h3>{isKo ? '개념 맵핑과 시각적 정리' : 'Concept Mapping and Visual Organization'}</h3>
      <p>
        {isKo
          ? '개념 맵(Concept Map)은 문헌에서 도출된 핵심 개념들 간의 관계를 시각적으로 표현하는 도구입니다. 문헌검토 과정에서 개념 맵을 작성하면 복잡한 이론적 관계를 한눈에 파악할 수 있고, 문헌검토의 전체적인 구조를 설계하는 데 도움이 됩니다.'
          : 'A concept map is a tool that visually represents the relationships between key concepts derived from literature. Creating concept maps during the literature review process allows you to grasp complex theoretical relationships at a glance and helps design the overall structure of the literature review.'}
      </p>
      <p>
        {isKo
          ? 'MindMeister, XMind, Coggle 등의 마인드맵 도구를 활용하면 디지털 방식으로 편리하게 개념 맵을 작성할 수 있습니다. 중심 주제에서 시작하여 관련 개념, 이론, 주요 연구자, 핵심 발견을 가지(branch)로 확장해 나가면 연구 주제의 전체적인 학문적 지형도를 만들 수 있습니다.'
          : 'Using mind mapping tools such as MindMeister, XMind, or Coggle allows you to conveniently create digital concept maps. Starting from the central topic and extending branches for related concepts, theories, key researchers, and key findings creates a comprehensive academic landscape of your research topic.'}
      </p>

      <TipBox type="warning">
        <p>
          {isKo
            ? '문헌 정리에 너무 많은 시간을 투자하여 실제 문헌검토 작성이 지연되지 않도록 주의하세요. 문헌 정리는 검토 작성을 위한 수단이지 목적이 아닙니다. 완벽한 정리 체계를 만들기보다는, 작성 과정에서 필요에 따라 유연하게 수정하는 것이 효율적입니다.'
            : 'Be careful not to invest too much time in organizing literature and delay the actual writing of the review. Literature organization is a means for writing the review, not an end in itself. Rather than creating a perfect organization system, it is more efficient to flexibly modify it as needed during the writing process.'}
        </p>
      </TipBox>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 5 – Writing the Review                                     */
/* ------------------------------------------------------------------ */
function WritingReviewSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>{isKo ? '문헌검토 작성법' : 'Writing the Review'}</h2>

      {/* Structure of a Literature Review */}
      <h3>{isKo ? '문헌검토의 구조' : 'Structure of a Literature Review'}</h3>
      <p>
        {isKo
          ? '잘 구성된 문헌검토는 명확한 구조를 가지고 있습니다. 일반적으로 서론, 본론, 결론의 3단 구조를 따르며, 본론은 주제별(thematic), 시간순(chronological), 또는 방법론별(methodological) 구성 중 연구 목적에 가장 적합한 방식을 선택합니다.'
          : 'A well-organized literature review has a clear structure. It generally follows a three-part structure of introduction, body, and conclusion. The body section uses thematic, chronological, or methodological organization, choosing the approach most suited to the research purpose.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '서론 (Introduction)' : 'Introduction'}</strong>:
          {isKo ? ' 문헌검토의 범위와 목적을 명시하고, 검토할 주요 주제를 소개합니다. 독자에게 문헌검토의 전체적인 구성(road map)을 제시합니다.' : ' States the scope and purpose of the literature review and introduces the main topics to be reviewed. Provides the reader with a road map of the overall organization.'}
        </li>
        <li>
          <strong>{isKo ? '본론 (Body)' : 'Body'}</strong>:
          {isKo ? ' 주제별로 관련 문헌을 분석하고 종합합니다. 각 주제 내에서 연구들 간의 관계, 일치점, 불일치점을 논의합니다. 단순 나열이 아닌 비판적 종합이 핵심입니다.' : ' Analyzes and synthesizes related literature by theme. Discusses relationships, agreements, and disagreements among studies within each theme. Critical synthesis, not mere listing, is essential.'}
        </li>
        <li>
          <strong>{isKo ? '결론 (Conclusion)' : 'Conclusion'}</strong>:
          {isKo ? ' 검토한 문헌의 주요 발견을 요약하고, 연구 공백(gap)을 명시합니다. 이 공백이 본 연구의 정당성(justification)으로 연결됩니다.' : ' Summarizes the main findings of the reviewed literature and identifies research gaps. These gaps connect to the justification for your study.'}
        </li>
      </ul>

      {/* Writing with Synthesis */}
      <h3>{isKo ? '종합적 글쓰기 기법' : 'Synthesis Writing Techniques'}</h3>
      <p>
        {isKo
          ? '문헌검토에서 가장 흔한 실수는 각 연구를 개별적으로 요약하는 "연구별 나열" 방식입니다. 이 대신 주제 중심의 종합적 글쓰기를 해야 합니다. 종합적 글쓰기란 여러 연구의 결과를 통합하여 하나의 일관된 논의를 구성하는 것입니다.'
          : 'The most common mistake in literature reviews is the "study-by-study listing" approach that summarizes each study individually. Instead, you should write thematically focused syntheses. Synthesis writing means integrating the results of multiple studies to construct one coherent discussion.'}
      </p>
      <p>
        {isKo
          ? '예를 들어, "Kim(2020)은 ~을 발견했다. Lee(2021)은 ~을 발견했다. Park(2022)은 ~을 발견했다."라는 나열 방식 대신, "소셜 미디어 사용과 자아 존중감의 관계에 대한 연구 결과는 일관되지 않다. Kim(2020)과 Lee(2021)은 부정적 관계를 보고한 반면, Park(2022)은 사용 목적에 따라 관계의 방향이 달라진다고 주장하였다."와 같이 주제를 중심으로 종합합니다.'
          : 'For example, instead of listing "Kim (2020) found X. Lee (2021) found Y. Park (2022) found Z," synthesize around themes: "Research findings on the relationship between social media use and self-esteem are inconsistent. While Kim (2020) and Lee (2021) reported a negative relationship, Park (2022) argued that the direction of the relationship varies depending on the purpose of use."'}
      </p>

      <TipBox type="important">
        <p>
          {isKo
            ? '각 단락의 첫 문장(topic sentence)은 해당 단락에서 논의할 주제를 명확히 제시해야 합니다. "Smith(2019)는..."으로 단락을 시작하지 마세요. 대신 "교사의 자기효능감은 학생 성취도에 유의미한 영향을 미치는 것으로 나타났다(Smith, 2019; Jones, 2020)."처럼 주제 중심으로 시작하세요.'
            : 'The first sentence (topic sentence) of each paragraph must clearly present the topic to be discussed. Do not start a paragraph with "Smith (2019) found..." Instead, start with a theme-centered statement like "Teacher self-efficacy has been found to have a significant impact on student achievement (Smith, 2019; Jones, 2020)."'}
        </p>
      </TipBox>

      {/* PRISMA for Systematic Reviews */}
      <h3>{isKo ? 'PRISMA 가이드라인 (체계적 문헌검토)' : 'PRISMA Guidelines (Systematic Reviews)'}</h3>
      <p>
        {isKo
          ? 'PRISMA(Preferred Reporting Items for Systematic Reviews and Meta-Analyses)는 체계적 문헌검토와 메타분석의 보고 품질을 향상시키기 위한 국제 가이드라인입니다. 체계적 문헌검토를 수행할 때 PRISMA 체크리스트와 흐름도(flow diagram)를 따르면 검토의 투명성과 재현 가능성을 확보할 수 있습니다.'
          : 'PRISMA (Preferred Reporting Items for Systematic Reviews and Meta-Analyses) is an international guideline for improving the reporting quality of systematic reviews and meta-analyses. Following the PRISMA checklist and flow diagram when conducting a systematic review ensures the transparency and reproducibility of the review.'}
      </p>
      <p>
        {isKo
          ? 'PRISMA 흐름도는 문헌 선정 과정을 4단계로 시각화합니다: (1) 식별(Identification) - 데이터베이스 검색으로 확인된 총 문헌 수, (2) 선별(Screening) - 중복 제거 후 제목과 초록 검토, (3) 적격성(Eligibility) - 전문 검토를 통한 포함/배제 판단, (4) 포함(Included) - 최종 분석에 포함된 문헌 수. 각 단계에서 배제된 문헌 수와 배제 사유를 투명하게 보고합니다.'
          : 'The PRISMA flow diagram visualizes the literature selection process in 4 stages: (1) Identification - total records identified through database searching, (2) Screening - title and abstract review after removing duplicates, (3) Eligibility - inclusion/exclusion decisions through full-text review, (4) Included - number of studies included in the final analysis. The number of excluded records and reasons for exclusion are transparently reported at each stage.'}
      </p>

      <TipBox type="tip">
        <p>
          {isKo
            ? '학위논문의 문헌검토가 반드시 완전한 체계적 문헌검토(Systematic Review)일 필요는 없지만, PRISMA의 핵심 원칙들(투명한 검색 전략, 명확한 포함/배제 기준, 체계적 문헌 선정 과정)을 부분적으로 도입하면 검토의 학술적 엄밀성을 크게 향상시킬 수 있습니다.'
            : 'The literature review in a thesis does not necessarily need to be a complete systematic review, but partially adopting key PRISMA principles (transparent search strategy, clear inclusion/exclusion criteria, systematic literature selection process) can greatly enhance the academic rigor of the review.'}
        </p>
      </TipBox>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 6 – Citation Management                                    */
/* ------------------------------------------------------------------ */
function CitationSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>{isKo ? '인용과 참고문헌 관리' : 'Citation Management'}</h2>

      {/* Citation Styles */}
      <h3>{isKo ? '주요 인용 양식' : 'Major Citation Styles'}</h3>
      <p>
        {isKo
          ? '학술 글쓰기에서 올바른 인용은 지적 정직성의 기본이며, 학문적 신뢰를 확보하는 핵심 요소입니다. 인용 양식(citation style)은 학문 분야에 따라 다르며, 해당 분야의 관행을 따르는 것이 일반적입니다. 다음은 가장 널리 사용되는 인용 양식입니다.'
          : 'Proper citation in academic writing is the foundation of intellectual honesty and a key element in establishing scholarly credibility. Citation styles vary by academic discipline, and it is common practice to follow the conventions of the field. The following are the most widely used citation styles.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? 'APA (American Psychological Association)' : 'APA (American Psychological Association)'}</strong>:
          {isKo ? ' 사회과학, 교육학, 심리학 분야에서 가장 널리 사용됩니다. 저자-연도(author-date) 체계를 사용합니다. 본문 인용 예: (Kim, 2023) 또는 Kim(2023)에 따르면...' : ' Most widely used in social sciences, education, and psychology. Uses the author-date system. In-text citation example: (Kim, 2023) or According to Kim (2023)...'}
        </li>
        <li>
          <strong>{isKo ? 'Chicago/Turabian' : 'Chicago/Turabian'}</strong>:
          {isKo ? ' 인문학, 역사학 분야에서 주로 사용됩니다. 각주-참고문헌(notes-bibliography) 체계와 저자-연도(author-date) 체계 두 가지를 제공합니다.' : ' Primarily used in humanities and history. Provides two systems: notes-bibliography and author-date.'}
        </li>
        <li>
          <strong>{isKo ? 'MLA (Modern Language Association)' : 'MLA (Modern Language Association)'}</strong>:
          {isKo ? ' 문학, 언어학, 문화 연구 분야에서 사용됩니다. 저자-페이지(author-page) 체계를 사용합니다.' : ' Used in literature, linguistics, and cultural studies. Uses the author-page system.'}
        </li>
        <li>
          <strong>{isKo ? 'Vancouver' : 'Vancouver'}</strong>:
          {isKo ? ' 의학, 자연과학 분야에서 주로 사용됩니다. 번호 체계(numeric system)를 사용하며, 본문에서 인용 순서대로 번호를 부여합니다.' : ' Primarily used in medicine and natural sciences. Uses a numeric system, assigning numbers in the order of citation in the text.'}
        </li>
      </ul>

      {/* Reference Management Tools */}
      <h3>{isKo ? '참고문헌 관리 도구' : 'Reference Management Tools'}</h3>
      <p>
        {isKo
          ? '참고문헌 관리 소프트웨어는 문헌 수집, 정리, 인용, 참고문헌 목록 생성을 자동화하여 연구자의 시간과 노력을 크게 절약해 줍니다. 특히 문헌의 수가 많아질수록 수작업으로 참고문헌을 관리하는 것은 오류 발생 위험이 높아지므로, 처음부터 관리 도구를 활용하는 것을 강력히 권장합니다.'
          : 'Reference management software automates literature collection, organization, citation, and bibliography generation, saving researchers significant time and effort. As the number of references grows, manually managing references increases the risk of errors, so using management tools from the beginning is strongly recommended.'}
      </p>
      <ul>
        <li>
          <strong>Zotero</strong>:
          {isKo ? ' 무료 오픈소스 도구로, 접근성이 뛰어납니다. 웹 브라우저 확장 기능(Zotero Connector)으로 클릭 한 번에 문헌 정보를 저장할 수 있습니다. Word와 Google Docs 플러그인을 지원하며, 그룹 라이브러리를 통한 협업이 가능합니다.' : ' A free open-source tool with excellent accessibility. The browser extension (Zotero Connector) allows saving citation data with one click. Supports Word and Google Docs plugins, and enables collaboration through group libraries.'}
        </li>
        <li>
          <strong>Mendeley</strong>:
          {isKo ? ' Elsevier에서 운영하는 무료 도구입니다. PDF 관리 기능이 강점이며, PDF에 직접 하이라이트와 메모를 추가할 수 있습니다. 학술 소셜 네트워크 기능도 제공하여 관련 연구자를 찾고 네트워킹할 수 있습니다.' : ' A free tool operated by Elsevier. Its strength is PDF management, allowing direct highlighting and note-taking on PDFs. Also provides academic social networking features for finding and connecting with related researchers.'}
        </li>
        <li>
          <strong>EndNote</strong>:
          {isKo ? ' 유료 소프트웨어로, 가장 오랜 역사를 가지고 있습니다. 대규모 문헌 관리에 강력하며, 많은 대학 도서관에서 기관 라이선스를 제공합니다. 복잡한 인용 양식도 정확하게 처리하는 장점이 있습니다.' : ' A paid software with the longest history. Powerful for large-scale literature management, and many university libraries provide institutional licenses. Has the advantage of accurately handling complex citation styles.'}
        </li>
      </ul>

      <TipBox type="tip">
        <p>
          {isKo
            ? '참고문헌 관리 도구를 선택할 때는 비용, 사용 편의성, 동료 연구자들과의 호환성, 소속 기관의 지원 여부를 고려하세요. 처음 시작하는 대학원생에게는 무료이면서 기능이 풍부한 Zotero를 추천합니다. 어떤 도구든 연구 초기부터 사용하면 나중에 수백 편의 참고문헌을 관리하는 데 큰 도움이 됩니다.'
            : 'When choosing a reference management tool, consider cost, ease of use, compatibility with fellow researchers, and institutional support. For beginning graduate students, Zotero is recommended as it is free and feature-rich. Using any tool from the beginning of your research greatly helps in managing hundreds of references later.'}
        </p>
      </TipBox>

      {/* In-text Citation and Paraphrasing */}
      <h3>{isKo ? '본문 인용과 패러프레이징' : 'In-text Citation and Paraphrasing'}</h3>
      <p>
        {isKo
          ? '본문 인용(In-text Citation)은 직접 인용(direct quotation)과 간접 인용(paraphrasing) 두 가지 방식으로 이루어집니다. 학술 글쓰기에서는 간접 인용이 선호되며, 직접 인용은 원문의 정확한 표현이 필수적인 경우(정의, 특정 용어, 핵심 주장 등)에만 제한적으로 사용합니다.'
          : 'In-text citation is done in two ways: direct quotation and paraphrasing. In academic writing, paraphrasing is preferred, and direct quotation is used only when the exact wording of the original is essential (definitions, specific terms, key claims, etc.).'}
      </p>
      <p>
        {isKo
          ? '패러프레이징(Paraphrasing)은 원문의 의미를 유지하면서 자신의 언어로 재구성하는 것입니다. 단순히 몇 개의 단어를 바꾸는 것은 패러프레이징이 아니라 표절에 해당할 수 있으므로 주의해야 합니다. 원문을 충분히 이해한 후, 원문을 보지 않고 자신의 언어로 작성하는 것이 효과적인 패러프레이징 방법입니다.'
          : 'Paraphrasing is reconstructing the meaning of the original text in your own words while maintaining the original meaning. Simply changing a few words is not paraphrasing and may constitute plagiarism. An effective method is to thoroughly understand the original, then write in your own words without looking at the source.'}
      </p>

      {/* Avoiding Plagiarism */}
      <h3>{isKo ? '표절 방지와 학술 윤리' : 'Avoiding Plagiarism and Academic Ethics'}</h3>
      <p>
        {isKo
          ? '표절(Plagiarism)은 다른 사람의 아이디어, 글, 데이터를 적절한 인용 없이 사용하는 것으로, 학술 윤리의 가장 심각한 위반입니다. 의도적 표절뿐 아니라, 부주의로 인한 비의도적 표절도 동일하게 처벌받을 수 있으므로 각별한 주의가 필요합니다.'
          : 'Plagiarism is the use of another person\'s ideas, writing, or data without proper citation, constituting the most serious violation of academic ethics. Not only intentional plagiarism but also unintentional plagiarism due to carelessness can receive the same penalties, so special care is needed.'}
      </p>
      <ul>
        <li>{isKo ? '다른 연구자의 아이디어를 사용할 때는 반드시 출처를 밝힙니다.' : 'Always cite sources when using other researchers\' ideas.'}</li>
        <li>{isKo ? '직접 인용 시 반드시 인용 부호("")와 정확한 출처(페이지 포함)를 표기합니다.' : 'When directly quoting, always use quotation marks ("") and provide exact source information (including page numbers).'}</li>
        <li>{isKo ? '패러프레이징 시에도 반드시 출처를 표기합니다.' : 'Always cite the source even when paraphrasing.'}</li>
        <li>{isKo ? '자기 표절(self-plagiarism)에도 주의합니다. 이전에 발표한 자신의 글을 재사용할 때도 적절한 표시가 필요합니다.' : 'Be cautious of self-plagiarism. Proper indication is needed when reusing previously published work.'}</li>
        <li>{isKo ? 'Turnitin, CopyKiller 등의 표절 검사 도구를 활용하여 제출 전에 반드시 점검합니다.' : 'Use plagiarism detection tools like Turnitin or CopyKiller to check before submission.'}</li>
      </ul>

      <TipBox type="warning">
        <p>
          {isKo
            ? '참고문헌 관리 도구가 자동으로 생성한 인용과 참고문헌 목록도 반드시 수동으로 검토하세요. 자동 생성된 서지 정보에 오류가 포함될 수 있으며, 특히 한국어 문헌이나 웹 자료의 경우 오류가 발생할 확률이 높습니다. 최종 제출 전에 모든 참고문헌을 하나하나 확인하는 것이 필수적입니다.'
            : 'Always manually review citations and reference lists automatically generated by reference management tools. Auto-generated bibliographic information may contain errors, especially for Korean-language literature and web sources. Checking every reference one by one before final submission is essential.'}
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
    <>
      <div className="guide-content-header">
        <h1>{isKo ? '참고문헌' : 'References'}</h1>
        <p>{isKo ? '문헌검토 학습에 활용된 주요 참고문헌입니다.' : 'Key references for learning about literature reviews.'}</p>
      </div>
      <div className="guide-section">
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Hart, C. (1998). <em>Doing a Literature Review: Releasing the Social Science Research Imagination</em>. SAGE Publications.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Ridley, D. (2012). <em>The Literature Review: A Step-by-Step Guide for Students</em> (2nd ed.). SAGE Publications.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Booth, A., Sutton, A., & Papaioannou, D. (2016). <em>Systematic Approaches to a Successful Literature Review</em> (2nd ed.). SAGE Publications.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Galvan, J. L., & Galvan, M. C. (2017). <em>Writing Literature Reviews: A Guide for Students of the Social and Behavioral Sciences</em> (7th ed.). Routledge.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Fink, A. (2019). <em>Conducting Research Literature Reviews: From the Internet to Paper</em> (5th ed.). SAGE Publications.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Moher, D., Liberati, A., Tetzlaff, J., & Altman, D. G. (2009). Preferred Reporting Items for Systematic Reviews and Meta-Analyses: The PRISMA Statement. <em>PLoS Medicine</em>, 6(7), e1000097.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Pautasso, M. (2013). Ten Simple Rules for Writing a Literature Review. <em>PLoS Computational Biology</em>, 9(7), e1003149.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Snyder, H. (2019). Literature Review as a Research Methodology: An Overview and Guidelines. <em>Journal of Business Research</em>, 104, 333-339.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>American Psychological Association. (2020). <em>Publication Manual of the American Psychological Association</em> (7th ed.). American Psychological Association.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Torraco, R. J. (2005). Writing Integrative Literature Reviews: Guidelines and Examples. <em>Human Resource Development Review</em>, 4(3), 356-367.</li>
        </ul>
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */
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
        description={isKo ? '체계적인 문헌검토 방법을 학습합니다.' : 'Learn systematic literature review methods.'}
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
            {activeSection === 'purpose' && <PurposeSection isKo={isKo} />}
            {activeSection === 'search-strategy' && <SearchStrategySection isKo={isKo} />}
            {activeSection === 'critical-reading' && <CriticalReadingSection isKo={isKo} />}
            {activeSection === 'organizing' && <OrganizingSection isKo={isKo} />}
            {activeSection === 'writing-review' && <WritingReviewSection isKo={isKo} />}
            {activeSection === 'citation' && <CitationSection isKo={isKo} />}
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
