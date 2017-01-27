'use strict';

require('console.table');

const table = {
    display: function (obj){
        console.table(obj);
    }
};

module.exports = table;