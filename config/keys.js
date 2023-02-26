console.log("=".repeat(60));
console.log(process.env.NODE_ENV);
console.log("=".repeat(60));

// keys.js - figure out what set of credentials to return
if (process.env.NODE_ENV === 'production') {
    console.log("Exporting PROD keys");
    module.exports = require('./prod');
} else {
    console.log("Exporting DEV keys");
    module.exports = require('./dev');
}
  