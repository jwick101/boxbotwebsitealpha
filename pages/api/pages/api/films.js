import { ethers } from 'ethers';
import FilmToken from '../../artifacts/contracts/FilmToken.sol/FilmToken.json';

const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
const contractAddress = process.env.FILM_TOKEN_ADDRESS;
const contract = new ethers.Contract(contractAddress, FilmToken.abi, provider);

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const films = await contract.getFilms();
      res.status(200).json(films);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch films' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}