const path = require('path');

module.exports = {
  default: {
    // require: [
           
    //     './features/step_definitions/*.js',
    //     './features/support/hooks/*.js',
      // ],
      // paths: [
      //   //'./features/*.feature',
        
      // ],
    format: [
      'json:reports/cucumber-report.json',
      'html:reports/report.html',
      'summary',
      'progress-bar'
      //path.join(__dirname, 'reporter.js')
    ],
    
  },
};