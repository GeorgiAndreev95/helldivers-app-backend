import express from "express";

import {
    createFaction,
    getFaction,
    getFactions,
    updateFaction,
    deleteFaction,
} from "../controllers/factionController.js";

const router = express.Router();

router.get("/factions", getFactions);

router.get("/factions/:id", getFaction);

router.post("/factions", createFaction);

router.put("/factions/:id", updateFaction);

router.delete("/factions/:id", deleteFaction);

export default router;
