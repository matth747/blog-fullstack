const router = require('express').Router();
const userRoutes = require('./userRoutes');
const dashRoutes = require('./dashRoutes');
const comRoutes = require('./commRoutes')

router.use('/users', userRoutes);
router.use('/posts', dashRoutes);
router.use('/comments', comRoutes)

module.exports = router;

