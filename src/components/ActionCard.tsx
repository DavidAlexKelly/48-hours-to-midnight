import React from 'react';

interface ActionCardProps {
  emoji: string;
  title: string;
  description: string;
}

const ActionCard: React.FC<ActionCardProps> = ({ emoji, title, description }) => {
  return (
    <div className="action-card">
      <div className="action-emoji">{emoji}</div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default ActionCard;