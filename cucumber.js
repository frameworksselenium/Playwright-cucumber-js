module.exports = {
  default: [
    '--require test/stepDef/**/*.js',              // Step definitions
    '--require test/stepDef/hooks.js',             // Step definitions
    '--require test/features/utils/**/*.js',       // Support files
    '--format progress',                           // CLI format
    '--format json:reports/cucumber-report.json',  // JSON report
    '--tags "@smoke or @regression"',              // Tags filter
    'test/features/**/*.feature'                   // Feature files
  ].join(' ')
};