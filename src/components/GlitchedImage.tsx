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
    }, 3000);

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
            animation: glitch 3s linear infinite alternate both, colorFlash 2s linear infinite;
          }

          @keyframes glitch {
            0%, 100% {
              transform: none;
              filter: hue-rotate(0deg);
            }
            15%, 25%, 45%, 55%, 75%, 85% {
              transform: none /* Move the image slightly */
              filter: hue-rotate(0deg) brightness(150%) contrast(200%); /* Increase brightness and contrast */
            }
            20% {
              transform: none /* Move the image slightly */
              filter: hue-rotate(30deg) brightness(200%) contrast(250%); /* Increase brightness and contrast */
            }
            40% {
              transform: none /* Move the image slightly */
              filter: hue-rotate(60deg) brightness(150%) contrast(200%); /* Increase brightness and contrast */
            }
            60% {
              transform: none /* Move the image slightly */
              filter: hue-rotate(90deg) brightness(200%) contrast(250%); /* Increase brightness and contrast */
            }
            80% {
              transform: translate(-5px, 5px); /* Move the image slightly */
              filter: hue-rotate(120deg) brightness(150%) contrast(200%); /* Increase brightness and contrast */
            }
          }

          @keyframes colorFlash {
            0% {
              background-color: rgba(255, 0, 0, 0.5); /* Red flash */
            }
            10% {
              background-color: rgba(0, 255, 0, 0.5); /* Green flash */
            }
            20% {
              background-color: rgba(0, 0, 255, 0.5); /* Blue flash */
            }
            30% {
              background-color: rgba(255, 255, 0, 0.5); /* Yellow flash */
            }
            40% {
              background-color: rgba(255, 0, 255, 0.5); /* Magenta flash */
            }
            50% {
              background-color: rgba(0, 255, 255, 0.5); /* Cyan flash */
            }
            60% {
              background-color: rgba(255, 255, 255, 0.5); /* White flash */
            }
            70% {
              background-color: rgba(0, 0, 0, 0.5); /* Black flash */
            }
            80% {
              background-color: rgba(255, 255, 255, 0.5); /* White flash */
            }
            90% {
              background-color: rgba(0, 0, 0, 0.5); /* Black flash */
            }
            100% {
              background-color: rgba(255, 255, 255, 0.5); /* White flash */
            }
          }
        `}
      </style>
      <div className="glitch"></div>
    </div>
  );
}

export default GlitchedImage;
