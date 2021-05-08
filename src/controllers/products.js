const magaluApi = require("../apis/magalu");

module.exports = (app) => {
    app.get("/products", async (req, res, next) => {
        const products = await magaluApi.getProducts()
        return res.send(products);
    })
}