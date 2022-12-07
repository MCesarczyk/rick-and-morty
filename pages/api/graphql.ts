import { makeSchema, queryType } from 'nexus';
import { ApolloServer } from 'apollo-server-micro';
import Cors from "micro-cors";

const Query = queryType({
  definition(t) {
    t.string('hello', { resolve: () => 'hello world!' })
  },
});

const schema = makeSchema({
  types: [Query],
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const cors = Cors();

const server = new ApolloServer({
  schema,
});

const startServer = server.start();

export default cors(async (req, res) => {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }

  await startServer;
  await server.createHandler({ path: "/api/graphql" })(req, res);
});
