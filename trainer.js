
const oracle = function (x) {
  return 2 * x + 3
}

const train = function (perceptron) {
  for (let i = -10000; i < 10000; i++) {
    // generate random x, y from -10000 to 10000
    let x = parseInt((Math.random()-0.5)*10000);
    let y = parseInt((Math.random()-0.5)*10000);

    // create the right answer
    let answer = y < oracle(x) ? -1 : 1;

    perceptron.train(answer, x, y);
  }
}

module.exports = train
