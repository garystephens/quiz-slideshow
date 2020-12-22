import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { questionNumberToShow } from './utils.js';

const StyledSummaryTable = styled.table`
    font-size: 3vmin;
`;
const SummaryRow = styled.tr`
    vertical-align: top;
`;
const SummaryAnswer = styled.div`
    font-weight: bold;
    background-color: lightgreen;
    padding: 0 1vmin 1vmin 1vmin;
    color: black;
`;
const SummaryCell = styled.td`
    padding: 1vmin;
`;

function SummaryTable(props) {
    return (
        <StyledSummaryTable>
            <tbody>
                {props.quizDataAsArray.map((question, index) => (
                    <SummaryRow key={index}>
                        <SummaryCell>
                            <em>
                                Q
                                {questionNumberToShow(
                                    props.quizDataAsArray,
                                    index
                                )}
                            </em>
                        </SummaryCell>
                        <SummaryCell>{question.questionText}</SummaryCell>
                        <SummaryCell>
                            {props.showAnswers && (
                                <SummaryAnswer>
                                    {question.answerText}
                                </SummaryAnswer>
                            )}
                        </SummaryCell>
                    </SummaryRow>
                ))}
            </tbody>
        </StyledSummaryTable>
    );
}

SummaryTable.propTypes = {
    quizDataAsArray: PropTypes.array,
    showAnswers: PropTypes.bool.isRequired,
};

export default SummaryTable;
