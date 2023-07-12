import db from "../../db/index.js";

export const listUsers = (filter = {}) => {
  console.log(filter);
  return db("users").where(filter).select("*");
};
