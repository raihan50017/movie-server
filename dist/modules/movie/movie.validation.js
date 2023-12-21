"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.movieValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const validation_common_1 = require("../../common/validation.common");
const schema = joi_1.default.object({
    title: joi_1.default.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    overview: joi_1.default.string()
        .alphanum()
        .min(3)
        .max(300)
        .required(),
    release_date: joi_1.default.date()
        .required(),
    genres: [
        joi_1.default.string().required(),
    ],
    runtime: joi_1.default.number()
        .required(),
    director: joi_1.default.string()
        .required(),
    cast: [
        joi_1.default.string().required(),
    ],
    trailer_url: joi_1.default.string()
        .required()
});
const movieValidation = (0, validation_common_1.validationHandler)({ body: schema });
exports.movieValidation = movieValidation;
