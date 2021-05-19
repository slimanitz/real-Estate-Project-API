import { Sequelize } from "sequelize-typescript";

export const sequelizeConnection = new Sequelize(
  "estator",
  "root",
  "password",
  {
    host: "localhost",
    dialect: "postgres",
    models: [__dirname + "/models"],
  }
);
