import styled from '@emotion/styled';
import { motion } from 'motion/react';
import { profile } from '../content';
import { useLanguage } from '../i18n/context';
import { LinkList, Section } from './ui';

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 9vw, 4rem);
  line-height: 1.1;
  margin-bottom: 1rem;
  text-align: center;

  span {
    display: inline-block;

    &:hover {
      background: linear-gradient(
        to right,
        #75aadb 0% 33%,
        #fff 33% 45%,
        #f4b824 45% 55%,
        #fff 55% 66%,
        #75aadb 66% 100%
      );
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
    }
  }
`;

const Role = styled(motion.p)`
  color: var(--muted);
  font-size: 1.2rem;
  text-align: center;
`;

const Location = styled(motion.p)`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 1.25rem;
  color: var(--muted);
  font-size: 0.95rem;
`;

const Stack = styled(motion.p)`
  margin-top: 2.5rem;
  color: var(--muted);
  font-family: var(--mono);
  font-size: 0.9rem;
  text-align: center;
`;

const Socials = styled(motion.div)`
  margin-top: 2.5rem;
`;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

const Hero = () => {
  const { lang, t } = useLanguage();

  return (
    <Section id="home">
      <Title {...fadeUp(0)}>
        {t.hero.intro} <span>{profile.name}</span>.
      </Title>
      <Role {...fadeUp(0.15)}>{profile.role[lang]}</Role>
      <Location {...fadeUp(0.3)}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M21 10c0 6-9 13-9 13s-9-7-9-13a9 9 0 1 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        {profile.location}
      </Location>
      <Stack {...fadeUp(0.45)}>typescript · react · react native · node · nestjs · postgresql · windows · linux · networking</Stack>
      <Socials {...fadeUp(0.6)}>
        <LinkList>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">github</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">linkedin</a>
          <a href={`mailto:${profile.email}`}>email</a>
          <a href={profile.resume[lang]} target="_blank" rel="noopener noreferrer">{t.contact.resume}</a>
        </LinkList>
      </Socials>
    </Section>
  );
};

export default Hero;
