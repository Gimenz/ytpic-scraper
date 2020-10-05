import express from "express";
import { getData } from "./controller/getData.js";

const routes = express.Router();

routes.get("/api/ytpic", getData);

export default routes;
