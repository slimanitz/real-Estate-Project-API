import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({
  schema: "properties",
  tableName: "box_sell",
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
    type: DataType.INTEGER,
    allowNull: false,
  })
  public price!: number;

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
    type: DataType.STRING,
    allowNull: false,
  })
  public postalCode!: String;

  @Column({
    field: "publish_date",
    type: DataType.DATEONLY,
    allowNull: false,
    defaultValue: new Date(),
  })
  public publishDate!: Date;

  @Column({
    field: "remove_date",
    type: DataType.DATEONLY,
    allowNull: true,
  })
  public removeDate!: Date;

  @Column({
    field: "url",
    type: DataType.STRING,
    allowNull: false,
  })
  public url!: String;
}
