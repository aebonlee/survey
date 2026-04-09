import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAuth } from '../../contexts/AuthContext';
import type { ReactElement } from 'react';

interface NavItem {
  path: string;
  ko: string;
  en: string;
  children?: { path: string; ko: string; en: string }[];
}

const NAV_ITEMS: NavItem[] = [
  { path: '/proposal', ko: '연구계획서', en: 'Proposal' },
  { path: '/literature', ko: '문헌검토', en: 'Literature' },
  {
    path: '/methods', ko: '연구방법', en: 'Methods',
    children: [
      { path: '/methods', ko: '연구방법', en: 'Methods' },
      { path: '/quantitative-methods', ko: '양적연구', en: 'Quantitative' },
      { path: '/qualitative-methods', ko: '질적연구방법', en: 'Qual Methods' },
      { path: '/ahp', ko: 'AHP', en: 'AHP' },
    ],
  },
  { path: '/data-collection', ko: '자료수집', en: 'Data' },
  { path: '/analysis', ko: '분석', en: 'Analysis' },
  { path: '/interpretation', ko: '결과해석', en: 'Interpret' },
  { path: '/writing', ko: '논문작성', en: 'Writing' },
  { path: '/irb-ethics', ko: 'IRB윤리', en: 'IRB' },
];

const METHODS_PATHS = ['/methods', '/quantitative-methods', '/qualitative-methods', '/ahp'];

export default function Navbar(): ReactElement {
  const { mode, toggleTheme, colorTheme, setColorTheme, COLOR_OPTIONS } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const { isLoggedIn, profile, signOut } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [mobileMethodsOpen, setMobileMethodsOpen] = useState(false);
  const colorPickerRef = useRef<HTMLDivElement>(null);

  const isKo = language === 'ko';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(e: Event) {
      if (colorPickerRef.current && !colorPickerRef.current.contains(e.target as Node)) setShowColorPicker(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const themeIconClass = mode === 'auto' ? 'fa-circle-half-stroke' : mode === 'light' ? 'fa-sun' : 'fa-moon';

  const displayName = profile?.display_name || profile?.email?.split('@')[0] || '';
  const avatarLetter = displayName.charAt(0).toUpperCase();

  async function handleSignOut() {
    await signOut();
    navigate('/');
  }

  function isActive(item: NavItem): boolean {
    if (item.children) {
      return METHODS_PATHS.some(p => location.pathname.startsWith(p));
    }
    return location.pathname.startsWith(item.path);
  }

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <Link to="/" className="navbar-logo">
            <span className="logo-study">Survey</span>
            <span className="logo-master">Master</span>
          </Link>

          <ul className="nav-links">
            {NAV_ITEMS.map((item) => (
              <li key={item.path} className={`nav-item ${item.children ? 'nav-item-dropdown' : ''}`}>
                <Link
                  to={item.path}
                  className={`nav-link ${isActive(item) ? 'active' : ''}`}
                >
                  {isKo ? item.ko : item.en}
                  {item.children && <i className="fa-solid fa-chevron-down nav-dropdown-arrow" />}
                </Link>
                {item.children && (
                  <ul className="nav-dropdown">
                    {item.children.map(child => (
                      <li key={child.path}>
                        <Link
                          to={child.path}
                          className={`nav-dropdown-link ${location.pathname.startsWith(child.path) ? 'active' : ''}`}
                        >
                          {isKo ? child.ko : child.en}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div className="navbar-actions">
            <div className="color-picker-wrapper" ref={colorPickerRef}>
              <button className="color-picker-btn" onClick={() => setShowColorPicker(!showColorPicker)} title="Color Theme">
                <div className="color-dot-preview" style={{ background: COLOR_OPTIONS.find(c => c.name === colorTheme)?.color }} />
              </button>
              <div className={`color-picker-dropdown ${showColorPicker ? 'show' : ''}`}>
                {COLOR_OPTIONS.map(opt => (
                  <button
                    key={opt.name}
                    className={`color-option ${colorTheme === opt.name ? 'active' : ''}`}
                    style={{ background: opt.color }}
                    onClick={() => { setColorTheme(opt.name); setShowColorPicker(false); }}
                    title={opt.name}
                  />
                ))}
              </div>
            </div>

            <button className="theme-toggle" onClick={toggleTheme} title={mode}>
              <i className={`fa-solid ${themeIconClass}`} />
            </button>

            <button className="lang-toggle" onClick={toggleLanguage}>
              {language === 'ko' ? 'EN' : 'KO'}
            </button>

            {isLoggedIn ? (
              <div className="nav-auth-group">
                <button className="user-avatar-btn" onClick={handleSignOut} title={isKo ? '로그아웃' : 'Sign Out'}>
                  {avatarLetter}
                </button>
              </div>
            ) : (
              <div className="nav-auth-group">
                <Link to="/login" className="nav-auth-btn nav-login-btn">
                  {isKo ? '로그인' : 'Login'}
                </Link>
              </div>
            )}

            <button
              className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          {NAV_ITEMS.map((item) => (
            <li key={item.path}>
              {item.children ? (
                <>
                  <div className="mobile-nav-parent">
                    <Link to={item.path} className="mobile-nav-link">
                      {isKo ? item.ko : item.en}
                    </Link>
                    <button
                      className={`mobile-dropdown-toggle ${mobileMethodsOpen ? 'open' : ''}`}
                      onClick={() => setMobileMethodsOpen(!mobileMethodsOpen)}
                    >
                      <i className="fa-solid fa-chevron-down" />
                    </button>
                  </div>
                  {mobileMethodsOpen && (
                    <ul className="mobile-nav-children">
                      {item.children.map(child => (
                        <li key={child.path}>
                          <Link to={child.path} className="mobile-nav-link mobile-nav-child-link">
                            {isKo ? child.ko : child.en}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link to={item.path} className="mobile-nav-link">
                  {isKo ? item.ko : item.en}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <div className="mobile-menu-actions">
          {isLoggedIn ? (
            <button className="nav-auth-btn" onClick={handleSignOut}>
              {isKo ? '로그아웃' : 'Sign Out'}
            </button>
          ) : (
            <Link to="/login" className="nav-auth-btn">
              {isKo ? '로그인' : 'Login'}
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
