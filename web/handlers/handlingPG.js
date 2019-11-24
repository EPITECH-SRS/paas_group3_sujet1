const { client } = require('../postgres');


const connectPG = async (req,res) => {
    const data = await client.query('SELECT * FROM data');

    res.send({
        message: data.rows
    });
}

module.exports = {
    connectPG
}