import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteContent } from '../content/siteContent';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StatBox from '../components/Statbox';
import WarCard from '../components/WarCard';
import EmailSignup from '../components/EmailSignup';

const HomePage: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expandedWar, setExpandedWar] = useState<string | null>(null);
  const location = useLocation();

  const { hero, problem, wars, solution, callToAction, contactUs, sources } = siteContent;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleWar = (warId: string) => {
    setExpandedWar(expandedWar === warId ? null : warId);
  };

  return (
    <div className="app-container">
      <Navbar 
        scrolled={scrolled} 
        onSourcesClick={() => scrollToSection('sources')}
        onContactUsClick={() => scrollToSection('contact-us')}
      />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="max-width-1200 full-width">
          <h1 className="hero-heading">
            {hero.title.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < hero.title.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h1>

          <p className="hero-text">{hero.description}</p>

          <div className="hero-buttons">
            <button className="button-secondary" onClick={() => scrollToSection('problem')}>
              {hero.buttons.learnMore}
            </button>
            <button className="button-primary" onClick={() => scrollToSection('solution')}>
              {hero.buttons.jumpToSolution}
            </button>
          </div>
        </div>

        <div className="scroll-indicator">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="problem-section">
        <div className="max-width-1200">
          <h2>{problem.title}</h2>
          <div className="divider"></div>
          <p className="section-intro">{problem.description}</p>

          <div className="grid-auto-fit">
            {problem.stats.map((stat, index) => (
              <StatBox
                key={index}
                emoji={stat.emoji}
                number={stat.number}
                description={stat.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Wars Section */}
      <section className="wars-section">
        <div className="max-width-1200">
          <h2 className="text-center">{wars.title}</h2>
          <div className="divider divider-centered"></div>

          {wars.sections.map((war) => (
            <WarCard
              key={war.id}
              emoji={war.emoji}
              title={war.title}
              description={war.description}
              points={war.points}
              sources={war.sources}
              stories={war.stories}
              isExpanded={expandedWar === war.id}
              onToggle={() => toggleWar(war.id)}
            />
          ))}
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="solution-section">
        <div className="max-width-1200">
          <h2>{solution.title}</h2>
          <div className="divider"></div>
          <p className="section-intro section-intro-light">{solution.description}</p>

          {/* Primary Solution */}
          <div className="solution-primary">
            <div className="solution-badge">{solution.primary.badge}</div>
            <h3 className="solution-title">{solution.primary.title}</h3>
            <p className="solution-subtitle">{solution.primary.subtitle}</p>

            <div className="solution-steps">
              {solution.primary.steps.map((step, index) => (
                <div key={index}>
                  <strong>{index + 1}.</strong> {step}
                </div>
              ))}
            </div>

            <div className="solution-grid">
              <div className="solution-box protects">
                <h4>✓ What This Protects</h4>
                <ul>
                  {solution.primary.protects.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="solution-box destroys">
                <h4>✗ What This Destroys</h4>
                <ul>
                  {solution.primary.destroys.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Follow-up Measures */}
          <h3 className="follow-up-heading">{solution.followUp.title}</h3>

          <div className="follow-up-grid">
            {solution.followUp.measures.map((measure, index) => (
              <div key={index} className="follow-up-card">
                <h4>{measure.title}</h4>
                <p>{measure.description}</p>
                <div className="follow-up-stops">
                  <p>{measure.stops}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Solution CTA */}
          <div className="solution-cta">
            <h3>{solution.cta.title}</h3>
            <p className="solution-cta-text">{solution.cta.text}</p>
            <p className="solution-cta-emphasis">{solution.cta.emphasis}</p>
          </div>
        </div>
      </section>
              {/* Join Campaign Section */}
        <section className="join-campaign-section">
          <div className="max-width-900">
            <h2>JOIN THE CAMPAIGN</h2>
            <div className="divider divider-centered"></div>
            <EmailSignup />
          </div>
        </section>
      {/* CTA Section */}
      <section className="cta-section">
        <div className="max-width-900">
          <h2>{callToAction.title}</h2>
          <p className="cta-text">{callToAction.text}</p>
          <p className="cta-highlight">{callToAction.highlight}</p>

          <div className="cta-quote">
            <p>"{callToAction.quote}"</p>
          </div>

          <p className="cta-action">{callToAction.action}</p>

          <div className="cta-buttons">
            <button className="button-primary cta-button cta-button-disabled" disabled>
              {callToAction.buttons.download}
            </button>
            <Link to="/contact" className="button-secondary cta-button">
              {callToAction.buttons.contact}
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact-us" className="contact-us-section">
        <div className="max-width-900">
          <h2>{contactUs.title}</h2>
          <div className="divider"></div>
          <p className="section-intro">{contactUs.description}</p>

          <div className="contact-us-grid">
            <div className="contact-us-card">
              <div className="contact-us-icon">📧</div>
              <h4>Email</h4>
              <a href={`mailto:${contactUs.email}`} className="contact-us-link">
                {contactUs.email}
              </a>
            </div>

            <div className="contact-us-card">
              <div className="contact-us-icon">📞</div>
              <h4>Phone</h4>
              <a href={`tel:${contactUs.phone.replace(/\s/g, '')}`} className="contact-us-link">
                {contactUs.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sources Section */}
      <section id="sources" className="sources-section">
        <div className="max-width-1200">
          <h2>{sources.title}</h2>
          <div className="divider"></div>
          <p className="section-intro">{sources.description}</p>

          <div className="sources-container">
            {sources.categories.map((category, categoryIndex) => (
              <React.Fragment key={categoryIndex}>
                <h3>{category.title}</h3>
                <ul className="sources-list">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <strong>{item.name}</strong> - {item.description}
                      <br />
                      <a href={item.url} target="_blank" rel="noopener noreferrer">
                        {item.displayUrl}
                      </a>
                    </li>
                  ))}
                </ul>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;