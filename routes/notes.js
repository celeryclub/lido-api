const express = require('express');
const router = express.Router();

const createNote = (name) => {
  return {
    name: name,
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    createdAt: Date.now(),
    updatedAt: Date.now(),
    publishedAt: Date.now(),
  };
};

router.get('/', function(req, res, next) {
  res.json({
    notes: [
      createNote('Hello'),
      createNote('Test'),
      createNote('Jim\'s note'),
      createNote('Welcome'),
    ]
  });
});

module.exports = router;
