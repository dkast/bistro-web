import { Router } from 'express';
import config from '../config';
import models from '../models';
import bcrypt from 'bcrypt-nodejs';

export default () => {
  const api = Router();

  api.route('/initialize')
    .get((req, res) => {
      // Initialize DB
      // TODO: Assign random password
      const hash = bcrypt.hashSync('root');

      models.Users.sync({ force: true}).then(() =>{
        //Table created
        models.Users.create({
          username: 'root',
          name: 'Admin root',
          password: hash,
          isAdmin: true
        })
      }).then((user) => {
        res.status(201)
          .json({
            success: true,
            message: 'User root created'
          });
      }).catch((error) => {
        console.log(error);
        res.status(500)
          .json({
            message: 'User table cannot be created'
          });
      });
    });

    return api;
}
