import { DataTypes } from "sequelize";
import dbConnection from "../../utils/database.js";

const User = dbConnection.define("User", {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default User;
