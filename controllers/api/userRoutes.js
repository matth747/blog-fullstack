const router = require('express').Router();
const { User } = require('../../models');

withAuth = require("../../utils/auth")


router.post('/register', async (req, res) => {
    try {
      const userData = await User.create(req.body);
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
  
        res.status(200).json(userData);
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });

/* router.post('/login', async (req, res) => {
    
});

router.post('/logout', async (req, res) => {
    
}); */




router.get('/userpage', async (req, res) => {
    try {
        // Get all users, sorted by name
        const userData = await User.findAll({
            attributes: { exclude: ['password'] },
            order: [['username', 'ASC']],
        });
        
        // Serialize user data so templates can read it
        const users = userData.map((project) => project.get({ plain: true }));
        
        // Pass serialized data into Handlebars.js template
        res.render('homepage', { users });
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;
