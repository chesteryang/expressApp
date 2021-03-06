import { Server } from 'http';
import supertest from 'supertest';
import { expect } from 'chai';
import app from '../../server/server';

let server: Server;

beforeAll(() => {
  server = app.listen(2800);
});

describe('GET /', () => {
  it('should return 200 OK', () => {
    return supertest(server)
      .get('/')
      .expect(200)
      .then((res) => {
        expect(res.body).have.property('message');
      });
  });
});

afterAll(() => {
  server.close();
});
