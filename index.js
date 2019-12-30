function mapToNegativize(sourceArray){
    return sourceArray.map(x => -x)
}

function mapToNoChange(sourceArray){
    return sourceArray.map(x => x)
}

function mapToDouble(sourceArray){
    return sourceArray.map(x => x*2)
}

function mapToSquare(sourceArray){
    return sourceArray.map(x => x*x)
}

function reduceToTotal(sourceArray, startingPoint = 0){
    let reducer = (acc, startingPoint) => acc + startingPoint
    return sourceArray.reduce(reducer, startingPoint)
}

function reduceToAllTrue(sourceArray){
    const reducer = function(acc, startingPoint){
        if(!!acc === true && !!startingPoint === true){
            return true
        }else{
            return false
        }
    } 
    return sourceArray.reduce(reducer, true)
}

function reduceToAnyTrue(sourceArray){
    const reducer = function(acc, startingPoint){
        if(acc === true){
            return true
        }
        else{
            return !!startingPoint
        }
    } 
    return sourceArray.reduce(reducer, false)
}

