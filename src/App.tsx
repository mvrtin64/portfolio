import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Terminal from './components/Terminal';
import { LanguageProvider } from './i18n/LanguageProvider';

const App = () => (
  <LanguageProvider>
    <Navbar />
    <main>
      <Hero />
      <About />
      <Projects />
      <Terminal />
      <Contact />
    </main>
  </LanguageProvider>
);

export default App;
