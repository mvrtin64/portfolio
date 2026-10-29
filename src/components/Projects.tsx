import styled from '@emotion/styled';
import { motion } from 'motion/react';
import { projects, type Project } from '../content';
import { useLanguage } from '../i18n/context';
import { reveal, Section, SectionTitle, Tag, Tags } from './ui';

const Container = styled.div`
  max-width: 1100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Card = styled(motion.article)`
  background: var(--subtle);
  border: 1px solid transparent;
  border-radius: 10px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: var(--border);
  }
`;

const FeaturedCard = styled(Card)`
  @media (min-width: 900px) {
    flex-direction: row;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
  }
`;

const Screenshots = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-shrink: 0;

  img {
    width: calc((100% - 1.5rem) / 3);
    max-width: 150px;
    border-radius: 12px;
    border: 1px solid var(--border);
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
`;

const Thumbnail = styled.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 6px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`;

const Label = styled.span`
  color: var(--accent);
  font-family: var(--mono);
  font-size: 0.8rem;
`;

const Title = styled.h3`
  font-size: 1.2rem;
`;

const Description = styled.p`
  color: var(--muted);
  line-height: 1.6;
  flex: 1;
`;

const CodeLink = styled.a`
  align-self: flex-end;
  color: var(--muted);
  font-size: 0.9rem;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: var(--fg);
  }
`;

const ProjectBody = ({ project, label }: { project: Project; label?: string }) => {
  const { lang, t } = useLanguage();
  return (
    <Body>
      {label && <Label>{label}</Label>}
      <Title>{project.title[lang]}</Title>
      <Description>{project.description[lang]}</Description>
      <Tags>
        {project.tech.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </Tags>
      <CodeLink href={project.github} target="_blank" rel="noopener noreferrer">
        {t.projects.code} →
      </CodeLink>
    </Body>
  );
};

const Projects = () => {
  const { lang, t } = useLanguage();
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <Section id="projects">
      <SectionTitle {...reveal()}>{t.projects.title}</SectionTitle>
      <Container>
        {featured.map((project) => (
          <FeaturedCard key={project.id} {...reveal(0.1)}>
            <Screenshots>
              {project.images.map((src) => (
                <img key={src} src={src} alt={`${project.title[lang]} screenshot`} loading="lazy" />
              ))}
            </Screenshots>
            <ProjectBody project={project} label={t.projects.featured} />
          </FeaturedCard>
        ))}
        <Grid>
          {rest.map((project, i) => (
            <Card key={project.id} {...reveal(0.1 + i * 0.05)}>
              <Thumbnail src={project.images[0]} alt="" loading="lazy" />
              <ProjectBody project={project} />
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Projects;
