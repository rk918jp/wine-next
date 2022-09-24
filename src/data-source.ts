import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entities/User";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 5432,
  username: "mami0709",
  password: "080709",
  database: "test",
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [
      "db/migrations/*.ts",
  ],
  subscribers: [],
});


