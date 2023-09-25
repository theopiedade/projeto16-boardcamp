import db from '../database/database.connection.js';

export async function getGames(req, res) {
    
    try{

        const games = await db.query(`SELECT * FROM games;`);

        res.send(games.rows);

    }catch(err){
        res.status(500).send(err.message);
    }

}

export async function postGames(req, res) {
    const { name, image, stockTotal, pricePerDay } = req.body;

    const checkName = await db.query(`SELECT id FROM games WHERE "name" = $1;`, [name]);
    if (checkName.rows[0]) return res.sendStatus(409);

    try{

        await db.query(`INSERT INTO games (name, image, "stockTotal", "pricePerDay") VALUES ($1, $2, $3, $4);`,
        [name, image, stockTotal, pricePerDay]);

        return res.sendStatus(201);

    }catch(err){
        return res.status(500).send(err.message);
    }

}