import { Status } from "../database/enums/status-enum";

export interface Box {
  id?: string;
  owner: string;
  city: string;
  size: number;
  price: number;
  departement: string;
  postalCode: string;
  url: string;
  ref: string;
  publishDate: Date;
  removeDate?: Date;
  status?: Status;
}
