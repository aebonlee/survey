import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import TipBox from '../../components/TipBox';
import type { ReactElement } from 'react';

/* ------------------------------------------------------------------ */
/*  Section metadata                                                   */
/* ------------------------------------------------------------------ */

const SECTIONS = [
  { id: 'foundations', icon: 'fa-book-open', ko: '연구윤리 기초', en: 'Ethics Foundations' },
  { id: 'irb-process', icon: 'fa-gavel', ko: 'IRB 심의 절차', en: 'IRB Review Process' },
  { id: 'consent', icon: 'fa-file-signature', ko: '동의서 작성', en: 'Informed Consent' },
  { id: 'privacy', icon: 'fa-lock', ko: '개인정보 보호', en: 'Privacy Protection' },
  { id: 'misconduct', icon: 'fa-ban', ko: '연구 부정행위', en: 'Research Misconduct' },
  { id: 'rcr', icon: 'fa-award', ko: '책임있는 연구수행(RCR)', en: 'Responsible Conduct of Research' },
  { id: 'references', icon: 'fa-bookmark', ko: '참고문헌', en: 'References' },
];

/* ================================================================== */
/*  Section 1 — Ethics Foundations                                      */
/* ================================================================== */

function FoundationsSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>
        <i className="fa-solid fa-book-open" />
        {isKo ? ' 연구윤리 기초' : ' Ethics Foundations'}
      </h2>

      {/* --- History of Research Ethics --- */}
      <h3>{isKo ? '연구윤리의 역사적 발전' : 'Historical Development of Research Ethics'}</h3>
      <p>
        {isKo
          ? '현대 연구윤리의 체계는 20세기의 비극적인 사건들에 대한 반성에서 출발합니다. 연구윤리의 역사적 발전을 이해하는 것은 현재의 윤리적 기준이 왜 존재하는지, 그리고 연구자가 왜 이를 준수해야 하는지를 파악하는 데 필수적입니다. 세 가지 핵심적인 역사적 이정표가 오늘날의 연구윤리 체계를 형성했습니다.'
          : 'The modern framework of research ethics originated from reflections on tragic events of the 20th century. Understanding the historical development of research ethics is essential for grasping why current ethical standards exist and why researchers must comply with them. Three pivotal historical milestones shaped today\'s research ethics framework.'}
      </p>
      <p>
        {isKo
          ? '첫째, 뉘른베르크 강령(Nuremberg Code, 1947)은 제2차 세계대전 중 나치 의사들의 잔혹한 인체실험에 대한 뉘른베르크 전범 재판의 결과로 탄생했습니다. 이 강령은 자발적 동의(voluntary consent)가 연구 참여의 절대적 전제 조건임을 최초로 명시했으며, 불필요한 신체적·정신적 고통의 회피, 연구대상자의 자유로운 중단 권리 등 10가지 원칙을 제시했습니다. 뉘른베르크 강령은 인간 대상 연구의 윤리적 기준을 수립한 최초의 국제적 문서로서 역사적 의의를 지닙니다.'
          : 'First, the Nuremberg Code (1947) was born from the Nuremberg Trials that followed the brutal human experiments conducted by Nazi doctors during World War II. This code was the first to explicitly state that voluntary consent is an absolute prerequisite for research participation, and it set forth 10 principles including avoidance of unnecessary physical and mental suffering and the subject\'s right to freely withdraw. The Nuremberg Code holds historical significance as the first international document establishing ethical standards for human subjects research.'}
      </p>
      <p>
        {isKo
          ? '둘째, 벨몬트 보고서(Belmont Report, 1979)는 터스키기 매독 연구(1932-1972)의 스캔들을 계기로 미국 의회가 설립한 국가위원회에 의해 작성되었습니다. 터스키기 연구에서는 앨라배마주의 흑인 남성 399명에게 매독 치료를 제공하지 않은 채 40년간 질병의 자연 경과를 관찰했습니다. 벨몬트 보고서는 인격 존중(Respect for Persons), 선행(Beneficence), 정의(Justice)라는 세 가지 핵심 윤리 원칙을 체계화하여, 오늘날 IRB 심의의 이론적 기반을 제공합니다.'
          : 'Second, the Belmont Report (1979) was produced by a National Commission established by the U.S. Congress in response to the Tuskegee Syphilis Study scandal (1932-1972). In the Tuskegee Study, 399 Black men in Alabama were observed for 40 years without being offered syphilis treatment. The Belmont Report systematized three core ethical principles — Respect for Persons, Beneficence, and Justice — providing the theoretical foundation for IRB review today.'}
      </p>
      <p>
        {isKo
          ? '셋째, 헬싱키 선언(Declaration of Helsinki, 1964)은 세계의사회(WMA)가 채택한 의학 연구의 윤리적 원칙으로, 현재까지 여러 차례 개정되며 국제 연구윤리의 기준으로 기능하고 있습니다. 헬싱키 선언은 연구 참여자의 이익이 과학적·사회적 이익보다 우선해야 한다는 원칙을 명시하며, 취약한 집단에 대한 특별한 보호, 독립적 윤리위원회의 심의, 연구 등록의 의무 등을 규정합니다.'
          : 'Third, the Declaration of Helsinki (1964) is a set of ethical principles for medical research adopted by the World Medical Association (WMA), which has been revised multiple times and continues to serve as an international standard for research ethics. The Declaration specifies that the interests of research participants must take precedence over scientific and social interests, and it mandates special protection for vulnerable populations, review by independent ethics committees, and research registration requirements.'}
      </p>

      {/* --- Core Principles --- */}
      <h3>{isKo ? '연구윤리의 핵심 원칙' : 'Core Principles of Research Ethics'}</h3>
      <p>
        {isKo
          ? '벨몬트 보고서에서 제시된 세 가지 원칙은 현대 연구윤리의 근간을 이루며, 모든 IRB 심의의 평가 기준으로 활용됩니다:'
          : 'The three principles presented in the Belmont Report form the foundation of modern research ethics and serve as the evaluation criteria for all IRB reviews:'}
      </p>
      <ol>
        <li>
          <strong>{isKo ? '인격 존중 (Respect for Persons)' : 'Respect for Persons'}</strong>
          {' — '}
          {isKo
            ? '모든 개인은 자율적 행위자로서 존중받아야 하며, 자율적 판단 능력이 제한된 사람(아동, 수감자, 인지 장애인 등)은 추가적인 보호를 받아야 합니다. 이 원칙은 충분한 정보에 기반한 자발적 동의(informed consent)의 근거가 되며, 연구자가 참여자에게 연구 목적, 절차, 위험, 이익 등을 충분히 설명해야 할 의무를 부여합니다.'
            : 'All individuals must be respected as autonomous agents, and persons with diminished autonomy (children, prisoners, cognitively impaired individuals, etc.) are entitled to additional protection. This principle provides the foundation for informed consent and imposes an obligation on researchers to fully explain the purpose, procedures, risks, and benefits of the research to participants.'}
        </li>
        <li>
          <strong>{isKo ? '선행 (Beneficence)' : 'Beneficence'}</strong>
          {' — '}
          {isKo
            ? '연구자는 참여자에게 해를 끼치지 않아야 하며(do no harm), 연구의 이익을 극대화하고 위험을 최소화해야 합니다. 이 원칙은 체계적인 위험-이익 평가(risk-benefit assessment)를 요구하며, 잠재적 이익이 잠재적 위험보다 클 때에만 연구가 정당화될 수 있음을 의미합니다.'
            : 'Researchers must do no harm to participants and must maximize benefits while minimizing risks. This principle requires systematic risk-benefit assessment and means that research can only be justified when potential benefits outweigh potential risks.'}
        </li>
        <li>
          <strong>{isKo ? '정의 (Justice)' : 'Justice'}</strong>
          {' — '}
          {isKo
            ? '연구의 이익과 부담은 사회 전체에 공정하게 분배되어야 합니다. 특정 집단(사회적 약자, 소수자 등)이 부당하게 연구의 위험만을 부담하거나, 반대로 연구의 혜택에서 배제되어서는 안 됩니다. 이 원칙은 공정한 연구 대상자 선정의 근거가 됩니다.'
            : 'The benefits and burdens of research must be fairly distributed across society. No specific group (disadvantaged populations, minorities, etc.) should be unfairly burdened with research risks alone, nor should they be excluded from research benefits. This principle provides the basis for fair participant selection.'}
        </li>
      </ol>

      {/* --- Ethical Frameworks --- */}
      <h3>{isKo ? '윤리적 프레임워크' : 'Ethical Frameworks'}</h3>
      <p>
        {isKo
          ? '연구윤리를 분석하고 적용하기 위해 다양한 윤리적 프레임워크가 활용됩니다. 의무론(deontology)은 칸트의 철학에 기반하여 행위 자체의 도덕적 의무를 강조하며, 연구자가 결과와 무관하게 특정 윤리적 규칙(동의 획득, 진실 보고 등)을 준수해야 한다고 봅니다. 결과주의(consequentialism)는 행위의 결과에 초점을 맞추어, 연구의 전체적인 이익이 해보다 클 때 윤리적으로 정당화된다고 봅니다. 덕 윤리학(virtue ethics)은 연구자의 성품과 덕성(정직, 겸손, 공정함 등)을 강조하며, 윤리적 연구는 윤리적 연구자에서 비롯된다고 봅니다.'
          : 'Various ethical frameworks are used to analyze and apply research ethics. Deontology, based on Kantian philosophy, emphasizes the moral duty of actions themselves, holding that researchers must follow certain ethical rules (obtaining consent, truthful reporting, etc.) regardless of outcomes. Consequentialism focuses on the results of actions, considering research ethically justified when its overall benefits outweigh its harms. Virtue ethics emphasizes the character and virtues of researchers (honesty, humility, fairness, etc.), holding that ethical research originates from ethical researchers.'}
      </p>
      <p>
        {isKo
          ? '실제 연구 현장에서는 이러한 프레임워크들이 상호 보완적으로 활용됩니다. 예를 들어, IRB는 결과주의적 관점에서 위험-이익 평가를 수행하면서, 동시에 의무론적 관점에서 동의 절차의 적절성을 확인하고, 정의론적 관점에서 대상자 선정의 공정성을 평가합니다. 연구자가 다양한 윤리적 관점을 이해하면 복잡한 윤리적 딜레마에 보다 사려 깊게 대응할 수 있습니다.'
          : 'In practice, these frameworks are used complementarily. For example, an IRB performs risk-benefit assessment from a consequentialist perspective while simultaneously verifying the adequacy of consent procedures from a deontological perspective and evaluating the fairness of participant selection from a justice perspective. When researchers understand multiple ethical perspectives, they can respond more thoughtfully to complex ethical dilemmas.'}
      </p>

      {/* --- Modern Ethical Governance --- */}
      <h3>{isKo ? '현대 연구윤리의 거버넌스' : 'Modern Research Ethics Governance'}</h3>
      <p>
        {isKo
          ? '오늘날 연구윤리는 국제적, 국가적, 기관적 수준에서 다층적으로 관리됩니다. 국제적으로는 헬싱키 선언, CIOMS 가이드라인, 싱가포르 선언 등이 보편적 기준을 제시하고, 각 국가는 자국의 법률과 규정을 통해 이를 구체화합니다. 미국은 Common Rule(45 CFR 46)을, 한국은 생명윤리 및 안전에 관한 법률과 국가연구개발혁신법을 통해 연구윤리를 규율합니다. 기관 수준에서는 각 대학과 연구기관의 IRB가 구체적인 연구 프로토콜을 심의합니다.'
          : 'Today, research ethics is governed at multiple levels: international, national, and institutional. Internationally, the Declaration of Helsinki, CIOMS Guidelines, and Singapore Statement provide universal standards, which each nation operationalizes through its own laws and regulations. The United States uses the Common Rule (45 CFR 46), while Korea governs research ethics through the Bioethics and Safety Act and the National R&D Innovation Act. At the institutional level, IRBs at individual universities and research institutions review specific research protocols.'}
      </p>

      <TipBox type="tip" title={isKo ? '연구윤리 학습의 출발점' : 'Starting Points for Learning Research Ethics'}>
        <p>
          {isKo
            ? '연구윤리를 처음 학습한다면 벨몬트 보고서의 원문을 직접 읽어보는 것을 강력히 권장합니다. 비교적 짧은 문서(약 10페이지)이지만, 현대 연구윤리의 핵심 원칙이 어떤 맥락에서 도출되었는지를 깊이 이해할 수 있습니다. 또한 CITI Program(citiprogram.org)의 온라인 교육 모듈은 체계적이고 실용적인 연구윤리 교육을 제공하므로, IRB 신청 전에 반드시 이수하는 것이 좋습니다.'
            : 'If you are new to research ethics, reading the original text of the Belmont Report is highly recommended. Although relatively short (about 10 pages), it provides deep insight into the context from which the core principles of modern research ethics were derived. Additionally, the online training modules from the CITI Program (citiprogram.org) offer systematic and practical research ethics education, and it is advisable to complete them before submitting an IRB application.'}
        </p>
      </TipBox>

      {/* --- Why Ethics Matter Today --- */}
      <h3>{isKo ? '오늘날 연구윤리가 중요한 이유' : 'Why Research Ethics Matter Today'}</h3>
      <p>
        {isKo
          ? '21세기의 연구 환경은 빅데이터, 인공지능, 유전체학, 소셜미디어 연구 등 새로운 도전을 제기하고 있습니다. 이러한 분야에서는 전통적인 동의 모델의 적용이 어렵거나, 개인정보 침해의 위험이 높거나, 알고리즘의 편향으로 인한 차별이 발생할 수 있습니다. 연구윤리의 기본 원칙은 변하지 않지만, 새로운 기술과 방법론에 맞게 지속적으로 재해석되고 확장되어야 합니다. 윤리적 연구 수행은 규제 준수를 넘어, 과학에 대한 공공의 신뢰를 유지하고 연구의 사회적 가치를 실현하기 위한 필수적인 책무입니다.'
          : 'The 21st-century research environment poses new challenges through big data, artificial intelligence, genomics, social media research, and more. In these fields, traditional consent models may be difficult to apply, risks of privacy violations are heightened, and algorithmic bias may lead to discrimination. While the fundamental principles of research ethics remain unchanged, they must be continuously reinterpreted and expanded to address new technologies and methodologies. Conducting ethical research goes beyond regulatory compliance — it is an essential responsibility for maintaining public trust in science and realizing the social value of research.'}
      </p>
    </section>
  );
}

