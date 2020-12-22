import React from 'react';

function SlideshowInstructions() {
    return (
        <div>
            <em>Slideshow Controls</em>
            <br />
            <em>Next slide</em>: press <em>DOWN</em>, <em>RIGHT</em>, or{' '}
            <em>SPACE</em>
            <br />
            <em>Previous slide</em>: press <em>UP</em> or <em>LEFT</em>
            <br />
            <em>Fullscreen</em>: press <em>F11</em> (Windows) or{' '}
            <em>Command+Shift+F</em> (Mac)
            <br />
            <em>Exit slideshow</em>: press <em>Esc</em> or <em>X</em>
        </div>
    );
}

SlideshowInstructions.propTypes = {};

export default SlideshowInstructions;
