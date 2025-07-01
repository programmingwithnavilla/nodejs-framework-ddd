import { Query } from "./query.interface";

export class GetUserByIdQuery implements Query {
  constructor(public id: string) {}
}
