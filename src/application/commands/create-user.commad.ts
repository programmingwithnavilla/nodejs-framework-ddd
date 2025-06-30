import { Command } from "./command.interface";

export class CreateUserCommand implements Command {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly email: string
  ) {}
}
