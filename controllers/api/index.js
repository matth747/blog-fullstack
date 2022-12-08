const router = require('express').Router();
const userRoutes = require('./userRoutes');
const dashRoutes = require('./dashRoutes')

router.use('/users', userRoutes);
router.use('/posts', dashRoutes)

module.exports = router;
