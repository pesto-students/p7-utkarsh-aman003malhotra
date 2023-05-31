const axios = require('axios')
const dotenv = require("dotenv");
dotenv.config();

exports.cdmRequest = async (req, res) => {
    console.log(req.query);
    const date = new Date(req.query.date);
    const currentDate = new Date()
    const pastDate = new Date(currentDate.setDate(currentDate.getDate() - 7))
    if (date > pastDate) {
        console.log(date);
        let url = `${process.env.BASE_URL}/history.json?key=${process.env.API_KEY}&q=${req.query.city}&dt=${req.query.date}`;
        axios.get(
            url
        )
            .then(response => {
                // console.log(response.data);
                return res.json(response.data);
            })
            .catch(err => {
                return res.status(400).send({ err: err })
            })
    }else{
        return res.status(400).send({ message: "Cannot give data before 7 days" })
    }
}