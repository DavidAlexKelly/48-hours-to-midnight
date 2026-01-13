import React from 'react';

interface ContactCardProps {
  name: string;
  role: string;
  relevance: string;
  email?: string;
  constituency?: string;
  twitter?: string;
  chair?: string;
  link?: string;
  note?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  name,
  role,
  relevance,
  email,
  constituency,
  twitter,
  chair,
  link,
  note
}) => {
  return (
    <div className="contact-card">
      <h4 className="contact-name">{name}</h4>
      <p className="contact-role">{role}</p>
      {constituency && (
        <p className="contact-constituency">Constituency: {constituency}</p>
      )}
      {chair && <p className="contact-chair">Chair: {chair}</p>}
      <p className="contact-relevance">{relevance}</p>

      <div className="contact-links">
        {email && (
          <a
            href={email.includes('@') ? `mailto:${email}` : '#'}
            className="contact-link email"
          >
            {email}
          </a>
        )}
        {twitter && (
          <a
            href={`https://twitter.com/${twitter.replace('@', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link twitter"
          >
            {twitter}
          </a>
        )}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link website"
          >
            Visit Website →
          </a>
        )}
      </div>

      {note && <p className="contact-note">{note}</p>}
    </div>
  );
};

export default ContactCard;