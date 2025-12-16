import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contacts";
import Education from "./components/Education";
import Course from './components/Course'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Education/>
      <Course/>
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
