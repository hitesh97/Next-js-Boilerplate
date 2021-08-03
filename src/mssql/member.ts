/* eslint-disable class-methods-use-this */
import mssqlcon from './dbconnection';

export interface IMember {
  Id: number;
  Title: string;
  Surname: string;
  FirstName: string;
  MiddleName: string;
  FathersName: string;
  EmailAddress: string;
  Mosal: string;
  Profession: string;
  AddressLine1: string;
  AddressLine2: string;
  Town: string;
  County: string;
  Postcode: string;
  TelNo: string;
  MobileNo: string;
  SendNewsletter?: boolean;
  PublishInDirectory?: boolean;
}
class NaatDirectory {
  async getAllHeadMembers() {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request().query(
      `select Id, Title, [First Name] 'FirstName', Surname,[2nd Name] 'MiddleName', 
        [Fathers Name] 'FathersName',
         [email address] 'EmailAddress', 
         Postcode From NaatDirectory_2021 where ParentId = -1 ORDER BY ID`
    );
    return res.recordset;
  }
}
export default new NaatDirectory();
