import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useKeypress from 'react-use-keypress';
import styled from 'styled-components';

import PressEscToExit from './pressEscToExit.js';
import SummaryTable from './summaryTable.js';
import { questionNumberToShow } from './utils.js';

const Title = styled.div`
    font-weight: bold;
    /* flex-grow: 0;
    flex-shrink: 0;
    flex-basis: auto; */
    padding-bottom: 3vmin;
    color: lightblue;
`;
const TitleHeader = styled.div`
    font-size: 9vmin;
    border-bottom: 1px solid white;
    margin-bottom: 3vmin;
`;
const TitleSlide = styled.div`
    font-size: 12vmin;
    width: 50%;
    margin: auto;
    text-align: center;
`;
const QuestionNumber = styled.div`
    font-size: 7vmin;
    font-weight: bold;
    padding-bottom: 5vmin;
`;
const FullScreen = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;
const StyledSlideshow = styled(FullScreen)`
    color: white;
    background: rgb(1, 1, 60);
    display: flex;
    flex-flow: column;
`;
const ImageWrapper = styled.div`
    float: right;
    padding-left: 5%;
    width: 25%;
`;
const Image = styled.img`
    max-width: 100%;
    max-height: 100%;
`;
const Question = styled.div`
    font-size: 7vmin;
    padding-bottom: 3vmin;
`;
const Answer = styled.div`
    font-size: 7vmin;
    font-weight: bold;
    background-color: lightgreen;
    padding: 0 2vmin 1vmin 2vmin;
    color: black;
    display: inline-block;
`;
const QuestionByQuestion = styled.div`
    margin: 50px;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    overflow: auto;
    min-height: 0;
`;
const SummarySlide = styled.div`
    margin: 20px;
    flex-grow: 10;
    flex-shrink: 10;
    flex-basis: auto;
    overflow: auto;
    min-height: 0;
`;
const FooterText = styled.div`
    font-size: 3vmin;
    padding: 3vmin;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: auto;
    margin-left: auto;
    color: #666666;
`;

function Slideshow(props) {
    const [slideIndex, setSlideIndex] = useState(0);

    useKeypress(
        [
            'Escape',
            'Esc',
            'ArrowRight',
            'Right',
            'ArrowLeft',
            'Left',
            'ArrowDown',
            'Down',
            'ArrowUp',
            'Up',
            'X',
            'x',
            ' ',
            'Spacebar',
        ],
        (event) => {
            switch (event.key) {
                case 'Escape':
                case 'Esc':
                case 'X':
                case 'x':
                    props.onEndSlideshow();
                    break;
                case 'ArrowRight':
                case 'ArrowDown':
                case 'Right':
                case 'Down':
                case ' ':
                case 'Spacebar':
                    incrementSlideIndex();
                    break;
                case 'ArrowLeft':
                case 'ArrowUp':
                case 'Left':
                case 'Up':
                    decrementSlideIndex();
                    break;
            }
        }
    );

    function maxSlideIndex() {
        const questionByQuestionSlideCount =
            props.quizDataAsArray.length * (props.showAnswers ? 2 : 1);
        const titleSlideCount = 1;
        const summarySlideCount = 1;
        const slideCount =
            titleSlideCount + questionByQuestionSlideCount + summarySlideCount;
        const maxSlideIndex = slideCount - 1;
        return maxSlideIndex;
    }

    function isTitleSlide() {
        return slideIndex === 0;
    }

    function isSummarySlide() {
        return slideIndex === maxSlideIndex();
    }

    function isQuestionOrAnswerSlide() {
        return !isTitleSlide() && !isSummarySlide();
    }

    function isAnswerSlide() {
        return slideIndex % 2 === 0;
    }

    function incrementSlideIndex() {
        if (slideIndex < maxSlideIndex()) {
            setSlideIndex(slideIndex + 1);
        }
    }

    function decrementSlideIndex() {
        if (slideIndex > 0) {
            setSlideIndex(slideIndex - 1);
        }
    }

    function questionIndex() {
        if (props.showAnswers) {
            return Math.floor((slideIndex - 1) / 2);
        } else {
            return slideIndex - 1;
        }
    }

    function questionTextToShow() {
        return props.quizDataAsArray[questionIndex()].questionText;
    }

    function imageToShow() {
        if (props.showAnswers) {
            const answerImage =
                props.quizDataAsArray[questionIndex()].answerImage;
            const questionImage =
                props.quizDataAsArray[questionIndex()].questionImage;
            if (
                isAnswerSlide() &&
                answerImage !== '' &&
                answerImage !== undefined
            ) {
                return answerImage;
            } else {
                return questionImage;
            }
        } else {
            return props.quizDataAsArray[questionIndex()].questionImage;
        }
    }

    function answerTextToShow() {
        if (props.showAnswers & isAnswerSlide()) {
            return props.quizDataAsArray[questionIndex()].answerText;
        } else {
            return '';
        }
    }

    return (
        <StyledSlideshow>
            <PressEscToExit />
            {isTitleSlide() && (
                <TitleSlide>
                    <Title>{props.quizTitle}</Title>
                    <div>{props.showAnswers && <span>Answers</span>}</div>
                </TitleSlide>
            )}
            {isQuestionOrAnswerSlide() && (
                <QuestionByQuestion>
                    <TitleHeader>
                        <Title>{props.quizTitle}</Title>
                    </TitleHeader>
                    <QuestionNumber>
                        Q
                        {questionNumberToShow(
                            props.quizDataAsArray,
                            questionIndex()
                        )}
                    </QuestionNumber>
                    <ImageWrapper>
                        <Image src={imageToShow()} />
                    </ImageWrapper>
                    <Question>{questionTextToShow()}</Question>
                    {answerTextToShow() !== '' && (
                        <Answer>{answerTextToShow()}</Answer>
                    )}
                </QuestionByQuestion>
            )}
            {isSummarySlide() && (
                <SummarySlide>
                    <TitleHeader>
                        <Title>{props.quizTitle}</Title>
                    </TitleHeader>
                    <SummaryTable
                        quizDataAsArray={props.quizDataAsArray}
                        showAnswers={props.showAnswers}
                    />
                </SummarySlide>
            )}
            <FooterText>garystephens.github.io/quiz-slideshow</FooterText>
        </StyledSlideshow>
    );
}

Slideshow.propTypes = {
    quizTitle: PropTypes.string.isRequired,
    quizDataAsArray: PropTypes.array,
    showAnswers: PropTypes.bool.isRequired,
    onEndSlideshow: PropTypes.func.isRequired,
};

export default Slideshow;
