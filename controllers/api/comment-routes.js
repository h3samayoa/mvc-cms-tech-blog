const router = require('express').Router();
const {
    User,
    Post,
    Comment
} = require('../../models');

router.get('/', (req, res) => {
    Comment.findAll()
        .then((dbCommentData) => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    Comment.create({
        text: req.body.text,
        post_id: req.body.post_id,
        user_id: req.body.user_id,
    })
    .then((dbCommentData) => res.json(dbCommentData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
});

module.exports = router;