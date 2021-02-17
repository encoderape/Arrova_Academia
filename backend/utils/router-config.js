const express = require('express');

const endpointConfig = (app, url, callback) => {
    app.use(url, callback(express));
}

module.exports = endpointConfig;
