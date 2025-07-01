import { User } from "domain/entities/user.entity";
import { IWrite } from "domain/interfaces/IWrite.interface";
import { injectable } from "tsyringe";
import { UserEntity } from "./user.entity";
import { PostgresDataSource } from "infrastructure/database/postgres-data-source";

@injectable()
export class UserWriteRepository implements IWrite<User> {
  private repo = PostgresDataSource.getRepository(UserEntity);

  async create(user: User): Promise<void> {
    const entity = this.repo.create({
      id: user.id,
      name: user.getName(),
      email: user.getEmail(),
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    });
    await this.repo.save(entity);
  }

  async update(user: User): Promise<void> {
    await this.repo.update(user.id, {
      name: user.getName(),
      updatedAt: user.updatedAt,
    });
  }

  async delete(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
