// 10 이하의 소수를 모두 더하면 2 + 3 + 5 + 7 = 17 이 됩니다.
// 이백만(2,000,000) 이하 소수의 합은 얼마입니까?

function isSosu(num) {
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

for(var j=1; j<=num; j++){

	if ( j % 2 == 0 )
		flag = false;
	// console.log("start of flag : " + flag);
	// console.log("-------------------------");
	if ( flag )
	for(var k = 0; k < arr.length; k++ ) {

		var a = arr[k];
		if (j % a === 0 ) {

			// console.log( "j : " + j + " / a : " + a );
			flag = false;
		}
	}
	// console.log("-------------------------");

	// console.log("j : " + j + " / flag : " + flag + " / arr : " + arr);
	if( flag && isSosu(j)) {

		sum += j;
		arr.push(j);
	}

	flag = true;
	// console.log("end of flag : " + flag);
}

console.log(isSosu(5));
console.log(sum);
console.log("arr : " + arr);


