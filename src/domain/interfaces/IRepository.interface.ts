import { IRead } from "./IRead.interface";
import { IWrite } from "./IWrite.interface";

export interface IRepository<T> extends IRead<T>, IWrite<T> {}
