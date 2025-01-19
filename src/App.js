import React, { useEffect, useState } from 'react';
import './App.css';
import  { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import Home from './pages/Home_page/Home';
import About from './pages/About_page/AboutPage';
import Services from './pages/Services_page/Services';
import Projects from './pages/Projects_page/Projects';
import Franchise from './pages/Franchise/Franchise'
import Contact from './pages/Contact_page/Contact';
import Tenants from './pages/Tenants/Tenants';
import NotFound from './pages/NotFound_page/NotFound';
import Navbar from './components/Navbar/Navbar';
import AppPage from './pages/App_page/AppPage';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // إظهار زر العودة للأعلى عند التمرير
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // العودة إلى أعلى الصفحة مع حركة ناعمة
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
     <div className="App">
      {showScrollTop && (
        <button className="scroll-top-btn" onClick={scrollToTop}>
          ⬆
        </button>
      )}
    </div>
       <Router>
      <Navbar/>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/about' Component={About}/>
        <Route path='/services' Component={Services}/>
        <Route path='/projects' Component={Projects}/>
        <Route path='/tenants' Component={Tenants}/>
        <Route path='/franchise' Component={Franchise}/>
        <Route path='/contact' Component={Contact}/>
        <Route path='/appPage' Component={AppPage}/>
        <Route path='*' Component={NotFound}/>
      </Routes>
    </Router>
    </>
 
      
    
  );
}

export default App;
