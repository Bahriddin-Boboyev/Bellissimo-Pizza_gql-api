import db from "../../db/index.js";

export const showItems = async ({ id }) => {
  const item = await db("items").where({ id }).first();

  if (!item) {
    throw new Error("Not Found");
  }

  return item;
};
