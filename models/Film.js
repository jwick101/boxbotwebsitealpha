import mongoose from 'mongoose';

const FilmSchema = new mongoose.Schema({
  title: String,
  director: String,
  releaseDate: Date,
  tokenId: Number,
  owner: String,
});

export default mongoose.models.Film || mongoose.model('Film', FilmSchema);