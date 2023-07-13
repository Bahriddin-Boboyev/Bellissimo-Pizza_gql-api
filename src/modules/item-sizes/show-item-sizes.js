import db from "../../db/index.js";

export const showItemSizes = async ({ id }) => {
  const itemSizes = await db("itemSizes").where({ id }).first();

  if (!itemSizes) {
    throw new Error("Not Found");
  }

  return itemSizes;
};
