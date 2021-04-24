import { ConnectionOptions } from "typeorm";
import path from "path";

const isCompiled = path.extname(__filename).includes("js");

export default {
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3000,
  username: process.env.DB_USERNAME || "postgres_username",
  password: process.env.DB_PASSWORD || "postgres_password",
  database: process.env.DB_NAME || "my_db_name",
  synchronize: !process.env.DB_NO_SYNC,
  logging: !process.env.DB_NO_LOGS,
  autoReconnect: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 2000,
  entities: [`src/entity/**/*.js.${isCompiled ? "js" : "ts"}`],
  migrations: [`src/migration/**/*.${isCompiled ? "js" : "ts"}`],
  cli: {
    entitiesDir: "src/entity",
    migrationsDir: "src/migration",
  },
} as ConnectionOptions;
