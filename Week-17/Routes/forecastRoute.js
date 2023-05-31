const express = require("express");
const Router = express.Router();
const ForecastController = require('../Controllers/forecast');

Router.get('/forecastcity', ForecastController.forecast);

module.exports = Router;