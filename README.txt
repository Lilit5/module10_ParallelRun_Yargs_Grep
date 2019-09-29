Magento testing tool

Magento is an open-source e-commerce platform written in PHP. This tool is designed to test Magento basic functionality.

Getting Started
* Clone this repository
* npm install to install all required dependencies


Run Tests
To run tests:
1. run selenium server in hub mode ./ hub_3.14.0-json.bat
2. run 'npm run test' command
    If you want to run tests in parallel then:
        * run 'npm run test -- --instances <number>' command
    If you want to run a test by its name then:
        * run 'npm run test -- --testName "#<test name>"' command (available tags are #login #logout #createProduct #all)

Changes added to the project according to the module 10 home task

1. Added mechanism to run tests in parallel. Using yargs library to parse arguents.
2. Splited tests to groups using tags and 'jasmineNodeOpts' option.
