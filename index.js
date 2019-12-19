// Your code here

const mapToNegativize = function(sourceArr) {
    return sourceArr.map(function(num) {
        return num * -1;
    })
}

const mapToNoChange = function(sourceArr) {
    return sourceArr.map(function(a) {
        return a;
    });
}

const mapToDouble = function(sourceArr) {
    return sourceArr.map(function(num) {
        return num * 2;
    })
}

const mapToSquare = function(sourceArr) {
    return sourceArr.map(function(num) {
        return num ** 2;
    })
}

const reduceToTotal = function(sourceArr, initialInt=0) {
    return sourceArr.reduce(function(memo, num) {
        return memo + num }, initialInt
    );
}

const reduceToAllTrue = function(sourceArr) {
    return sourceArr.reduce(function(memo, item) {
        return !!memo && !!item ? true : false
    })
}

const reduceToAnyTrue = function(sourceArr) {
    return sourceArr.reduce(function(memo, item) {
        return memo === true || item === true ? true : false
    })
}