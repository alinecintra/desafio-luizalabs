const clientsDb = require ("../repositories/clients");

module.exports = (app) => {
    app.get("/clients", async(req, res, next) => {
        const clients = await clientsDb.selectClients()
        return res.send(clients);
    })

    app.get("/clients/:id", async(req, res, next) => {
        const clients = await clientsDb.selectClientsById(req.params.id)
        return res.send(clients);
    })

    app.post("/clients", async(req, res, next) => {
        const clients = await clientsDb.insertClients(req.body)
        return res.send(clients);
    })

    app.put("/clients/:id", async(req, res, next) => {
        console.log(req.body);
        const clients = await clientsDb.updateClients(req.body, req.params.id);
        return res.send(clients);
    })

    app.delete("/clients/:id", async(req, res, next) => {
        console.log(req);
        const clients = await clientsDb.deleteClients(req.params.id)
        return res.send(clients);
    })
}

