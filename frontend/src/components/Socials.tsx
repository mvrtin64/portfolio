import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const SocialsContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 3rem;
`;

const SocialLink = styled(motion.a)`
  color: #888;
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 1rem;
  
  &:hover {
    color: #fff;
  }
`;

const Socials = () => {
  const socials = [
    { name: 'github', url: 'https://github.com/mvrtin64' },
    { name: 'linkedin', url: 'https://linkedin.com/in/martint64' },
    { name: 'email', onClick: () => {
        navigator.clipboard.writeText('mvrtingrzsk@gmail.com');
        alert('Email copied to clipboard!');
      }
    },
    { name: 'resume', url: '../../public/cv_martin.pdf' },
  ];

  return (
    <SocialsContainer>
      {socials.map((social, index) => (
        <SocialLink
          key={social.name}
          href={social.url}
          target={social.url ? "_blank" : undefined}
          rel="noopener noreferrer"
          onClick={social.onClick}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
        >
          {social.name}
        </SocialLink>
      ))}
    </SocialsContainer>
  );
};

export default Socials; 