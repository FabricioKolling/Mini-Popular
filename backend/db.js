// 1. Importa e configura o dotenv para carregar as variáveis do arquivo .env
const dotenv = require('dotenv');
dotenv.config();

const { Pool } = require('pg');

// 2. Cria o pool de conexão usando as variáveis de ambiente (process.env)
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// 3. Exporta o pool e a função de query como antes
module.exports = {
  query: (text, params) => pool.query(text, params),
  pool: pool,
};
// -------------------