/* ================================================================== */
/*  Section 2 — IRB Review Process                                      */
/* ================================================================== */

function IrbProcessSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>
        <i className="fa-solid fa-gavel" />
        {isKo ? ' IRB 심의 절차' : ' IRB Review Process'}
      </h2>

      {/* --- IRB Types --- */}
      <h3>{isKo ? 'IRB 심의 유형' : 'Types of IRB Review'}</h3>
      <p>
        {isKo
          ? 'IRB(Institutional Review Board, 기관생명윤리위원회)는 인간 대상 연구의 윤리적 적절성을 심의하는 독립적 기구입니다. 연구의 위험 수준과 대상자 특성에 따라 세 가지 심의 유형이 적용됩니다:'
          : 'An IRB (Institutional Review Board) is an independent body that reviews the ethical appropriateness of human subjects research. Three types of review are applied based on the risk level and participant characteristics of the research:'}
      </p>
      <ol>
        <li>
          <strong>{isKo ? '심의 면제 (Exempt Review)' : 'Exempt Review'}</strong>
          {' — '}
          {isKo
            ? '최소 위험(minimal risk) 이하의 연구로서 특정 범주에 해당하는 경우에 적용됩니다. 예를 들어, 교육 현장에서의 일반적인 교육 방법에 관한 연구, 이미 공개된 데이터를 활용한 이차분석 연구, 익명 설문조사 등이 이에 해당합니다. 면제 판정은 연구자가 스스로 내리는 것이 아니라 IRB가 결정해야 합니다.'
            : 'Applied to research at or below minimal risk that falls into specific categories. Examples include research on standard educational practices in educational settings, secondary analysis using publicly available data, and anonymous surveys. Importantly, the exemption determination must be made by the IRB, not by the researcher themselves.'}
        </li>
        <li>
          <strong>{isKo ? '신속 심의 (Expedited Review)' : 'Expedited Review'}</strong>
          {' — '}
          {isKo
            ? '최소 위험 수준의 연구이지만 면제에 해당하지 않는 경우, IRB 위원장 또는 지명된 위원 1-2인이 심의합니다. 소량의 혈액 채취, 음성 녹음, 일반적 심리 검사 등의 연구가 해당됩니다. 신속 심의는 정규 심의보다 빠르게 진행되지만, 승인 기준은 동일합니다.'
            : 'When research is at the minimal risk level but does not qualify for exemption, it is reviewed by the IRB chair or 1-2 designated members. Research involving minor blood draws, voice recording, or standard psychological testing falls into this category. Expedited review proceeds faster than full board review, but the approval criteria are identical.'}
        </li>
        <li>
          <strong>{isKo ? '정규 심의 (Full Board Review)' : 'Full Board Review'}</strong>
          {' — '}
          {isKo
            ? '최소 위험 이상의 연구, 취약한 대상자(아동, 수감자, 임산부, 인지 장애인 등)를 포함하는 연구, 또는 민감한 주제를 다루는 연구에 적용됩니다. 전체 IRB 위원회가 회의를 통해 심의하며, 과반수 출석과 출석 위원 과반수의 찬성이 필요합니다.'
            : 'Applied to research above minimal risk, research involving vulnerable populations (children, prisoners, pregnant women, cognitively impaired individuals, etc.), or research dealing with sensitive topics. The full IRB committee reviews the protocol at a convened meeting, requiring a quorum and a majority vote of members present.'}
        </li>
      </ol>

      <TipBox type="important" title={isKo ? '심의 유형의 판단' : 'Determining Review Type'}>
        <p>
          {isKo
            ? '연구자가 스스로 심의 면제 또는 신속 심의에 해당한다고 판단하여 IRB 심의를 건너뛰어서는 안 됩니다. 반드시 IRB에 신청서를 제출하고, IRB가 적절한 심의 유형을 결정하도록 해야 합니다. 심의 유형의 잘못된 판단은 연구의 정당성을 훼손하고, 논문 게재 거부 또는 연구비 반환의 사유가 될 수 있습니다.'
            : 'Researchers must never skip IRB review based on their own judgment that their study qualifies for exemption or expedited review. You must submit an application to the IRB and allow them to determine the appropriate review type. Incorrect determination of review type can undermine research legitimacy and may result in manuscript rejection or funding clawback.'}
        </p>
      </TipBox>

      {/* --- Application Process --- */}
      <h3>{isKo ? 'IRB 신청 절차' : 'IRB Application Process'}</h3>
      <p>
        {isKo
          ? 'IRB 신청은 일반적으로 다음 단계를 따릅니다:'
          : 'The IRB application generally follows these steps:'}
      </p>
      <ol>
        <li>
          <strong>{isKo ? '사전 준비' : 'Pre-submission Preparation'}</strong>
          {' — '}
          {isKo
            ? '연구 프로토콜 완성, 동의서 초안 작성, 연구 도구(설문지 등) 준비, CITI 교육 이수 확인'
            : 'Complete the research protocol, draft consent forms, prepare research instruments (questionnaires, etc.), and verify CITI training completion'}
        </li>
        <li>
          <strong>{isKo ? '신청서 작성' : 'Application Submission'}</strong>
          {' — '}
          {isKo
            ? '기관의 IRB 온라인 시스템(예: e-IRB)을 통해 신청서를 작성하고 필요 서류를 첨부합니다. 연구 목적, 방법, 대상자 선정 기준, 위험-이익 평가, 데이터 관리 계획 등을 상세히 기술합니다.'
            : 'Complete the application through the institution\'s IRB online system (e.g., e-IRB) and attach required documents. Describe in detail the research purpose, methods, participant selection criteria, risk-benefit assessment, and data management plan.'}
        </li>
        <li>
          <strong>{isKo ? '심의 및 결과 통보' : 'Review and Decision'}</strong>
          {' — '}
          {isKo
            ? 'IRB는 승인(approval), 조건부 승인(conditional approval), 수정 후 재심의(modifications required), 또는 반려(disapproval) 결정을 내립니다. 조건부 승인의 경우 지적 사항을 수정하여 재제출하면 됩니다.'
            : 'The IRB renders a decision of approval, conditional approval, modifications required, or disapproval. For conditional approval, address the required modifications and resubmit.'}
        </li>
        <li>
          <strong>{isKo ? '연구 수행' : 'Conduct Research'}</strong>
          {' — '}
          {isKo
            ? 'IRB 승인을 받은 후에만 연구를 시작할 수 있습니다. 승인된 프로토콜을 엄격히 준수하여 연구를 수행합니다.'
            : 'Research may begin only after receiving IRB approval. Conduct the study in strict accordance with the approved protocol.'}
        </li>
      </ol>

      {/* --- Required Documents --- */}
      <h3>{isKo ? 'IRB 제출 서류' : 'Required Documents for IRB Submission'}</h3>
      <p>
        {isKo
          ? 'IRB 신청 시 일반적으로 다음 서류가 필요합니다:'
          : 'The following documents are generally required for IRB submission:'}
      </p>
      <ul>
        <li>{isKo ? '연구계획서(Protocol): 연구의 배경, 목적, 방법, 대상자 선정 기준, 위험-이익 분석, 데이터 관리 계획을 포함' : 'Research Protocol: Includes background, objectives, methods, participant selection criteria, risk-benefit analysis, and data management plan'}</li>
        <li>{isKo ? '연구대상자 동의서(Informed Consent Form): 연구 목적, 절차, 위험, 이익, 기밀 보장, 자발적 참여 등을 명시' : 'Informed Consent Form: Specifies research purpose, procedures, risks, benefits, confidentiality, and voluntary participation'}</li>
        <li>{isKo ? '연구 도구: 설문지, 면접 가이드, 관찰 체크리스트 등' : 'Research Instruments: Questionnaires, interview guides, observation checklists, etc.'}</li>
        <li>{isKo ? '모집 문건: 연구대상자 모집 공고문, 이메일 초안, 전단지 등' : 'Recruitment Materials: Recruitment announcements, email drafts, flyers, etc.'}</li>
        <li>{isKo ? '연구책임자 이력서(CV) 및 CITI 교육 이수증' : 'PI\'s CV and CITI training certificates'}</li>
        <li>{isKo ? '이해충돌 공개서(Conflict of Interest Disclosure)' : 'Conflict of Interest Disclosure form'}</li>
      </ul>

      {/* --- Review Timeline --- */}
      <h3>{isKo ? '심의 소요 기간' : 'Review Timeline'}</h3>
      <p>
        {isKo
          ? '심의 소요 기간은 심의 유형과 기관에 따라 다릅니다. 일반적으로 심의 면제 판정은 1-2주, 신속 심의는 2-4주, 정규 심의는 4-8주가 소요됩니다. 정규 심의는 월 1-2회 개최되는 위원회 회의 일정에 따라 달라지므로, 연구 일정을 계획할 때 충분한 시간적 여유를 두어야 합니다. 수정 요청이 있는 경우 추가 시간이 필요하며, 복잡한 연구는 2-3차례의 수정-재심의 과정을 거칠 수 있습니다.'
          : 'Review timelines vary by review type and institution. Generally, exempt determination takes 1-2 weeks, expedited review takes 2-4 weeks, and full board review takes 4-8 weeks. Full board review depends on committee meeting schedules (typically held 1-2 times per month), so researchers should plan adequate lead time. If modifications are requested, additional time is needed, and complex studies may undergo 2-3 rounds of revision and re-review.'}
      </p>

      <TipBox type="tip" title={isKo ? '심의 기간 단축 팁' : 'Tips for Reducing Review Time'}>
        <p>
          {isKo
            ? '(1) 신청서 제출 전에 IRB 담당자와 사전 상담을 통해 잠재적 문제를 미리 파악하세요. (2) 기관의 IRB 신청서 템플릿과 가이드라인을 꼼꼼히 읽고 모든 항목을 빠짐없이 작성하세요. (3) 동의서를 대상자의 눈높이에 맞게 명확하고 쉽게 작성하세요. (4) 이전 승인 사례를 참고하되, 자신의 연구 특성에 맞게 조정하세요.'
            : '(1) Consult with IRB staff before submission to identify potential issues in advance. (2) Carefully read the institution\'s IRB application templates and guidelines, and complete all sections thoroughly. (3) Write consent forms clearly and simply at the participant\'s comprehension level. (4) Reference previously approved protocols but adapt them to your study\'s specific characteristics.'}
        </p>
      </TipBox>

      {/* --- Amendments --- */}
      <h3>{isKo ? '변경 심의 (Amendments)' : 'Protocol Amendments'}</h3>
      <p>
        {isKo
          ? 'IRB 승인 후 연구 프로토콜을 변경해야 하는 경우, 반드시 변경 심의(amendment)를 신청해야 합니다. 변경 사항에는 대상자 수 변경, 선정/배제 기준 수정, 연구 절차 추가 또는 수정, 동의서 내용 변경, 새로운 위험 요인 발견 등이 포함됩니다. 긴급한 안전 관련 변경(참여자에 대한 즉각적 위험을 제거하기 위한 변경)은 IRB 승인 전에 시행할 수 있지만, 사후에 즉시 보고해야 합니다. 승인 없이 프로토콜을 변경하는 것은 심각한 규정 위반이며, 연구 전체의 유효성을 위협할 수 있습니다.'
          : 'If the research protocol needs to be modified after IRB approval, an amendment must be submitted. Changes include modifications to sample size, inclusion/exclusion criteria, research procedures, consent form content, and newly discovered risk factors. Emergency safety-related changes (to eliminate immediate risk to participants) may be implemented before IRB approval but must be reported immediately afterward. Modifying a protocol without approval is a serious regulatory violation that can jeopardize the validity of the entire study.'}
      </p>
    </section>
  );
}

