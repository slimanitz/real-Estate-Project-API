import * as express from "express";
import { DbContext } from "./database/db-context";
import * as bodyParser from "body-parser";
import * as cors from "cors";

const app = express();

const db = new DbContext();

// Add in the application/x-www-form-urlencoded parser.
app.use(bodyParser.urlencoded({ extended: true }));

// Add in the application/json parser.
app.use(bodyParser.json());

// Enables CORS.
app.use(cors({ origin: true, credentials: true }));

app.listen(3000, async () => {
  await db.sync({ force: true });
  console.log("The app is running at localhost:3000 at date");
});
