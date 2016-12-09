//Problem 1

//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5,
//6 and 9. The sum of these multiples is 23.

//Find the sum of all the multiples of 3 or 5 below 1000.

projEuler1 = () => {
  return [...Array(1000).keys()].reduce((o, v) => {
    if (v % 3 === 0 || v % 5 === 0) o += v
    return o
  }, 0)
}

//[...Array(1000).keys()] This basically creates an array of 0 to 1000 by using the
//spread operator inside of brackets. It's useful for determining how many times you
//want to run a function without having an array of a set size with which to control
//the number of iterations.