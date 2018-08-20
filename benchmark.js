const siege = require('siege')


let benchmark = siege().on(3002);

for (let i = 0; i < 100000; i += 1) {
  let id;
  if (i % 2 === 0) {
    id = 1 + Math.floor(Math.random() * 10000001);
  } else {
    id = 9999900 + Math.floor(Math.random() * 101);
  }
  benchmark = benchmark.for(1).times.get(`/api/rooms/${id}/reviews`);
}

benchmark.attack();
