import React from 'react';

interface StatBoxProps {
  emoji: string;
  number: string;
  description: string;
}

const StatBox: React.FC<StatBoxProps> = ({ emoji, number, description }) => {
  return (
    <div className="stat-box">
      <div className="stat-emoji">{emoji}</div>
      <h3 className="stat-number">{number}</h3>
      <p className="stat-description">{description}</p>
    </div>
  );
};

export default StatBox;