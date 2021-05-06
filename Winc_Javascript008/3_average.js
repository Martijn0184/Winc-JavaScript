function calcAverage(arr) {
    var numbersCnt = arr.length;
    var allNum = arr.reduce(function (total, arr) { return total + arr }, 0);
    return averageNum = (allNum / numbersCnt);
    math.round(averageNum);
}

calcAverage(arr = [5, 25, 20, 25, 25]);
console.log(averageNum);