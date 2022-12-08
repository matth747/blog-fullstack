const router = require('express').Router();
const { Post } = require('../../models');

router.post('/post', async (req, res) => {
    try {
        const newPost = await Post.create(req.body)
        res.status(200).json(newPost)
    }
    catch (err) {
        res.status(500).json(err);
    }
});

router.put('/update/:id', async (req, res) => {
    try {
        const upPost = await Post.update(
            {
                title: req.body.title,
                content: req.body.content,
            },
            {
                where: {
                    id: req.params.id
                }
            }
        )
        res.status(200).json(upPost)
    }
    catch (err) {
        res.status(500).json(err);
    }
});



router.get('/posts', async (req, res) => {
    try {
        // Get all users, sorted by name
        const postData = await Post.findAll({});
        
        // Serialize user data so templates can read it
        const posts = postData.map((post) => post.get({ plain: true }));
        
        // Pass serialized data into Handlebars.js template
        res.render('dashboard', { posts });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const desPost = await Post.destroy(

            {
                where: {
                    id: req.params.id
                }
            }
        )
        res.status(200).json(desPost)
    }
    catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;