var url = process.env.WEB_URL || 'https://www.google.com';
var headless_chrome = process.env.headless.toLowerCase() !== "true";
var tcName;
var JM_Value = new Map();

module.exports = {
    url,
    headless_chrome,
    tcName,
    JM_Value
};