import { readFileSync } from "fs";
import { join } from "path";
import { addItemSizes } from "./add-item-sizes.js";
import { listItemSizes } from "./list-item-sizes.js";
import { showItemSizes } from "./show-item-sizes.js";
import { editItemSizes } from "./edit-item-sizes.js";
import { removeItemSizes } from "./remove-item-sizes.js";
import { isLoggedIn } from "../../graphql/is-loggedin.js";

const typeDefs = readFileSync(
  join(process.cwd(), "src", "modules", "item-sizes", "_schema.gql"),
  "utf8"
);

const resolvers = {
  Query: {
    itemSizes: (_, __, contextValue) => {
      isLoggedIn(contextValue);
      return listItemSizes();
    },
    itemSize: (_, args) => {
      return showItemSizes({ id: args.id });
    },
  },
  Mutation: {
    createItemSizes: async (_, args) => {
      isLoggedIn(contextValue);
      const result = await addItemSizes(args.input);
      return result;
    },
    updateItemSizes: (_, args, contextValue) => {
      isLoggedIn(contextValue);
      return editItemSizes({ id: args.id, ...args.input });
    },
    removeItemSizes: (_, args) => {
      isLoggedIn(contextValue);
      return removeItemSizes({ id: args.id });
    },
  },
};

export default { typeDefs, resolvers };
