const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return product.init(sequelize, DataTypes);
}

class product extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    available_qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 100
    },
    product_image: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    User_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.ENUM('AVAILABLE','OUT'),
      allowNull: true,
      defaultValue: "AVAILABLE"
    }
  }, {
    sequelize,
    tableName: 'product',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "User_id_idx",
        using: "BTREE",
        fields: [
          { name: "User_id" },
        ]
      },
    ]
  });
  }
}
