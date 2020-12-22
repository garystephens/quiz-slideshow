function trimDoubleQuotes(text) {
    return text.replace(/^"/, '').replace(/"$/, '');
}

function removeNewLinesBetweenDoubleQuotes(text) {
    return text.replace(/("[^"\n]*)\r?\n(?!(([^"]*"){2})*[^"]*$)/g, '$1 ');
}

function parseQuizDataString(questionData) {
    try {
        // Cells that contain newlines will be in the form "xxxxx\nxxxxx" enclosed
        // by quotes as shown.
        // We will remove such \n characters that lie between " " with spaces.
        // RegExp is from
        // https://stackoverflow.com/questions/26337474/regexp-to-find-replace-newlines-within-double-quotes-not-affecting-newlines-out
        questionData = removeNewLinesBetweenDoubleQuotes(questionData);
        questionData = removeNewLinesBetweenDoubleQuotes(questionData);
        questionData = removeNewLinesBetweenDoubleQuotes(questionData);
        questionData = removeNewLinesBetweenDoubleQuotes(questionData);

        questionData = questionData.replace(/""/g, '"');

        const questions = questionData.split('\n');
        let questionsOutput = [];
        questions.forEach(function (question) {
            const questionData = question.split('\t');
            questionsOutput.push({
                number: questionData[0],
                questionText: trimDoubleQuotes(questionData[1]),
                answerText: trimDoubleQuotes(questionData[2]),
                questionImage: questionData[3],
                answerImage: questionData[4],
            });
        });

        return questionsOutput;
    } catch (ex) {
        console.warn(ex);
    }
}

export { parseQuizDataString };
