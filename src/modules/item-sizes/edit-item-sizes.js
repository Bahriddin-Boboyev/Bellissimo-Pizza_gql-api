import db from "../../db/index.js";

export const editItemSizes = async ({ id, ...changes }) => {
  const itemSizes = await db("itemSizes").where({ id }).first();

  if (!itemSizes) {
    throw new NotFoundError("Item Sizes not found");
  }

  return (
    await db("itemSizes")
      .where({ id })
      .update({ ...changes })
      .returning("*")
  )[0];
};
