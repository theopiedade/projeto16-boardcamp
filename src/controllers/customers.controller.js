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

    const checkCPF = await db.query(`SELECT * FROM customers WHERE "cpf" = $1;`, [cpf]);
    if (checkCPF.rows[0]) return res.sendStatus(409);

    try{

        const customers = await db.query(`INSERT INTO customers (name, phone, cpf, birthday) VALUES ($1, $2, $3, $4);`,
        [name, phone, cpf, birthday]);

        return res.sendStatus(201);

    }catch(err){
        return res.status(500).send(err.message);
    }

}

export async function getCustomersById(req, res) {
    const { id } = req.params;

    try{

        const customers = await db.query(`SELECT * FROM customers WHERE "id" = ($1);`,
        [id]);

        if (customers.rows[0]) return res.send(customers.rows);
        else return res.sendStatus(404);

    }catch(err){
        return res.status(500).send(err.message);
    }

}

export async function updateCustomers(req, res) {
    const { id } = req.params;
    const { name, phone, cpf, birthday  } = req.body;

    const checkCpfId = await db.query(`SELECT id FROM customers WHERE "cpf" = $1;`, [cpf]);
    if (checkCpfId && checkCpfId != id) return res.sendStatus(409);

    try{

        await db.query(`UPDATE customers SET name = $1, phone = $2, cpf = $3, birthday = $4 WHERE "id" = VALUES ($5);`,
        [name, phone, cpf, birthday, id]);

        return res.status(201);

    }catch(err){
        return res.status(500).send(err.message);
    }

}

