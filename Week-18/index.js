const express = require('express')
const app = express();
const  mongoose = require('mongoose');
const bodyParser = require('body-parser')
const dotenv = require("dotenv");
const UserRoute = require('./Routes/user');
const InvestmentRoute = require('./Routes/investments');

dotenv.config();

try {
    mongoose.connect(process.env.DB_URL);
}catch(err){
    console.log("error connectiong the database", err);
}

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.send('Hello');
})

app.use("/user", UserRoute);

app.use("/investment", InvestmentRoute);




app.listen(5000, () => {console.log("App is running on port 5000")})