/* ================================================================== */
/*  Section 3 — Informed Consent                                        */
/* ================================================================== */

function ConsentSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>
        <i className="fa-solid fa-file-signature" />
        {isKo ? ' 동의서 작성' : ' Informed Consent'}
      </h2>

      {/* --- Elements of Informed Consent --- */}
      <h3>{isKo ? '동의서의 필수 요소' : 'Essential Elements of Informed Consent'}</h3>
      <p>
        {isKo
          ? '충분한 정보에 기반한 동의(informed consent)는 연구윤리의 가장 기본적인 요건입니다. 미국 연방 규정(45 CFR 46.116)과 한국의 생명윤리법은 동의서에 반드시 포함되어야 할 요소를 명시하고 있습니다:'
          : 'Informed consent is the most fundamental requirement of research ethics. U.S. federal regulations (45 CFR 46.116) and Korea\'s Bioethics Act specify the elements that must be included in consent forms:'}
      </p>
      <ul>
        <li>{isKo ? '연구 목적과 참여 기간에 대한 설명' : 'Explanation of the research purpose and duration of participation'}</li>
        <li>{isKo ? '연구 절차에 대한 상세한 설명' : 'Detailed description of research procedures'}</li>
        <li>{isKo ? '예상되는 위험과 불편' : 'Foreseeable risks and discomforts'}</li>
        <li>{isKo ? '연구 참여를 통해 기대되는 이익' : 'Expected benefits from participation'}</li>
        <li>{isKo ? '대안적 절차나 치료(해당되는 경우)' : 'Alternative procedures or treatments (if applicable)'}</li>
        <li>{isKo ? '비밀 보장의 범위와 방법' : 'Extent and methods of confidentiality protection'}</li>
        <li>{isKo ? '보상 및 피해 발생 시 보상/치료에 대한 정보' : 'Information about compensation and treatment for injury'}</li>
        <li>{isKo ? '문의처(연구자 및 IRB 연락처)' : 'Contact information (researcher and IRB)'}</li>
        <li>{isKo ? '참여의 자발성과 언제든 철회할 수 있는 권리' : 'Voluntary nature of participation and right to withdraw at any time'}</li>
        <li>{isKo ? '데이터의 향후 사용 가능성(이차 연구 등)' : 'Potential future use of data (secondary research, etc.)'}</li>
      </ul>

      {/* --- Writing Clear Consent Forms --- */}
      <h3>{isKo ? '명확한 동의서 작성법' : 'Writing Clear Consent Forms'}</h3>
      <p>
        {isKo
          ? '동의서는 법적 문서이자 동시에 참여자와의 소통 도구입니다. 참여자가 연구 내용을 충분히 이해할 수 있도록 쉽고 명확하게 작성해야 합니다. 미국 보건복지부(HHS)는 일반적으로 중학교 2학년(8th grade) 수준의 독해력에 맞추어 작성할 것을 권고합니다.'
          : 'A consent form is both a legal document and a communication tool with participants. It must be written in a way that is easy and clear enough for participants to fully understand. The U.S. Department of Health and Human Services (HHS) generally recommends writing at an 8th-grade reading level.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '쉬운 용어 사용' : 'Use Plain Language'}</strong>
          {' — '}
          {isKo
            ? '전문 용어를 피하고, 불가피하게 사용할 경우 괄호 안에 설명을 추가하세요. 예: "무작위 배정(random assignment, 동전 던지기처럼 우연에 의해 그룹이 결정되는 것)"'
            : 'Avoid jargon; when unavoidable, include explanations in parentheses. Example: "randomization (being assigned to a group by chance, like flipping a coin)"'}
        </li>
        <li>
          <strong>{isKo ? '짧은 문장' : 'Short Sentences'}</strong>
          {' — '}
          {isKo
            ? '한 문장에 하나의 정보만 담고, 문장 길이를 20단어 이내로 유지하세요.'
            : 'Convey only one piece of information per sentence and keep sentence length under 20 words.'}
        </li>
        <li>
          <strong>{isKo ? '구조화된 형식' : 'Structured Format'}</strong>
          {' — '}
          {isKo
            ? '제목, 소제목, 글머리 기호를 활용하여 정보를 논리적으로 구조화하세요. 핵심 정보는 볼드체로 강조하세요.'
            : 'Use headings, subheadings, and bullet points to organize information logically. Highlight key information in bold.'}
        </li>
        <li>
          <strong>{isKo ? '2인칭 사용' : 'Use Second Person'}</strong>
          {' — '}
          {isKo
            ? '"연구대상자는..." 대신 "귀하는..." 또는 "당신은..."으로 직접 대화하듯 작성하세요.'
            : 'Write directly as "You will..." rather than "The participant will..." to create a conversational tone.'}
        </li>
      </ul>

      <TipBox type="warning" title={isKo ? '동의서 작성 시 흔한 실수' : 'Common Mistakes in Consent Forms'}>
        <p>
          {isKo
            ? '(1) 지나치게 길고 복잡한 동의서: 핵심 정보를 간결하게 전달하세요. (2) 강압적 표현: "반드시 참여해야 합니다" 같은 표현은 절대 사용하지 마세요. (3) 위험의 과소 표현: 예상 가능한 위험을 정직하게 기술하세요. (4) 보상의 과대 강조: 보상이 참여를 유도하는 주된 동기가 되지 않도록 주의하세요. (5) 권리 포기 조항: "연구 참여로 인한 피해에 대해 이의를 제기하지 않겠다"는 조항은 윤리적으로나 법적으로 무효합니다.'
            : '(1) Overly long and complex forms: Convey key information concisely. (2) Coercive language: Never use phrases like "You must participate." (3) Understatement of risks: Honestly describe all foreseeable risks. (4) Overemphasis on compensation: Ensure compensation does not become the primary motivation. (5) Waiver of rights clauses: Clauses stating "I agree not to file claims for harm from research participation" are ethically and legally invalid.'}
        </p>
      </TipBox>

      {/* --- Special Populations --- */}
      <h3>{isKo ? '특수 대상자의 동의' : 'Consent for Special Populations'}</h3>
      <p>
        {isKo
          ? '자율적 의사결정 능력이 제한된 대상자에게는 추가적인 보호 조치가 필요합니다:'
          : 'Additional protective measures are required for participants with limited autonomous decision-making capacity:'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '미성년자 (Minors)' : 'Minors'}</strong>
          {' — '}
          {isKo
            ? '법정 대리인(부모 또는 보호자)의 동의(permission)와 미성년자 본인의 승낙(assent)이 모두 필요합니다. 승낙은 아동의 발달 수준에 맞게 연구 내용을 쉽게 설명한 후 받아야 합니다. 일반적으로 만 7세 이상의 아동에게 승낙을 받으며, 승낙서는 그 연령대의 이해 수준에 맞게 작성합니다.'
            : 'Both permission from a legal guardian (parent or guardian) and assent from the minor are required. Assent must be obtained after explaining the research in age-appropriate terms. Generally, assent is obtained from children aged 7 and above, with assent forms written at the appropriate comprehension level for that age group.'}
        </li>
        <li>
          <strong>{isKo ? '인지 장애인 (Cognitively Impaired)' : 'Cognitively Impaired Individuals'}</strong>
          {' — '}
          {isKo
            ? '인지 장애로 인해 완전한 동의 능력이 제한된 경우, 법적으로 권한이 있는 대리인(legally authorized representative)의 동의가 필요합니다. 가능한 범위에서 본인의 승낙도 받아야 하며, 거부 의사를 표현하면 이를 존중해야 합니다. 동의 능력의 평가는 연구의 복잡성과 위험 수준에 비례하여 이루어져야 합니다.'
            : 'When full consent capacity is limited due to cognitive impairment, consent from a legally authorized representative is required. To the extent possible, the individual\'s own assent should also be obtained, and expressions of dissent must be respected. Assessment of consent capacity should be proportionate to the complexity and risk level of the research.'}
        </li>
        <li>
          <strong>{isKo ? '수감자 (Prisoners)' : 'Prisoners'}</strong>
          {' — '}
          {isKo
            ? '구금 환경의 특성상 참여의 자발성이 제한될 수 있으므로, 수감자를 대상으로 한 연구에는 특별한 보호 요건이 적용됩니다. IRB에 수감자 대표(prisoner representative)가 포함되어야 하며, 참여에 대한 보상이 강압적이지 않은 수준이어야 합니다.'
            : 'Due to the constraints of a detention environment, voluntariness of participation may be limited. Special protection requirements apply to research involving prisoners. The IRB must include a prisoner representative, and compensation for participation must be at a non-coercive level.'}
        </li>
      </ul>

      {/* --- Waiver of Consent --- */}
      <h3>{isKo ? '동의 면제 (Waiver of Consent)' : 'Waiver of Consent'}</h3>
      <p>
        {isKo
          ? '특정 조건을 충족하는 경우 IRB는 동의 요건의 전부 또는 일부를 면제할 수 있습니다. 동의 면제가 승인되려면 일반적으로 다음 조건을 모두 충족해야 합니다: (1) 연구가 최소 위험 이하이고, (2) 동의 면제가 대상자의 권리와 복지에 부정적 영향을 미치지 않으며, (3) 동의를 받는 것이 실질적으로 불가능하거나, 동의를 받으면 연구가 불가능해지고, (4) 적절한 경우 연구 후에 추가 정보를 제공할 것.'
          : 'Under certain conditions, the IRB may waive some or all consent requirements. For a waiver to be approved, the following conditions must generally all be met: (1) the research involves no more than minimal risk, (2) the waiver does not adversely affect participants\' rights and welfare, (3) the research could not practicably be carried out without the waiver, and (4) where appropriate, participants will be provided with additional pertinent information after participation.'}
      </p>
      <p>
        {isKo
          ? '동의 면제의 대표적인 사례로는 기존 의료 기록을 활용한 후향적 차트 리뷰(retrospective chart review), 공공장소에서의 관찰 연구, 기만(deception)이 필수적인 심리학 실험 등이 있습니다. 기만 연구의 경우 연구 후 디브리핑(debriefing)을 통해 참여자에게 연구의 실제 목적을 설명해야 합니다.'
          : 'Common examples of consent waivers include retrospective chart reviews using existing medical records, observational studies in public settings, and psychology experiments requiring deception. In deception studies, participants must be debriefed after the study to explain the actual purpose of the research.'}
      </p>

      {/* --- Electronic and Oral Consent --- */}
      <h3>{isKo ? '전자 동의와 구두 동의' : 'Electronic and Oral Consent'}</h3>
      <p>
        {isKo
          ? '온라인 연구의 확산으로 전자 동의(e-consent)가 점점 더 일반화되고 있습니다. 전자 동의서는 종이 동의서와 동일한 요소를 포함해야 하며, 참여자가 충분히 읽고 이해할 시간을 확보할 수 있도록 설계해야 합니다. 멀티미디어(동영상, 인포그래픽 등)를 활용하면 이해도를 높일 수 있습니다. 한편, 전화 설문이나 문맹 대상자의 경우 서면 동의 대신 구두 동의가 사용될 수 있으며, 이 경우 증인의 서명이 필요합니다.'
          : 'With the proliferation of online research, electronic consent (e-consent) is becoming increasingly common. E-consent forms must include the same elements as paper consent forms and should be designed to give participants sufficient time to read and understand. Using multimedia (videos, infographics, etc.) can improve comprehension. For telephone surveys or illiterate participants, oral consent may replace written consent, in which case a witness signature is required.'}
      </p>
    </section>
  );
}

