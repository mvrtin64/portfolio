import styled from '@emotion/styled';
import { motion } from 'motion/react';
import type { Section as SectionId } from '../content';

export const scrollToSection = (id: SectionId) => document.getElementById(id)?.scrollIntoView();

// Fade-up on first appearance; shared by every section so the page animates consistently.
export const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

export const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: calc(var(--nav-height) + 2rem) 1.5rem 4rem;
`;

export const SectionTitle = styled(motion.h2)`
  font-size: 2rem;
  margin-bottom: 2.5rem;
  text-align: center;
`;

export const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
`;

export const Tag = styled.li`
  background: var(--subtle);
  color: var(--muted);
  padding: 0.2rem 0.75rem;
  border-radius: 999px;
  font-size: 0.85rem;
`;

export const LinkList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem 2rem;

  a {
    color: var(--muted);
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: var(--fg);
    }
  }
`;
