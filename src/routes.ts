import express, { Router } from "express";
import { movieRouter } from "./modules/movie";

const routes = [{ path: "/movie", routePath: movieRouter }];

const router: Router = express.Router();

for (const route of routes) {
  router.use(`${route.path}`, route.routePath);
}

export { router as AllRouters };
