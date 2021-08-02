/* eslint-disable class-methods-use-this */
import mssqlcon from './dbconnection';

export interface ITitle {
  Id: number;
  Code: string;
  Description: string;
}
class TitlesMssql {
  async getAllTitles() {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request().query('select * from Title');
    return res.recordset;
  }
}
export default new TitlesMssql();
