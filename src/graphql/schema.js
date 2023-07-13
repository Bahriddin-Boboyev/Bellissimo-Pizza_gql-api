import { makeExecutableSchema } from "@graphql-tools/schema";
import usersModule from "../modules/users/_index.js";
import itemsModule from "../modules/items/_index.js";
import itemSizesModule from "../modules/item-sizes/_index.js";

const typdefsArr = [
  usersModule.typeDefs,
  itemsModule.typeDefs,
  itemSizesModule.typeDefs,
];
const resolversArr = [
  usersModule.resolvers,
  itemsModule.resolvers,
  itemSizesModule.resolvers,
];

export const schema = makeExecutableSchema({
  typeDefs: typdefsArr,
  resolvers: resolversArr,
});
