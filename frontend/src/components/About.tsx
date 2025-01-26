import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const AboutContainer = styled.div`
  display: flex;
  max-width: 800px;
  width: 100%;
  text-align: left;
  flex-direction: column;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const PhotoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;
  
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;

const Photo = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  
  @media (min-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;

const Content = styled(motion.div)`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Title = styled(motion.h2)`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #fff;
`;

const Paragraph = styled(motion.p)`
  color: #888;
  font-size: 1.1rem;
  line-height: 1.8;
`;

const HighlightText = styled.span`
  color: #fff;
`;

const About = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <AboutContainer>
      <PhotoContainer>
        <Photo src="marto.jpeg" alt="me" />
      </PhotoContainer>
      <Content>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {t.about.title}
        </Title>
        
        <Paragraph
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {t.about.p1}
        </Paragraph>

        <Paragraph
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {t.about.p2}
        </Paragraph>

        <Paragraph
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          When I'm not coding, you'll find me <HighlightText>playing with my dogs or at the gym</HighlightText>. 
          I'm always interested in hearing about new projects, so feel free to drop me a line.
        </Paragraph>
      </Content>
    </AboutContainer>
  );
};

export default About; 