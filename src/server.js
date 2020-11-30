import { GraphQLServer } from "graphql-yoga";

require('dotenv').config();

const typeDefs = `
    type Query {
        hello: String!
    }
`;

const resolvers = {
    Query: {
        hello: () => "Hi"
    }
};

const server = new GraphQLServer({
    typeDefs,
    resolvers
});

const PORT = process.env.PORT || 4000;

server.start({ port: PORT }, () => {
    console.log(`Server running on http://localhost:${PORT}`)
});
