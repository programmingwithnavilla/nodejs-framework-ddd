import { User } from "domain/entities/user.entity";
import { IWrite } from "interfaces/iwrite.interface";
import { injectable } from "tsyringe";
import { UserEntity } from "./user.entity";
import { PostgresDataSource } from "infrastructure/persistence/postgres/postgres-data-source";

@injectable()
export class UserWriteRepository implements IWrite<User> {
  private repository = PostgresDataSource.getRepository(UserEntity);
  softDelete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  restore(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  bulkCreate(entities: User[]): Promise<void> {
    throw new Error("Method not implemented.");
  }
  bulkUpdate(entities: User[]): Promise<void> {
    throw new Error("Method not implemented.");
  }
  bulkDelete(ids: string[]): Promise<void> {
    throw new Error("Method not implemented.");
  }
  bulkSoftDelete(ids: string[]): Promise<void> {
    throw new Error("Method not implemented.");
  }
  bulkRestore(ids: string[]): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async create(user: User): Promise<void> {
    const entity = this.repository.create({
      id: user.id,
      name: user.getName(),
      email: user.getEmail(),
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    });
    await this.repository.save(entity);
  }

  async update(user: User): Promise<void> {
    await this.repository.update(user.id, {
      name: user.getName(),
      updatedAt: user.updatedAt,
    });
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
