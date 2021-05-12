const connect = require("./mysql");

async function selectById(clientId){
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM favorite where id_client = ?;', [clientId]);
    return rows;
}
 
async function post(body){
    const conn = await connect();
    const [rows] = await conn.query('INSERT INTO favorite(id_client, id_product) VALUES (?, ?)',[body.clientId, body.productId]);
    return rows;
}

async function deleteById(clientId, productId){
    const conn = await connect();
    const [rows] = await conn.query('DELETE FROM favorite WHERE id_client=? AND id_product=?',[clientId, productId]);
    return rows;
}

module.exports = {selectById, post, deleteById }