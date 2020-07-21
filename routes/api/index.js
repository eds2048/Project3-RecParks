const router = require('express').Router();
const user = require("./user");
const review = require("./review");

// User and Review routes
router.use('/user', user);
router.use('/review', review);

module.exports = router;
