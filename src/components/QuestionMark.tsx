import React, { useState } from 'react';

interface QuestionMarkProps {
  text: React.ReactNode; // Updated the type to accept JSX elements
}

function QuestionMark({ text }: QuestionMarkProps) {
  const [showText, setShowText] = useState(false);

  const toggleText = () => {
    setShowText(!showText);
  };

  const questionContainerStyle: React.CSSProperties = {
    position: 'relative',
    display: 'inline-block',
    cursor: 'help',
    padding: 5
  };

  const questionMarkStyle: React.CSSProperties = {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: 'magenta',
    color: '#fff',
    fontSize: '20px',
    textAlign: 'center',
    lineHeight: '30px'
  };

  const questionTextStyle: React.CSSProperties = {
    display: showText ? 'block' : 'none',
    position: 'absolute',
    top: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '320px', // Adjust the width here
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '5px',
    zIndex: '1',
    color: 'magenta',
    fontSize: 18
  };
  return (
    <div
      style={questionContainerStyle}
      onMouseEnter={toggleText}
      onMouseLeave={toggleText}
    >
      <div style={questionMarkStyle}>?</div>
      <div style={questionTextStyle}>{text}</div>
    </div>
  );
}

export default QuestionMark;
