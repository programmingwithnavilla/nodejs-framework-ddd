import { inject, injectable } from "tsyringe";
import { CommandHandler } from "./command.handler";
import { CreateUserCommand } from "application/commands/create-user.command";
import { User } from "domain/entities/user.entity";
import { IRepository } from "interfaces/IRepository.interface";

@injectable()
export class CreateUserCommandhanlder
  implements CommandHandler<CreateUserCommand>
{
  constructor(
    @inject("UserRepository")
    private readonly repository: IRepository<User>
  ) {}

  async execute(command: CreateUserCommand): Promise<void> {
    const user = new User(command.name, command.email);
    await this.repository.create(user);
  }
}
