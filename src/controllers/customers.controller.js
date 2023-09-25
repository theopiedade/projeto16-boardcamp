import db from '../database/database.connection.js';

export async function getCustomers(req, res) {
    
    try{

        const customers = await db.query(`SELECT * FROM customers;`);

        res.send(customers.rows);

    }catch(err){
        res.status(500).send(err.message);
    }

}

export async function createCustomers(req, res) {
    const { name, phone, cpf, birthday  } = req.body;

    //const checkName = await db.query(`SELECT * FROM games WHERE name = $1;`, [name]);
    //if (checkName) return res.status(409);

    try{

        const customers = await db.query(`INSERT INTO customers (name, phone, cpf, birthday) VALUES ($1, $2, $3, $4);`,
        [name, phone, cpf, birthday]);

        return res.status(201);

    }catch(err){
        return res.status(500).send(err.message);
    }

}


export async function updateCustomers(req, res) {
    const { name, phone, cpf, birthday  } = req.body;

    //const checkName = await db.query(`SELECT * FROM games WHERE name = $1;`, [name]);
    //if (checkName) return res.status(409);

    try{

        const customers = await db.query(`INSERT INTO customers (name, phone, cpf, birthday) VALUES ($1, $2, $3, $4);`,
        [name, phone, cpf, birthday]);

        return res.status(201);

    }catch(err){
        return res.status(500).send(err.message);
    }

}