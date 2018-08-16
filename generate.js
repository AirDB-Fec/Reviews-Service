const faker = require('faker');
const fs = require('fs');

const createReviews = (names) => {
  const years = [2016, 2017, 2018];
  for (let i = 1; i < 11; i += 1) {
    for (let j = 0; j < 1 + Math.floor(Math.random() * (30)); j += 1) {
      const roomId = i;
      const roomName = names[i - 1];
      const user = faker.name.findName();
      const createdAt = `${faker.date.month()} ${years[Math.floor(Math.random() * (3))]}`;
      const reviewText = faker.lorem.paragraph();
      const imageUrl = `https://s3-us-west-1.amazonaws.com/airdbprofilesphotos/${Math.ceil(Math.random() * (30))}.jpg`;
      const accuracyRating = Math.floor(Math.random() * 6);
      const communicationRating = Math.floor(Math.random() * 6);
      const cleanlinessRating = Math.floor(Math.random() * 6);
      const locationRating = Math.floor(Math.random() * 6);
      const checkInRating = Math.floor(Math.random() * 6);
      const valueRating = Math.floor(Math.random() * 6);
      const isReported = faker.random.boolean();
      console.log(`${roomId}, ${roomName}, ${user}, ${createdAt}, ${reviewText}, ${imageUrl}, ${accuracyRating}, ${communicationRating}, ${cleanlinessRating}, ${locationRating}, ${checkInRating}, ${valueRating}, ${isReported}`);
    }
  }
};

const getNames = () => {
  fs.readFile('./namesdata.csv', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      createReviews(data.split('\n'));
    }
  });
};

getNames();
