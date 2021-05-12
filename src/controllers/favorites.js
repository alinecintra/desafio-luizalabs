const favoritesDb = require("../repositories/favorite");
const clientsDb = require("../repositories/clients");
const magaluApi = require("../apis/magalu");

module.exports = (app) => {
    app.get("/favorites/:clientId", async (req, res, next) => {
        try {

            const favorites = await favoritesDb.selectById(req.params.clientId)
            if(favorites.length === 0) {
                return res.status(404).send({message: 'Nenhum favorito foi encontrado'});
            }

            for (const favorite of favorites) {
                const product = await magaluApi.getProductById(favorite.id_product);
                favorite.product = product;
            }
            return res.send(favorites);
        } catch (error) {
            return res.status(500).send({ message: 'Não foi possível retornar nenhuma lista' });
        }

    })


    app.post("/favorites", async (req, res, next) => {
        try {

            if (!isNaN(req.body.productId)) {
                return res.status(400).send({ message: 'Id de produto inválido' });
            }
            const client = await clientsDb.selectClientsById(req.body.clientId);
            if (client.length === 0) {
                return res.status(404).send({ message: 'Cliente não encontrado' });
            }

            await magaluApi.getProductById(req.body.productId)
            const favorite = await favoritesDb.post(req.body)
            return res.send(favorite);
        } catch (error) {
            if (error.isAxiosError) {
                return res.status(error.response.status).send({ message: error.response.data.error_message });
            } else if (error.code === 'ER_DUP_ENTRY') {
                return res.status(409).send({ message: 'Esse produto já foi cadastrado' });
            }
            return res.status(500).send({ message: 'não foi possível cadastrar o produto' })
        }
    })

    app.delete("/favorites/:id", async (req, res, next) => {
        try {
            const favorites = await favoritesDb.deleteById(req.params.id)
            return res.send(favorites);
        } catch (error) {
            return res.send({ message: 'não foi possível apagar o favorito' }).status(500);
        }

    })
}








