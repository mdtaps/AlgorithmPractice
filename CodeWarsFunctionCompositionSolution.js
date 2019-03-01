//Solution for Function Composition Kata on CodeWars.com
//https://www.codewars.com/kata/5421c6a2dda52688f6000af8

function compose(f,g) {
    return function() {
      return f(g.apply(null, arguments))
    }
  }