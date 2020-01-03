// Your code here


function mapToNegativize(sourceArray) {
	return sourceArray.map(x => -x)
	// return newArray
}

function mapToNoChange(sourceArray)	{
	return sourceArray.map(x => x)

}

function mapToDouble(sourceArray) {
	return sourceArray.map(x => x*2)
}

function mapToSquare(sourceArray) {
	return sourceArray.map(x => x**2)
}

function reduceToTotal(sourceArray, startingPoint) {
	let total = startingPoint ? startingPoint : 0

	sourceArray.forEach(num => total = num + total)

	return total
}

function reduceToAllTrue(sourceArray) {
	let checkTrue = true
	let i = 0
	
	while (i<sourceArray.length && checkTrue) {
		if (sourceArray[i]) {
			checkTrue = true
		} 
		else {
			checkTrue = false
		}
		i++
	}
	return checkTrue
}


function reduceToAnyTrue(sourceArray) {
	let checkTrue = false
	let i = 0
	
	while (i<sourceArray.length && !checkTrue) {
		if (sourceArray[i]) {
			checkTrue = true
		} 
		else {
			checkTrue = false
		}
		i++
	}
	return checkTrue
}


























