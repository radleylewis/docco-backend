module.exports = (sequelize, Sequelize) => {
  const PartyModel = sequelize.define('Party', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    legal_name: {
      type: Sequelize.CHAR,
      allowNull: false,
      unique: true,
    },
    display_name: {
      type: Sequelize.CHAR,
      allowNull: false,
      unique: true,
    },
    email: {
      type: Sequelize.CHAR,
      allowNull: false,
      unique: true,
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: false,
    },
    authorisation: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: false,
    },
  }, {});
  return PartyModel;
};