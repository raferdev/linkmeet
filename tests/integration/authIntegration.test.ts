import supertest from 'supertest';

import app from '../../src/app.js';
import AuthFactory from '../factory/AuthFactory.js';

describe('AUTHENTICATION TESTS', () => {
  it('USER CAN SIGNUP: Register tests should return status 200.', async () => {
    const newUser = AuthFactory.SignUpUser();
    const response = await supertest(app).post('/signup').send(newUser);

    expect(response.statusCode).toEqual(201);
  });
});