/* ================================================================== */
/*  Section 4 — Privacy Protection                                      */
/* ================================================================== */

function PrivacySection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>
        <i className="fa-solid fa-lock" />
        {isKo ? ' 개인정보 보호' : ' Privacy Protection'}
      </h2>

      {/* --- De-identification --- */}
      <h3>{isKo ? '비식별화 (De-identification)' : 'De-identification'}</h3>
      <p>
        {isKo
          ? '비식별화는 데이터에서 개인을 식별할 수 있는 정보를 제거하거나 변환하는 과정입니다. 연구 데이터의 비식별화는 참여자의 프라이버시를 보호하는 가장 기본적인 방법입니다. 비식별화에는 두 가지 주요 접근 방식이 있습니다:'
          : 'De-identification is the process of removing or transforming personally identifiable information from data. De-identification of research data is the most fundamental method for protecting participant privacy. There are two main approaches to de-identification:'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? 'Safe Harbor 방식' : 'Safe Harbor Method'}</strong>
          {' — '}
          {isKo
            ? 'HIPAA에서 규정한 18가지 식별자(이름, 주소, 전화번호, 이메일, 주민등록번호, 의료기록번호, 생년월일 등)를 모두 제거하거나 일반화합니다. 가장 널리 사용되는 방법이지만, 모든 식별자를 제거해야 하므로 데이터의 유용성이 감소할 수 있습니다.'
            : 'Remove or generalize all 18 identifiers specified by HIPAA (name, address, phone number, email, social security number, medical record number, date of birth, etc.). This is the most widely used method, but data utility may decrease as all identifiers must be removed.'}
        </li>
        <li>
          <strong>{isKo ? 'Expert Determination 방식' : 'Expert Determination Method'}</strong>
          {' — '}
          {isKo
            ? '통계학 또는 과학 분야의 전문가가 재식별(re-identification) 위험이 매우 낮다고 판단하는 방식입니다. 이 방법은 데이터의 유용성을 더 잘 보존할 수 있지만, 전문가의 분석이 필요합니다.'
            : 'A qualified expert in statistics or science determines that the risk of re-identification is very low. This method can better preserve data utility but requires expert analysis.'}
        </li>
      </ul>

      {/* --- Anonymization --- */}
      <h3>{isKo ? '익명화 (Anonymization)' : 'Anonymization'}</h3>
      <p>
        {isKo
          ? '익명화는 비식별화보다 강력한 개념으로, 데이터와 개인 간의 연결을 영구적으로 제거하는 것을 의미합니다. 완전한 익명화가 이루어지면 어떤 수단으로도 개인을 재식별할 수 없어야 합니다. 익명화 기법에는 데이터 마스킹(masking), 일반화(generalization, 예: 정확한 나이 대신 연령대 사용), 데이터 교란(perturbation, 작은 노이즈 추가), k-익명성(k-anonymity), 차등 프라이버시(differential privacy) 등이 있습니다.'
          : 'Anonymization is a stronger concept than de-identification, meaning permanently severing the link between data and individuals. When complete anonymization is achieved, no means should be able to re-identify individuals. Anonymization techniques include data masking, generalization (e.g., using age ranges instead of exact ages), data perturbation (adding small noise), k-anonymity, and differential privacy.'}
      </p>
      <p>
        {isKo
          ? '그러나 빅데이터 시대에 완전한 익명화는 점점 더 어려워지고 있습니다. 여러 데이터셋을 결합하면 비식별화된 데이터에서도 개인을 재식별할 수 있다는 연구 결과들이 보고되고 있습니다. 따라서 익명화에만 의존하지 않고, 접근 통제, 데이터 사용 계약 등 다층적 보호 전략을 적용하는 것이 중요합니다.'
          : 'However, in the era of big data, complete anonymization is becoming increasingly difficult. Studies have shown that combining multiple datasets can re-identify individuals even from de-identified data. Therefore, it is important to apply multi-layered protection strategies, including access controls and data use agreements, rather than relying solely on anonymization.'}
      </p>

      {/* --- Data Encryption --- */}
      <h3>{isKo ? '데이터 암호화' : 'Data Encryption'}</h3>
      <p>
        {isKo
          ? '연구 데이터의 암호화는 비인가 접근으로부터 데이터를 보호하는 핵심적인 기술적 보안 조치입니다. 암호화는 크게 두 가지 상황에서 적용됩니다:'
          : 'Encrypting research data is a critical technical security measure to protect data from unauthorized access. Encryption is applied in two main scenarios:'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '저장 시 암호화 (Encryption at Rest)' : 'Encryption at Rest'}</strong>
          {' — '}
          {isKo
            ? '하드디스크, USB, 클라우드 저장소 등에 보관된 데이터를 AES-256 등의 알고리즘으로 암호화합니다. BitLocker(Windows), FileVault(Mac) 등의 전체 디스크 암호화나 VeraCrypt 같은 도구를 사용할 수 있습니다.'
            : 'Encrypt data stored on hard drives, USB drives, cloud storage, etc., using algorithms like AES-256. Full disk encryption tools such as BitLocker (Windows) or FileVault (Mac), or tools like VeraCrypt, can be used.'}
        </li>
        <li>
          <strong>{isKo ? '전송 시 암호화 (Encryption in Transit)' : 'Encryption in Transit'}</strong>
          {' — '}
          {isKo
            ? '이메일, 파일 전송, 온라인 설문 등을 통해 데이터를 전송할 때 TLS/SSL 프로토콜을 사용하여 암호화합니다. HTTPS 프로토콜을 사용하는 웹사이트에서만 온라인 설문을 실시하고, 암호화되지 않은 이메일로 개인 식별 가능 데이터를 전송하지 않아야 합니다.'
            : 'Encrypt data during transmission via email, file transfer, online surveys, etc., using TLS/SSL protocols. Conduct online surveys only on websites using the HTTPS protocol and never transmit personally identifiable data via unencrypted email.'}
        </li>
      </ul>

      <TipBox type="important" title={isKo ? '데이터 보안 체크리스트' : 'Data Security Checklist'}>
        <p>
          {isKo
            ? '(1) 연구 데이터를 포함한 모든 장치에 암호화를 적용하세요. (2) 강력한 비밀번호(12자 이상, 대소문자+숫자+특수문자 조합)를 사용하세요. (3) 식별 가능 데이터와 연구 데이터를 분리하여 보관하고, 연결 키(linking key)는 별도의 안전한 장소에 보관하세요. (4) 정기적으로 백업을 실시하고 백업 데이터도 암호화하세요. (5) 공용 Wi-Fi에서 연구 데이터에 접근하지 마세요.'
            : '(1) Apply encryption to all devices containing research data. (2) Use strong passwords (12+ characters, combining upper/lowercase, numbers, and special characters). (3) Store identifiable data and research data separately, and keep the linking key in a separate secure location. (4) Perform regular backups and encrypt backup data as well. (5) Never access research data on public Wi-Fi.'}
        </p>
      </TipBox>

      {/* --- GDPR/PIPA Compliance --- */}
      <h3>{isKo ? 'GDPR 및 개인정보보호법(PIPA) 준수' : 'GDPR and PIPA Compliance'}</h3>
      <p>
        {isKo
          ? '국제 공동연구나 해외 참여자를 대상으로 하는 연구에서는 각국의 개인정보보호법을 준수해야 합니다. EU의 일반 데이터 보호 규정(GDPR, 2018)은 세계에서 가장 엄격한 개인정보보호법 중 하나로, 데이터 처리의 합법적 근거, 정보 주체의 권리(접근, 정정, 삭제, 이동), 데이터 보호 영향 평가(DPIA), 데이터 보호 책임자(DPO) 지정 등을 요구합니다. GDPR 위반 시 최대 2,000만 유로 또는 전 세계 매출의 4% 중 높은 금액의 과징금이 부과될 수 있습니다.'
          : 'Research involving international collaboration or overseas participants must comply with each country\'s data protection laws. The EU\'s General Data Protection Regulation (GDPR, 2018) is one of the world\'s strictest data protection laws, requiring lawful basis for data processing, data subject rights (access, rectification, erasure, portability), Data Protection Impact Assessments (DPIA), and designation of Data Protection Officers (DPO). GDPR violations can result in fines of up to 20 million euros or 4% of global annual revenue, whichever is higher.'}
      </p>
      <p>
        {isKo
          ? '한국의 개인정보보호법(PIPA)은 개인정보의 수집, 이용, 제공, 관리에 관한 포괄적인 규정을 제공합니다. 연구 목적의 개인정보 처리에 대해서는 일부 예외가 인정되지만, 최소 수집 원칙, 목적 외 사용 제한, 안전성 확보 조치 등의 기본 원칙은 준수해야 합니다. 특히 민감정보(사상, 건강, 성생활, 유전정보 등)의 처리에는 더 엄격한 기준이 적용됩니다.'
          : 'Korea\'s Personal Information Protection Act (PIPA) provides comprehensive regulations on the collection, use, provision, and management of personal information. While some exceptions are recognized for research purposes, basic principles such as minimum collection, restrictions on use beyond stated purposes, and safety measures must be observed. Particularly strict standards apply to the processing of sensitive information (ideology, health, sexual life, genetic information, etc.).'}
      </p>

      {/* --- Data Retention and Destruction --- */}
      <h3>{isKo ? '데이터 보관 및 폐기' : 'Data Retention and Destruction'}</h3>
      <p>
        {isKo
          ? '연구 데이터의 보관 기간은 연구비 지원 기관의 규정, 기관의 정책, 해당 분야의 관행에 따라 달라집니다. 미국 연방 규정은 일반적으로 연구 완료 후 최소 3년간 데이터 보관을 요구하며, 한국연구재단(NRF)은 연구 종료 후 5년간 보관을 원칙으로 합니다. 일부 학술지는 출판 후 10년간의 데이터 보관을 요구하기도 합니다.'
          : 'The retention period for research data varies according to funding agency regulations, institutional policies, and field-specific practices. U.S. federal regulations generally require data retention for at least 3 years after study completion, while the National Research Foundation of Korea (NRF) requires retention for 5 years after study completion. Some journals may require data retention for 10 years after publication.'}
      </p>
      <p>
        {isKo
          ? '보관 기간이 만료되면 데이터를 안전하게 폐기해야 합니다. 종이 문서는 교차 절단 파쇄기로 파쇄하고, 디지털 데이터는 전문 삭제 소프트웨어(예: DBAN, Eraser)를 사용하여 복구 불가능하게 삭제합니다. USB나 하드디스크는 물리적으로 파괴해야 합니다. 클라우드 데이터의 경우 서비스 제공자의 데이터 삭제 정책을 확인하고, 백업 데이터도 함께 삭제해야 합니다. 데이터 폐기 과정은 기록으로 남겨야 합니다.'
          : 'When the retention period expires, data must be securely destroyed. Paper documents should be cross-cut shredded, and digital data should be irrecoverably deleted using specialized software (e.g., DBAN, Eraser). USB drives and hard disks should be physically destroyed. For cloud data, verify the service provider\'s data deletion policies and ensure backup data is also deleted. The data destruction process must be documented.'}
      </p>

      <TipBox type="warning" title={isKo ? '데이터 유출 대응' : 'Data Breach Response'}>
        <p>
          {isKo
            ? '개인정보 유출이 발생한 경우 즉시 대응 절차를 시작해야 합니다: (1) 유출의 범위와 영향을 파악하세요. (2) 기관의 개인정보보호책임자(CPO)와 IRB에 즉시 보고하세요. (3) 한국의 개인정보보호법에 따라 정보 주체에게 지체 없이 통지해야 하며, 1,000명 이상의 정보가 유출된 경우 개인정보보호위원회에도 신고해야 합니다. (4) 재발 방지 대책을 수립하고 이행하세요.'
            : 'If a personal data breach occurs, initiate response procedures immediately: (1) Determine the scope and impact of the breach. (2) Report immediately to the institution\'s Chief Privacy Officer (CPO) and IRB. (3) Under Korea\'s PIPA, data subjects must be notified without delay, and if information of 1,000 or more persons is breached, report to the Personal Information Protection Commission. (4) Establish and implement measures to prevent recurrence.'}
        </p>
      </TipBox>
    </section>
  );
}

