module.exports = function(sequelize, DataTypes) {
  var Recipe = sequelize.define("Recipe", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    qty1: {
      type: DataTypes.DECIMAL(10, 2),
      validate: {
        len: [1]
      }
    },
    qty2: {
      type: DataTypes.DECIMAL(10, 2),
      validate: {
        len: [1]
      }
    },
    qty3: {
      type: DataTypes.DECIMAL(10, 2),
      validate: {
        len: [1]
      }
    },
    qty4: {
      type: DataTypes.DECIMAL(10, 2),
      validate: {
        len: [1]
      }
    },
    qty5: {
      type: DataTypes.DECIMAL(10, 2),
      validate: {
        len: [1]
      }
    },
    qty6: {
      type: DataTypes.DECIMAL(10, 2),
      validate: {
        len: [1]
      }
    },
    qty7: {
      type: DataTypes.DECIMAL(10, 2),
      validate: {
        len: [1]
      }
    },
    qty8: {
      type: DataTypes.DECIMAL(10, 2),
      validate: {
        len: [1]
      }
    },
    qty9: {
      type: DataTypes.DECIMAL(10, 2),
      validate: {
        len: [1]
      }
    },
    qty10: {
      type: DataTypes.DECIMAL(10, 2),
      validate: {
        len: [1]
      }
    }
  });
  Recipe.associate = function(models) {
    Recipe.belongsTo(models.Inventory, { foreignKey: "ingredient1" });
    Recipe.belongsTo(models.Inventory, { foreignKey: "ingredient2" });
    Recipe.belongsTo(models.Inventory, { foreignKey: "ingredient3" });
    Recipe.belongsTo(models.Inventory, { foreignKey: "ingredient4" });
    Recipe.belongsTo(models.Inventory, { foreignKey: "ingredient5" });
    Recipe.belongsTo(models.Inventory, { foreignKey: "ingredient6" });
    Recipe.belongsTo(models.Inventory, { foreignKey: "ingredient7" });
    Recipe.belongsTo(models.Inventory, { foreignKey: "ingredient8" });
    Recipe.belongsTo(models.Inventory, { foreignKey: "ingredient9" });
    Recipe.belongsTo(models.Inventory, { foreignKey: "ingredient10" });
  };
  return Recipe;
};
