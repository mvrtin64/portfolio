import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const EducationContainer = styled.div`
  max-width: 800px;
  width: 100%;
  text-align: center;
  padding: 2rem;
  position: relative;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
`;

const Title = styled(motion.h2)`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #fff;
`;

const Timeline = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  height: 100%;
  width: 2px;
  background: rgba(255, 255, 255, 0.1);
  transform: translateX(-50%);
`;

const Degree = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
`;

const DegreeTitle = styled.h3`
  color: #fff;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const Institution = styled.p`
  color: #888;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;

const Year = styled.p`
  color: #888;
  font-size: 1rem;
`;

const Education = () => {
  return (
    <EducationContainer>
      <Title
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        education
      </Title>
      <Degree
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <DegreeTitle>Systems Analyst - Bachelor's Degree</DegreeTitle>
        <Institution>Instituto Superior de Formación Técnica N° 151</Institution>
        <Year>Mar 2022 - Dec 2024</Year>
      </Degree>
    </EducationContainer>
  );
};

export default Education; 