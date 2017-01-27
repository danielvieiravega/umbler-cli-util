'use strict';

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const umblerConsole = {
    /**
     * Displays a success message
     */
    success: function (message) {
        console.log(chalk.bold.cyan(message));
    },

    /**
     * Displays an error message
     */
    error: function (message) {
        console.log(chalk.bold.red(message));
    },

    /**
     * Cleans the console
     */
    clear: function() {
        clear();
    },

    /**
     * Displays an ASCI art in console
     */
    art: function (text, font) {
        console.log(chalk.bold.yellow(
            figlet.textSync(text, {
                font: font
            })));
    }
};

module.exports = umblerConsole;