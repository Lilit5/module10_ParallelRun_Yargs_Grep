const yargs = require('yargs').argv;

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['../../specs/*spec.js'],
    capabilities: {
        'browserName': 'chrome',
        shardTestFiles: yargs.instances > 1,
        maxInstances: yargs.instances || 1,
    },
    jasmineNodeOpts: {
        grep: yargs.testName || "#all"
    },

    onPrepare: () => {
        return browser.ignoreSynchronization = true;
    },
    getPageTimeout: 10000
}