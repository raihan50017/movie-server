import { Schema, model } from "mongoose";
import { IMovie } from "./movie.interface";

const movieSchema = new Schema<IMovie>({
  title: {
    type: String,
    required: true,
  },
  overview: {
    type: String,
    required: true,
  },
  release_date: {
    type: Date,
    required: true,
  },
  genres: [],
  runtime: {
    type: Number,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  cast: [],
  rating: {
    avg_rating: {
      type: Number,
    },
    person: {
      type: Number,
    },
  },
  poster_url: {
    type: String,
    required: true,
  },
  trailer_url: {
    type: String,
    required: true,
  },
});

const Movie = model<IMovie>("Movie", movieSchema);

export { Movie };
