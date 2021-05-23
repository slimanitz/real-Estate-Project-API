/*import { DbContext } from "../../db-context";
import UserRepository from "../../../repositories/account/user-repository";
import { BoxRent } from "../../../models/new/user/user";
import { TYPES } from "../../../infrastructure/ioc/types";
import DbUserMapper from "./mappings/db-user-mapper";
import DbUser from "src/persistence/models/account/db-user";*/

import { DbContext } from "../../db-context";
import { injectable } from "inversify";
import { Box } from "../../../interfaces/box-interface";
import DbBoxRentMapper from "./mapping/db-box-rent-mapper";
import DbBox from "../../models/box-rent-model";

@injectable()
export default class DbBoxRentRepository {
  #db: DbContext = new DbContext();

  async create(box: any): Promise<void> {
    const created = await this.#db.BoxRent.create(box, { raw: true });
  }

  async getAllByPostalCode(postalCode: string): Promise<Box[]> {
    const boxs = await this.#db.BoxRent.findAll({
      where: { postalCode: postalCode },
    });

    return boxs.map((o) => DbBoxRentMapper.to(o));
  }

  async getAllByCity(city: string): Promise<Box[]> {
    const boxs = await this.#db.BoxRent.findAll({
      where: { city: city },
    });

    return boxs.map((o) => DbBoxRentMapper.to(o));
  }

  async getAll(): Promise<Box[]> {
    const boxs = await this.#db.BoxRent.findAll({ raw: true });
    return boxs.map((o) => DbBoxRentMapper.to(o));
  }

  /*async remove(box: BoxRent): Promise<boolean> {
    return this.#db.BoxRent.destroy({
      limit: 1,
      where: {
        id: box.id!,
      },
    }).then((n) => n === 1);
  }
  async update(box: BoxRent): Promise<BoxRent> {
    await this.#db.BoxRent.update(box, {
      limit: 1,
      where: {
        id: box.id!,
      },
      returning: true,
    });

    return this.get(box.id!) as Promise<BoxRent>;
  }

  async get(id: string): Promise<BoxRent | null> {
    const box = await this.#db.BoxRent.findByPk(id, { raw: true });

    if (box == null) {
      return null;
    }
    return box;
  }*/
}
