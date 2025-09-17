import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

class Database {
  constructor() {
    this.pool = mysql.createPool({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DB
    }).promise();
  }
  
  getDBPool() {
    return this.pool;
  }
}

export default new Database();

