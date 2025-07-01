import { inject, injectable } from "tsyringe";
import { QueryHandler } from "./query.handler";
import { GetUserByIdQuery } from "application/queries/get-user-by-id.query";
import { User } from "domain/entities/user.entity";
import { IRead } from "domain/interfaces/IRead.interface";

@injectable()
export class GetUserByIdQueryHandler
  implements QueryHandler<GetUserByIdQuery, User | null>
{
  constructor(
    @inject("UserReadRepository")
    private readonly readRepo: IRead<User>
  ) {}
  async execute(query: GetUserByIdQuery): Promise<User | null> {
    return await this.readRepo.findById(query.id);
  }
}
