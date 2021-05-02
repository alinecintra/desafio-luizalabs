const connect = require("./mysql");
async function selectUsers(){
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM users;');
    return rows;
}
 
module.exports = {selectUsers}