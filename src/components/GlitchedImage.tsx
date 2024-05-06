import React, { useState, useEffect } from 'react';
import '../styles/App.css'; // Import the CSS file containing the glitch effect styles

const image = require('../images/code.png');

function GlitchedImage() {
  const [backgroundSize, setBackgroundSize] = useState('100% 100%');

  useEffect(() => {
    const interval = setInterval(() => {
      // Generate random background size
      const newWidth = Math.floor(Math.random() * 101) + 100; // Random width between 100% and 200%
      const newHeight = Math.floor(Math.random() * 101) + 100; // Random height between 100% and 200%
      setBackgroundSize(`${newWidth}% ${newHeight}%`);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glitch-container">
      <style>
        {`
          .glitch {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            background-image: url(${image});
            background-size: ${backgroundSize};
            animation: glitch 3s linear infinite alternate both;
          }

          @keyframes glitch {
            0%, 100% {
              transform: none;
              filter: hue-rotate(0deg);
            }
            15%, 25%, 45%, 55%, 75%, 85% {
              transform: none
              filter: hue-rotate(0deg);
            }
            20% {
              transform: none
              filter: hue-rotate(30deg);
            }
            40% {
              transform: none
              filter: hue-rotate(60deg);
            }
            60% {
              transform: none
              filter: hue-rotate(90deg);
            }
            80% {
              transform: none
              filter: hue-rotate(120deg);
            }
          }
        `}
      </style>
      <div className="glitch"></div>
    </div>
  );
}

export default GlitchedImage;
