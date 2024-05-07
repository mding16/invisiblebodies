import React, { useState } from 'react';

interface QuestionMarkProps {
  text: React.ReactNode; // Updated the type to accept JSX elements
  buttontext: React.ReactNode;
}

function QuestionMark({ text , buttontext}: QuestionMarkProps) {
  const [showText, setShowText] = useState(false);

  const toggleText = () => {
    setShowText(!showText);
  };

  const questionContainerStyle: React.CSSProperties = {
    position: 'relative',
    display: 'inline-block',
    cursor: 'help',
    padding: 5,
  };


  const questionMarkStyle: React.CSSProperties = {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: 'magenta',
    color: '#fff',
    fontSize: '18px',
    textAlign: 'center',
    lineHeight: '30px',
    fontFamily:'monospace',
    boxShadow: '0 0 10px rgba(255, 255, 255, 1)', // White shadow
  };

  const questionTextStyle: React.CSSProperties = {
    display: showText ? 'block' : 'none',
    position: 'absolute',
    top: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '400px', // Adjust the width here
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
      <div style={questionMarkStyle}>{buttontext}</div>
      <div style={questionTextStyle}>{text}</div>
    </div>
  );
}

export default QuestionMark;
