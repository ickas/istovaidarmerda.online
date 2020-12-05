/// <reference types="cypress" />

/**
 * index.js
 *
 * Cypress Plugins
 *
 * @author João Dias <contacto@joaodias.me>
 * @since 0.0.1
 */


const webpackPreprocessor = require("@cypress/webpack-preprocessor");

module.exports = (on) => {
    on("task", require("@cypress/code-coverage/task"));

    const options = {
        webpackOptions: require("../webpack.config"),
        watchOptions: {},
    };

    on("file:preprocessor", webpackPreprocessor(options));
};
