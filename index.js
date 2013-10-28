module.exports = function (success, failure) {
  return function (er) {
    return er ? failure(er) : success.apply(this, Array.prototype.slice.call(arguments, 1))
  }
}