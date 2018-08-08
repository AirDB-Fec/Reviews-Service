const models = require('../models');
const createReview = require('./generator.js');
const db = require('../models');

module.exports = {
  get: (req, res) => {
    models.Review.find({ room_id: Number(req.params.roomId) }, (err, reviews) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(reviews);
      }
    });
  },
  post: (req, res) => {
    const review = createReview(Number(req.params.roomId));
    const reviewItem = new db.Review(review);
    reviewItem.save()
      .then(() => res.status(201).send())
      .catch(err => res.status(500).send(err));
  },
  put: (req, res) => {
    const {
      roomId,
      reviewer,
      field,
      value,
    } = req.params;
    models.Review.findOne({ room_id: roomId, user: reviewer })
      .then((doc) => {
        const updated = {};
        updated[field] = value;
        doc.set(updated);
        doc.save()
          .then(result => res.status(201).send(result))
          .catch(err => res.status(500).send(err));
      })
      .catch(err => res.status(500).send(err));
  },
};
