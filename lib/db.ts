import { Pool } from "pg";

let db;

if (!db) {
  db = new Pool({
    database: process.env.PG_URI,
  });
}

export default db;