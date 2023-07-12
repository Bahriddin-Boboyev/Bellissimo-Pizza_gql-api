import bcrypt from "bcryptjs";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    {
      first_name: "John",
      last_name: "Doe",
      username: "johndoe",
      password: bcrypt.hashSync("john123", 10),
    },
    {
      first_name: "Samar",
      last_name: "Badriddinov",
      username: "sammi",
      password: bcrypt.hashSync("sammi123", 10),
    },
  ]);
};
