import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Special version of a <textarea> tag where the contents are hidden from view,
// except for when it has focus.

const TextArea = styled.textarea`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
`;
const CoveringTextarea = styled(TextArea)`
    font-style: italic;
`;

function TextareaForSensitiveContent(props) {
    const [isCoveringTextShown, setIsCoveringTextShown] = useState(true);
    const realTextarea = useRef(null);

    function showCoveringText() {
        setIsCoveringTextShown(true);
    }

    function hideCoveringText() {
        setIsCoveringTextShown(false);
    }

    useEffect(() => {
        if (!isCoveringTextShown) {
            realTextarea.current.focus();
        }
    });

    return (
        <div>
            {!isCoveringTextShown && (
                <TextArea
                    defaultValue={props.defaultValue}
                    onChange={props.onChange}
                    onBlur={showCoveringText}
                    ref={realTextarea}
                    width={props.width}
                    height={props.height}
                ></TextArea>
            )}
            {isCoveringTextShown && (
                <CoveringTextarea
                    defaultValue={props.coveringText}
                    onFocus={hideCoveringText}
                    width={props.width}
                    height={props.height}
                />
            )}
        </div>
    );
}

TextareaForSensitiveContent.propTypes = {
    defaultValue: PropTypes.string.isRequired,
    coveringText: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
};

export default TextareaForSensitiveContent;
