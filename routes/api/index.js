const router = require('express').Router();
const user = require("./user");
const review = require("./review");

// '/api/user' route
router.use('/user', user);
router.use('/review', review);

// calls to '/api/ <- redundant route, for initial testing
router.route('/')
  .get((req, res) => res.json({ sample: 'data' }));

module.exports = router;
