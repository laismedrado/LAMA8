import express from "express";
import { ShowsBusiness } from "../business/ShowsBusiness";
import { ShowsController } from "../controller/ShowController";
import { ShowDataBase } from "../data/ShowDatabase";

export const showRouter = express.Router();

const showDatabase = new ShowDataBase();
const showBusiness = new ShowsBusiness(showDatabase);
const showController = new ShowsController(showBusiness);

showRouter.get("/shows/:date", (req, res) =>
  showController.getShowByDateController(req, res)
);

showRouter.post("/", (req, res) =>
  showController.createShows(req, res)
);

