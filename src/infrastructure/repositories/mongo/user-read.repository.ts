// src/infrastructure/repositories/mongo/UserReadRepository.ts

import { IRead } from "domain/interfaces/IRead.interface";
import { UserMongoModel } from "./user-mongo.repository";
import { injectable } from "tsyringe";
import { User } from "domain/entities/user.entity";

@injectable()
export class UserReadRepository implements IRead<User> {
  findByPagination(
    page: number,
    limit: number
  ): Promise<{ data: User[]; total: number }> {
    throw new Error("Method not implemented.");
  }
  async findById(id: string): Promise<User | null> {
    const data = await UserMongoModel.findOne({ id }).lean();
    if (!data || !data.name || !data.email) return null;
    return new User(data.name, data.email);
  }

  async findAll(): Promise<User[]> {
    const list = await UserMongoModel.find().lean();
    return list.map((data) => new User(data.name ?? "", data.email ?? ""));
  }
}
