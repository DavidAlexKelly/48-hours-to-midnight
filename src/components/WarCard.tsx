import React from 'react';
import StoryCard from './StoryCard';

interface Story {
  title: string;
  date: string;
  source: string;
  sourceUrl: string;
  summary: string;
  details: string;
}

interface WarCardProps {
  emoji: string;
  title: string;
  description: string;
  points: string[];
  sources: string;
  stories: Story[];
  isExpanded: boolean;
  onToggle: () => void;
}

const WarCard: React.FC<WarCardProps> = ({
  emoji,
  title,
  description,
  points,
  sources,
  stories,
  isExpanded,
  onToggle
}) => {
  return (
    <div className="war-card">
      <div className="war-emoji">{emoji}</div>
      <h3>{title}</h3>
      <p className="war-description">{description}</p>

      <ul className="war-list">
        {points.map((point, index) => (
          <li key={index}>✗ {point}</li>
        ))}
      </ul>

      <button
        className={`war-toggle-button ${isExpanded ? 'button-primary' : 'button-secondary'}`}
        onClick={onToggle}
      >
        {isExpanded ? 'Hide Stories ↑' : 'Read Real Stories ↓'}
      </button>

      {isExpanded && (
        <div className="stories-container">
          {stories.map((story, index) => (
            <StoryCard key={index} {...story} />
          ))}
        </div>
      )}

      <p className="war-sources">{sources}</p>
    </div>
  );
};

export default WarCard;