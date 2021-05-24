/*import { DbContext } from "../../db-context";
import UserRepository from "../../../repositories/account/user-repository";
import { BoxSell } from "../../../models/new/user/user";
import { TYPES } from "../../../infrastructure/ioc/types";
import DbUserMapper from "./mappings/db-user-mapper";
import DbUser from "src/persistence/models/account/db-user";*/

import BoxSell from "../../models/box-sell-model";

import { DbContext } from "../../db-context";
import { injectable } from "inversify";
@injectable()
export default class DbBoxSellRepository {
  #db: DbContext = new DbContext();

  async create(box: any): Promise<void> {
    const created = await this.#db.BoxSell.create(box, { raw: true });
  }

  async getAllByPostalCode(postalCode: string): Promise<BoxSell[]> {
    const boxs = await this.#db.BoxSell.findAll({
      where: { postalCode: postalCode },
    });

    return boxs.map((o) => o);
  }

  async getAllByCity(city: string): Promise<BoxSell[]> {
    const boxs = await this.#db.BoxSell.findAll({
      where: { city: city },
    });

    return boxs.map((o) => o);
  }

  async getAll(): Promise<BoxSell[]> {
    const boxs = await this.#db.BoxSell.findAll({ raw: true });
    return boxs.map((o) => o);
  }

  /*async remove(box: BoxSell): Promise<boolean> {
    return this.#db.BoxSell.destroy({
      limit: 1,
      where: {
        id: box.id!,
      },
    }).then((n) => n === 1);
  }
  async update(box: BoxSell): Promise<BoxSell> {
    await this.#db.BoxSell.update(box, {
      limit: 1,
      where: {
        id: box.id!,
      },
      returning: true,
    });

    return this.get(box.id!) as Promise<BoxSell>;
  }

  async get(id: string): Promise<BoxSell | null> {
    const box = await this.#db.BoxSell.findByPk(id, { raw: true });

    if (box == null) {
      return null;
    }
    return box;
  }*/
}
