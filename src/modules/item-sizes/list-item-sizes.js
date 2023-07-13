import db from "../../db/index.js";

export const listItemSizes = (filter = {}) => {
  return db("itemSizes").where(filter).select("*");
};
