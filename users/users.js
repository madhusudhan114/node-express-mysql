import database from '../database.js';

class User {
  constructor() {
    this.db = database.getDBPool();
  }

  async getUsers() {
      const [rows] = await this.db.query('SELECT * FROM users');
      return rows;
    }

  async getUserCount() {
      const [count] = await this.db.query('SELECT COUNT(*) AS USER_COUNT FROM users');
      return count[0];
    }

  async getUser(id) {
      const [user] = await this.db.query(`SELECT * FROM users where id=?`, [id]);
      return user[0];
    }

  async createUser(userObj) {
      const [result] = await this.db.query(`INSERT INTO users (first_name, last_name, email, gender, age) VALUES (?,?,?,?,?)`, [userObj.first_name, userObj.last_name, userObj.email, userObj.gender, userObj.age]);
      const id = result.insertId;
      return this.getUser(id);
  }
}

export default new User();