import styled from '@emotion/styled';
import { motion } from 'motion/react';
import { profile } from '../content';
import { useLanguage } from '../i18n/context';
import { LinkList, reveal, Section, SectionTitle } from './ui';

const Text = styled(motion.p)`
  color: var(--muted);
  max-width: 480px;
  text-align: center;
  line-height: 1.7;
`;

const EmailButton = styled(motion.a)`
  margin: 2rem 0;
  padding: 0.75rem 1.5rem;
  border: 1px solid var(--fg);
  border-radius: 6px;
  font-family: var(--mono);
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: var(--fg);
    color: var(--bg);
  }
`;

const Footer = styled.footer`
  margin-top: 4rem;
  color: var(--muted);
  font-size: 0.85rem;
  text-align: center;
`;

const Contact = () => {
  const { lang, t } = useLanguage();

  return (
    <Section id="contact">
      <SectionTitle {...reveal()}>{t.contact.title}</SectionTitle>
      <Text {...reveal(0.1)}>{t.contact.text}</Text>
      <EmailButton href={`mailto:${profile.email}`} {...reveal(0.2)}>
        {profile.email}
      </EmailButton>
      <motion.div {...reveal(0.3)}>
        <LinkList>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">github</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">linkedin</a>
          <a href={profile.resume[lang]} target="_blank" rel="noopener noreferrer">{t.contact.resume}</a>
        </LinkList>
      </motion.div>
      <Footer>
        © {new Date().getFullYear()} {profile.fullName} · {t.footer}
      </Footer>
    </Section>
  );
};

export default Contact;
