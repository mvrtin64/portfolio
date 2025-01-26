import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const ProjectsContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 2rem;
`;

const Title = styled(motion.h2)`
  font-size: 2rem;
  margin-bottom: 3rem;
  color: #fff;
  text-align: center;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 1.5rem;
  transition: transform 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProjectThumbnail = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const ProjectTitle = styled.h3`
  color: #fff;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: #888;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const TechTag = styled.span`
  background: rgba(255, 255, 255, 0.1);
  color: #888;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.85rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  justify-content: flex-end;

  a {
    color: #888;
    text-decoration: none;
    transition: color 0.3s ease;
    font-size: 0.9rem;

    &:hover {
      color: #fff;
    }
  }
`;

const Projects = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const projects = t.projects.items;

  return (
    <ProjectsContainer>
      <Title
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {t.projects.title}
      </Title>
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ProjectThumbnail src={project.thumbnail} alt={`${project.title} thumbnail`} />
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <TechList>
              {project.tech.map(tech => (
                <TechTag key={tech}>{tech}</TechTag>
              ))}
            </TechList>
            <ProjectLinks>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                github
              </a>
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  live demo
                </a>
              )}
            </ProjectLinks>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsContainer>
  );
};

export default Projects;
