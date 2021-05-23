import { Container } from "inversify";
import BoxRentService from "../services/box/box-rent-service";
import BoxSellService from "../services/box/box-sell-service";
import BoxSellRepository from "../database/repositories/Box/db-box-sell-repository";
import BoxRentRepository from "../database/repositories/Box/db-box-rent-repository";

const container = new Container();

//DB

//Services
container.bind<BoxRentService>("BoxRentService").to(BoxRentService);
container.bind<BoxSellService>("BoxSellService").to(BoxSellService);

//Repositories
container.bind<BoxRentRepository>("BoxRentRepository").to(BoxRentRepository);
container.bind<BoxSellRepository>("BoxSellRepository").to(BoxSellRepository);

export default container;
