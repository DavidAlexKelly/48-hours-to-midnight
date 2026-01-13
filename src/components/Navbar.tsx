import React from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../content/siteContent';

interface NavbarProps {
  scrolled?: boolean;
  onSourcesClick?: () => void;
  onContactUsClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled = false, onSourcesClick, onContactUsClick }) => {
  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <Link to="/" className="nav-title-link">
        <h1 className="nav-title">{siteContent.siteName}</h1>
      </Link>
      <div className="nav-buttons">
        <Link to="/contact" className="nav-button">
          Make Your Voice Heard
        </Link>
        {onContactUsClick ? (
          <button className="nav-button" onClick={onContactUsClick}>
            Contact Us
          </button>
        ) : (
          <Link to="/#contact-us" className="nav-button">
            Contact Us
          </Link>
        )}
        {onSourcesClick ? (
          <button className="nav-button" onClick={onSourcesClick}>
            View Sources
          </button>
        ) : (
          <Link to="/#sources" className="nav-button">
            View Sources
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;