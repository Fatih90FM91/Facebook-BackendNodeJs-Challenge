const express = require('express');
const controller = require('./controllers/controller');

const router = express.Router();

router.get('/', controller.getHomePage);
router.all('/new-feed', controller.getNewFeed);
router.get('/show-feed/:id' , controller.showFeedPage);
router.get('/delete-feed/:id', controller.delFeed);
// router.get('/edit-article/:id', controller.getEditArticle);
// router.post('/edit-article/:id', controller.postEditArticle);
router.all('/edit-feed/:id', controller.updateFeed);

module.exports = router;