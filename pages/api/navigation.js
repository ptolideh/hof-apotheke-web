import nc from 'next-connect';
import { getEntries } from '../../store';

const handler = nc().get(async (req, res) => {
  try {
    const header = await getEntries('headerNav');
    const footer = await getEntries('footer');
    res.json({ data: { header, footer } });
  } catch (e) {
    console.error(e);
    res.statusCode = 500;
    res.json({ data: 'something went wrong' });
  }
});
export default handler;
