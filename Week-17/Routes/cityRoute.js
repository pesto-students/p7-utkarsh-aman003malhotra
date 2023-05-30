const express = require("express");
const Router = express.Router();
const currentWeatherController = require('../Controllers/currentWeathercity');

Router.get('/currentcondition/:cityname', currentWeatherController.currenWeatherCondition);

module.exports = Router;