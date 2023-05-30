const express = require("express");
const Router = express.Router();
const UserController = require('../Controller/userController'); 

Router.post('/signup', UserController.signupController);

Router.post('/login', UserController.loginController);


module.exports = Router;