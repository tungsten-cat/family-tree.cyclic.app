// Including required modules for this script
const consola = require("consola");

// This function will describe our middleware
module.exports.middleware = (request, response, handler) =>
{
    // Logging requested page address
    consola.info(`Requested page: ${request.path}`);

    // This call required to continue execution process
    handler();
}