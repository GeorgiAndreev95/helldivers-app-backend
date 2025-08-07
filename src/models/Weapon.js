import { DataTypes } from "sequelize";
import dbConnection from "../../utils/database.js";

const Weapon = dbConnection.define("Weapon", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    weaponCategory: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    weaponType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    damage: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    maxArmorPen: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ammoCapacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    recoil: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    fireRate: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dps: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    spareMags: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    spareShells: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    traits: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    firingModes: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    scopeOptions: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    procurementSource: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    procurementCost: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    procurementDescription: {
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

export default Weapon;
