const { Post } = require("../models");

const postData = [
  {
    title: "Tech Blog",
    post_content:
      "This tech blog is a place where developers can share their ideas and thoughts about the latest trends in the tech industry.",
    user_id: 1,
  },
  {
    title: "Buckeyes Win Again!",
    post_content:
      "The Ohio State Buckeyes are the best team in the country. They are the best team in the country because they have the best players, the best coaches, and the best fans.",
    user_id: 2,
  },
  {
    title: "Daily Planner",
    post_content:
      "The Daily Planner is a tool that helps you plan your day. It is a simple and easy to use tool that helps you stay organized and on track with your daily tasks.",
    user_id: 3,
  },
  {
    title: "Note Taker",
    post_content:
      "The Note Taker is a tool that helps you take notes. It is a simple and easy to use tool that helps you stay organized and on track with your daily tasks.",
    user_id: 4,
  },
  {
    title: "Weather Dashboard",
    post_content:
      "The Weather Dashboard is a tool that helps you stay up to date with the weather. It is a simple and easy to use tool that helps you stay organized and on track with your daily tasks.",
    user_id: 5,
  },
  {
    title: "Employee Tracker",
    post_content:
      "The Employee Tracker is a tool that helps you stay up to date with your employees. It is a simple and easy to use tool that helps you stay organized and on track with your daily tasks.",
    user_id: 6,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
