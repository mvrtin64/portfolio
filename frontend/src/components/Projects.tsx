import styled from '@emotion/styled';
import { motion } from 'framer-motion';

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

const projects = [
  {
    title: 'Portfolio',
    description: 'A personal portfolio to showcase my work and skills in full-stack development.',
    tech: ['React', 'TypeScript', 'Node.js'],
    github: 'https://github.com/mvrtin64/portfolio',
    live: '#', 
    thumbnail: 'portfolio.png'
  },
    {
    title: 'Interactive Sushi Ordering Chatbot',
    description: 'An AI-powered web application for ordering sushi, featuring a chatbot built with Voiceflow, React, Node.js, and MongoDB. It supports fuzzy matching, dynamic order validation, and a seamless user experience.',
    tech: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Jest', 'Express'],
    github: 'https://github.com/mvrtin64/sushi_chatbot',
    thumbnail: 'sushi_chatbot.png'
  },
  {
    title: 'Rock, Paper, Scissors 2D Web Game',
    description: 'A 2D multiplayer Rock, Paper, Scissors game built with Node.js and Socket.IO for real-time communication. Designed with an MVC architecture and modern web technologies to deliver an interactive and responsive gaming experience.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MVC Architecture','Socket.IO'],
    github: 'https://github.com/MrLoadex/RPS-WAR/tree/MVC',
    thumbnail: 'rps.jpg'
  },
  {
    title: 'Secure client-server messaging application',
    description: 'A secure web chat application featuring message encryption, user authentication, and integration with SMS/Telegram bots for verification. Leveraging SQLite, bcrypt, and Socket.IO, this project emphasizes security, scalability, and real-time communication. ',
    tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'SQLite', 'Bcrypt library', 'Socket.IO'],
    github: 'https://github.com/MrLoadex/Chat_Seguro__Seminario',
    thumbnail: 'sms.jpg'
  },
  {
    title: 'To-Do list',
    description: 'A simple To-Do List application and my first React project. Built with React and TypeScript, this project helped me understand state management and component-based architecture in modern web development',
    tech: ['TypeScript', 'React'],
    github: 'https://github.com/mvrtin64/react-projects/tree/master/to-do-list',
    thumbnail: 'todo.jpg'
  },
  {
    title: 'Hangman Game',
    description: 'My first web game. It helped me learn the fundamentals of client-server communication.',
    tech: ['HTML', 'CSS', "JavaScript", "Node.js"],
    github: 'https://github.com/mvrtin64/ahorcado-game',
    thumbnail: 'hangman.jpg'
  }
];

const Projects = () => {
  return (
    <ProjectsContainer>
      <Title
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        projects
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
              {project.title === 'Portfolio' && (
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
