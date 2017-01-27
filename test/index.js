const should = require('chai').should(),
    cli = require('../index'),
    success = cli.console.success,
    error = cli.console.error,
    table = cli.table;

describe('#success', function() {
    it('displays a success message', function() {
        const msg = 'hello in cyan';
        success(msg);
    });
});

describe('#error', function() {
    it('displays a error message', function() {
        const msg = 'hello in red';
        error(msg);
    });
});

describe('#table', function() {
    it('displays a table', function() {

        const resourceToBeCreated = {
            name: 'joao',
            environment: 'shared',
            platform: 'dotnet',
            size: 'M'
        };

        const resourceToBeCreated1 = {
            name: 'jose',
            environment: 'shared',
            platform: 'dotnet',
            size: 'M'
        };

        let objs = [];
        objs.push(resourceToBeCreated, resourceToBeCreated1);

        table.display(objs);
    });
});