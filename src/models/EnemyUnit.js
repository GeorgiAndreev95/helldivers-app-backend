import { DataTypes } from "sequelize";
import dbConnection from "../../utils/database.js";

const EnemyUnit = dbConnection.define("EnemyUnit", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    health: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    damage: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    minimumDifficulty: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    armor: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default EnemyUnit;
