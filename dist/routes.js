"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllRouters = void 0;
const express_1 = __importDefault(require("express"));
const movie_1 = require("./modules/movie");
const routes = [
    { path: "/movie", routePath: movie_1.movieRouter },
];
const router = express_1.default.Router();
exports.AllRouters = router;
for (const route of routes) {
    router.use(`${route.path}`, route.routePath);
}
