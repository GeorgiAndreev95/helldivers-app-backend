import express from "express";

import {
    createEnemyUnit,
    getEnemyUnit,
    getEnemyUnits,
    updateEnemyUnit,
    deleteEnemyUnit,
} from "../controllers/enemyUnitController.js";

import { isAuth } from "../middleware/isAuth.js";

const router = express.Router();

router.get("/enemy-units", getEnemyUnits);

router.get("/enemy-units/:id", getEnemyUnit);

router.delete("/enemy-units/:id", isAuth, deleteEnemyUnit);

router.post("/enemy-units", isAuth, createEnemyUnit);

router.put("/enemy-units/:id", isAuth, updateEnemyUnit);

export default router;
