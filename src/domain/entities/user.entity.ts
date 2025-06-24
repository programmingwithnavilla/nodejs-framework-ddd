import { BaseEntity } from "../base/base-entity.base";

export class User extends BaseEntity {
  private name: string;
  private email: string;

  constructor(name: string, email: string) {
    super();
    this.name = name;
    this.email = email;
  }

  changeName(newName: string): void {
    this.name = newName;
    this.touch();
  }

  getName(): string {
    return this.name;
  }

  getEmail(): string {
    return this.email;
  }
}
