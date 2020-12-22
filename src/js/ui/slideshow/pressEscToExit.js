import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const PressEscapeToExitText = styled.div`
    background: white;
    color: black;
    width: 600px;
    font-size: 2rem;
    margin: auto;
    margin-top: 40px;
    text-align: center;
    opacity: 0.5;
    padding: 14px;
`;
const PressEscapeToExitWrapper = styled.div`
    position: absolute;
    width: 100%;
`;

function PressEscToExit() {
    const divToFadeOut = useRef(null);

    function fadeOutPressEscapeToExitMessage() {
        setTimeout(function () {
            $(divToFadeOut.current).fadeOut(1000);
        }, 1000);
    }

    useEffect(() => {
        fadeOutPressEscapeToExitMessage();
    }, []);

    return (
        <PressEscapeToExitWrapper ref={divToFadeOut}>
            <PressEscapeToExitText>
                Press <em>Esc</em> or <em>X</em> to exit the slideshow
            </PressEscapeToExitText>
        </PressEscapeToExitWrapper>
    );
}

export default PressEscToExit;
