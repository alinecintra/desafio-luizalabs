module.exports = (app) => {
    app.get("/ping", (req, res, next) => {
        return res.send({status: "Aline"});
    })
}