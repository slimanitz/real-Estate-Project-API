import {
  interfaces,
  controller,
  httpGet,
  httpPost,
  httpDelete,
  request,
  queryParam,
  response,
  requestParam,
  requestBody,
} from "inversify-express-utils";
import { inject } from "inversify";
import * as express from "express";

import BoxService from "../../services/box/box-rent-service";

@controller("/boxs/rent")
export class BoxRentController implements interfaces.Controller {
  #boxService: BoxService;
  constructor(@inject("BoxRentService") private boxRentService: BoxService) {
    this.#boxService = boxRentService;
  }

  @httpPost("/")
  public async create(
    @requestBody() body: any,
    @response() res: express.Response
  ) {
    await this.#boxService.create(body);
    res.status(200);
  }

  @httpGet("/postalcode/:code")
  public async getAllByPostalCode(
    @response() res: express.Response,
    @requestParam("code") postalCode: string
  ) {
    const boxs = await this.#boxService.getAllByPostalCode(postalCode);
    res.status(200).json(boxs);
  }

  @httpGet("/city/:city")
  public async getAllByCity(
    @response() res: express.Response,
    @requestParam("city") city: string
  ) {
    const boxs = await this.#boxService.getAllByCity(city);
    res.status(200).json(boxs);
  }

  @httpGet("/")
  public async getAll(@response() res: express.Response) {
    const boxs = await this.#boxService.getAll();
    res.status(200).json(boxs);
  }
}
