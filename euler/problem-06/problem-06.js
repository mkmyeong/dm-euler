// 1부터 10까지 자연수를 각각 제곱해 더하면 다음과 같습니다 (제곱의 합).

// 12 + 22 + ... + 102 = 385
// 1부터 10을 먼저 더한 다음에 그 결과를 제곱하면 다음과 같습니다 (합의 제곱).

// (1 + 2 + ... + 10)2 = 552 = 3025
// 따라서 1부터 10까지 자연수에 대해 "합의 제곱"과 "제곱의 합" 의 차이는 3025 - 385 = 2640 이 됩니다.

// 그러면 1부터 100까지 자연수에 대해 "합의 제곱"과 "제곱의 합"의 차이는 얼마입니까?


var num = 100
var squareSum = 0;

var sum = 0;
var sumSquare = 0;

for(var i=1; i<=num; i++){
	squareSum += i*i
}

for(var j=1; j<=num; j++){
	sum += j
}
sumSquare = sum*sum;

console.log(squareSum);
console.log(sumSquare);
console.log(sumSquare - squareSum);
console.log(sumSquare - squareSum);
     
var arr = ["a", "b", "c"];
var str = JSON.stringify(arr);

console.log("str = "+str);

var newArr = JSON.parse(str);

console.log("newArr = " + newArr);

while(newArr.length > 0){
	console.log("newArr = " + newArr.pop() + "<br/>");
}

