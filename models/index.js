const { Pool } = require('pg');

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
  //const query = `SELECT * FROM reviews INNER JOIN listings ON (reviews.listing_id = listings.id) INNER JOIN users ON (reviews.user_id = users.id) WHERE listings.id = $1`;
  if (isNaN(id)) {
    query = `SELECT * FROM reviews INNER JOIN listings ON (reviews.listing_id = listings.id) INNER JOIN users ON (reviews.user_id = users.id) WHERE listings.id = (SELECT id FROM listings WHERE name = $1)`;
  } else {
    query = `SELECT * FROM reviews INNER JOIN listings ON (reviews.listing_id = listings.id) INNER JOIN users ON (reviews.user_id = users.id) WHERE listings.id = $1`;
  }
  pool.query(query, [id])
    .then(res => callback(null, res.rows))
    .catch(err => callback(err));
};

module.exports = {
  getReviews
};
