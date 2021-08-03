import { NextApiHandler } from 'next';

import NaatDirectory from '../../mssql/member';

const handler: NextApiHandler = async (_, res) => {
  try {
    const results = await NaatDirectory.getAllHeadMembers();

    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message, e });
  }
  return res.json({});
};

export default handler;
