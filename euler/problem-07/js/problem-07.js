

// 소수를 크기 순으로 나열하면 2, 3, 5, 7, 11, 13, ... 과 같이 됩니다.

// 이 때 10,001번째의 소수를 구하세요.

function isSosu(num) {

	var flag = true;
	for ( var i = 2 ; i < num ; i++ ) {

		if ( num % 2 == 0 || num % i == 0 )
			return false;
	}
	return flag;
}

console.log(isSosu(7));
console.log(isSosu(8));
console.log(isSosu(9));
console.log(isSosu(10));
console.log(isSosu(11));
console.log(isSosu(21));
console.log(isSosu(23));

console.log("***************");

function result() {

	var j = 2;
	var count = 0;

	var d = new Date();
	var startTime = d.getTime();

	while( true ) {

		if ( isSosu(j) )
			count++;

		if ( count == 10001 )
			break;

		j++;
	}

	var cT = new Date();
	var runningTime = cT.getTime() - startTime;

	console.log("runningTime : " + runningTime )
	console.log(j);
}

result();