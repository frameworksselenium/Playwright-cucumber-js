
install required 
npm install
to install browsers
npx playwright install

run scrips
npx cucumber-js

generate html report , if the report.generator in other location need to mention
node test/utils/ReportGenerator.js

run script by passing tags
npx cucumber-js --tags "@smoke"

run parallel
npx cucumber-js --parallel 2 && node test/utils/ReportGenerator.js

run in headless
npx cucumber-js --headless

run in headmode
npx cucumber-js --headed

npx cucumber-js --tags "@smoke" --parallel 2 && node test/utils/ReportGenerator.js


npx cucumber-js --tags "@selenium_search" && node test/utils/ReportGenerator.js
npx cucumber-js --tags "@smoke" --parallel 1 && node test/utils/ReportGenerator.js

send envi from command
set ENV=dev&& npx cucumber-js

