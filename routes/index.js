const express = require('express');
const controller = require('../controllers');

const router = express.Router();
router.get('/rooms/:roomId/reviews', controller.reviews.get);
router.post('/rooms/:roomId/newReview', controller.reviews.post);
router.put('/rooms/:roomId/:reviewer/:field/:value', controller.reviews.put);

module.exports = router;
