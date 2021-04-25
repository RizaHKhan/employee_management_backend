import express, { Application, Request, Response } from "express";
import cors from "cors";
import { Server } from "typescript-rest";

// Importing all typescript-rest classes for wrapping Express paths
import "./handlers";
import { TryDBConnect } from "./helpers";

export const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(async (req: Request, res: Response, next) => {
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

app.listen(port, () => console.log(`Listening on port:${port}`));
