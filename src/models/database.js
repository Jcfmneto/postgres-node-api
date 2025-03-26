import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  host: "localhost",
  user: process.env.USER_DB,
  database: process.env.DATABASE,
  password: process.env.SENHA_DB,
  port: 5432,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

async function query(sql, params) {
  const conexao = await pool.connect();

  try {
    const res = await conexao.query(sql, params);
    return res;
  } catch (error) {
    console.log("erro na conexao", error);
  } finally {
    conexao.release();
  }
}

export default query;
