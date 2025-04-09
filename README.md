
install required 
npm install
to install browsers
npx playwright install

run scrips
npx cucumber-js

generate html report , if the report.generator in other location need to mention
node report-generator.js

or

node test/utils/report-generator.js

run script by passing tags
npx cucumber-js --tags "@smoke"

run parallel
npx cucumber-js --parallel 2 && node report-generator.js

run in headless
npx cucumber-js --headless

run in headmode
npx cucumber-js --headed

npx cucumber-js --tags "@smoke" --parallel 2 && node test/utils/report-generator.js


npx cucumber-js --tags "@selenium_smoke" && node test/utils/report-generator.js


send envi from command
ENV=qa npx cucumber-js

