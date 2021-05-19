import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({
  schema: "properties",
  tableName: "box",
  timestamps: false,
})
export default class DbBox extends Model<DbBox> {
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
  public owner!: string;

  @Column({
    field: "city",
    type: DataType.STRING,
    allowNull: false,
  })
  public city!: string;

  @Column({
    field: "price",
    type: DataType.STRING,
    allowNull: false,
  })
  public price!: string;

  @Column({
    field: "size",
    type: DataType.INTEGER,
    allowNull: true,
  })
  public size?: number;

  @Column({
    field: "departement",
    type: DataType.STRING,
    allowNull: false,
  })
  public departement!: string;

  @Column({
    field: "postal_code",
    type: DataType.INTEGER,
    allowNull: false,
  })
  public postalCode!: String;

  @Column({
    field: "publish-date",
    type: DataType.DATEONLY,
    allowNull: false,
  })
  public publishDate!: Date;

  @Column({
    field: "remove-date",
    type: DataType.DATEONLY,
    allowNull: false,
  })
  public removeDate!: Date;
}
