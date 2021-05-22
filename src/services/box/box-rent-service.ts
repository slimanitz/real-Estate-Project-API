import DbBoxRepository from "../../database/repositories/Box/db-box-rent-repository";
import Box from "../../database/models/box-rent-model";

export default class BoxService {
  #dbBoxRepository = new DbBoxRepository();

  async create(box: Box): Promise<void> {
    await this.#dbBoxRepository.create(box);
  }

  async getAllByPostalCode(postalCode: string): Promise<Box[]> {
    const boxs = await this.#dbBoxRepository.getAllByPostalCode(postalCode);
    return boxs.map((o) => o);
  }

  async getAllByCity(city: string): Promise<Box[]> {
    const boxs = await this.#dbBoxRepository.getAllByCity(city);
    return boxs.map((o) => o);
  }

  async getAll(): Promise<Box[]> {
    const boxs = await this.#dbBoxRepository.getAll();
    return boxs.map((o) => o);
  }
}
