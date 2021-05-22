import BoxSellRepository from "../../database/repositories/Box/db-box-sell-repository";
import Box from "../../database/models/box-sell-model";
import { inject, injectable } from "inversify";
@injectable()
export default class BoxSellService {
  #dbBoxRepository: BoxSellRepository;
  constructor(
    @inject("BoxSellRepository") private boxSellRepository: BoxSellRepository
  ) {
    this.#dbBoxRepository = boxSellRepository;
  }

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
