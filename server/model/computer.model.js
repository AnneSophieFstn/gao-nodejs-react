import { Sequelize, DataTypes } from "sequelize";
import connectDB from "../database/database.js";

const Computer = connectDB.define("computers", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Computer;
