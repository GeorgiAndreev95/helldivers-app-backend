import express from "express";
import bodyParser from "body-parser";

import enemyUnitRoutes from "./src/routes/enemyUnitRoutes.js";
import dbConnection from "./utils/database.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(enemyUnitRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

await dbConnection.sync();
