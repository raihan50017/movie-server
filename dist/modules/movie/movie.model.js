"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
const mongoose_1 = require("mongoose");
const movieSchema = new mongoose_1.Schema({
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
        required: true
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
        }
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
const Movie = (0, mongoose_1.model)("Movie", movieSchema);
exports.Movie = Movie;
