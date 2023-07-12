import { readFileSync } from "fs";
import { join } from "path";
import { listItems } from "./list-items.js";
import { showItems } from "./show-items.js";
import { isLoggedIn } from "../../graphql/is-loggedin.js";

const typeDefs = readFileSync(
  join(process.cwd(), "src", "modules", "items", "_schema.gql"),
  "utf8"
);

const resolvers = {
  Query: {
    items: (_, __, contextValue) => {
      isLoggedIn(contextValue);
      return listItems();
    },
    item: (_, args) => {
      return showItems({ id: args.id });
    },
  },
};

export default { typeDefs, resolvers };
