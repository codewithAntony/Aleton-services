import { BrowserRouter } from 'react-router-dom';
import About from './components/About';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
// import Reviews from './components/Reviews';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Skills />
            <Projects />
            {/* <Reviews /> */}
            <About />
        </BrowserRouter>
    );
}

export default App;
