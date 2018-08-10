const faker = require('faker');

const createReview = (id) => {
  const years = [2016, 2017, 2018];
  const review = {};
  review.room_id = id;
  review.user = faker.name.findName();
  review.created_at = `${faker.date.month()} ${years[Math.floor(Math.random() * (3))]}`;
  review.review_text = faker.lorem.paragraph();
  review.image_url = `https://s3-us-west-1.amazonaws.com/airfecuserimages/randPeopleImages/randPerson${Math.floor(Math.random() * (12)) + 1}.jpeg`;

  review.accuracy_rating = faker.random.number({
    min: 1,
    max: 5,
  });
  review.communication_rating = faker.random.number({
    min: 1,
    max: 5,
  });
  review.cleanliness_rating = faker.random.number({
    min: 1,
    max: 5,
  });
  review.location_rating = faker.random.number({
    min: 1,
    max: 5,
  });
  review.check_in_rating = faker.random.number({
    min: 1,
    max: 5,
  });
  review.value_rating = faker.random.number({
    min: 1,
    max: 5,
  });
  review.is_reported = faker.random.boolean();
  return review;
};

module.exports = createReview;
