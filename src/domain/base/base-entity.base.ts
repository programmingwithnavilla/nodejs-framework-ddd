import { v4 as uuidv4 } from "uuid";

export abstract class BaseEntity {
  /** Unique Identifier */
  readonly id: string;

  /** Timestamps */
  readonly createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;

  /** Optimistic concurrency control */
  version: number;

  /** Soft delete flag */
  isDeleted: boolean;

  constructor() {
    const now = new Date();

    this.id = uuidv4();
    this.createdAt = now;
    this.updatedAt = now;
    this.deletedAt = null;
    this.isDeleted = false;
    this.version = 1;
  }
  /** Update entity timestamp */
  touch(): void {
    this.updatedAt = new Date();
    this.version += 1;
  }
  /** Soft delete the entity */
  softDelete(): void {
    this.isDeleted = true;
    this.deletedAt = new Date();
    this.touch();
  }
  /** Restore from soft delete */
  restore(): void {
    this.isDeleted = false;
    this.deletedAt = null;
    this.touch();
  }

  /** Serialize entity (for logging, APIs, etc.) */
  toJSON(): Record<string, any> {
    return {
      id: this.id,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      deletedAt: this.deletedAt,
      version: this.version,
      isDeleted: this.isDeleted,
    };
  }
}
