import { Router } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';
import models from '../models';
import bcrypt from 'bcrypt-nodejs';

export default () => {
  const api = Router();

  api.post('/authenticate', (req, res) => {
    const user = req.body.user;

    models.Users.findOne({
      where: {username: user}
    }).then((user) => {

      if (bcrypt.compareSync(req.body.password, user.password)) {
        // Payload is included in json token
        const payload = {
          user: user.username
        };
        const token = jwt.sign(payload, config.secret, { //secret var to jsonwebtoken
          expiresIn: '24h' // expires in 24 hours
        });

        res.json({
          sucess: true,
          message: 'Welcome!',
          token: token
        });
      } else {
        res.status(403)
            .json({
            success: false,
            message: 'Authentication failed'
          });
      }
    }).catch((error) => {
      res.status(404)
          .json({
          success: false,
          message: 'User not found'
        });
    });
  });

  api.use((req, res, next) => {
    // check header or url parameters or post parameters for token
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    // decode token
    if (token) {
      // verifies secret and checks exp
      jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
          return res.status(403).json({
            success: false,
            message: 'Authentication failed'
          });
        } else {
          // if everything is good, save request for use in other routes
          req.decoded = decoded;
          next(); // let request move to the next route and don't stop here
        }
      });
    } else {
      // if there is no token return an error
      return res.status(403).json({
        sucess: false,
        message: 'No token provided'
      });
    }
  });

  return api;
}
