const axios = require('axios')

async function getProducts() {
    const { data } = await axios({
        baseURL: 'http://challenge-api.luizalabs.com/api',
        url: '/product/',
        params: {
            page: 1
        },
        method: 'GET',
    });
    return data;
}

module.exports = { getProducts }