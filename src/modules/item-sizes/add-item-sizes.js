import db from "../../db/index.js";

export const addItemSizes = async (payload) => {
  const result = await db("itemSizes")
    .insert({ ...payload })
    .returning("*");

  return result[0];
};
