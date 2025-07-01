import { UserEntity } from "infrastructure/repositories/postgres/user.entity";
import { DataSource } from "typeorm";

export const PostgresDataSource = new DataSource({
  type: "postgres",
  host: process.env.DATABASE_HOST || "localhost",
  port: process.env.DATABASE_PORT ? Number(process.env.DATABASE_PORT) : 5432,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  synchronize: true,
  logging: false,
  entities: [UserEntity],
});
