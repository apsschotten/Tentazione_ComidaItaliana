const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const path = require('path');

const { PrismaClient } = require('@prisma/client');
const client = new PrismaClient();

class userController {

    static async cadastrar(req, res) {

        console.log(req.body);
        const { nome, email, senha } = req.body;

        const salt = bcryptjs.genSaltSync(8);
        const hashSenha = bcryptjs.hashSync(senha, salt);

        const user = await client.user.create({
            data: {
                nome,
                email,
                senha: hashSenha,
            },
        });

        res.json({
            userId: user.id,
        });

    }

    static async login(req, res) {

        const { email, senha } = req.body;

        const user = await client.user.findUnique({
            where: {
                email: email,
            },
        });

        if (!user) {
            return res.json({
                msg: "Usuário não encontrado.",
            });
        }

        const senhaCorreta = bcryptjs.compareSync(senha, user.senha);

        if (!senhaCorreta) {
            return res.json({
                msg: "Senha incorreta.",
            });
        }

        const token = jwt.sign({ id: user.id }, process.env.SENHA_SERVIDOR, { expiresIn: "1h" });

        res.json({
            msg: "Autenticado com sucesso!",
            token: token,
        });
    }
}

module.exports = userController
