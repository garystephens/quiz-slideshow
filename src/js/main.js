import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import QuizSlideshowApp from './ui/quizSlideshowApp.js';

function injectApplication() {
    ReactDOM.render(
        React.createElement(QuizSlideshowApp, {}),
        document.getElementById('application')
    );
}

function showBody() {
    $('body').show();
}

$(document).ready(function () {
    injectApplication();
    showBody();
});
