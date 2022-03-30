const { Post } = require('../models');

const postdata = [
  {
    title: 'New PlayStation 5',
    post: 'Blah blah blah I am a random post.',
    user_id: 1,
  },
  {
    title: 'How to make the best app in the world in 5 seconds.',
    post: 'Blah blah blah I am a random post.',
    user_id: 2,
  },
  {
    title: 'Version 1 of ThisAppIsNotReal is out now!',
    post: 'Blah blah blah I am a random post.',
    user_id: 3,
  },
  {
    title: 'Bootstrap Tips',
    post: 'Blah blah blah I am a random post.',
    user_id: 4,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
