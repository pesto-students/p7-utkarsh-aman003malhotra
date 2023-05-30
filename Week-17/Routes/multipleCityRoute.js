const express = require("express");
const Router = express.Router();
const MultipleCityController = require('../Controllers/multipleCity');

Router.get('/', MultipleCityController.multipleCity);

module.exports = Router;