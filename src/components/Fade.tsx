import React, { useState } from 'react';

function FadeInOnHover() {
  const [isHovered, setIsHovered] = useState(true);

  // Generate random margins
  const randomMargin = () => {
    return Math.floor(Math.random() * 101) + 'px'; // Random margin between 0px and 100px
  };

  // Generate random font size
  const randomFontSize = () => {
    return Math.floor(Math.random() * 31) + 10 + 'px'; // Random font size between 10px and 40px
  };

  // Generate random height and width
  const randomHeight = () => {
    return Math.floor(Math.random() * 101) + 'vh'; // Random height between 0vh and 100vh
  };

  const randomWidth = () => {
    return Math.floor(Math.random() * 101) + 'vw'; // Random width between 0vw and 100vw
  };

  const containerStyle: React.CSSProperties = {
    position: 'fixed',
    width: randomWidth(), // Apply random width
    height: randomHeight(), // Apply random height
    zIndex: 0, // Ensure component is below other content
    margin: 0, // Remove any margin
    padding: 0, // Remove any padding
    backgroundColor: 'black', // Background color
    opacity: 0.5, // Opacity
    marginTop: randomMargin(), // Apply random margins
    marginBottom: randomMargin(),
    marginLeft: randomMargin(),
    marginRight: randomMargin(),
    fontFamily: 'monospace',
    fontSize: randomFontSize(), // Apply random font size
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
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        find me   {'          '}       im in blue
      </div>
    </div>
  );
}

export default FadeInOnHover;
