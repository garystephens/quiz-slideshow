import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

// Special version of a <textarea> tag where the contents are hidden from view,
// except for when it has focus.

type Props = {
    defaultValue: string;
    coveringText: string;
    onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
    width: string;
    height: string;
};

const TextArea = styled.textarea<{
    defaultValue: string;
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
    onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
    ref?: React.RefObject<HTMLTextAreaElement>;
    width: string;
    height: string;
}>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
`;

const CoveringTextarea = styled(TextArea)<{
    defaultValue: string;
    onFocus?: React.FocusEventHandler<HTMLTextAreaElement>;
    width: string;
    height: string;
}>`
    font-style: italic;
`;

const TextareaForSensitiveContent: React.FC<Props> = (props: Props) => {
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
};

export default TextareaForSensitiveContent;
