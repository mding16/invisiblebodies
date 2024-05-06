import React, { useState } from 'react';

interface FadeInOnHoverProps {
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
}

function FadeInOnHover({ marginTop, marginBottom, marginLeft, marginRight }: FadeInOnHoverProps) {
  const [isHovered, setIsHovered] = useState(false);

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    width: 'fit-content',
    zIndex: 1,
    padding: '10px',
    display: 'inline-block', // Ensure inline block display to respect width and height
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    fontFamily: 'monospace',
    opacity: 0.5
  };

  const contentStyle: React.CSSProperties = {
    opacity: isHovered ? 1 : 0,
    transition: 'opacity 0.5s ease',
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="fade-in-container"
      style={containerStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="fade-in-content" style={contentStyle}>
        find me
      </div>
    </div>
  );
}

export default FadeInOnHover;
