import supertest from 'supertest';
import { expect } from 'chai';
import server from '../../server/server';

describe('GET /', () => {
  it('should return 200 OK', () => {
    return supertest(server)
      .get('/')
      .expect(200)
      .then((res) => {
        expect(res.body).have.property('message');
      });
  });

  afterAll(() => {
      server.close();
  });
});
