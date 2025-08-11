import express from "express";
import bodyParser from "body-parser";
import multer from "multer";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

import enemyUnitRoutes from "./src/routes/enemyUnitRoutes.js";
import userRoutes from "./src/routes/userRoutes.js";
import factionRoutes from "./src/routes/factionRoutes.js";
import dbConnection from "./utils/database.js";
import Faction from "./src/models/Faction.js";
import EnemyUnit from "./src/models/EnemyUnit.js";
import User from "./src/models/User.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    },
});

const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg"
    ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

app.use(bodyParser.json());
app.use(multer({ storage: fileStorage, fileFilter }).single("image")); //image is the name property of the input field submitting the file
app.use("/images", express.static(path.join(__dirname, "images")));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET,POST,PUT,PATCH,DELETE,OPTIONS"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization"
    );

    if (req.method === "OPTIONS") {
        return res.sendStatus(204); // No content
    }
    next();
});

app.use(enemyUnitRoutes);
app.use("/user", userRoutes);
app.use(factionRoutes);

User.hasMany(EnemyUnit, {
    foreignKey: "userId",
});
EnemyUnit.belongsTo(User, {
    foreignKey: "userId",
});
User.hasMany(Faction, {
    foreignKey: "userId",
});
Faction.belongsTo(User, {
    foreignKey: "userId",
});
Faction.hasMany(EnemyUnit, {
    foreignKey: "factionId",
});
EnemyUnit.belongsTo(Faction, {
    foreignKey: "factionId",
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

await dbConnection.sync();
