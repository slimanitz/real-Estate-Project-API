import {
  controller,
  BaseHttpController,
  httpPost,
  requestBody,
  response,
  requestParam,
  httpPut,
  httpGet,
} from "inversify-express-utils";
import * as express from "express";

import BoxService from "../services/box-service";
import Box from "../database/models/box-rent-model";
import { CreateRequest } from "./requests/box/box-create-request";

@controller("/boxs")
export class AccountController extends BaseHttpController {
  #boxService = new BoxService();

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
