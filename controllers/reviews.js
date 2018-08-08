const models = require('../models');
const createReview = require('./generator.js');
const db = require('../models');

module.exports = {
  get: (req, res) => {
    models.Review.find({ room_id: Number(req.params.roomId) })
      .then(docs => res.status(200).send(docs))
      .catch(err => res.status(500).send(err));
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
    const set = { $set: { } };
    set.$set[field] = value;
    models.Review.update({ room_id: Number(roomId), user: reviewer }, set)
      .then(doc => res.status(201).send(doc))
      .catch(err => res.status(500).send(err));
  },
  delete: (req, res) => {
    const {
      roomId,
      reviewer,
    } = req.params;
    models.Review.deleteOne({ room_id: Number(roomId), user: reviewer })
      .then(docs => res.status(200).send(docs))
      .catch(err => res.status(500).send(err));
  },
};
