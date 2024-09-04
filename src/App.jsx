import { BrowserRouter } from 'react-router-dom';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Reviews from './components/Reviews';
import DetailedSkills from './components/DetailedSkills';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Skills />
            <DetailedSkills />
            <Projects />
            <Reviews />
            <About />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
