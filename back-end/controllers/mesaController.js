const path = require('path');

const { PrismaClient } = require('@prisma/client');
const client = new PrismaClient();

class mesaController {

    static async mesaCadastrar(req, res){
        const {numero, lugares} =  req.body;
        
        const mesa = await client.mesa.create({
            data: {
               numero,
               lugares
            },
        });
        res.json({
            mesaId: mesa.id,
        });
    }


}

module.exports = mesaController;