import styled from '@emotion/styled';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Terminal from './components/Terminal';
import { useEffect } from 'react';

const Container = styled.div`
  background-color: #000;
  color: #fff;
`;

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
`;

function App() {
  useEffect(() => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <Container>
      <Navbar />
      
      <Section id="contact">
        <Hero />
      </Section>

      <Section id="about">
        <About />
      </Section>

      <Section id="projects">
        <Projects />
      </Section>

      <Section id="terminal">
        <Terminal />
      </Section>
      
    </Container>
  );
}

export default App;
