function questionNumberToShow(quizDataAsArray, questionIndex) {
    const questionNumberExplicitlySpecified =
        quizDataAsArray[questionIndex].number;

    if (questionNumberExplicitlySpecified !== '') {
        return questionNumberExplicitlySpecified;
    } else {
        return questionIndex + 1;
    }
}

export { questionNumberToShow };
