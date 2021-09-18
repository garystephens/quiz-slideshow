import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'normalize.css';
import QuizSlideshowApp from './ui/quizSlideshowApp';

function injectApplication(): void {
    ReactDOM.render(
        React.createElement(QuizSlideshowApp, {}),
        document.getElementById('application')
    );
}

function showBody(): void {
    $('body').show();
}

$(document).ready(function () {
    injectApplication();
    showBody();
});
