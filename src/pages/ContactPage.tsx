import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteContent } from '../content/siteContent';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactCard from '../components/ContactCard';
import ActionCard from '../components/ActionCard';

const ContactPage: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const location = useLocation();

  const { contactPage } = siteContent;
  const { letterTemplate, writeToThem, keyContacts, otherWays } = contactPage;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(letterTemplate.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="app-container">
      <Navbar />

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="max-width-1200">
          <h1 className="contact-heading">{contactPage.title}</h1>
          <p className="contact-intro">{contactPage.description}</p>
        </div>
      </section>

      {/* Letter Template Section */}
      <section className="letter-section">
        <div className="max-width-900">
          <h2>{letterTemplate.title}</h2>
          <div className="divider"></div>
          <p className="letter-instructions">{letterTemplate.instructions}</p>

          <div className="letter-container">
            <div className="letter-header">
              <span className="letter-label">{letterTemplate.title}</span>
              <button
                className={`copy-button ${copied ? 'copied' : ''}`}
                onClick={copyToClipboard}
              >
                {copied ? '✓ Copied!' : 'Copy to Clipboard'}
              </button>
            </div>
            <pre className="letter-content">{letterTemplate.content}</pre>
          </div>
        </div>
      </section>

      {/* WriteToThem Section */}
      <section className="writetothem-section">
        <div className="max-width-900">
          <h2>{writeToThem.title}</h2>
          <div className="divider"></div>
          <p className="writetothem-intro">{writeToThem.description}</p>

          <div className="writetothem-card">
            <div className="writetothem-content">
              <h3>{writeToThem.cardTitle}</h3>
              <p>{writeToThem.cardDescription}</p>
              <a
                href={writeToThem.url}
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary writetothem-button"
              >
                {writeToThem.buttonText}
              </a>
            </div>
            <div className="writetothem-stats">
              <div className="writetothem-stat">
                <span className="stat-value">{writeToThem.stats.messages}</span>
                <span className="stat-label">{writeToThem.stats.messagesLabel}</span>
              </div>
              <div className="writetothem-stat">
                <span className="stat-value">{writeToThem.stats.cost}</span>
                <span className="stat-label">{writeToThem.stats.costLabel}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Contacts Section */}
      <section className="contacts-section">
        <div className="max-width-1200">
          <h2>{keyContacts.title}</h2>
          <div className="divider"></div>
          <p className="contacts-intro">{keyContacts.description}</p>

          {keyContacts.categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="contact-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="contacts-grid">
                {category.contacts.map((contact, contactIndex) => (
                  <ContactCard key={contactIndex} {...contact} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Ways Section */}
      <section className="additional-actions-section">
        <div className="max-width-900">
          <h2>{otherWays.title}</h2>
          <div className="divider"></div>

          <div className="actions-grid">
            {otherWays.actions.map((action, index) => (
              <ActionCard
                key={index}
                emoji={action.emoji}
                title={action.title}
                description={action.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="back-section">
        <div className="max-width-900 text-center">
          <Link to="/" className="button-secondary back-button">
            {contactPage.backButton}
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;