import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "restaurant_OOP",
  password: " ", 
  port: 5432
});

export default pool;