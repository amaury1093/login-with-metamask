import * as path from 'path';
import * as os from 'os';
import { INTEGER, Sequelize, STRING } from 'sequelize';

import { User } from './models';

export const sequelize = new Sequelize(
  'login-with-metamask-database',
  '',
  undefined,
  {
    dialect: 'sqlite',
    storage: path.join(os.tmpdir(), 'db.sqlite'),
    logging: false
  }
);

// Init all models
User.init(
  {
    nonce: {
      allowNull: false,
      type: INTEGER.UNSIGNED,
      defaultValue: () => Math.floor(Math.random() * 10000) // Initialize with a random nonce
    },
    publicAddress: {
      allowNull: false,
      type: STRING,
      unique: true,
      validate: { isLowercase: true }
    },
    username: {
      type: STRING,
      unique: true
    }
  },
  {
    tableName: 'users',
    modelName: 'user',
    sequelize // This bit is important
  }
);
