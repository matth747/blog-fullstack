const router = require('express').Router();
const { User } = require('../../models');




router.post('/register', async (req, res) => {
    try {
    const userData = await User.create(req.body);


    res.status(200).json(userData)


    } catch (err){
        res.status(400).json(err)
    }
});

/* router.post('/login', async (req, res) => {
    
});

router.post('/logout', async (req, res) => {
    
}); */

module.exports = router;
