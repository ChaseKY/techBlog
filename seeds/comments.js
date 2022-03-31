const { Comment } = require('../models');

const commentdata = [
  {
    comment: 'Good info!',
    post_id: 1,
    user_id: 1,
  },
  {
    comment: 'Wow this is awesome.',
    post_id: 2,
    user_id: 2,
  },
  {
    comment: 'I think the previous version was better.',
    post_id: 3,
    user_id: 3,
  },
  {
    comment: 'What does blah blah blah mean? Is that a new bootstrap component?',
    post_id: 4,
    user_id: 4,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
