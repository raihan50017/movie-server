import express, { Router } from "express";
import { singleImageUploader } from "../../helpers/file-uploader";
import * as movieController from "./movie.controller";
import { movieValidation } from "./movie.validation";

const router: Router = express.Router();

router.post(
  "/",
  singleImageUploader("image"),
  movieValidation,
  movieController.createMovie
);

router.get("/", movieController.getMovie);

export { router as movieRouter };
