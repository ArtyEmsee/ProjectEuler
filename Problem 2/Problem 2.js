//Each new term in the Fibonacci sequence is generated by adding the previous two 
//terms. By starting with 1 and 2, the first 10 terms will be:

//1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

//By considering the terms in the Fibonacci sequence whose values do not exceed
//four million, find the sum of the even-valued terms.

projEuler2 = () => {
  let fibSequence = buildFibSeq(4000000), result = 0
  fibSequence.forEach(v => {
    if (v % 2 === 0) result += v
  })
  return result
}

buildFibSeq = (max) => {
  let sequence = [1, 2, 3], value = 0
  while (value < max) {
    value = sequence[sequence.length - 1] + sequence[sequence.length - 2]
    if (value < max) sequence.push(value)
  }
  return sequence
}