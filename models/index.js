const { Pool } = require('pg');
const redis = require('redis');
const client = redis.createClient();

const cn = {
  host: 'localhost',
  port: 5432,
  database: 'reviews_module',
  user: 'arthurhovanesian',
  password: '',
};
const pool = new Pool(cn);

const getReviews = (id, callback) => {
  let query;
  if (isNaN(id)) {
    query = `SELECT * FROM reviews INNER JOIN listings ON (reviews.listing_id = listings.id) INNER JOIN users ON (reviews.user_id = users.id) WHERE listings.id = (SELECT id FROM listings WHERE name = $1)`;
  } else {
    query = `SELECT * FROM reviews INNER JOIN listings ON (reviews.listing_id = listings.id) INNER JOIN users ON (reviews.user_id = users.id) WHERE listings.id = $1`;
  }
  client.get(id, (err, reply) => {
    if (err) {
      console.log('error');
    } else {
      if (!reply) {
        pool.query(query, [id])
          .then(res => {
            client.setex(id, 900, JSON.stringify(res.rows), (err) => {
              if (err) {
                console.log(err)
              } else {
                callback(null, res.rows)
              }
            })
          })
          .catch(err => console.log(err))
      } else {
        callback(null, JSON.parse(reply))
      }
    }
  })
  // pool.query(query, [id])
  //   .then(res => callback(null, res.rows))
  //   .catch(err => callback(err));
};

const postReview = (id, callback) => {
  const query = `INSERT INTO reviews (created_at,review_text,accuracy_rating,communication_rating,cleanliness_rating,location_rating,check_in_rating,value_rating,is_reported,user_id,listing_id) VALUES ('June 2018','This place is terrible. I stayed here for one night and now I have super crabs',0,1,5,2,2,3,false,23,$1`;
  pool.query(query, [id])
    .then(res => callback(null, 1))
    .catch(err => callback(err));
};

const updateReview = (fields, callback) => {
  const values = [fields.roomId, fields.reviewer, fields.field, fields.value];
  const query = `UPDATE reviews SET $3=$4 WHERE listing_id = $1 and user_id=$2`;
  pool.query(query, values)
    .then(res => callback(null, 1))
    .catch(err => callback(err));
};

const deleteReview = (fields, callback) => {
  const values = [fields.roomId, fields.reviewer]
  const query = `delete from reviews where listing_id=$1 and user_id=$2`;
  pool.query(query, values)
    .then(res => callback(null, 1))
    .catch(err => callback(err));
};

module.exports = {
  getReviews,
  postReview,
  updateReview,
  deleteReview,
};
