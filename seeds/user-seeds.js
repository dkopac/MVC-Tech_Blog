const { User } = require("../models");

const userData = [
  {
    username: "John_S",
    email: "JS@gmail.com",
    password: "password123",
    linkedin: "https://www.linkedin.com/in/john-s-1a2b3c4d5/",
    github: "JohnnyS",
  },
  {
    username: "Jane_D",
    email: "JD@yahoo.com",
    password: "password123",
    linkedin: "https://www.linkedin.com/in/jane-d-1a2b3c4d5/",
    github: "JaneD",
  },
  {
    username: "Bob_J",
    email: "bobbyj@hotmail.com",
    password: "password123",
    linkedin: "https://www.linkedin.com/in/bob-j-1a2b3c4d5/",
    github: "BobbyJ",
  },
  {
    username: "Sally_M",
    email: "SallyM@gmail.com",
    password: "password123",
    linkedin: "https://www.linkedin.com/in/sally-m-1a2b3c4d5/",
    github: "SallyM",
  },
  {
    username: "Joe_S",
    email: "JoeJoe@yahoo.com",
    password: "password123",
    linkedin: "https://www.linkedin.com/in/joe-s-1a2b3c4d5/",
    github: "JoeJoeS",
  },
  {
    username: "Sue_S",
    email: "sues@hotmail.com",
    password: "password123",
    linkedin: "https://www.linkedin.com/in/sue-s-1a2b3c4d5/",
    github: "SueS",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
