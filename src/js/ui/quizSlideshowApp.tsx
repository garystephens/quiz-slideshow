import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import theme from './theme';
import EndSlideShow from './interfaces/EndSlideShow';
import SpreadsheetInstructions from './spreadsheetInstructions';
import Introduction from './introduction';
import Slideshow from './slideshow/slideshow';
import TextAreaForSensitiveContent from './textareaForSensitiveContent';
import SlideshowInstructions from './slideshowInstructions';
import ErrorInDataMessage from './errorInDataMessage';
import { parseQuizDataString } from './utils';
import { sampleQuizQuestionsAsString } from './sampleQuestions';

const GlobalStyles = createGlobalStyle`
    em {
        font-weight: bold;
        font-style: normal;
    }
`;

const MainHeading = styled.h1`
    background-color: ${(props) => props.theme.mainDark};
    margin-top: 0;
    margin-bottom: 6px;
    padding: 10px 0;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
`;

const OverviewBlock = styled.div`
    width: 50%;
    float: left;
    padding-right: 10px;
`;
const InstructionsBlock = styled.div`
    float: left;
    width: 48%;
`;
const SlideshowControls = styled.div`
    background-color: ${(props) => props.theme.secondary};
    border-radius: ${(props) => props.theme.boxBorderRadius};
    padding: ${(props) => props.theme.boxPadding};
    margin-bottom: 10px;
`;
const StartButton = styled.button`
    display: block;
    margin-top: 4px;
    margin-bottom: 20px;
    color: white;
    padding: 6px;
    border-radius: 5px;
    border: 1px solid black;
    font-weight: bold;
    cursor: pointer;
    &:disabled {
        opacity: 0.5;
    }
`;
const StartSlideshowButton = styled(StartButton)`
    background-color: #09968f;
    color: white;
`;
const StartSlideshowWithAnswersButton = styled(StartButton)`
    background-color: crimson;
`;
const QuizDataBox = styled.div`
    background-color: ${(props) => props.theme.secondary};
    border-radius: ${(props) => props.theme.boxBorderRadius};
    padding: ${(props) => props.theme.boxPadding};
    margin-bottom: 10px;
`;
const TitleSlideTextInput = styled.input`
    width: 90%;
`;

const QuizSlideshowApp: React.FC = () => {
    const [quizTitle, setQuizTitle] = useState('Sample Quiz - Round 1');
    const [quizDataAsString, setQuizDataAsString] = useState(
        sampleQuizQuestionsAsString
    );
    const [quizDataAsArray, setQuizDataAsArray] = useState(
        parseQuizDataString(sampleQuizQuestionsAsString)
    );
    useEffect(() => {
        setQuizDataAsArray(parseQuizDataString(quizDataAsString));
    }, [quizDataAsString]);

    const [isSlideshowVisible, setIsSlideshowVisible] = useState(false);
    const [showAnswers, setShowAnswers] = useState(false);

    function startSlideshow(): void {
        setIsSlideshowVisible(true);
    }

    function startSlideshowWithoutAnswers(): void {
        setShowAnswers(false);
        startSlideshow();
    }

    function startSlideshowWithAnswers(): void {
        setShowAnswers(true);
        startSlideshow();
    }

    function handleChangeToQuizDataAsString(
        event: React.ChangeEvent<HTMLTextAreaElement>
    ): void {
        setQuizDataAsString(event.target.value);
    }

    function handleChangeToQuizTitle(
        event: React.ChangeEvent<HTMLInputElement>
    ): void {
        setQuizTitle(event.target.value);
    }

    const hideSlideshow: EndSlideShow = function (): void {
        setIsSlideshowVisible(false);
    };

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <MainHeading>Quiz Slideshow</MainHeading>
            <div
                style={{
                    padding: '6px',
                    display: isSlideshowVisible ? 'none' : '',
                }}
            >
                <OverviewBlock>
                    <Introduction />
                    <QuizDataBox>
                        <em>Quiz title</em>
                        <br />
                        <TitleSlideTextInput
                            defaultValue={quizTitle}
                            onChange={handleChangeToQuizTitle}
                        />
                        <br />
                        <br />
                        <em>Box to paste your spreadsheet data:</em>
                        <TextAreaForSensitiveContent
                            defaultValue={quizDataAsString}
                            onChange={handleChangeToQuizDataAsString}
                            width="90%"
                            height="100px"
                            coveringText="To avoid contestants seeing the questions/answers by accident, the data you paste into this box will only become visible when you click into this box."
                        />
                        {quizDataAsArray === undefined && (
                            <ErrorInDataMessage />
                        )}
                    </QuizDataBox>
                    <SlideshowControls>
                        <StartSlideshowButton
                            disabled={quizDataAsArray === undefined}
                            onClick={startSlideshowWithoutAnswers}
                        >
                            Start Slideshow (Questions only)
                        </StartSlideshowButton>
                        <StartSlideshowWithAnswersButton
                            disabled={quizDataAsArray === undefined}
                            onClick={startSlideshowWithAnswers}
                        >
                            Start Slideshow (Questions &amp; Answers)
                        </StartSlideshowWithAnswersButton>
                        <SlideshowInstructions />
                    </SlideshowControls>
                </OverviewBlock>
                <InstructionsBlock>
                    <SpreadsheetInstructions />
                </InstructionsBlock>
            </div>
            {isSlideshowVisible && (
                <Slideshow
                    quizTitle={quizTitle}
                    quizDataAsArray={quizDataAsArray}
                    showAnswers={showAnswers}
                    onEndSlideshow={hideSlideshow}
                />
            )}
        </ThemeProvider>
    );
};

export default QuizSlideshowApp;
