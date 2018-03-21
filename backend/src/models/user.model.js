import Sequelize from 'sequelize';

export default function(sequelize) {
  const User = sequelize.define('User', {
    nonce: {
      allowNull: false,
      type: Sequelize.INTEGER.UNSIGNED,
      defaultValue: () => Math.floor(Math.random() * 10000) // Initialize with a random nonce
    },
    publicAddress: {
      allowNull: false,
      type: Sequelize.STRING,
      unique: true,
      validate: { isLowercase: true }
    },
    username: {
      type: Sequelize.STRING,
      unique: true
    }
  });
}
