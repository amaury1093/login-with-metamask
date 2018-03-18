import Sequelize from 'sequelize';

import User from './models/user.model';

const sequelize = new Sequelize(null, null, null, {
  dialect: 'sqlite',
  storage: 'db.sqlite',
  logging: false
});

// Init all models
User(sequelize);

sequelize.sync();

export default sequelize;
