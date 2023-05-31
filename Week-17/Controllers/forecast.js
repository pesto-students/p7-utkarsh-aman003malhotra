const axios = require('axios')
const dotenv = require("dotenv");
dotenv.config();

exports.forecast = async (req, res) => {
    console.log(req.query);
    axios.get(
        `${process.env.BASE_URL}/forecast.json?key=${process.env.API_KEY}&q=${req.query.city}&days=${req.query.days}`
    )
    .then(response => {
        console.log(response.data);
        return res.json(response.data);
    })
    .catch(err => {
        console.error(err);
        return res.status(400).send({err: err})
    })
}