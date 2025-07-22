import { DataTypes } from "sequelize";
import dbConnection from "../../utils/database.js";

const Admin = dbConnection.define("Admin", {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default Admin;
