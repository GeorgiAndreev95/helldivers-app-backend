import { DataTypes } from "sequelize";
import dbConnection from "../../utils/database.js";

const Faction = dbConnection.define("Faction", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default Faction;
