import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const TechSection = styled.section`
  margin-top: 3rem;
  display: flex;
  gap: 1rem;
`;

const TechItem = styled(motion.span)`
  color: #888;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const techStack = [
  { icon: '⚛️', text: 'react' },
  { icon: '📘', text: 'typescript / javascript' },
  { icon: '🗄️', text: 'mysql / mongodb' },
  { icon: '🟢', text: 'node / express' },
];

const TechStack = () => {
  return (
    <TechSection>
      {techStack.map((tech, index) => (
        <TechItem
          key={tech.text}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
        >
          {tech.icon} {tech.text}
        </TechItem>
      ))}
    </TechSection>
  );
};

export default TechStack; 