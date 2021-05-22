/*import { DbContext } from "../../db-context";
import UserRepository from "../../../repositories/account/user-repository";
import { BoxRent } from "../../../models/new/user/user";
import { TYPES } from "../../../infrastructure/ioc/types";
import DbUserMapper from "./mappings/db-user-mapper";
import DbUser from "src/persistence/models/account/db-user";*/

import BoxRent from "../../models/box-rent-model";

import { DbContext } from "../../db-context";
import { injectable } from "inversify";

@injectable()
export default class DbBoxRentRepository {
  #db: DbContext = new DbContext();

  async create(box: BoxRent): Promise<void> {
    const created = await this.#db.BoxRent.create(box, { raw: true });
  }

  async getAllByPostalCode(postalCode: string): Promise<BoxRent[]> {
    const boxs = await this.#db.BoxRent.findAll({
      where: { postalCode: postalCode },
    });

    return boxs.map((o) => o);
  }

  async getAllByCity(city: string): Promise<BoxRent[]> {
    const boxs = await this.#db.BoxRent.findAll({
      where: { city: city },
    });

    return boxs.map((o) => o);
  }

  async getAll(): Promise<BoxRent[]> {
    const boxs = await this.#db.BoxRent.findAll({ raw: true });
    return boxs.map((o) => o);
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
