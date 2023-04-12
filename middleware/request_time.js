// Including required modules for this script
const consola = require("consola");
const { middleware } = require("./request_page");

// This function will describe our middleware
module.exports.middleware = (request, response, handler) =>
{
    // Getting current timestamp
    const timestamp = new Date();

    // Logging request timestamp to console
    consola.info(`Request timestamp: ${timestamp.toUTCString()}`);

    // This call required to continue execution process
    handler();
}