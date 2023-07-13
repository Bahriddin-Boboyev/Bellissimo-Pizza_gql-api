import db from "../../db/index.js";

export const removeItemSizes = async ({ id }) => {
  const user = await db("itemSizes").where({ id }).first();

  if (!user) {
    throw new NotFoundError("Item Sizes not found");
  }

  return (await db("itemSizes").where({ id }).delete().returning("*"))[0];
};
