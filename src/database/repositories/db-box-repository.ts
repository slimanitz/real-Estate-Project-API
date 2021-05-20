/*import { DbContext } from "../../db-context";
import UserRepository from "../../../repositories/account/user-repository";
import { Box } from "../../../models/new/user/user";
import { TYPES } from "../../../infrastructure/ioc/types";
import DbUserMapper from "./mappings/db-user-mapper";
import DbUser from "src/persistence/models/account/db-user";*/

import Box from "../models/box-rent-model";

import { DbContext } from "../db-context";

export default class DbUserRepository {
  #db: DbContext = new DbContext();

  async create(box: Box): Promise<void> {
    const created = await this.#db.Box.create(box, { raw: true });
  }

  async getAllByPostalCode(postalCode: string): Promise<Box[]> {
    const boxs = await this.#db.Box.findAll({
      where: { postalCode: postalCode },
    });

    return boxs.map((o) => o);
  }

  async getAllByCity(city: string): Promise<Box[]> {
    const boxs = await this.#db.Box.findAll({
      where: { city: city },
    });

    return boxs.map((o) => o);
  }

  async getAll(): Promise<Box[]> {
    const boxs = await this.#db.Box.findAll({ raw: true });
    return boxs.map((o) => o);
  }

  /*async remove(box: Box): Promise<boolean> {
    return this.#db.Box.destroy({
      limit: 1,
      where: {
        id: box.id!,
      },
    }).then((n) => n === 1);
  }
  async update(box: Box): Promise<Box> {
    await this.#db.Box.update(box, {
      limit: 1,
      where: {
        id: box.id!,
      },
      returning: true,
    });

    return this.get(box.id!) as Promise<Box>;
  }

  async get(id: string): Promise<Box | null> {
    const box = await this.#db.Box.findByPk(id, { raw: true });

    if (box == null) {
      return null;
    }
    return box;
  }*/
}
