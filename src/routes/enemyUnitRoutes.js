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

router.get("/enemy-unit/:id", getEnemyUnit);

router.delete("/enemy-unit/:id", isAuth, deleteEnemyUnit);

router.post("/enemy-unit", isAuth, createEnemyUnit);

router.put("/enemy-unit/:id", isAuth, updateEnemyUnit);

export default router;
