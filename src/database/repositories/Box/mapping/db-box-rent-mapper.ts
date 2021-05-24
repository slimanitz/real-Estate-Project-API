import { injectable } from "inversify";
import { Box } from "../../../../interfaces/box-interface";
import DbBox from "../../../models/box-rent-model";

@injectable()
export default class DbBoxRentMapper {
  public static from(box: Box) {
    return {
      id: box.id,
      owner: box.owner,
      city: box.city,
      size: box.size,
      price: box.price,
      departement: box.departement,
      postalCode: box.postalCode,
      url: box.url,
      ref: box.ref,
      publishDate: box.publishDate,
      removeDate: box.removeDate,
      status: box.status,
    };
  }

  public static to(box: DbBox) {
    return {
      id: box.id,
      owner: box.owner,
      city: box.city,
      size: box.size,
      price: box.price,
      departement: box.departement,
      postalCode: box.postalCode,
      url: box.url,
      ref: box.ref,
      publishDate: box.publishDate,
      removeDate: box.removeDate,
      status: box.status,
    };
  }
}
