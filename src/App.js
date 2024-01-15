import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import Portfolio from './Components/Portfolio';
import Companies from './Components/Companies';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='p-[20px]'>
   <NavBar />
   <Home />
   <AboutMe />
   <Skills />
   <Portfolio />
   <Companies />
   <Contact />
   <Footer />
    </div>
  );
}

export default App;