/* ================================================================== */
/*  Section 5 — Research Misconduct                                     */
/* ================================================================== */

function MisconductSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>
        <i className="fa-solid fa-ban" />
        {isKo ? ' 연구 부정행위' : ' Research Misconduct'}
      </h2>

      {/* --- FFP --- */}
      <h3>{isKo ? '위조, 변조, 표절 (FFP)' : 'Fabrication, Falsification, Plagiarism (FFP)'}</h3>
      <p>
        {isKo
          ? '연구 부정행위(research misconduct)의 핵심은 위조(Fabrication), 변조(Falsification), 표절(Plagiarism)의 세 가지, 이른바 FFP로 요약됩니다. 이 세 가지는 전 세계적으로 연구 부정행위의 핵심 유형으로 인정되며, 한국의 국가연구개발혁신법에서도 명확하게 정의하고 있습니다.'
          : 'The core of research misconduct is summarized as three types known as FFP: Fabrication, Falsification, and Plagiarism. These three are recognized globally as the core types of research misconduct and are clearly defined in Korea\'s National R&D Innovation Act.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '위조 (Fabrication)' : 'Fabrication'}</strong>
          {' — '}
          {isKo
            ? '존재하지 않는 데이터, 연구 결과, 또는 실험 기록을 만들어내는 행위입니다. 예를 들어, 실제로 수행하지 않은 실험의 결과를 보고하거나, 존재하지 않는 설문 응답을 생성하는 것이 이에 해당합니다. 위조는 과학적 지식 체계에 허위 정보를 삽입하여 후속 연구를 잘못된 방향으로 이끌 수 있다는 점에서 가장 심각한 부정행위 중 하나입니다.'
            : 'The act of making up data, research results, or experimental records that do not exist. For example, reporting results from experiments never conducted or generating nonexistent survey responses. Fabrication is one of the most serious forms of misconduct because it inserts false information into the body of scientific knowledge, potentially misdirecting subsequent research.'}
        </li>
        <li>
          <strong>{isKo ? '변조 (Falsification)' : 'Falsification'}</strong>
          {' — '}
          {isKo
            ? '연구 자료, 장비, 또는 과정을 조작하거나, 데이터를 변경 또는 누락하여 연구가 정확하게 표현되지 않도록 하는 행위입니다. 원하는 결과에 맞지 않는 데이터 포인트를 정당한 이유 없이 삭제하거나, 이미지를 부적절하게 편집하거나, 통계 분석에서 결과를 선택적으로 보고하는 것이 변조에 해당합니다.'
            : 'The act of manipulating research materials, equipment, or processes, or changing or omitting data such that the research is not accurately represented. Deleting data points without justification because they do not fit desired results, inappropriately editing images, or selectively reporting statistical results all constitute falsification.'}
        </li>
        <li>
          <strong>{isKo ? '표절 (Plagiarism)' : 'Plagiarism'}</strong>
          {' — '}
          {isKo
            ? '다른 사람의 아이디어, 과정, 결과, 또는 문장을 적절한 출처 표시 없이 자신의 것처럼 사용하는 행위입니다. 직접적인 복사(verbatim copying)뿐만 아니라, 아이디어의 도용, 연구 방법의 무단 차용, 번역 표절(다른 언어의 텍스트를 번역하여 자신의 것으로 제시) 등도 표절에 해당합니다.'
            : 'The act of using another person\'s ideas, processes, results, or words without appropriate attribution. Plagiarism includes not only verbatim copying but also theft of ideas, unauthorized borrowing of research methods, and translation plagiarism (translating text from another language and presenting it as one\'s own).'}
        </li>
      </ul>

      <TipBox type="warning" title={isKo ? 'FFP 사례의 심각성' : 'Severity of FFP Cases'}>
        <p>
          {isKo
            ? 'FFP가 확인된 연구자는 학위 취소, 해임, 연구비 수주 자격 박탈(최대 10년), 논문 철회, 해당 분야에서의 영구적 신뢰 상실 등 심각한 결과에 직면합니다. 과학적 자기 교정(self-correction) 메커니즘, 표절 탐지 소프트웨어, 통계적 이상치 탐지 기법의 발달로 부정행위 발각 가능성은 과거보다 크게 높아졌습니다. 연구 부정행위는 "들키지 않을 것"이라는 착각 속에서 행해지지만, 대부분 결국 발견됩니다.'
            : 'Researchers found guilty of FFP face severe consequences including degree revocation, dismissal, disqualification from research funding (up to 10 years), paper retraction, and permanent loss of trust in the field. The development of scientific self-correction mechanisms, plagiarism detection software, and statistical anomaly detection techniques has significantly increased the likelihood of detection compared to the past. Research misconduct is committed under the illusion that it will "never be caught," but most cases are eventually discovered.'}
        </p>
      </TipBox>

      {/* --- Self-Plagiarism --- */}
      <h3>{isKo ? '자기 표절 (Self-Plagiarism)' : 'Self-Plagiarism'}</h3>
      <p>
        {isKo
          ? '자기 표절은 자신의 이전 저작물의 상당 부분을 적절한 인용이나 공개 없이 새로운 저작물에 재사용하는 행위입니다. 자기 표절은 FFP만큼 심각한 부정행위로 보지 않는 시각도 있지만, 학술적 정직성과 독창성에 대한 기대를 훼손한다는 점에서 문제가 됩니다. 특히 학위 논문의 일부를 학술지 논문으로 발표하는 경우, 학술지의 이전 출판 정책을 확인하고, 학위 논문으로부터의 재사용을 투명하게 밝히는 것이 중요합니다.'
          : 'Self-plagiarism is the act of reusing substantial portions of one\'s own previous work in new publications without appropriate citation or disclosure. While some views consider self-plagiarism less serious than FFP, it is problematic because it undermines expectations of academic honesty and originality. When publishing parts of a dissertation as journal articles, it is particularly important to check the journal\'s prior publication policy and transparently disclose the reuse of dissertation material.'}
      </p>

      {/* --- Duplicate Publication --- */}
      <h3>{isKo ? '이중 출판 (Duplicate Publication)' : 'Duplicate Publication'}</h3>
      <p>
        {isKo
          ? '이중 출판(duplicate publication) 또는 중복 게재는 동일하거나 본질적으로 유사한 논문을 둘 이상의 학술지에 게재하는 행위입니다. 이는 학술 출판의 독창성 원칙을 위반하며, 해당 분야의 문헌을 왜곡시킬 수 있습니다. 특히 메타분석에서 동일한 데이터가 여러 번 포함되면 결과가 편향될 수 있습니다. 국제적으로 대부분의 학술지는 투고 시 해당 논문이 다른 곳에 동시 투고되지 않았음을 확인하는 서약을 요구합니다.'
          : 'Duplicate publication is the act of publishing the same or essentially similar paper in two or more journals. This violates the originality principle of academic publishing and can distort the literature in a field. Particularly in meta-analyses, including the same data multiple times can bias results. Most journals internationally require a declaration at submission confirming that the manuscript has not been simultaneously submitted elsewhere.'}
      </p>
      <p>
        {isKo
          ? '다만, 다음과 같은 경우는 정당한 이유가 있으며, 사전에 편집인에게 알리고 이전 출판을 명시하면 허용될 수 있습니다: (1) 다른 언어로의 번역 출판, (2) 다른 대상 독자를 위한 재작성(예: 전문가용 논문을 일반 독자용으로), (3) 학회 발표 논문의 확장된 학술지 버전.'
          : 'However, the following may be permissible with prior editor notification and clear disclosure of prior publication: (1) translation publication in a different language, (2) rewriting for a different audience (e.g., converting a specialist paper for general readers), (3) an expanded journal version of a conference paper.'}
      </p>

      {/* --- Authorship Disputes --- */}
      <h3>{isKo ? '저자 분쟁' : 'Authorship Disputes'}</h3>
      <p>
        {isKo
          ? '저자 분쟁은 연구윤리에서 가장 빈번하게 발생하는 갈등 중 하나입니다. 유령 저자(ghost authorship, 실질적 기여를 했으나 저자 목록에서 누락), 명예 저자(honorary/gift authorship, 실질적 기여 없이 저자 목록에 포함), 부당한 저자 순서 등이 대표적인 문제입니다. ICMJE 가이드라인에 따르면, 저자로 인정받으려면 (1) 실질적 기여, (2) 초고 작성 또는 비평적 수정, (3) 최종 버전 승인, (4) 연구의 정확성과 무결성에 대한 책임에 모두 동의해야 합니다.'
          : 'Authorship disputes are among the most frequently occurring conflicts in research ethics. Common issues include ghost authorship (omission from author list despite substantial contribution), honorary/gift authorship (inclusion without substantial contribution), and improper author ordering. According to ICMJE guidelines, authorship requires meeting all four criteria: (1) substantial contribution, (2) drafting or critical revision, (3) final version approval, and (4) agreement to be accountable for accuracy and integrity.'}
      </p>

      <TipBox type="tip" title={isKo ? '저자 분쟁 예방' : 'Preventing Authorship Disputes'}>
        <p>
          {isKo
            ? '연구 시작 단계에서 모든 팀원과 저자 기준, 순서, 역할을 명확히 합의하고 문서화하세요. CRediT(Contributor Roles Taxonomy)를 활용하면 14가지 역할(개념화, 방법론, 소프트웨어, 데이터 큐레이션 등)로 각자의 기여를 구체적으로 정의할 수 있습니다. 기여도가 변경되면 즉시 팀원들과 재논의하세요. 분쟁이 발생하면 기관의 연구진실성 담당 부서나 옴부즈만에게 중재를 요청할 수 있습니다.'
            : 'At the beginning of the research, clearly agree on and document authorship criteria, order, and roles with all team members. Using CRediT (Contributor Roles Taxonomy), you can specifically define each person\'s contributions across 14 roles (conceptualization, methodology, software, data curation, etc.). If contributions change, immediately rediscuss with the team. If disputes arise, mediation can be requested from the institution\'s research integrity office or ombudsperson.'}
        </p>
      </TipBox>

      {/* --- Questionable Research Practices --- */}
      <h3>{isKo ? '문제적 연구 관행 (QRP)' : 'Questionable Research Practices (QRP)'}</h3>
      <p>
        {isKo
          ? 'FFP 외에도 "문제적 연구 관행(Questionable Research Practices, QRP)"이 연구의 신뢰성을 훼손할 수 있습니다. QRP는 명백한 부정행위는 아니지만 윤리적으로 문제가 될 수 있는 회색 지대의 관행을 말합니다:'
          : 'Beyond FFP, "Questionable Research Practices (QRP)" can undermine research credibility. QRPs are gray-area practices that are not outright misconduct but can be ethically problematic:'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? 'HARKing' : 'HARKing'}</strong>
          {' — '}
          {isKo
            ? 'Hypothesizing After Results are Known의 약자로, 결과를 확인한 후 마치 사전에 가설을 세운 것처럼 보고하는 것'
            : 'Hypothesizing After Results are Known — presenting post-hoc hypotheses as if they were a priori predictions'}
        </li>
        <li>
          <strong>{isKo ? 'P-해킹 (P-hacking)' : 'P-hacking'}</strong>
          {' — '}
          {isKo
            ? '통계적으로 유의한 결과(p < .05)를 얻기 위해 분석 방법, 변수, 데이터 포함/제외 기준 등을 반복적으로 조정하는 것'
            : 'Repeatedly adjusting analysis methods, variables, or data inclusion/exclusion criteria to achieve statistically significant results (p < .05)'}
        </li>
        <li>
          <strong>{isKo ? '선택적 보고 (Selective Reporting)' : 'Selective Reporting'}</strong>
          {' — '}
          {isKo
            ? '유의한 결과만 보고하고 유의하지 않은 결과를 숨기는 것. 이는 출판 편향(publication bias)을 심화시킵니다.'
            : 'Reporting only significant results while hiding non-significant ones. This exacerbates publication bias.'}
        </li>
        <li>
          <strong>{isKo ? '서랍 효과 (File Drawer Problem)' : 'File Drawer Problem'}</strong>
          {' — '}
          {isKo
            ? '부정적 결과(negative results)나 가설을 지지하지 않는 연구를 출판하지 않고 묻어두는 것'
            : 'Shelving and not publishing negative results or studies that do not support the hypothesis'}
        </li>
      </ul>
    </section>
  );
}

