import { Server } from 'http';
import express, { Express } from 'express';
import * as dotenv from 'dotenv';
import * as bodyParser from 'body-parser';
import graphqlHTTP from 'express-graphql';
import { buildSchema, GraphQLSchema } from 'graphql';

import * as homeController from './controllers/home.controller';

dotenv.config();
const app: Express = express();
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', homeController.index);

const schema: GraphQLSchema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  hello: () => {
    return 'Hello world!';
  }
};

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true
}));

const server: Server = app.listen(app.get('port'), () => {
  console.log(('App is running at http://localhost:%d in %s mode'),
    app.get('port'), app.get('env'));
  console.log(('App GraphQL server is running at http://localhost:%d/graphql in %s mode'),
    app.get('port'), app.get('env'));
  console.log('Press CTRL-C to stop\n');
});

export default server;
