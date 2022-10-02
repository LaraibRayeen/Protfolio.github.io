import Navbar from './components/Navbar';
import './App.css';
import Banner from './components/Banner'
import About from './components/About'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
  <>
  <BrowserRouter> 
  
  <Navbar/>
  <Banner/>
  <About/>
  <Project/>
  <Contact/>
  <Footer/>
  
  <Routes>

    <Route element={<About/>} path="About"/>
    <Route element={<Banner/>} path="Banner"/>
    
  
  </Routes>
  </BrowserRouter>

  </>
  );
}

export default App;
