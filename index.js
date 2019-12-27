function mapToNegativize(sourceArray) {
  return sourceArray.map( num => num * -1)
}

function mapToNoChange(sourceArray) {
  const newArray = sourceArray.map( num => num * -1)
  return sourceArray
}

function mapToDouble(sourceArray) {
  return sourceArray.map( num => num * 2)
}

function mapToSquare(sourceArray) {
  return sourceArray.map( num => num ** 2)
}

function reduceToTotal(sourceArray, startingPoint) {
  let answer;
  if (startingPoint !== undefined) {
    answer = sourceArray.reduce((total, ele) => total += ele)
    answer = answer + startingPoint
  } else {
    answer = sourceArray.reduce((total, ele) => total += ele)
  }
  return answer
}


function reduceToAllTrue(sourceArray) {
  let toReturn
  sourceArray.reduce((total, ele) => {
    // console.log(ele);
    if (ele) {
      toReturn = true
    } else {
      toReturn = false
    }
  })
  return toReturn
}

function reduceToAnyTrue(sourceArray) {
  let result
  sourceArray.reduce((total, ele) => {
    if (ele) {
      result = true
    }else {
      result = false
    }
  })
  return result
}
