import React, { useState } from 'react';
import useKeypress from 'react-use-keypress';
import styled from 'styled-components';

import EndSlideShow from '../interfaces/EndSlideShow';
import Question from '../types/Question';
import PressEscToExit from './pressEscToExit';
import SummaryTable from './summaryTable';
import { questionNumberToShow } from './utils';

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
    background: #000020;
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

type Props = {
    quizTitle: string;
    quizDataAsArray: Question[];
    showAnswers: boolean;
    onEndSlideshow: EndSlideShow;
};

const Slideshow: React.FC<Props> = (props: Props) => {
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
        (event: React.KeyboardEvent) => {
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

    function maxSlideIndex(): number {
        const questionByQuestionSlideCount: number =
            props.quizDataAsArray.length * (props.showAnswers ? 2 : 1);
        const titleSlideCount = 1;
        const summarySlideCount = 1;
        const slideCount: number =
            titleSlideCount + questionByQuestionSlideCount + summarySlideCount;
        const maxSlideIndex: number = slideCount - 1;
        return maxSlideIndex;
    }

    function isTitleSlide(): boolean {
        return slideIndex === 0;
    }

    function isSummarySlide(): boolean {
        return slideIndex === maxSlideIndex();
    }

    function isQuestionOrAnswerSlide(): boolean {
        return !isTitleSlide() && !isSummarySlide();
    }

    function isAnswerSlide(): boolean {
        return slideIndex % 2 === 0;
    }

    function incrementSlideIndex(): void {
        if (slideIndex < maxSlideIndex()) {
            setSlideIndex(slideIndex + 1);
        }
    }

    function decrementSlideIndex(): void {
        if (slideIndex > 0) {
            setSlideIndex(slideIndex - 1);
        }
    }

    function questionIndex(): number {
        if (props.showAnswers) {
            return Math.floor((slideIndex - 1) / 2);
        } else {
            return slideIndex - 1;
        }
    }

    function questionTextToShow(): string {
        return props.quizDataAsArray[questionIndex()].questionText;
    }

    function imageToShow(): string {
        if (props.showAnswers) {
            const answerImage: string =
                props.quizDataAsArray[questionIndex()].answerImage;
            const questionImage: string =
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

    function answerTextToShow(): string {
        if (props.showAnswers && isAnswerSlide()) {
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
};

export default Slideshow;
