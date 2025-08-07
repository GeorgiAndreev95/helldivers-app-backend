import express from "express";
import { body } from "express-validator";

import {
    createFaction,
    getFaction,
    getFactions,
    updateFaction,
    deleteFaction,
} from "../controllers/factionController.js";

import { isAuth } from "../middleware/isAuth.js";

const router = express.Router();

router.get("/factions", getFactions);

router.get("/factions/:id", getFaction);

router.post("/factions", isAuth, createFaction);

router.put("/factions/:id", isAuth, updateFaction);

router.delete("/factions/:id", isAuth, deleteFaction);

export default router;
