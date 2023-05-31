const axios = require('axios')
const dotenv = require("dotenv");
dotenv.config();

exports.multipleCity = async (req, res) => {
    console.log(req.body);
    console.log(req.query)
    let responses = [];
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.params.limit) || 2;
    try {
        const requests = req.body.cities.map(city => axios.get(`${process.env.BASE_URL}/current.json?key=${process.env.API_KEY}&q=${city}`));
        const results = await Promise.all(requests);

        results.forEach(response => {
            responses.push(response.data);
        });

        const totalItems = responses.length;
        const skip = (page - 1)* limit

        const paginatedData = responses.slice(skip, skip + limit);
        const totalPages = Math.ceil(totalItems / limit);

        res.send({results:paginatedData, currentPage:page, totalPages:totalPages, totalItems:totalItems});
    } catch (error) {

        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred' });
    }
}


