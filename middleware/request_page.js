
const consola = require("consola");

module.exports.middleware = (request, response, handler) =>
{
    consola.info(`Requested page: ${request.path}`);

    handler();
}