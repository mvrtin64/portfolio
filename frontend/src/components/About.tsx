import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const AboutContainer = styled.div`
  max-width: 800px;
  width: 100%;
  text-align: left;
`;

const Title = styled(motion.h2)`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #fff;
`;

const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
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
  return (
    <AboutContainer>
      <Title
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        About me
      </Title>
      
      <Content>
        <Paragraph
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Hey there! I'm a <HighlightText>full-stack developer</HighlightText> with 
          a strong  focus on backend. Currently, I'm expanding my knowledge towards frontend development. I have a bachelor's degree as a system analyst, finished in 2024.
        </Paragraph>

        <Paragraph
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          I'm looking for my first opportunity in this awesome industry.
          My main focus these days is <HighlightText>full stack development</HighlightText>, although I can learn and adapt easily to anything.
        </Paragraph>

        <Paragraph
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          When I'm not coding, you'll find me <HighlightText>with my dogs or at the gym</HighlightText>. 
          I'm always interested in hearing about new projects, so feel free to drop me a line.
        </Paragraph>
      </Content>
    </AboutContainer>
  );
};

export default About; 