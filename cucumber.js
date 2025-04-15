module.exports = {
  default: [
    '--require test/stepDef/**/*.js',              // Step definitions
    '--require test/hooks/Hooks.js',             // Step definitions
    '--require test/fixtures/Fixture.js',  
    '--require test/features/utils/**/*.js',       // Support files
    '--format progress',                           // CLI format
    '--format json:reports/cucumber-report.json',  // JSON report
    //'--tags "@smoke"',              // Tags filter
    'test/features/**/*.feature'                   // Feature files
  ].join(' ')
};