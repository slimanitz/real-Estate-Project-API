import * as Validator from "class-validator";
import DbBox from "../../../database/models/box-rent-model";

export class CreateRequest {
  @Validator.IsString()
  @Validator.IsNotEmpty()
  public owner!: string;

  @Validator.IsString()
  @Validator.IsNotEmpty()
  public city!: string;

  @Validator.IsString()
  @Validator.IsNotEmpty()
  public price!: string;

  @Validator.IsNumber()
  @Validator.IsNotEmpty()
  public size!: number;

  @Validator.IsString()
  @Validator.IsNotEmpty()
  public departement!: string;

  @Validator.IsString()
  @Validator.IsNotEmpty()
  public postalCode!: string;

  @Validator.IsDate()
  @Validator.IsNotEmpty()
  public publishDate!: Date;

  @Validator.IsDate()
  public removeDate!: Date;
}
