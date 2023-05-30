const express = require("express");
const Router = express.Router();
const InvestmentController = require('../Controller/investmentController'); 
const Middleware = require('../Controller/middlewares'); 
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

Router.get('/getInvestmentid/:investmentId',Middleware.checkUserAuthentication , InvestmentController.findInvestmentbyId);

Router.get('/getInvestmentname/:investmentName',Middleware.checkUserAuthentication, InvestmentController.findInvestmentbyname);

Router.get('/getInvestments/:userId', Middleware.checkUserAuthentication, InvestmentController.findInvestmentbyUserId);

Router.post('/addInvestment', Middleware.checkUserAuthentication,upload.single("document"), Middleware.checkFileUploaded, InvestmentController.addInvestment);

Router.post('/uploadfile/:investmentId',Middleware.checkUserAuthentication,upload.single("document"), Middleware.checkFileUploaded, InvestmentController.uploadfile);

Router.put('/updateInvestment/:investmentId',Middleware.checkUserAuthentication,upload.single("document"), Middleware.checkFileUploaded, InvestmentController.updateInvestment);

Router.delete('/deleteInvestment/:investmentId',Middleware.checkUserAuthentication, InvestmentController.deleteInvestment);


// Current Financial Year
Router.get('/getInvestmentcurfinanceyear/:userId',Middleware.checkUserAuthentication , InvestmentController.findInvestmentCurrentFinYear);

// Filter By month or Year
Router.get('/filterInvestment/:userId', Middleware.checkUserAuthentication, InvestmentController.findInvestmentByFilter)


// Detail BreakDown

Router.get('/detailbreakdown/:userId', Middleware.checkUserAuthentication, InvestmentController.detailedBreakdown)

module.exports = Router;