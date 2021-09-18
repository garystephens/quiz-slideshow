import Question from './types/Question';

function trimDoubleQuotes(text: string): string {
    return text.replace(/^"/, '').replace(/"$/, '');
}

function removeNewLinesBetweenDoubleQuotes(text: string): string {
    // RegExp is from
    // https://stackoverflow.com/questions/26337474/regexp-to-find-replace-newlines-within-double-quotes-not-affecting-newlines-out
    return text.replace(/("[^"\n]*)\r?\n(?!(([^"]*"){2})*[^"]*$)/g, '$1 ');
}

function parseQuizDataString(questionData: string): Question[] {
    try {
        // Cells that contain newlines will be in the form "xxxxx\nxxxxx" enclosed
        // by quotes as shown.
        // We will remove such \n characters that lie between " " with spaces.
        questionData = removeNewLinesBetweenDoubleQuotes(questionData);
        questionData = removeNewLinesBetweenDoubleQuotes(questionData);
        questionData = removeNewLinesBetweenDoubleQuotes(questionData);
        questionData = removeNewLinesBetweenDoubleQuotes(questionData);

        questionData = questionData.replace(/""/g, '"');

        const questions = questionData.split('\n');
        const questionsOutput: Question[] = [];
        questions.forEach(function (question) {
            const questionData = question.split('\t');
            if (questionData.length >= 3) {
                questionsOutput.push({
                    number: questionData[0],
                    questionText: trimDoubleQuotes(questionData[1]),
                    answerText: trimDoubleQuotes(questionData[2]),
                    questionImage: questionData[3],
                    answerImage: questionData[4],
                });
            }
        });

        return questionsOutput;
    } catch (ex) {
        console.warn(ex);
    }
}

export { parseQuizDataString };
