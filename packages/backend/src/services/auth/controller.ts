import * as ethUtil from 'ethereumjs-util';
import * as sigUtil from 'eth-sig-util';
import { Request, RequestHandler, Response } from 'express';
import * as jwt from 'jsonwebtoken';

import { config } from '../../config';
import { User } from '../../models/user.model';

export const create = (req: Request, res: Response, next: RequestHandler) => {
  const { signature, publicAddress } = req.body;
  if (!signature || !publicAddress)
    return res
      .status(400)
      .send({ error: 'Request should have signature and publicAddress' });

  return (
    User.findOne({ where: { publicAddress } })
      ////////////////////////////////////////////////////
      // Step 1: Get the user with the given publicAddress
      ////////////////////////////////////////////////////
      .then((user: User) => {
        if (!user)
          return res.status(401).send({
            error: `User with publicAddress ${publicAddress} is not found in database`
          });
        return user;
      })
      ////////////////////////////////////////////////////
      // Step 2: Verify digital signature
      ////////////////////////////////////////////////////
      .then((user: User) => {
        const msg = `I am signing my one-time nonce: ${user.nonce}`;

        // We now are in possession of msg, publicAddress and signature. We
        // will use a helper from eth-sig-util to extract the address from the signature
        const msgBufferHex = ethUtil.bufferToHex(Buffer.from(msg, 'utf8'));
        const address = sigUtil.recoverPersonalSignature({
          data: msgBufferHex,
          sig: signature
        });

        // The signature verification is successful if the address found with
        // sigUtil.recoverPersonalSignature matches the initial publicAddress
        if (address.toLowerCase() === publicAddress.toLowerCase()) {
          return user;
        } else {
          return res
            .status(401)
            .send({ error: 'Signature verification failed' });
        }
      })
      ////////////////////////////////////////////////////
      // Step 3: Generate a new nonce for the user
      ////////////////////////////////////////////////////
      .then((user: User) => {
        user.nonce = Math.floor(Math.random() * 10000);
        return user.save();
      })
      ////////////////////////////////////////////////////
      // Step 4: Create JWT
      ////////////////////////////////////////////////////
      .then(
        (user: User) =>
          new Promise((resolve, reject) =>
            // https://github.com/auth0/node-jsonwebtoken
            jwt.sign(
              {
                payload: {
                  id: user.id,
                  publicAddress
                }
              },
              config.secret,
              {},
              (err, token) => {
                if (err) {
                  return reject(err);
                }
                return resolve(token);
              }
            )
          )
      )
      .then((accessToken: string) => res.json({ accessToken }))
      .catch(next)
  );
};