/* ================================================================== */
/*  Section 6 — Responsible Conduct of Research (RCR)                   */
/* ================================================================== */

function RcrSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>
        <i className="fa-solid fa-award" />
        {isKo ? ' 책임있는 연구수행(RCR)' : ' Responsible Conduct of Research'}
      </h2>

      {/* --- RCR Training Requirements --- */}
      <h3>{isKo ? 'RCR 교육 요건' : 'RCR Training Requirements'}</h3>
      <p>
        {isKo
          ? '책임있는 연구수행(Responsible Conduct of Research, RCR)은 연구의 기획, 수행, 보고의 전 과정에서 정직성, 정확성, 효율성, 객관성을 유지하는 것을 의미합니다. 미국 국립과학재단(NSF)은 2010년부터 NSF 연구비를 지원받는 모든 학생과 박사후연구원에게 RCR 교육 이수를 의무화했으며, 미국 국립보건원(NIH)도 특정 연구비 프로그램의 수혜자에게 RCR 교육을 요구합니다.'
          : 'Responsible Conduct of Research (RCR) means maintaining honesty, accuracy, efficiency, and objectivity throughout the entire process of planning, conducting, and reporting research. The U.S. National Science Foundation (NSF) has required RCR training for all students and postdoctoral researchers funded by NSF grants since 2010, and the National Institutes of Health (NIH) also requires RCR training for recipients of certain grant programs.'}
      </p>
      <p>
        {isKo
          ? '한국에서도 국가연구개발혁신법에 따라 연구책임자는 연구윤리 교육을 이수해야 하며, 많은 대학이 대학원생에게 연구윤리 교과목 수강을 필수화하고 있습니다. CITI Program은 가장 널리 사용되는 RCR 교육 플랫폼으로, 연구윤리, 인간 대상 연구, 동물 연구, 연구 관리 등 다양한 모듈을 제공합니다. 기관에 따라 대면 교육, 온라인 교육, 또는 혼합 형태의 교육을 요구할 수 있습니다.'
          : 'In Korea, the National R&D Innovation Act requires principal investigators to complete research ethics training, and many universities mandate research ethics courses for graduate students. The CITI Program is the most widely used RCR training platform, offering modules on research ethics, human subjects research, animal research, and research management. Depending on the institution, face-to-face, online, or blended training may be required.'}
      </p>

      {/* --- Mentoring --- */}
      <h3>{isKo ? '멘토링과 윤리적 연구 문화' : 'Mentoring and Ethical Research Culture'}</h3>
      <p>
        {isKo
          ? '연구 멘토링은 RCR의 핵심 요소입니다. 효과적인 멘토는 연구 기술과 지식뿐만 아니라, 윤리적 가치와 판단력을 전수합니다. 멘토-멘티 관계에서의 윤리적 책임은 다음과 같습니다:'
          : 'Research mentoring is a core component of RCR. Effective mentors transmit not only research skills and knowledge but also ethical values and judgment. Ethical responsibilities in the mentor-mentee relationship include:'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '멘토의 책임' : 'Mentor Responsibilities'}</strong>
          {' — '}
          {isKo
            ? '학생에게 정직한 연구 관행을 모범으로 보이고, 적절한 지도와 피드백을 제공하며, 학생의 학문적 성장과 경력 발전을 지원하고, 공정한 저자권을 보장하며, 건전한 연구 환경을 조성해야 합니다.'
            : 'Demonstrate honest research practices by example, provide appropriate guidance and feedback, support students\' academic growth and career development, ensure fair authorship, and create a healthy research environment.'}
        </li>
        <li>
          <strong>{isKo ? '멘티의 책임' : 'Mentee Responsibilities'}</strong>
          {' — '}
          {isKo
            ? '데이터를 정직하게 수집하고 보고하며, 어려움이나 윤리적 의문이 있을 때 멘토에게 솔직하게 상의하고, 연구 노트를 체계적으로 관리하며, 멘토와 연구실의 규범을 존중해야 합니다.'
            : 'Collect and report data honestly, candidly consult with mentors when encountering difficulties or ethical questions, systematically maintain research notes, and respect the mentor\'s and lab\'s norms.'}
        </li>
      </ul>
      <p>
        {isKo
          ? '불행히도 멘토-멘티 관계에서의 권력 불균형은 착취, 괴롭힘, 부당한 저자권 배분 등의 문제를 야기할 수 있습니다. 기관은 멘토링 가이드라인을 마련하고, 멘티가 문제를 안전하게 보고할 수 있는 채널을 확보해야 합니다.'
          : 'Unfortunately, power imbalances in mentor-mentee relationships can lead to exploitation, harassment, and unfair authorship allocation. Institutions should establish mentoring guidelines and ensure channels through which mentees can safely report problems.'}
      </p>

      {/* --- Data Management --- */}
      <h3>{isKo ? '데이터 관리' : 'Data Management'}</h3>
      <p>
        {isKo
          ? '책임있는 데이터 관리는 연구의 재현성과 신뢰성을 보장하는 핵심 요소입니다. 데이터 관리 계획(Data Management Plan, DMP)은 데이터의 수집, 저장, 공유, 보존에 관한 포괄적인 계획을 문서화한 것으로, 점점 더 많은 연구비 지원 기관과 학술지가 DMP 제출을 요구하고 있습니다.'
          : 'Responsible data management is a critical element for ensuring research reproducibility and credibility. A Data Management Plan (DMP) is a comprehensive plan documenting data collection, storage, sharing, and preservation. An increasing number of funding agencies and journals require DMP submission.'}
      </p>
      <p>
        {isKo
          ? 'FAIR 원칙(Findable, Accessible, Interoperable, Reusable)은 과학 데이터 관리와 공유의 지침이 됩니다. 연구 데이터를 FAIR 원칙에 따라 관리하면 다른 연구자들이 데이터를 검색하고 접근하여 재활용할 수 있으며, 이는 과학의 투명성과 효율성을 높입니다. 또한 연구 노트는 제3자가 연구를 재현할 수 있을 만큼 상세하게 기록해야 하며, 전자 연구 노트(ELN)의 사용이 점점 확대되고 있습니다.'
          : 'The FAIR principles (Findable, Accessible, Interoperable, Reusable) guide scientific data management and sharing. Managing research data according to FAIR principles enables other researchers to find, access, and reuse data, enhancing scientific transparency and efficiency. Research notes must be recorded in sufficient detail for a third party to reproduce the study, and the use of Electronic Lab Notebooks (ELN) is expanding.'}
      </p>

      <TipBox type="important" title={isKo ? '데이터 관리 모범 사례' : 'Data Management Best Practices'}>
        <p>
          {isKo
            ? '(1) 연구 시작 전에 DMP를 작성하고 팀원들과 공유하세요. (2) 파일 명명 규칙을 정하고 일관되게 적용하세요. (3) 원자료(raw data)는 절대 수정하지 말고 분석용 사본을 만들어 작업하세요. (4) 버전 관리를 체계적으로 하세요. (5) 정기적으로 3-2-1 백업(3개 복사본, 2가지 매체, 1개 오프사이트 보관)을 수행하세요. (6) 메타데이터(데이터에 대한 설명 정보)를 꼼꼼히 기록하세요.'
            : '(1) Prepare a DMP before starting research and share it with team members. (2) Establish file naming conventions and apply them consistently. (3) Never modify raw data — create working copies for analysis. (4) Maintain systematic version control. (5) Regularly follow the 3-2-1 backup rule (3 copies, 2 media types, 1 off-site). (6) Carefully document metadata (descriptive information about data).'}
        </p>
      </TipBox>

      {/* --- Collaboration --- */}
      <h3>{isKo ? '협력 연구의 윤리' : 'Ethics of Collaborative Research'}</h3>
      <p>
        {isKo
          ? '현대 연구는 점점 더 다학제적, 다기관적, 국제적 협력으로 이루어지고 있습니다. 협력 연구에서는 다음과 같은 윤리적 고려가 필요합니다: (1) 연구 시작 전에 데이터 공유, 지적 재산권, 저자권, 비용 분담 등에 대한 협력 계약(collaboration agreement)을 체결하세요. (2) 각 기관의 IRB 규정이 다를 수 있으므로, 모든 참여 기관에서 적절한 윤리 심의를 받아야 합니다. (3) 국제 협력 연구에서는 각국의 문화적 차이, 법적 규정, 윤리적 기준의 차이를 이해하고 존중해야 합니다. (4) 자원이 제한된 환경(resource-limited settings)과의 협력에서는 착취적 관계가 되지 않도록 상호 이익과 역량 강화를 추구해야 합니다.'
          : 'Modern research increasingly involves multidisciplinary, multi-institutional, and international collaboration. Collaborative research requires the following ethical considerations: (1) Before starting research, establish a collaboration agreement covering data sharing, intellectual property, authorship, and cost allocation. (2) Since IRB regulations may differ across institutions, obtain appropriate ethical review from all participating institutions. (3) In international collaborations, understand and respect cultural differences, legal regulations, and varying ethical standards across countries. (4) In collaborations with resource-limited settings, pursue mutual benefit and capacity building to avoid exploitative relationships.'}
      </p>

      {/* --- Conflicts of Interest --- */}
      <h3>{isKo ? '이해충돌 관리' : 'Managing Conflicts of Interest'}</h3>
      <p>
        {isKo
          ? '이해충돌(conflict of interest)은 연구자의 전문적 판단이 재정적, 개인적, 또는 학문적 이해관계에 의해 부적절하게 영향을 받을 수 있는 상황을 의미합니다. 이해충돌 자체가 비윤리적인 것은 아니지만, 이를 인식하지 못하거나 적절히 관리하지 않으면 연구의 객관성을 훼손할 수 있습니다. 핵심적인 관리 방법은 투명한 공개(disclosure)입니다.'
          : 'A conflict of interest occurs when a researcher\'s professional judgment may be inappropriately influenced by financial, personal, or academic interests. Conflicts of interest are not inherently unethical, but failing to recognize or manage them can compromise research objectivity. The key management strategy is transparent disclosure.'}
      </p>
      <ul>
        <li>{isKo ? '논문 투고 시 모든 잠재적 이해충돌을 공개하세요.' : 'Disclose all potential conflicts of interest when submitting manuscripts.'}</li>
        <li>{isKo ? '연구비 신청서에 관련 재정적 이해관계를 보고하세요.' : 'Report relevant financial interests in grant applications.'}</li>
        <li>{isKo ? '이해충돌이 있는 연구에서는 독립적인 제3자의 감독을 받는 것을 고려하세요.' : 'For research with conflicts, consider oversight by an independent third party.'}</li>
        <li>{isKo ? '동료 심사에서 이해충돌이 있는 논문의 심사를 회피(recusal)하세요.' : 'Recuse yourself from reviewing papers where you have a conflict of interest.'}</li>
      </ul>

      {/* --- Peer Review Ethics --- */}
      <h3>{isKo ? '동료 심사 윤리' : 'Peer Review Ethics'}</h3>
      <p>
        {isKo
          ? '동료 심사(peer review)는 학술 출판의 품질을 보장하는 핵심 메커니즘이지만, 그 과정에서도 윤리적 기준이 엄격히 준수되어야 합니다. 심사자의 윤리적 의무는 다음과 같습니다:'
          : 'Peer review is a core mechanism for ensuring the quality of academic publishing, but ethical standards must be strictly observed throughout the process. The ethical obligations of reviewers include:'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '기밀 유지' : 'Confidentiality'}</strong>
          {' — '}
          {isKo
            ? '심사 중인 원고의 내용을 제3자에게 공개하거나, 자신의 연구에 활용해서는 안 됩니다.'
            : 'The content of manuscripts under review must not be disclosed to third parties or used in one\'s own research.'}
        </li>
        <li>
          <strong>{isKo ? '공정성' : 'Fairness'}</strong>
          {' — '}
          {isKo
            ? '저자의 성별, 인종, 국적, 소속 기관, 학문적 입장 등에 의한 편견 없이 객관적으로 심사해야 합니다.'
            : 'Review objectively without bias based on the author\'s gender, race, nationality, institutional affiliation, or academic stance.'}
        </li>
        <li>
          <strong>{isKo ? '적시성' : 'Timeliness'}</strong>
          {' — '}
          {isKo
            ? '요청된 기한 내에 심사를 완료하고, 기한을 지킬 수 없는 경우 즉시 편집인에게 알려야 합니다.'
            : 'Complete the review within the requested deadline, and notify the editor immediately if the deadline cannot be met.'}
        </li>
        <li>
          <strong>{isKo ? '건설적 피드백' : 'Constructive Feedback'}</strong>
          {' — '}
          {isKo
            ? '단순한 비판이 아닌 구체적이고 건설적인 피드백을 제공하여 논문의 질 향상에 기여해야 합니다.'
            : 'Provide specific and constructive feedback rather than mere criticism to contribute to improving manuscript quality.'}
        </li>
      </ul>

      <TipBox type="tip" title={isKo ? 'RCR의 일상적 실천' : 'Daily Practice of RCR'}>
        <p>
          {isKo
            ? 'RCR은 특별한 상황에서만 요구되는 것이 아니라, 연구의 모든 순간에 실천되어야 합니다. 매일의 연구 습관이 쌓여 연구자로서의 신뢰와 명성을 형성합니다. 연구 노트를 꼼꼼히 기록하고, 데이터를 정직하게 보고하며, 출처를 정확히 인용하고, 동료의 기여를 적절히 인정하는 것이 RCR의 핵심입니다. 연구실 세미나에서 정기적으로 윤리 사례를 토론하고, 의문이 생기면 주저하지 말고 멘토나 기관의 연구윤리 담당자와 상의하세요.'
            : 'RCR is not only required in special situations — it must be practiced at every moment of research. Daily research habits accumulate to form your reputation and trustworthiness as a researcher. The essence of RCR is keeping meticulous research notes, reporting data honestly, citing sources accurately, and properly acknowledging colleagues\' contributions. Regularly discuss ethics cases in lab seminars, and do not hesitate to consult mentors or institutional research integrity officers when questions arise.'}
        </p>
      </TipBox>
    </section>
  );
}

