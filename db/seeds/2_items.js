/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("items").del();
  await knex("items").insert([
    {
      type: "pitsalar",
    },
    {
      type: "salatlar",
    },
    {
      type: "zakuski",
    },
    {
      type: "ichimliklar",
    },
    {
      type: "desertlar",
    },
  ]);
};
