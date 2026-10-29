import styled from '@emotion/styled';
import { motion } from 'motion/react';
import { education, profile, skills } from '../content';
import { useLanguage } from '../i18n/context';
import { reveal, Section, SectionTitle, Tag, Tags } from './ui';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  max-width: 900px;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const Photo = styled(motion.img)`
  width: 200px;
  height: 200px;
  flex-shrink: 0;
  border-radius: 50%;
  object-fit: cover;

  @media (min-width: 768px) {
    width: 240px;
    height: 240px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const Paragraph = styled(motion.p)`
  color: var(--muted);
  font-size: 1.05rem;
  line-height: 1.8;
`;

const Subtitle = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  margin: 1rem 0 0.75rem;
`;

const SkillRow = styled.div`
  display: grid;
  gap: 0.5rem;
  margin-bottom: 0.75rem;

  @media (min-width: 560px) {
    grid-template-columns: 7rem 1fr;
    align-items: baseline;
  }

  span {
    color: var(--muted);
    font-family: var(--mono);
    font-size: 0.85rem;
  }
`;

const About = () => {
  const { lang, t } = useLanguage();

  return (
    <Section id="about">
      <SectionTitle {...reveal()}>{t.about.title}</SectionTitle>
      <Layout>
        <Photo src={profile.photo} alt={profile.fullName} {...reveal(0.1)} />
        <Content>
          {profile.about.map((paragraph, i) => (
            <Paragraph key={i} {...reveal(0.15 + i * 0.1)}>
              {paragraph[lang]}
            </Paragraph>
          ))}

          <motion.div {...reveal(0.4)}>
            <Subtitle>{t.about.skills}</Subtitle>
            {skills.map((group) => (
              <SkillRow key={group.area.en}>
                <span>{group.area[lang]}</span>
                <Tags>
                  {group.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </Tags>
              </SkillRow>
            ))}
          </motion.div>

          <motion.div {...reveal(0.5)}>
            <Subtitle>{t.about.education}</Subtitle>
            <Paragraph>{education[lang]}</Paragraph>
          </motion.div>
        </Content>
      </Layout>
    </Section>
  );
};

export default About;
