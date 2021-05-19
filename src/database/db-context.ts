import { Sequelize } from "sequelize-typescript";
import DbBox from "./models/box-model";
import { sequelizeConnection } from "../database/database-connection";
import DbTableName from "./db-table-name";

export class DbContext {
  #sequelize: Sequelize;
  public Box: typeof DbBox;

  public constructor() {
    this.#sequelize = sequelizeConnection;

    this.#sequelize.addModels([DbBox]);

    this.Box = DbBox;
  }

  public async sync(options: any) {
    console.log("Creating the schema");
    await this.createMissingSchemas();
    this.#sequelize.sync(options);
    console.log("Schema created");
  }

  // Sequelizer does not synchronize the schema by itself. Here we compare between
  // the schemas defined in the table definitions with what's already create in
  // the database and create the missing schemas.
  private async createMissingSchemas() {
    const tableDefinitions = Object.values(this.#sequelize.models).map(
      (x) => x.getTableName() as DbTableName
    );
    const schemaNames = new Set(tableDefinitions.map((x) => x.schema));

    const existingSchema = (await this.#sequelize.showAllSchemas(
      {}
    )) as unknown[] as string[];
    existingSchema.forEach((schema) => {
      if (schemaNames.has(schema)) {
        schemaNames.delete(schema);
      }
    });

    for (const schemaName of schemaNames.values()) {
      await this.#sequelize.createSchema(schemaName, {});
    }
  }
}
