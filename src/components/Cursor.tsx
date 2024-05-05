import React from 'react';
import '../styles/Cursor.css';

interface CursorProps {
  position: { x: number; y: number };
}

const Cursor: React.FC<CursorProps> = ({ position }) => {
  return (
    <div className="cursor" style={{ left: position.x, top: position.y }}></div>
  );
};

export default Cursor;
