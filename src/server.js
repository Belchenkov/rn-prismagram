import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";

import schema from "./schema";

require('dotenv').config();

const server = new GraphQLServer({ schema });

server.express.use(logger('dev'));

const PORT = process.env.PORT || 4000;

server.start({ port: PORT }, () => {
    console.log(`Server running on http://localhost:${PORT}`)
});
