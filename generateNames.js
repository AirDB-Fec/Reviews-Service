const words = require('an-array-of-english-words');

const generateNames = () => {
  let num = 1;
  for (let j = 0; j < words.length; j += 1) {
    for (let i = 93781; i < 93818; i += 1) {
      console.log(`${num},${words[j]}_${words[i]}`);
      num += 1;
      if (num > 10000000) {
        return;
      }
    }
  }
};

generateNames();
