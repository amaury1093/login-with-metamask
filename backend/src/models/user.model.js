import Sequelize from 'sequelize';

export default function(sequelize) {
  const User = sequelize.define('User', {
    nonce: Sequelize.STRING,
    publicAddress: { type: Sequelize.STRING, unique: true },
    username: { type: Sequelize.STRING, unique: true }
  });
}
