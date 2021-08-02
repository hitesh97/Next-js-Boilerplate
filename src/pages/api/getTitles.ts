import { NextApiHandler } from 'next';

import TitlesMssql from '../../mssql/title';

const handler: NextApiHandler = async (_, res) => {
  try {
    const results = await TitlesMssql.getAllTitles();

    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message, e });
  }
  return res.json({});
};

export default handler;
