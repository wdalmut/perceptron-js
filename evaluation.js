
const oracle = function (x) {
  return 2 * x + 3
}

const train = function (perceptron) {
  let errors = 0;
  let tries = 100000;

  for (let i =0; i < tries; i++) {
    // generate random x, y from -10000 to 10000
    let x = parseInt((Math.random()-0.5)*10000);
    let y = parseInt((Math.random()-0.5)*10000);

    // create the right answer
    let answer = y < oracle(x) ? -1 : 1;

    let given = perceptron.feedforward(x, y);

    if (answer != given) {
      errors += 1;
    }
  }

  return 100 - (errors / tries * 100);
}

module.exports = train

