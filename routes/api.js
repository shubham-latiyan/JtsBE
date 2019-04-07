const express = require('express')
var router = express.Router();
const postController = require('../controller/postController')

router.get('/', function (req, res) {
    res.json({
        'API': '1.0'
    });
});

router.post('/savePosts', postController.savePosts);
router.post('/upvote', postController.upvote);
router.get('/getAllPosts', postController.getAllPosts);
module.exports = router;