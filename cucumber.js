const path = require('path');

module.exports = {
  default: {
    // require: [
           
    //     './features/step_definitions/*.js',
    //     './features/support/hooks/*.js',
      // ],
       paths: [
        './features/*.feature',
      ],
    format: [
      'json:reports/cucumber-report.json',
      'html:reports/CucumberHtmlReport.html',
      'summary',
      'progress-bar'
      //path.resolve(__dirname, 'reporter.js') 
      //,
     // 'path.resolve(__dirname, "reporter.js")'
    ],
   // publishQuiet: true
  },
};