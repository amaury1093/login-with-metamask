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

export const get = (req, res, next) =>
  User.findById(req.params.userId)
    .then(user => res.json(user))
    .catch(next);

export const create = (req, res, next) =>
  User.create(req.body)
    .then(user => res.json(user))
    .catch(next);

export const patch = (req, res, next) =>
  User.findById(req.params.userId)
    .then(user => {
      Object.assign(user, req.body);
      return user.save();
    })
    .then(user => res.json(user))
    .catch(next);
