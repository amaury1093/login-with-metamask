import { Request, RequestHandler, Response } from 'express';

import { User } from '../../models/user.model';

export const find = (req: Request, res: Response, next: RequestHandler) => {
  // If a query string ?publicAddress=... is given, then filter results
  const whereClause = req.query &&
    req.query.publicAddress && {
      where: { publicAddress: req.query.publicAddress }
    };

  return User.findAll(whereClause)
    .then((users: User[]) => res.json(users))
    .catch(next);
};

export const get = (req: Request, res: Response, next: RequestHandler) => {
  // AccessToken payload is in req.user.payload, especially its `id` field
  // UserId is the param in /users/:userId
  // We only allow user accessing herself, i.e. require payload.id==userId
  if ((req as any).user.payload.id !== +req.params.userId) {
    return res.status(401).send({ error: 'You can can only access yourself' });
  }
  return User.findByPk(req.params.userId)
    .then((user: User) => res.json(user))
    .catch(next);
};

export const create = (req: Request, res: Response, next: RequestHandler) =>
  User.create(req.body)
    .then((user: User) => res.json(user))
    .catch(next);

export const patch = (req: Request, res: Response, next: RequestHandler) => {
  // Only allow to fetch current user
  if ((req as any).user.payload.id !== +req.params.userId) {
    return res.status(401).send({ error: 'You can can only access yourself' });
  }
  return User.findByPk(req.params.userId)
    .then((user: User) => {
      Object.assign(user, req.body);
      return user.save();
    })
    .then((user: User) => res.json(user))
    .catch(next);
};
