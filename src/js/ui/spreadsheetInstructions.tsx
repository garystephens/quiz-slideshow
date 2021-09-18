import React from 'react';
import styled from 'styled-components';

const Instructions = styled.div`
    background-color: ${(props) => props.theme.secondary};
    border-radius: ${(props) => props.theme.boxBorderRadius};
    padding: ${(props) => props.theme.boxPadding};
`;

const SpreadsheetInstructions: React.FC = () => {
    return (
        <Instructions>
            <em>How to copy questions from a spreadsheet</em>
            <br />
            <br />
            Your spreadsheet data (from Excel, Google Sheets, etc.) must have
            one row per question.
            <br />
            <br />
            <img src="images/spreadsheet-copy.png" />
            <br />
            <br />
            The columns in the spreadsheet data you copy must be, in order:
            <ol type="A">
                <li>
                    <em>Question Number</em> (if cells are left blank,
                    we&apos;ll automatically assign the numbers 1, 2, 3, etc.)
                </li>
                <li>
                    <em>Question</em>
                </li>
                <li>
                    <em>Answer</em> (leave cells blank if you only want to show
                    questions)
                </li>
            </ol>
            and optionally:
            <ol type="A" start={4}>
                <li>
                    <em>Question Image</em> - web address (URL) of image to be
                    shown alongside the question and answer (unless a different
                    image is set for the answer in the next column)
                </li>
                <li>
                    <em>Answer Image</em> - web address of image to be shown
                    alongside answer
                </li>
            </ol>
            Copy and paste your spreadsheet cells into the box, replacing the
            sample questions. Don&apos;t include header rows.
            <br />
            <br />
            Please send bug reports, feature suggestions, spare change, etc. to:
            gary.p.stephens [AT] gmail DOT com
            <br />
            <br />
            <em>
                <a href="../">Other apps for quizmasters &amp; quiz setters</a>
            </em>
        </Instructions>
    );
};

export default SpreadsheetInstructions;
