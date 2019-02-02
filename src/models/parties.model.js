module.exports = (Sequelize, sequelize) => {
  const PartyModel = sequelize.define('party', {
    legalName: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    displayName: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: Sequelize.STRING,
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
  }, {
    timestamps: false,
  });
  return PartyModel;
};
