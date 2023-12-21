import { Types } from "mongoose";

interface IMovie {
  title: string;
  overview: string;
  release_date: Date;
  genres: string[];
  runtime: number;
  director: string;
  cast: string[];
  rating: {
    avg_rating: number;
    person: number;
  };
  poster_url: string;
  trailer_url: string;
}

export { IMovie };
