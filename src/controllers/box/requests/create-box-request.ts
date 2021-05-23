import { plainToClassFromExist } from "class-transformer";
import * as Validator from "class-validator";
import { Status } from "../../../database/enums/status-enum";

import { Box } from "../../../interfaces/box-interface";

export class CreateBoxRequest implements Box {
  constructor(box: Box) {
    plainToClassFromExist(this, box, {
      excludeExtraneousValues: true,
    });
  }

  @Validator.IsString()
  @Validator.IsNotEmpty()
  owner: string;

  @Validator.IsString()
  @Validator.IsNotEmpty()
  city: string;

  @Validator.IsNumber()
  @Validator.IsNotEmpty()
  price: number;

  @Validator.IsNotEmpty()
  @Validator.IsNumber()
  size: number;

  @Validator.IsString()
  @Validator.IsNotEmpty()
  departement: string;

  @Validator.IsString()
  @Validator.IsNotEmpty()
  postalCode: string;

  @Validator.IsString()
  @Validator.IsNotEmpty()
  url: string;

  @Validator.IsString()
  @Validator.IsNotEmpty()
  ref: string;

  @Validator.IsDate()
  @Validator.IsNotEmpty()
  publishDate: Date;

  @Validator.IsDate()
  removeDate?: Date;

  @Validator.IsEnum(Status)
  status?: Status;
}
