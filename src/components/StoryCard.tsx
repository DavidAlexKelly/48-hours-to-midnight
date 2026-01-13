import React from 'react';

interface StoryCardProps {
  title: string;
  date: string;
  source: string;
  sourceUrl: string;
  summary: string;
  details: string;
}

const StoryCard: React.FC<StoryCardProps> = ({ 
  title, 
  date, 
  source, 
  sourceUrl, 
  summary, 
  details 
}) => {
  return (
    <div className="story-card">
      <h4>{title}</h4>
      <p className="story-meta">
        {date} •{' '}
        <a
          href={sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="story-source-link"
        >
          {source}
        </a>
      </p>
      <p className="story-summary">{summary}</p>
      <p className="story-details">{details}</p>
    </div>
  );
};

export default StoryCard;