const db = require('../../models');
module.exports = {
   addReview: (req, res, next) => {
      // create user in db
      db.Review.create({
         park_id: req.body.park_id,
         review_text: req.body.review_text,
         overall_rating: req.body.overall_rating,
         accessibility_rating: req.body.accessibility_rating,
         cleanliness_rating: req.body.cleanliness_rating,
         activities_rating: req.body.activities_rating
      })

      // redirect to login
      .then(user =>  res.json(user))
      .catch(err => {
            res.status(401);
            next(err)
      });
   },

   lastThreeReviews: () => {
      return new Promise ((resolve, reject) => {
         db.Review.findAll({
         limit: 3 ,
         order: [ ['createdAt',  'DESC'] ]
      })
      .then(result => {
         console.log(result[0].dataValues)
         return JSON.stringify(result);
      })
   })}

}

