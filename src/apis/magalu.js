const axios = require('axios')

async function getProductById(productId) {
    const { data } = await axios({
        baseURL: 'http://challenge-api.luizalabs.com/api',
        url: `/product/${productId}/`,
        method: 'GET',
    });
    return data;
}

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

module.exports = { getProducts, getProductById }