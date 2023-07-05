import { createServer } from "node:http";
import { createSchema, createYoga } from "graphql-yoga";
import { Context, createContext } from "./context";
import resolvers from "./resolvers";
import { readFileSync } from "node:fs";
import path from "node:path";

export const start = () => {
  const schema = createSchema<Context>({
    typeDefs: readFileSync(path.join(__dirname, "./schema.graphql"), {
      encoding: "utf-8",
    }),
    resolvers,
  });

  const yoga = createYoga({
    schema,
    context: ({ request }) => {
      return createContext(request);
    },
  });

  const server = createServer(yoga);

  server.listen(4000, () => {
    console.info("Server is running on http://localhost:4000");
  });
};
