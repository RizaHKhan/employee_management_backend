import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { Server } from "typescript-rest";

// Importing all typescript-rest classes for wrapping Express paths
import "./handlers";
import { TryDBConnect } from "./helpers";

const app: Application = express();

app.use(cors());
app.use(bodyParser.json());

app.use(async (req: Request, res: Response, next: NextFunction) => {
  await TryDBConnect(() => {
    res.json({
      error: "Database connection error, please try again later",
    });
  }, next);
});

Server.buildServices(app);

let port = parseInt(process.env.PORT || "");
if (isNaN(port) || port === 0) {
  port = 3000;
}

app.listen(port, () => console.log("server running"));
