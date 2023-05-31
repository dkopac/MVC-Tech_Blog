const { Post } = require("../models");

const postData = [
  {
    title: "Tech Blog",
    content:
      "This tech blog is a place where developers can share their ideas and thoughts about the latest trends in the tech industry.",
    user_id: 1,
  },
  {
    title: "Buckeyes Win Again!",
    content:
      "The Ohio State Buckeyes are the best team in the country. They are the best team in the country because they have the best players, the best coaches, and the best fans.",
    user_id: 2,
  },
  {
    title: "Daily Planner",
    content:
      "The Daily Planner is a tool that helps you plan your day. It is a simple and easy to use tool that helps you stay organized and on track with your daily tasks.",
    user_id: 3,
  },
  {
    title: "Note Taker",
    content:
      "The Note Taker is a tool that helps you take notes. It is a simple and easy to use tool that helps you stay organized and on track with your daily tasks.",
    user_id: 4,
  },
  {
    title: "Weather Dashboard",
    content:
      "The Weather Dashboard is a tool that helps you stay up to date with the weather. It is a simple and easy to use tool that helps you stay organized and on track with your daily tasks.",
    user_id: 5,
  },
  {
    title: "Employee Tracker",
    content:
      "The Employee Tracker is a tool that helps you stay up to date with your employees. It is a simple and easy to use tool that helps you stay organized and on track with your daily tasks.",
    user_id: 6,
  },
  {
    title: "Cavs Nation",
    content:
      "The Cleveland Cavaliers have made the Playoffs again for the first time since LeBron James left for LA",
    user_id: 7,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
