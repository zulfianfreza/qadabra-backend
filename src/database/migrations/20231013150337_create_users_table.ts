import { Knex } from "knex";

const table_name = "users";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(table_name, function (table) {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.string("password").notNullable();
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable(table_name);
}
