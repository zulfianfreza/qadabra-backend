import { Pool } from "pg";

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "qadabra",
  password: "zulfian@25",
  port: 5432,
});
