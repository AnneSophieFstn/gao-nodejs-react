import connectDB from "../database/database.js";
import { Sequelize, DataTypes } from "sequelize";

const Attribution = connectDB.define("events", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  hours: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  idComputer: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  idUser: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Attribution;
