projEuler6 = () => {
  let refArr = [...Array(100).keys()]
    .map(v => v += 1),
    sOfSqArr = refArr
      .map(v => Math.pow(v, 2))
      .reduce((o, v) => {
        o += v
        return o
      }, 0),
    sqOfSum = Math.pow(
      refArr
        .reduce((o, v) => {
          o += v
          return o
        }, 0),
      2)
  return sqOfSum - sOfSqArr
} 