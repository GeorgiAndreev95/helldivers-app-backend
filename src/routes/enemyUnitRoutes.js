import express from "express";

import {
    createEnemyUnit,
    getEnemyUnit,
    getEnemyUnits,
    updateEnemyUnit,
    deleteEnemyUnit,
} from "../controllers/enemyUnitController.js";

const router = express.Router();

router.get("/enemy-units", getEnemyUnits);

router.get("/enemy-unit/:id", getEnemyUnit);

router.delete("/enemy-unit/:id", deleteEnemyUnit);

router.post("/enemy-unit", createEnemyUnit);

router.put("/enemy-unit/:id", updateEnemyUnit);

export default router;
