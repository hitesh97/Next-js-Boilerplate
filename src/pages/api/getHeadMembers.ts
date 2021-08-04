import { NextApiHandler } from 'next';

import NaatDirectory from '../../mssql/member';

const handler: NextApiHandler = async (req, res) => {
  try {
    let pageNo = 0;
    if (req.query && req.query.pageno && req.query.pageno.length === 1) {
      pageNo = Number(req.query.pageno[0] || '0');
    }
    const results = await NaatDirectory.getAllHeadMembers(pageNo);

    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message, e });
  }
  return res.json({});
};

export default handler;
