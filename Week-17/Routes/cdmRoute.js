const express = require("express");
const Router = express.Router();
const cdmController = require('../Controllers/cdm');

Router.get('/cdmrouter/', cdmController.cdmRequest);


module.exports = Router;