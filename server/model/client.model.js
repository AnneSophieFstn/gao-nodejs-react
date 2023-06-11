import connectDB from "../database/database.js";
import { Sequelize, DataTypes } from "sequelize";

const Client = connectDB.define("clients", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Client;
