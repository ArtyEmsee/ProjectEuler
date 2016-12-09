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