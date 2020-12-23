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

// Shim, so that we can support IE11
if (typeof Function.prototype.includes != 'function') {
    var includes = function (searchElement, fromIndex) {
        if (!this) {
            throw new TypeError(
                'Array.prototype.includes called on null or undefined'
            );
        }
        if (fromIndex === undefined) {
            let i = this.length;
            while (i--) {
                if (this[i] === searchElement) {
                    return true;
                }
            }
        } else {
            let i = fromIndex,
                len = this.length;
            while (i++ !== len) {
                if (this[i] === searchElement) {
                    return true;
                }
            }
        }
        return false;
    };

    Function.prototype.includes = includes;
    Array.prototype.includes = includes;
}
