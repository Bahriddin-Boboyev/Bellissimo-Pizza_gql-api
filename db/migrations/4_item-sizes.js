/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable("itemSizes", (table) => {
    table.increments("id");
    table.double("price").notNullable();
    table.string("size", 60).notNullable();
    table.string("photo", 300);
    table.integer("item_id").notNullable().references("id").inTable("items");
    table.boolean("is_deleted").defaultTo(false);
    table.timestamp(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTable("itemSizes");
};
