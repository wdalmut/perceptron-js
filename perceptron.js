function Perceptron (w1, w2) {
  this.w1 = w1
  this.w2 = w2
}

Perceptron.prototype.feedforward = function (x, y) {
  let sum = x * this.w1 + y * this.w2

  return this.activate(sum)
}

Perceptron.prototype.activate = function (input) {
  return input > 0 ? 1 : -1
}

Perceptron.prototype.train = function (desired, x, y) {
  let guess = this.feedforward(x, y)

  let error = desired - guess

  this.w1 = this.w1 + 0.01 * error * x
  this.w2 = this.w2 + 0.01 * error * y
}

module.exports = Perceptron
