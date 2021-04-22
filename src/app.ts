import express, { Application, Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { Server } from "typescript-rest";

// Imorting all typescript-rest classes for wrapping Express paths
import "./handlers";

const app: Application = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

Server.buildServices(app);

let port = parseInt(process.env.PORT || "");
if (isNaN(port) || port === 0) {
  port = 3000;
}

app.listen(port, () => console.log("server running"));
