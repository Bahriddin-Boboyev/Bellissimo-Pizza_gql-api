import { makeExecutableSchema } from "@graphql-tools/schema";
import usersModule from "../modules/users/_index.js";
import itemsModule from "../modules/items/_index.js";

const typdefsArr = [usersModule.typeDefs, itemsModule.typeDefs];
const resolversArr = [usersModule.resolvers, itemsModule.resolvers];

export const schema = makeExecutableSchema({
  typeDefs: typdefsArr,
  resolvers: resolversArr,
});
