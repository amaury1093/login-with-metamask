import Sequelize from 'sequelize';

import User from './models/user.model';

import path from 'path';
import os from 'os';

const sequelize = new Sequelize(null, null, null, {
  dialect: 'sqlite',
  storage: path.join(os.tmpdir(), 'db.sqlite'),
  logging: false
});

// Init all models
User(sequelize);

sequelize.sync();

export default sequelize;