/* ================================================================== */
/*  Section 7 — References                                              */
/* ================================================================== */

function ReferencesSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <>
      <div className="guide-content-header">
        <h1>{isKo ? '참고문헌' : 'References'}</h1>
        <p>{isKo ? 'IRB윤리 학습에 활용된 주요 참고문헌입니다.' : 'Key references used in the study of IRB and research ethics.'}</p>
      </div>
      <div className="guide-section">
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>National Commission for the Protection of Human Subjects (1979). <em>The Belmont Report: Ethical Principles and Guidelines for the Protection of Human Subjects of Research</em>.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>World Medical Association (2013). Declaration of Helsinki: Ethical principles for medical research involving human subjects. <em>JAMA</em>, 310(20), 2191-2194.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Resnik, D. B. (2020). <em>The Ethics of Research with Human Subjects: Protecting People, Advancing Science, Promoting Trust</em>. Springer.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>ICMJE (2023). Recommendations for the Conduct, Reporting, Editing, and Publication of Scholarly Work in Medical Journals.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Steneck, N. H. (2007). <em>ORI Introduction to the Responsible Conduct of Research</em>. U.S. Government Printing Office.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Shamoo, A. E., &amp; Resnik, D. B. (2015). <em>Responsible Conduct of Research</em> (3rd ed.). Oxford University Press.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>한국연구재단 (2015). <em>연구윤리 확보를 위한 지침 해설서</em>.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>이인재 (2015). <em>연구윤리의 이해와 실천</em>. 동문사.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>European Parliament and Council (2016). Regulation (EU) 2016/679 (General Data Protection Regulation).</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>개인정보보호위원회 (2020). <em>개인정보보호법 해설서</em>.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Office for Human Research Protections (OHRP). <em>45 CFR 46: Federal Policy for the Protection of Human Subjects (Common Rule)</em>.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Wilkinson, M. D., et al. (2016). The FAIR Guiding Principles for scientific data management and stewardship. <em>Scientific Data</em>, 3, 160018.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Committee on Publication Ethics (COPE). <em>Guidelines on Good Publication Practice</em>.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Singapore Statement on Research Integrity (2010). 2nd World Conference on Research Integrity.</li>
        </ul>
      </div>
    </>
  );
}

/* ================================================================== */
/*  Main page component                                                */
/* ================================================================== */

export default function IrbEthics(): ReactElement {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('foundations');
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
        title={isKo ? 'IRB윤리 | Survey Master' : 'IRB & Ethics | Survey Master'}
        description={
          isKo
            ? 'IRB 심의 절차, 동의서 작성, 개인정보 보호, 연구 부정행위 방지, 책임있는 연구수행(RCR) 등 연구윤리를 체계적으로 학습합니다.'
            : 'Learn research ethics systematically including IRB review process, informed consent, privacy protection, research misconduct prevention, and responsible conduct of research (RCR).'
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
            {activeSection === 'foundations' && <FoundationsSection isKo={isKo} />}
            {activeSection === 'irb-process' && <IrbProcessSection isKo={isKo} />}
            {activeSection === 'consent' && <ConsentSection isKo={isKo} />}
            {activeSection === 'privacy' && <PrivacySection isKo={isKo} />}
            {activeSection === 'misconduct' && <MisconductSection isKo={isKo} />}
            {activeSection === 'rcr' && <RcrSection isKo={isKo} />}
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
