/* eslint-disable class-methods-use-this */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/return-await */
// const mssql = require('mssql');

import mssql, { config } from 'mssql';

const sqlConfig: config = {
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  server: process.env.DB_SERVER || 'localhost',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: false, // for azure
    trustServerCertificate: false, // change to true for local dev / self-signed certs
  },
};

// BMUK.dbo.Title
class DBConnection {
  async getConnection() {
    try {
      return await mssql.connect(sqlConfig);
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
export default new DBConnection();
