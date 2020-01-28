module.exports = function(sequelize, DataTypes) {
  var Inventory = sequelize.define("Inventory", {
    item: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    unit: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  Inventory.associate = function(models) {
    Inventory.hasMany(models.Recipe);
  };

  return Inventory;
};
