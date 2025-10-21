const { PrismaClient } = require('@prisma/client');
const client = new PrismaClient();

class mesaController {
static async criar(req, res){
     console.log(req.body);
        const { nome, lugares} = req.body;
        
        const mesa = await client.mesa.create({
            data: {
                nome,
                lugares,
            },
        });

        res.json({
            mesaId: mesa.id,
        });
    };
};

module.export = mesaController;