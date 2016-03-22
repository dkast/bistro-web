import { Router } from 'express';
import authentication from '../middleware/auth';
import users from './users';

export default () => {
  const api = Router();

  api.get('/', (req, res) => {
    res.status(200)
        .json({
          message: 'Welcome to the Bistro API!',
          version: '1.0'
        });
  });

  // Below this point, authentication is required
  // api middleware to verify a token
  api.use(authentication());

  api.use(users());

  return api;
}
