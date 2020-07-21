//Review-related routes
const router = require('express').Router();
const reviewFunctions = require('../controllers/review')

//Add
router.route('/addReview')
   .post(reviewFunctions.addReview);

//Show last three reviews
router.route('/lastThreeReviews')
   .get(reviewFunctions.lastThreeReviews);

//Search reviews for specific park   
router.route('/pullParkReviews')
   .post(reviewFunctions.pullParkReviews)

module.exports = router;
