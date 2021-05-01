module.exports = (app) => {
    app.get("/ping", (req, res, next) => {
        return res.status(200).send({});
    })
}