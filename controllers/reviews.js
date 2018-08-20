const createReview = require('./generator.js');
const db = require('../models');

module.exports = {
  get: (req, res) => {
    db.getReviews(req.params.roomId, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  },
  post: (req, res) => {
    db.postReview(req.params.roomId, (err) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send();
      }
    });
  },
  put: (req, res) => {
    db.updateReview(req.params, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  },
  delete: (req, res) => {
    db.deleteReview(req.params, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  },

  // put: (req, res) => {
  //   const {
  //     roomId,
  //     reviewer,
  //     field,
  //     value,
  //   } = req.params;
  //   const set = { $set: { } };
  //   set.$set[field] = value;
  //   models.Review.update({ room_id: Number(roomId), user: reviewer }, set)
  //     .then(doc => res.status(201).send(doc))
  //     .catch(err => res.status(500).send(err));
  // },
  // delete: (req, res) => {
  //   const {
  //     roomId,
  //     reviewer,
  //   } = req.params;
  //   models.Review.deleteOne({ room_id: Number(roomId), user: reviewer })
  //     .then(docs => res.status(200).send(docs))
  //     .catch(err => res.status(500).send(err));
  // },
};
