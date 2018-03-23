
const train = require('./trainer');
const evaluate = require('./evaluation');
const Perceptron = require('./perceptron');

let p = new Perceptron(-1, 1);

train(p);

process.stdout.write("BELOW THE LINE -> " + p.feedforward(2,2) + "\n");
process.stdout.write("BELOW THE LINE -> " + p.feedforward(9,9) + "\n");
process.stdout.write("ABOVE THE LINE -> " + p.feedforward(-9,0) + "\n");

process.stdout.write(`w1: ${p.w1} w2: ${p.w2}\n`);

let precision = evaluate(p);

process.stdout.write(`precision: ${precision}\n`);


