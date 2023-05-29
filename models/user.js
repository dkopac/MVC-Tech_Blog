const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

// User Model
class User extends Model {
  // Check Password
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

// User Init
User.init(
  {
    // User ID
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // User Name
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // User Email
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        // Email must be valid
        isEmail: true,
      },
    },
    // User Password
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        // Password must be at least 8 characters long
        len: [8],
      },
    },
  },
  {
    // Hash Password
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;
