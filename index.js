function receivesAFunction (callback) {
    return callback() }
receivesAFunction(function(){
    const spy = chai.spy()})

function returnsANamedFunction(){
      return function calc(x) { return x * 42; }
}
let fn = returnsANamedFunction()

function returnsAnAnonymousFunction(){
      return function (x) { return x * 42; }
}
let fm = returnsAnAnonymousFunction()