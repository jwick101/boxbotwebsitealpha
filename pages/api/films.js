import connectDB from '../../lib/db';
import Film from '../../models/Film';

export default async function handler(req, res) {
  await connectDB();

  if (req.method === 'GET') {
    try {
      const films = await Film.find({});
      res.status(200).json(films);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch films' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}