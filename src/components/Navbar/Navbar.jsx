// 

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/imagesrebn/logo-bg.png';
import { IoMenu, IoClose } from 'react-icons/io5';
import { FaSearch } from 'react-icons/fa';

import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container ">

                {/* Logo */}
                <Link to="/" className="nav-logo" onClick={closeMenu}>
          <img height={40} src={logo} alt="Reben Logo" />
        </Link>
        {/* Navigation Links */}
        <ul className={menuOpen ? 'nav-menu active' : 'nav-menu'}>
        <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMenu}>
              الرئيسية
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMenu}>
              عنا
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-links" onClick={closeMenu}>
              الخدمات البترولية
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/tenants" className="nav-links" onClick={closeMenu}>
              المستأجرون
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/franchise" className="nav-links" onClick={closeMenu}>
              الامتياز التجاري
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMenu}>
              اتصل بنا
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/appPage" className="nav-links" onClick={closeMenu}>
              تطبيق ريبن
            </Link>
          </li>
        </ul>
              {/* Menu Icon */}
              <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <IoClose /> : <IoMenu />}
        </div>

        {/* Search Icon */}
        <div className="search-icon">
          <FaSearch />
        </div>
      
      </div>
     {/* Overlay for closing menu */}
     {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </nav>
  );
};

export default Navbar;
