import { useEffect, useState } from 'react';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import { BsCart3 } from 'react-icons/bs'; // Using react-icons for cart

export const NavBar = () => { 
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => setActiveLink(value);

  return (
    <Navbar expand="lg" fixed="top" className={`py-3 ${scrolled ? "bg-dark shadow-sm" : "bg-transparent"} transition`}>
      <Container className="d-flex justify-content-between align-items-center">
        {/* Left Nav */}
        <Nav className="d-none d-lg-flex">
          <Nav.Link
            href="#home"
            className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
            onClick={() => onUpdateActiveLink('home')}
          >
            Home
          </Nav.Link>
          <Nav.Link
            href="#books"
            className={activeLink === 'books' ? 'active navbar-link' : 'navbar-link'}
            onClick={() => onUpdateActiveLink('books')}
          >
            Books
          </Nav.Link>
        

        <Nav.Link
              href="#about"
              className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('about')}
            >
              About Me
            </Nav.Link>
            <Nav.Link
              href="#sale"
              className={activeLink === 'sale' ? 'active navbar-link text-danger fw-bold' : 'navbar-link text-danger'}
              onClick={() => onUpdateActiveLink('sale')}
            > Sale
      
            </Nav.Link>
            </Nav>

        {/* Center Logo */}
        <Navbar.Brand href="#home" className="mx-auto position-absolute start-50 translate-middle-x">
          <img src={logo} alt="Logo" style={{ height: '40px' }} />
        </Navbar.Brand>
 {/* Right Nav Cart */}
<Nav className="d-none d-lg-flex align-items-center ms-auto">
          {/* Search as Nav.Link */}
          <Nav.Link
            href="#search"
            className={activeLink === 'search' ? 'active navbar-link' : 'navbar-link'}
            onClick={() => onUpdateActiveLink('search')}
          >
            Search
          </Nav.Link>
          {/* Cart as Nav.Link */}
          <Nav.Link
            href="#cart"
            className={activeLink === 'cart' ? 'active navbar-link' : 'navbar-link'}
            onClick={() => onUpdateActiveLink('cart')}
          > Cart <span>   <BsCart3 size={20} className="me-1" /></span>
         
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
