var test = require("tap").test
  , ercb = require("./")

test("Calls success function on success", function (t) {
  var result = {}

  function asyncFunction (cb) {
    cb(null, result)
  }

  t.plan(1)

  asyncFunction(ercb(
    function (res) {
      t.equal(res, result, "Success result not first function parameter")
      t.end()
    },
    function () {
      t.ok(false, "Failure function called for successful async callback")
    }
  ))
})

test("Calls failure function on failure", function (t) {
  var error = new Error("Test error")

  function asyncFunction (cb) {
    cb(error)
  }

  t.plan(1)

  asyncFunction(ercb(
    function () {
      t.ok(false, "Success function called for failing async callback")
    },
    function (er) {
      t.equal(er, error, "Failure error not first function parameter")
      t.end()
    }
  ))
})

test("Calls success function with multiple params", function (t) {
  var result1 = {}
    , result2 = {}

  function asyncFunction (cb) {
    cb(null, result1, result2)
  }

  t.plan(2)

  asyncFunction(ercb(
    function (res1, res2) {
      t.equal(res1, result1, "Success result1 not first function parameter")
      t.equal(res2, result2, "Success result2 not second function parameter")
      t.end()
    },
    function () {
      t.ok(false, "Failure function called for successful async callback")
    }
  ))
})