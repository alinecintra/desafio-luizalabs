const usersDb = require ("../repositories/users");
const magaluApi = require ("../apis/magalu");
module.exports = (app) => {
    app.get("/users", async(req, res, next) => {
        const users = await usersDb.selectUsers()
        return res.send(users);
    })
    app.get("/products", async(req, res, next) => {
        const products = await magaluApi.getProducts()
        return res.send(products);
    })
}