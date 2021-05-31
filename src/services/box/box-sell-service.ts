import BoxSellRepository from "../../database/repositories/Box/db-box-sell-repository";
import { inject, injectable } from "inversify";
import { Box } from "../../interfaces/box-interface";

@injectable()
export default class BoxSellService {
  #dbBoxRepository: BoxSellRepository;
  constructor(
    @inject("BoxSellRepository") public boxSellRepository: BoxSellRepository
  ) {
    this.#dbBoxRepository = boxSellRepository;
  }

  async create(box: Box): Promise<void> {
    if (!this.isStored(box.ref)) {
      await this.#dbBoxRepository.create(box);
    }
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

  async isStored(ref: string): Promise<boolean> {
    const box = await this.#dbBoxRepository.getByRef(ref);
    if (box) {
      return true;
    }
    return false;
  }
}
