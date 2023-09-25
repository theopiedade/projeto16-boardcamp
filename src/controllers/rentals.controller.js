import db from '../database/database.connection.js';

export async function getRentals(req, res) {
    
    try{

        const rentals = await db.query(`SELECT * FROM rentals;`);

        const customer = await db.query(`SELECT id, name FROM customers WHERE "id" = $1;`, [rentals.rows[0].id]);

        const game = await db.query(`SELECT id, name FROM games WHERE "id" = $1;`, [rentals.rows[0].gameId]);

        const rentalsReturn = {
            ...rentals.rows,
            customer: customer.rows,
            game: game.rows
        }
   
   
        res.send(rentalsReturn);

    }catch(err){
        res.status(500).send(err.message);
    }

}
