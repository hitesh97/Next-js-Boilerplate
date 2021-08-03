/* eslint-disable class-methods-use-this */
import mssqlcon from './dbconnection';

export interface IMember {
  Id: number;
  Title: string;
  FirstName: string;
  MiddleName: string;
  LastName: string;
  FathersName: string;
  EmailAddress: string;
  Postcode: string;
}
class NaatDirectory {
  async getAllHeadMembers() {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request().query(
      `select Id, Title, Surname, [First Name] 'FirstName',[2nd Name] 'MiddleName', 
        [Fathers Name] 'FathersName',
         Surname 'LastName', [email address] 'EmailAddress', 
         Postcode From NaatDirectory_2021 where ParentId = -1 ORDER BY ID`
    );
    return res.recordset;
  }
}
export default new NaatDirectory();
