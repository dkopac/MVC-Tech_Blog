const User = require("./user");
const Post = require("./post");
const Comment = require("./comment");

// User has many posts
User.hasMany(Post, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// Post belongs to User
Post.belongsTo(User, {
  foreignKey: "user_id",
});

// User has many comments
User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// Comment belongs to User
Comment.belongsTo(User, {
  foreignKey: "user_id",
});

// Post has many comments
Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

// Comment belongs to Post
Comment.belongsTo(Post, {
  foreignKey: "post_id",
});

module.exports = { User, Post, Comment };
