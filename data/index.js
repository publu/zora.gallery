import { GraphQLClient } from "graphql-request"; // GraphQL request client

// Create client
const client = new GraphQLClient(
  // Zora Rinkeby subgraph
  "https://api.thegraph.com/subgraphs/name/publu/zorav1subgraphmumbai"
);

// Export client
export default client;
