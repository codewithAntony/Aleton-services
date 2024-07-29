import About from './components/About';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
    return (
        <div className="app">
            <Header />
            <Skills />
            <Projects />
            <About />
        </div>
    );
}

export default App;
