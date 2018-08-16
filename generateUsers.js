const faker = require('faker');

const createUsers = () => {
  for (let i = 1; i <= 30; i += 1) {
    const user = faker.name.findName();
    const imageUrl = `https://s3-us-west-1.amazonaws.com/airdbprofilesphotos/${i}.jpg`;
    console.log(`${i},${user},${imageUrl}`);
  }
};

createUsers();
