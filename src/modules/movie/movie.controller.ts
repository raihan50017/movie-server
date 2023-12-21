import { Request, Response, NextFunction } from "express";
import { Movie } from "./movie.model";

const createMovie = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const cast = req.body.cast?.split(",");
    const genres = req.body.genres?.split(",");

    const movieOBJ = {
      title: req.body.title,
      overview: req.body.overview,
      release_date: req.body.release_date,
      genres: genres,
      runtime: req.body.runtime,
      director: req.body.director,
      cast: cast,
      rating: req.body.rating,
      poster_url: req.file?.filename,
      trailer_url: req.body.trailer_url,
    };
    const movie = await new Movie(movieOBJ);
    movie.save();
    res.json({ message: "Movie uploaded successfully" });
  } catch (error) {
    next(error);
  }
};

const getMovie = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await Movie.find({});
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(502).json({
      message: "Database erro occured",
    });
  }
};

export { createMovie, getMovie };
