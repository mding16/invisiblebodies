import React, { useState } from 'react';
import Plants from './Plants'
import Cursor from './Cursor'
import SeasonalStuff from './SeasonalStuff'

export default function Garden() {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const handleMouseMove = (e: React.MouseEvent) => {
        setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    return (
    <div onMouseMove={handleMouseMove}>
        <div>welcome to my garden!</div>
        {/** stay a while :) */}
        <div>stay a while :&#41;</div>
        <Plants/>
        <SeasonalStuff/>
        <Cursor position = {cursorPosition}/>
    </div>
    )
}