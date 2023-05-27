const { Comment } = require('../models');
const commentData = [
    {
        user_id: 1,
        post_id: 1,
        comment_text: "Nice post!",
    },
    {
        user_id: 2,
        post_id: 2,
        comment_text: "Great idea!",
    },
    {
        user_id: 3,
        post_id: 3,
        comment_text: "Awesome job reaching 100 followers!",
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Amazing! Definitely trying this out",
    },
    {
        user_id: 5,
        post_id: 5,
        comment_text: "Cool stuff!",
    },
    {
        user_id: 6,
        post_id: 6,
        comment_text: "Interesting Great to know more of this topic!",
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;