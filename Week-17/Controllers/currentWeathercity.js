const axios = require('axios')
const dotenv = require("dotenv");
dotenv.config();

exports.currenWeatherCondition = async (req, res) => {
    console.log(req.params)
    axios.get(
        `${process.env.BASE_URL}/current.json?key=${process.env.API_KEY}&q=${req.params.cityname}`
    )
    .then(response => {
        // console.log(response.data);
        return res.json(response.data);
    })
    .catch(err => {
        return res.status(400).send({err: err})
    })
}