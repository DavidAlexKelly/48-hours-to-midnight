import React from 'react';
import { siteContent } from '../content/siteContent';

const Footer: React.FC = () => {
  return (
    <footer>
      <p className="footer-quote">"{siteContent.footerQuote}"</p>
      <div className="footer-content">
        <p>{siteContent.siteName}</p>
        <p>{siteContent.tagline}</p>
        <p className="footer-disclaimer">{siteContent.footerDisclaimer}</p>
      </div>
    </footer>
  );
};

export default Footer;