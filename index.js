// Your code here

function mapToNegativize(arr){
    let newArr = arr.map(x => x * -1)
    return newArr
}

function mapToNoChange(arr){
    let newArr = arr.map(names => names)
    return newArr
}

function mapToDouble(arr){
    let newArr = arr.map(x => x * 2)
    return newArr
}

function mapToSquare(arr){
    let newArr = arr.map(x => x ** 2)
    return newArr
}

function reduceToTotal(arr, start=0){
    let total = arr.reduce((t, a) => t + a)
    let newTotal = total + start
    return newTotal
}

function reduceToAllTrue(arr){
    for (let i = 0; i < arr.length; i++){
        if (!arr[i]) 
        return false
    }
    return true
}

function reduceToAnyTrue(arr){
    for (let i = 0; i < arr.length; i++){
        if (arr[i]) 
        return true
    }
    return false
}