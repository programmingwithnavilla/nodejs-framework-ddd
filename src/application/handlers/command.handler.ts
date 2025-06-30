import { Command } from "application/commands/command.interface";

export interface CommandHandler<TCommand extends Command, TResult = void> {
  execute(command: TCommand): Promise<TResult>;
}
