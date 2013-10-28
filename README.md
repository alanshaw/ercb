ercb [![Build Status](https://travis-ci.org/alanshaw/ercb.png?branch=master)](https://travis-ci.org/alanshaw/ercb) [![devDependency Status](https://david-dm.org/alanshaw/ercb/dev-status.png)](https://david-dm.org/alanshaw/ercb#info=devDependencies)
===
For those who don't like the node (er, result) convention.

Usage
===
Pass the result of calling `ercb` to a node function that expects an (er, result) signature. e.g.

```javascript
var fs = require("rs")
  , ercb = require("ercb")

fs.readFile("somefile.txt", ercb(
  function (data) {
    // Success callback
  },
  function (er) {
    // Failure callback
  }
))
```
