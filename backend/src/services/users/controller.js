import db from '../../db';

const User = db.models.User;

export const find = (req, res, next) => {
  // If a query string ?publicAddress=... is given, then filter results
  const whereClause = req.query &&
    req.query.publicAddress && {
      where: { publicAddress: req.query.publicAddress }
    };

  return User.findAll(whereClause)
    .then(users => res.json(users))
    .catch(next);
};

export const get = (_, res, next, id) =>
  User.findById(id)
    .then(user => res.json(user))
    .catch(next);

export const create = (req, res, next) =>
  User.create(req.body)
    .then(user => res.json(user))
    .catch(next);

export const patch = (req, res, next, _id) =>
  User.update(req.body, { where: { _id } })
    .then(user => res.json(user))
    .catch(next);
