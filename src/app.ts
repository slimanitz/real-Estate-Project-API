import * as express from "express";
import { DbContext } from "./database/db-context";

const app = express();

const db = new DbContext();

app.listen(3000, async () => {
  await db.sync({ force: true });
  console.log("The app is running at localhost:3000 at date");
});
