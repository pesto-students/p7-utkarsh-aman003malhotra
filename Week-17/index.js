const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
const multipleCityRoute = require('./Routes/multipleCityRoute');
const forecastRoute = require('./Routes/forecastRoute');
const cityRoute = require('./Routes/cityRoute');
const cdmRoute = require('./Routes/cdmRoute');

dotenv.config();




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));




app.get('/', (req,res) => {
    res.send('Hello');
})
// multiple Cities
app.use("/cities", multipleCityRoute);
// forecast
app.use("/forecast", forecastRoute);
// // current condition of any city
app.use("/city", cityRoute);
// particular date particular city, particular moment
app.use("/cdm", cdmRoute);


app.listen(5000, () => {console.log("App is running on port 5000")})