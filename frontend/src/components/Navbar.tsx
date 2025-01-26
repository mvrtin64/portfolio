import styled from '@emotion/styled';
import { Link } from 'react-scroll';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
`;

const Logo = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  
  a {
    color: #888;
    text-decoration: none;
    transition: color 0.3s ease;
    cursor: pointer;
    
    &:hover {
      color: #fff;
    }
  }
`;

const LanguageButton = styled.button`
  background: none;
  border: 1px solid #888;
  color: #888;
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;

  &:hover {
    color: #fff;
    border-color: #fff;
  }
`;

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  return (
    <Nav>
      <Logo>martín t.</Logo>
      <NavLinks>
        <Link to="about" smooth={true} duration={500} offset={-70} spy={true} activeClass="active">
          {t.nav.about}
        </Link>
        <Link to="projects" smooth={true} duration={500} offset={-70} spy={true} activeClass="active">
          {t.nav.projects}
        </Link>
        <Link to="terminal" smooth={true} duration={500} offset={-70} spy={true} activeClass="active">
          {t.nav.terminal}
        </Link>
        <Link to="contact" smooth={true} duration={500} offset={-70} spy={true} activeClass="active">
          {t.nav.contact}
        </Link>
        <LanguageButton onClick={toggleLanguage}>
          {language === 'en' ? 'ES' : 'EN'}
        </LanguageButton>
      </NavLinks>
    </Nav>
  );
};

export default Navbar; 