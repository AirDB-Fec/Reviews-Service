const faker = require('faker');

const createReviews = () => {
  const years = [2016, 2017, 2018];
  for (let i = 9750001; i < 10000001; i += 1) {
    for (let j = 0; j < 2 + Math.floor(Math.random() * (28)); j += 1) {
      const createdAt = `${faker.date.month()} ${years[Math.floor(Math.random() * (3))]}`;
      const reviewText = faker.lorem.paragraph();
      const accuracyRating = Math.floor(Math.random() * 6);
      const communicationRating = Math.floor(Math.random() * 6);
      const cleanlinessRating = Math.floor(Math.random() * 6);
      const locationRating = Math.floor(Math.random() * 6);
      const checkInRating = Math.floor(Math.random() * 6);
      const valueRating = Math.floor(Math.random() * 6);
      const isReported = faker.random.boolean();
      const userId = Math.ceil(Math.random() * 30);
      const roomId = i;
      console.log(`${createdAt},${reviewText},${accuracyRating},${communicationRating},${cleanlinessRating},${locationRating},${checkInRating},${valueRating},${isReported},${userId},${roomId}`);
    }
  }
};

createReviews();
