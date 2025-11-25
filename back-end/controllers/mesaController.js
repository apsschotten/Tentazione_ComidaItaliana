const { PrismaClient } = require('@prisma/client');
const client = new PrismaClient();

class mesaController {
    static async criar(req, res) {
        console.log(req.body);
        
        const { numero, capacidade } = req.body;

        const mesa = await client.mesa.create({
            data: {
                numero,
                capacidade,
            },
        });

        res.json({
            mesaId: mesa.id,
        });
    }
}

module.exports = mesaController;