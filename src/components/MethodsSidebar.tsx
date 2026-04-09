import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import type { ReactElement } from 'react';

interface Section {
  id: string;
  icon: string;
  ko: string;
  en: string;
}

interface MethodGroup {
  path: string;
  icon: string;
  ko: string;
  en: string;
  color: string;
  sections: Section[];
}

const METHOD_GROUPS: MethodGroup[] = [
  {
    path: '/methods', icon: 'fa-microscope', ko: '연구방법', en: 'Methods', color: '#2563EB',
    sections: [
      { id: 'overview', icon: 'fa-circle-info', ko: '연구방법론 개요', en: 'Methodology Overview' },
      { id: 'quant-qual', icon: 'fa-arrows-left-right', ko: '양적 vs 질적연구', en: 'Quant vs Qual' },
      { id: 'mixed', icon: 'fa-shuffle', ko: '혼합연구방법', en: 'Mixed Methods' },
      { id: 'design-types', icon: 'fa-sitemap', ko: '연구설계 유형', en: 'Design Types' },
      { id: 'variables', icon: 'fa-sliders', ko: '변수와 조작적 정의', en: 'Variables' },
      { id: 'writing-methods', icon: 'fa-pen-to-square', ko: '연구방법 섹션 작성', en: 'Writing Methods' },
      { id: 'references', icon: 'fa-bookmark', ko: '참고문헌', en: 'References' },
    ],
  },
  {
    path: '/quantitative-methods', icon: 'fa-square-poll-vertical', ko: '양적연구방법', en: 'Quantitative', color: '#1D4ED8',
    sections: [
      { id: 'overview', icon: 'fa-square-poll-vertical', ko: '양적연구 개요', en: 'Overview' },
      { id: 'experimental-design', icon: 'fa-flask', ko: '실험설계', en: 'Experimental Design' },
      { id: 'survey-method', icon: 'fa-clipboard-list', ko: '설문조사방법', en: 'Survey Methods' },
      { id: 'sampling', icon: 'fa-users', ko: '표본추출·표본크기', en: 'Sampling' },
      { id: 'data-analysis', icon: 'fa-chart-bar', ko: '양적자료분석', en: 'Data Analysis' },
      { id: 'paper-writing', icon: 'fa-pen-to-square', ko: '논문작성', en: 'Paper Writing' },
      { id: 'references', icon: 'fa-book', ko: '참고문헌', en: 'References' },
    ],
  },
  {
    path: '/qualitative-methods', icon: 'fa-comments', ko: '질적연구방법', en: 'Qual Methods', color: '#7E22CE',
    sections: [
      { id: 'overview', icon: 'fa-comments', ko: '질적연구 개요', en: 'Overview' },
      { id: 'grounded-theory', icon: 'fa-sitemap', ko: '근거이론', en: 'Grounded Theory' },
      { id: 'phenomenology', icon: 'fa-eye', ko: '현상학적 연구', en: 'Phenomenology' },
      { id: 'case-study', icon: 'fa-folder-open', ko: '사례연구', en: 'Case Study' },
      { id: 'data-collection', icon: 'fa-database', ko: '자료수집과 분석', en: 'Data & Analysis' },
      { id: 'trustworthiness', icon: 'fa-shield-halved', ko: '신뢰성 확보', en: 'Trustworthiness' },
      { id: 'references', icon: 'fa-book', ko: '참고문헌', en: 'References' },
    ],
  },
  {
    path: '/ahp', icon: 'fa-layer-group', ko: 'AHP연구방법론', en: 'AHP', color: '#B45309',
    sections: [
      { id: 'overview', icon: 'fa-layer-group', ko: 'AHP 개요', en: 'AHP Overview' },
      { id: 'hierarchy', icon: 'fa-diagram-project', ko: '계층구조 설계', en: 'Hierarchy Design' },
      { id: 'pairwise', icon: 'fa-scale-balanced', ko: '쌍대비교와 척도', en: 'Pairwise Comparison' },
      { id: 'consistency', icon: 'fa-check-double', ko: '일관성 검증', en: 'Consistency' },
      { id: 'software', icon: 'fa-laptop-code', ko: '소프트웨어 활용', en: 'Software' },
      { id: 'paper-writing', icon: 'fa-pen-to-square', ko: 'AHP 논문작성', en: 'Paper Writing' },
      { id: 'references', icon: 'fa-book', ko: '참고문헌', en: 'References' },
    ],
  },
];

interface Props {
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
  isKo: boolean;
}

export default function MethodsSidebar({ activeSection, onSectionClick, isKo }: Props): ReactElement {
  const location = useLocation();
  const currentPath = location.pathname;

  const [openGroup, setOpenGroup] = useState<string>(currentPath);

  function handleGroupToggle(path: string) {
    setOpenGroup(prev => (prev === path ? '' : path));
  }

  return (
    <aside className="guide-sidebar">
      <div className="guide-sidebar-title">{isKo ? '연구방법 가이드' : 'Methods Guide'}</div>
      <div className="methods-accordion">
        {METHOD_GROUPS.map(group => {
          const isCurrent = currentPath === group.path;
          const isOpen = openGroup === group.path;
          return (
            <div key={group.path} className={`methods-acc-group ${isCurrent ? 'current' : ''}`}>
              <div className="methods-acc-header">
                {isCurrent ? (
                  <button
                    className={`methods-acc-toggle ${isOpen ? 'open' : ''}`}
                    onClick={() => handleGroupToggle(group.path)}
                  >
                    <span className="methods-acc-dot" style={{ background: group.color }} />
                    <span className="methods-acc-label">{isKo ? group.ko : group.en}</span>
                    <i className="fa-solid fa-chevron-down methods-acc-arrow" />
                  </button>
                ) : (
                  <Link
                    to={group.path}
                    className={`methods-acc-toggle ${isOpen ? 'open' : ''}`}
                    onClick={(e) => {
                      if (isOpen) return;
                      e.preventDefault();
                      handleGroupToggle(group.path);
                    }}
                  >
                    <span className="methods-acc-dot" style={{ background: group.color }} />
                    <span className="methods-acc-label">{isKo ? group.ko : group.en}</span>
                    <i className="fa-solid fa-chevron-down methods-acc-arrow" />
                  </Link>
                )}
              </div>
              {isOpen && (
                <ul className="methods-acc-sections">
                  {group.sections.map(section => (
                    <li key={section.id}>
                      {isCurrent ? (
                        <button
                          className={`methods-acc-link ${activeSection === section.id ? 'active' : ''}`}
                          onClick={() => onSectionClick(section.id)}
                        >
                          <i className={`fa-solid ${section.icon}`} />
                          <span>{isKo ? section.ko : section.en}</span>
                        </button>
                      ) : (
                        <Link to={group.path} className="methods-acc-link">
                          <i className={`fa-solid ${section.icon}`} />
                          <span>{isKo ? section.ko : section.en}</span>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
}
