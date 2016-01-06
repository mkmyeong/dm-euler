// 10 이하의 소수를 모두 더하면 2 + 3 + 5 + 7 = 17 이 됩니다.
// 이백만(2,000,000) 이하 소수의 합은 얼마입니까?



function isSosu(num) {

	var sosuArr = [];

	if(num==1){
		return false;
	}
	var flagSo = true;
	for ( var i = 2 ; i < num ; i++ ) {

		if ( num % 2 == 0 || num % i == 0 )
			return false;
	}
	return flagSo;
}

var num = 2000000;
var sum = 0;
var arr = [];
var flag = true;

for(var j=2; j<=num; j++){

	if( arr.length ==0 ) {
		arr.push(j);
		sum += j;
	}else {
		var isPrime = true;

		for(var k in arr){
			if( k*k > j ){
				continue;
			}
			if( j%k == 0 ){
				isPrime &= false;
			}
		}
		if( isPrime ){
			arr.push(j);
			sum += j;
		}
	}

}


console.log(sum);
console.log("arr : " + arr);


