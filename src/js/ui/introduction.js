import React from 'react';
import styled from 'styled-components';

const Introduction = styled.div`
    background-color: ${(props) => props.theme.main};
    border-radius: ${(props) => props.theme.boxBorderRadius};
    padding: ${(props) => props.theme.boxPadding};
    margin-bottom: 10px;
`;

function QuizSlideshowIntroduction() {
    return (
        <Introduction>
            <em>
                Easily turn your spreadsheet of questions and answers into an
                attractive slideshow for use at quiz events, both online and
                offline.
            </em>
            <br />
            <br />
            You can choose to show the questions only, or both questions and
            answers. And show pictures too, if you like.
            <br />
            <br />
            Press the buttons below to see a sample quiz round...
            <br />
        </Introduction>
    );
}

QuizSlideshowIntroduction.propTypes = {};

export default QuizSlideshowIntroduction;
