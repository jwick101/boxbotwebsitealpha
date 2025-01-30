import { ethers } from 'ethers';
import connectDB from '../../lib/db';
import Film from '../../models/Film';
import FilmToken from '../../artifacts/contracts/FilmToken.sol/FilmToken.json';

const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
const contractAddress = process.env.FILM_TOKEN_ADDRESS;
const contract = new ethers.Contract(contractAddress, FilmToken.abi, provider);

export default async function handler(req, res) {
  await connectDB();

  if (req.method === 'POST') {
    const { from, to, amount, filmId } = req.body;
    try {
      const signer = provider.getSigner(from);
      const tx = await contract.connect(signer).transferTokens(from, to, amount, filmId);
      await tx.wait();

      // Update film ownership in the database
      await Film.findOneAndUpdate({ tokenId: filmId }, { owner: to });

      res.status(200).json({ success: true, txHash: tx.hash });
    } catch (error) {
      res.status(500).json({ error: 'Failed to trade film tokens' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}