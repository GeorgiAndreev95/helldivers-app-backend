import { Sequelize } from "sequelize";

const dbConnection = new Sequelize("helldivers", "root", "rootpassword", {
    dialect: "mysql",
    host: "localhost",
    logging: false,
    port: 3307,
});

export default dbConnection;
