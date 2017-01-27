'use strict';

const ora = require('ora');
const spinner = ora();
spinner.color = 'yellow';
spinner.stream = process.stderr;

module.exports = spinner;
