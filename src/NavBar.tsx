import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from './content/siteContent';

interface NavbarProps {
  scrolled?: boolean;
  onSourcesClick?: () => void;
  onContactUsClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled = false, onSourcesClick, onContactUsClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  // Close menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close menu after clicking a link
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const handleSourcesClick = () => {
    setMenuOpen(false);
    if (onSourcesClick) onSourcesClick();
  };

  const handleContactUsClick = () => {
    setMenuOpen(false);
    if (onContactUsClick) onContactUsClick();
  };

  return (
    <nav ref={navRef} className={`${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="nav-header">
        <Link to="/" className="nav-title-link" onClick={handleLinkClick}>
          <h1 className="nav-title">{siteContent.siteName}</h1>
        </Link>
        
        {/* Hamburger button - only visible on mobile */}
        <button 
          className="hamburger-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      <div className={`nav-buttons ${menuOpen ? 'show' : ''}`}>
        <Link to="/contact" className="nav-button" onClick={handleLinkClick}>
          Make Your Voice Heard
        </Link>
        {onContactUsClick ? (
          <button className="nav-button" onClick={handleContactUsClick}>
            Contact Us
          </button>
        ) : (
          <Link to="/#contact-us" className="nav-button" onClick={handleLinkClick}>
            Contact Us
          </Link>
        )}
        {onSourcesClick ? (
          <button className="nav-button" onClick={handleSourcesClick}>
            View Sources
          </button>
        ) : (
          <Link to="/#sources" className="nav-button" onClick={handleLinkClick}>
            View Sources
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;