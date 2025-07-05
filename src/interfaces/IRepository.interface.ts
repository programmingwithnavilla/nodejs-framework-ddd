import { IRead } from "./iread.interface";
import { IWrite } from "./iwrite.interface";

export interface IRepository<T> extends IRead<T>, IWrite<T> {}
