import express, { Application, Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import https from "https";
import fs from "fs";
import HelloWorldRouteController from "../controllers/HelloWorldRouteController";
import WSController from "../controllers/WSController";
var router = express.Router();
import auth from "../../shared/middlewares/authMiddleware";
import { ENV_CONFIG } from "../../config/environment";

router.get("/", function (req: Request, res: Response, next: NextFunction) {
    res.render("index", { title: `Hello World from ${ENV_CONFIG.APP_NAME}` });
});
router.all("/ws/*", auth(), WSController.index);
router.get("/content", function (req: Request, res: Response, next: NextFunction) {
    res.render("index", { title: "Hello World" });
});
router.get("/api", HelloWorldRouteController.hola);

export default router;
