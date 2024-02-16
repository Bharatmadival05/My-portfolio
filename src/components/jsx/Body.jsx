import { useState, useEffect } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

export default function Body() {
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleSideMenu = () => {
    setSideMenuOpen(!isSideMenuOpen);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const scrollThreshold = 10; // Adjust this value based on when you want the navbar to become sticky

    setIsSticky(scrollPosition > scrollThreshold);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="header">
      <div className={`container ${isSticky ? 'sticky' : ''}`}>
        <nav>
          <h1 className='logo'><span className='logo1'>B</span>HARAT.</h1>
          <ul className={isSideMenuOpen ? 'open' : ''} id='sidemenu'>
            <li><ScrollLink to='header' spy={true} smooth={true} duration={300} activeClass="active">Home</ScrollLink></li>
            <li><ScrollLink to='about' spy={true} smooth={true} duration={300} activeClass="active">About</ScrollLink></li>
            <li><ScrollLink to='services' spy={true} smooth={true} duration={300} activeClass="active">Services</ScrollLink></li>
            <li><ScrollLink to='portfolio' spy={true} smooth={true} duration={300} activeClass="active">Portfolio</ScrollLink></li>
            <li><ScrollLink to='contact' spy={true} smooth={true} duration={300} activeClass="active">Contact</ScrollLink></li>
            <i className="fas fa-times" onClick={toggleSideMenu}></i>
          </ul>
          <i className="fas fa-bars" onClick={toggleSideMenu}></i>
        </nav>
        <div className="header-text">
          <p>Student</p>
          <h1>Hi, I'm <span>Bharat</span><br/> Madival From Kumta</h1>
        </div>
      </div>
    </div>
  );
}
