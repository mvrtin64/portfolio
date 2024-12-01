import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import TechStack from './TechStack';
import Socials from './Socials';

const HeroSection = styled.section`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
  
  span {
    display: inline-block;
    transition: all 0.3s ease;
    
    &:hover {
      background: linear-gradient(
        to right,
        #75AADB 0%,
        #75AADB 33%,
        #FFFFFF 33%,
        #FFFFFF 45%,
        #F4B824 45%,
        #F4B824 55%,
        #FFFFFF 55%,
        #FFFFFF 66%,
        #75AADB 66%,
        #75AADB 100%
      );
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
  }
`;

const Subtitle = styled(motion.p)`
  color: #888;
  font-size: 1.2rem;
  margin-bottom: 0.1rem;
`;

const Hero = () => {
  return (
    <HeroSection>
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        hey, i'm <span>martín</span>.
      </Title>
      <Subtitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        system analyst & full-stack developer.

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '1.5rem', marginBottom: '-1.2rem' }}
      > 
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#888"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-map-pin"
        >
          <path d="M21 10c0 6-9 13-9 13s-9-7-9-13a9 9 0 1 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
        <span>based in Mar del Plata, Argentina</span>
      </motion.div>
      </Subtitle>
      <TechStack />
      <Socials />
    </HeroSection>
  );
};

export default Hero; 