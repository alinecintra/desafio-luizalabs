const express = require("express");
const app = express();
const morgan = require('morgan');
const config = require('./config');
const expressLoad = require('express-load');

app.use(morgan(':method | :status | HTTP :http-version | Resposta: :response-time ms | Data: :date[web] | URL: :url'));
app.use(require('./middlewares/cors.middleware'));

// expressLoad('controllers')
//     .into(app);
app.get("/ping", (req, res, next) => {
    return res.status(200).send({});
})
app.listen(config.portApi, () => {
    console.log(`[Magalu] - Ativo :D | ${config.urlApi}:${config.portApi}`);
});

module.exports = app;