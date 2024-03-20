const express = require('express');
const { Pool } = require('pg');
const router = express.Router();

const pool = new Pool({
    host: '26.211.33.90',
    user: 'postgres',
    password: 'gbt101',
    database: 'Pagamentos',
    port: 5432,
    ssl: false 
  });

router.post('/login', async (req, res) => {
    const { usuario, senha } = req.body;
  
    try {
        const usuarioResult = await pool.query(
            "SELECT * FROM Usuarios WHERE usuario = $1",
            [usuario]
        );
  
        if (usuarioResult.rows.length === 0) {
            return res.status(401).json({ message: "Usuário inválido!" });
        }
  
        const loginResult = await pool.query(
            "SELECT * FROM Usuarios WHERE usuario = $1 AND senha = crypt($2, senha)",
            [usuario, senha]
        );
  
        if (loginResult.rows.length > 0) {
            res.json({ message: "Usuário autenticado com sucesso!", usuario: loginResult.rows[0] });
        } else {
            res.status(401).json({ message: "Senha inválida!" });
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "Erro ao autenticar o usuário" });
    }
});

module.exports = router;
