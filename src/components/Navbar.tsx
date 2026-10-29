import styled from '@emotion/styled';
import { sections } from '../content';
import { useLanguage } from '../i18n/context';
import { scrollToSection } from './ui';

const Nav = styled.nav`
  position: fixed;
  inset: 0 0 auto;
  z-index: 10;
  height: var(--nav-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
`;

const Logo = styled.button`
  font-size: 1.1rem;
  font-weight: 500;
`;

const Links = styled.div`
  display: flex;
  gap: 1.75rem;
  align-items: center;

  @media (max-width: 720px) {
    .section-link {
      display: none;
    }
  }
`;

const NavLink = styled.button`
  color: var(--muted);
  transition: color 0.2s ease;

  &:hover {
    color: var(--fg);
  }
`;

const LanguageButton = styled.button`
  border: 1px solid var(--muted);
  color: var(--muted);
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.85rem;
  transition: all 0.2s ease;

  &:hover {
    color: var(--fg);
    border-color: var(--fg);
  }
`;

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();

  return (
    <Nav>
      <Logo onClick={() => scrollToSection('home')}>martín t.</Logo>
      <Links>
        {sections
          .filter((s) => s !== 'home')
          .map((s) => (
            <NavLink key={s} className="section-link" onClick={() => scrollToSection(s)}>
              {t.nav[s]}
            </NavLink>
          ))}
        <LanguageButton
          onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
          aria-label={lang === 'en' ? 'Cambiar a español' : 'Switch to English'}
        >
          {lang === 'en' ? 'ES' : 'EN'}
        </LanguageButton>
      </Links>
    </Nav>
  );
};

export default Navbar;
