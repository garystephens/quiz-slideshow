import React from 'react';
import styled from 'styled-components';

const Error = styled.div`
    font-weight: bold;
    color: ${(props) => props.theme.error};
    margin-top: 10px;
`;

const ErrorInDataMessage: React.FC = () => {
    return (
        <Error>
            Hmmm, the data you pasted in doesn&apos;t look right.
            <br />
            Please double-check you are copying the spreadsheet data exactly as
            instructed.
        </Error>
    );
};

export default ErrorInDataMessage;
