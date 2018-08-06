import app from './server';

const server = app.listen(app.get('port'), () => {
    console.log(('App is running at http://localhost:%d in %s mode'),
      app.get('port'), app.get('env'));
    console.log(('App GraphQL server is running at http://localhost:%d/graphql in %s mode'),
      app.get('port'), app.get('env'));
    console.log('Press CTRL-C to stop\n');
  });

export default server;
