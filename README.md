# Poker Bankroll

A project to manage your poker bankroll

## Development server

This is a configuration found in this post: https://stackoverflow.com/questions/42895585/hooking-up-express-js-with-angular-cli-in-dev-environment to make Angular CLI work with Express with both having live reloading.

* Configure MONGODB_URI system variable with MongoDB url
* Install nodemon: `npm install -g nodemon` and open two terminals in the project folder 
* In the first one, run `ng serve --proxy-config proxy.config.json`. This will run the app in http://localhost:4200
* In the second one, run `nodemon server.js --watch server`. This will start the express server in http://localhost:3000 and the API will be available in the /api path.

## Integration testing

The project uses Mocha/Chai to test the REST API. To run the tests:
* First install Mocha: `npm install -g mocha`
* Then run the tests just running the command `mocha` in the terminal

## Code Analysis

The project uses SonarQube for code analysis. To run the code analysis, you should:
* Install Sonar Scanner locally as described in this link: https://docs.sonarqube.org/display/SCAN/Analyzing+with+SonarQube+Scanner
* Run `sonar-scanner` in the root folder of the project
* Access https://sonarcloud.io/dashboard?id=poker-bankroll to check the analysis result
