import styled from '@emotion/styled';

const FooterContainer = styled.footer`
  padding: 2rem;
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
  
  a {
    color: #888;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #fff;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <a href="https://github.com/mvrtin64" target="_blank" rel="noopener noreferrer">github</a>
      <a href="https://linkedin.com/in/martint64" target="_blank" rel="noopener noreferrer">linkedin</a>
      <a href="#" onClick={(e) => {
        e.preventDefault();
        navigator.clipboard.writeText('mvrtingrzsk@gmail.com');
      }}>email</a>
    </FooterContainer>
  );
};

export default Footer; 