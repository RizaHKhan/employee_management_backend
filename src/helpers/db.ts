import { Connection, createConnection, getConnection } from "typeorm";
import ORMConfig from "../ormconfig";

export const DBConnect = async () => {
  let connection: Connection | undefined;

  try {
    connection = getConnection();
  } catch (e) {
    console.log("Unable to connect to database");
  }

  try {
    if (connection) {
      if (!connection.isConnected) {
        await connection.connect();
      }
    } else {
      await createConnection(ORMConfig);
    }
    console.error("SUCCESS: Database connection made!");
  } catch (e) {
    console.error("ERROR: Database connection failed", e);
    throw e;
  }
};

export const TryDBConnect = async (onError: Function, next?: Function) => {
  try {
    await DBConnect();
    if (next) {
      next();
    }
  } catch (e) {
    onError();
  }
};
