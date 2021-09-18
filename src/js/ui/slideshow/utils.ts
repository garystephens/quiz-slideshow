import Question from '../types/Question';

function questionNumberToShow(
    quizDataAsArray: Question[],
    questionIndex: number
): string {
    const questionNumberExplicitlySpecified =
        quizDataAsArray[questionIndex].number;

    if (questionNumberExplicitlySpecified !== '') {
        return questionNumberExplicitlySpecified;
    } else {
        return String(questionIndex + 1);
    }
}

export { questionNumberToShow };
