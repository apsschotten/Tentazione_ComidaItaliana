const path = require('path');

const { PrismaClient } = require('@prisma/client');
const client = new PrismaClient();

class reservasController{

 static async reservas(req, res){
    const {userid, mesaid, reservaid} = req.body;
    const reserva = await client.reserva.create({
            data: {
                date,
                n_pessoas,
            },
        });

        res.json({
            reservaId: reserva.id,
        });
 }

};

module.exports = reservasController;