const router = require('express').Router();
const reviewFunctions = require('../controllers/review')

router.route('/addReview')
   .post(reviewFunctions.addReview);

router.route('/lastThreeReviews')
   .get(reviewFunctions.lastThreeReviews)

module.exports = router;
