import { Table, Column, Model, DataType } from "sequelize-typescript";
import { Status } from "../enums/status-enum";

@Table({
  schema: "properties",
  tableName: "box_rent",
  timestamps: false,
})
export default class DbBoxRent extends Model<DbBoxRent> {
  @Column({
    field: "id",
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
  })
  public id?: string;

  @Column({
    field: "owner",
    type: DataType.STRING,
    allowNull: false,
  })
  public owner: string;

  @Column({
    field: "city",
    type: DataType.STRING,
    allowNull: false,
  })
  public city: string;

  @Column({
    field: "price",
    type: DataType.INTEGER,
    allowNull: false,
  })
  public price: number;

  @Column({
    field: "size",
    type: DataType.INTEGER,
    allowNull: true,
  })
  public size: number;

  @Column({
    field: "departement",
    type: DataType.STRING,
    allowNull: false,
  })
  public departement: string;

  @Column({
    field: "postal_code",
    type: DataType.STRING,
    allowNull: false,
  })
  public postalCode: string;

  @Column({
    field: "publish_date",
    type: DataType.DATEONLY,
    allowNull: false,
  })
  public publishDate: Date;

  @Column({
    field: "remove_date",
    type: DataType.DATEONLY,
    allowNull: true,
    defaultValue: null,
  })
  public removeDate?: Date;

  @Column({
    field: "url",
    type: DataType.STRING,
    allowNull: false,
  })
  public url: string;

  @Column({
    field: "ref",
    type: DataType.STRING,
    allowNull: false,
  })
  public ref: string;

  @Column({
    field: "status",
    type: DataType.ENUM("Active", "Gone"),
    allowNull: false,
    defaultValue: Status.Active,
  })
  public status?: Status;
}
