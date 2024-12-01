import styled from '@emotion/styled';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
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
  return (
    <Container>
      <Navbar />
      
      <Section id="home">
        <Hero />
      </Section>

      <Section id="about">
        <About />
      </Section>
    </Container>
  );
}

export default App;
