import jwt from 'jsonwebtoken';

import db from '../../db';

const User = db.models.User;

export const create = (req, res) => {
  const { nonce, publicAddress } = req.body;
  console.log(nonce, publicAddress);

  // Creating a JWT here
  // https://github.com/auth0/node-jsonwebtoken
  return new Promise((resolve, reject) => {
    jwt.sign(
      {
        payload: {
          nonce,
          publicAddress
        }
      },
      'shhhhh',
      null,
      (err, token) => {
        if (err) {
          return reject(err);
        }
        return resolve(token);
      }
    );
  }).then(accessToken => res.json({ accessToken }));
};
