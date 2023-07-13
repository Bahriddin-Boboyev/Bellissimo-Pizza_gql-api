/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("itemSizes").del();
  await knex("itemSizes").insert([
    {
      item_id: "1",
      price: 50000,
      size: "medium",
      photo: "img", // xozircha img tatbiq qilinmadi.
    },
    {
      item_id: "2",
      price: 56000,
      size: "medium",
      photo: "img", // xozircha img tatbiq qilinmadi.
    },
    {
      item_id: "1",
      price: 6000,
      size: "small",
      photo: "img", // xozircha img tatbiq qilinmadi.
    },
  ]);
};
