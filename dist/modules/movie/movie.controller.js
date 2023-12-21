"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMovie = void 0;
const movie_model_1 = require("./movie.model");
const createMovie = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    try {
        const cast = (_a = req.body.cast) === null || _a === void 0 ? void 0 : _a.split(",");
        const genres = (_b = req.body.genres) === null || _b === void 0 ? void 0 : _b.split(",");
        const movieOBJ = {
            title: req.body.title,
            overview: req.body.overview,
            release_date: req.body.release_date,
            genres: genres,
            runtime: req.body.runtime,
            director: req.body.director,
            cast: cast,
            rating: req.body.rating,
            poster_url: (_c = req.file) === null || _c === void 0 ? void 0 : _c.filename,
            trailer_url: req.body.trailer_url,
        };
        const movie = yield new movie_model_1.Movie(movieOBJ);
        movie.save();
        res.json({ "message": "Movie uploaded successfully" });
    }
    catch (error) {
        next(error);
    }
});
exports.createMovie = createMovie;
