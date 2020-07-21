// User design for sequelize
// get reference to DB 
const db = require('../../models');
module.exports = {

   // login user
	login: (req, res, next) => {
      
      //validate request
		if (req.body.email && req.body.password) {   
            
            // check error (including no user)
            if (!req.user) {
               const err =  new Error('incorrect credentials, no user found')
               next(err)

            // user found
				} else {
               db.Review.findAll({
                  where: {
                     user_id: req.user.id
                  },
                  raw: true,
                  nest: true,
               }).then( data => {
                  req.user.dataValues.reviews = data;
                  console.log(req.user);
                  
                  console.log(`login: `, req.user.email); 
                  // save user to session to match on login
                  req.session.user = req.user;
                  return res.json(req.user);
               });

            }
            
      // Require Fields
		} else {
			var err = new Error('All fields required.');
			err.status = 400;
			return next(err);
		}
   },

   // Sign Up
   create: (req, res, next) => {
      // Create User
      db.User.create({
         email: req.body.email,
         password: req.body.password
      })

      // Redirect to login
      .then(user =>  res.json(user))
      .catch(err => {
            res.status(401);
            next(err)
      });
   },
     
   //Sign Out
   signout: (req, res) => {
      console.log('signed out:', req.user.email )
      // Destroy Session
      req.session.destroy();
      // Clear cookie on the client side
      res
         .status(200)
         .clearCookie('__id')
         .json({msg:'successfuly signed out'});
   },
   
   // Authenticate user
	authenticate: (req, res, next) => {
      if (req.session.user) { 
         res.json(req.session.user)
      }
      else {
         res.status(204).send()
      }
   },
};
