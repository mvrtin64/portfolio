import styled from '@emotion/styled';
import { Link } from 'react-scroll';

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

const Navbar = () => {
  return (
    <Nav>
      <Logo>martín t.</Logo>
      <NavLinks>
        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-70}
          spy={true}
          activeClass="active"
        >
          about
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          offset={-70}
          spy={true}
          activeClass="active"
        >
          projects
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          offset={-70}
          spy={true}
          activeClass="active"
        >
          contact
        </Link>
      </NavLinks>
    </Nav>
  );
};

export default Navbar; 