const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment } = require("../models");

// GET all posts for homepage
router.get("/", (req, res) => {
  Post.findAll({
    attributes: ["id", "title", "content", "created_at"],
    include: [
      { model: User, attributes: ["username"] },
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: { model: User, attributes: ["username"] },
      },
    ],
  })
    .then((dbPostData) => {
      console.log(dbPostData);
      // serialize data before passing to template
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      // pass data to template
      res.render("homepage", { posts, loggedIn: req.session.loggedIn });
    })
    .catch((err) => res.status(500).json(err));
});

// GET a single post
router.get("/post/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "title", "content", "created_at"],
    include: [
      { model: User, attributes: ["username"] },
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: { model: User, attributes: ["username"] },
      },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      // serialize the data
      const post = dbPostData.get({ plain: true });
      // pass data to template
      res.render("single-post", { post, loggedIn: req.session.loggedIn });
    })
    .catch((err) => res.status(500).json(err));
});

// GET login page
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

// GET signup page
router.get("/signup", (req, res) => {
  res.render("signup");
});

module.exports = router;
