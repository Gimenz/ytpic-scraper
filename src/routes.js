import express from "express";
import Controller from "./controller.js";

const routes = express.Router();

const controller = new Controller();

routes.get("/api/ytpic", controller.getData);

export default routes;
