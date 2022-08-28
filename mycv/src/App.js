import './App.css';
import Education from './Component/Education';
import Experience from './Component/Experience';
import Heading from './Component/Heading';
import Projects from './Component/Projects';
import Skills from './Component/Skills';

function App() {
  return (
    <div className="App">
    <Heading/>
    <Skills/>
    <Projects/>
    <Experience/>
    <Education/>
    </div>
  );
}

export default App;
