const User = require("./user");
const Post = require("./post");
const Comment = require("./comment");

// Post belongs to User
Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// Comment belongs to User
Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// Post has many comments
Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

module.exports = { User, Post, Comment };
