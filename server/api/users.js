import { Router } from 'express';
import models from '../models';
import bcrypt from 'bcrypt-nodejs';

export default () => {
  const api = Router();

  api.route('/users')
    // Get list of users
    .get((req, res) => {
      //Logic to send all users from DB
      models.Users.findAll({
        attributes: ['id', 'username', 'name']
      }).then((users) => {
        res.json({
          users: users
        });
      }).catch((error) => {
        console.log(error);
        res.status(404)
          .json({
            message: 'Users not found'
          });
      });

    })

    // Create user
    .post((req, res) => {
      // Encrypt password
      const hash = bcrypt.hashSync(req.body.password);

      models.Users.create({
        username: req.body.username,
        name: req.body.name,
        password: hash
      }).then((user) => {
        res.status(201)
          .json({
            success: true,
            user: user
          });
      }).catch((error) => {
        console.log(error);
        res.status(500)
          .json({
            message: 'Unexpected Error has occurred'
          });
      });
    });

    return api;
}
