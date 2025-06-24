export interface IRead<T> {
  findById(id: string): Promise<T | null>;
  findAll(): Promise<T[]>;
  findByPagination(
    page: number,
    limit: number
  ): Promise<{ data: T[]; total: number }>;
}
