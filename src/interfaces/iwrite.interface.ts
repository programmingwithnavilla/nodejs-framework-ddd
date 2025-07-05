export interface IWrite<T> {
  create(entity: T): Promise<void>;
  update(entity: T): Promise<void>;
  delete(id: string): Promise<void>;
  softDelete(id: string): Promise<void>;
  restore(id: string): Promise<void>;

  bulkCreate(entities: T[]): Promise<void>;
  bulkUpdate(entities: T[]): Promise<void>;
  bulkDelete(ids: string[]): Promise<void>;
  bulkSoftDelete(ids: string[]): Promise<void>;
  bulkRestore(ids: string[]): Promise<void>;
}
