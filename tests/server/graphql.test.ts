import { Server } from 'http';
import supertest from 'supertest';
import { expect } from 'chai';
import app from '../../server/server';

let server: Server;

beforeAll(() => {
  server = app.listen(2801);
});

describe('GET /graphql?query={hello}', () => {
  it('should return 200 OK', () => {
    return supertest(server)
      .get('/graphql?query={hello}')
      .expect(200)
      .then((res) => {
        expect(res.body).have.property('data');
      });
  });
});

describe('POST /graphql with query data', () => {
  it('should return 200 OK', () => {
    return supertest(server)
      .post('/graphql')
      .set('Content-Type', 'application/json')
      .send('{"query": "{ hello }"}')
      .expect(200)
      .then((res) => {
        expect(res.body).have.property('data');
      });
  });
});

afterAll(() => {
  server.close();
});
