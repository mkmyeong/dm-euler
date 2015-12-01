// 세 자연수 a, b, c 가 피타고라스 정리 a2 + b2 = c2 를 만족하면 피타고라스 수라고 부릅니다 (여기서 a < b < c ).
// 예를 들면 32 + 42 = 9 + 16 = 25 = 52이므로 3, 4, 5는 피타고라스 수입니다.

// a + b + c = 1000 인 피타고라스 수 a, b, c는 한 가지 뿐입니다. 이 때, a × b × c 는 얼마입니까?

function Pita() {

}

Pita.prototype.test = "test";
Pita.prototype.isPita = function(a,b,c) {

	if ( Math.pow(a,2) + Math.pow(b,2) == Math.pow(c,2) )
		return true;

	return false;
}

Pita.prototype.isThousand = function(a,b,c) {

	if ( a+b+c == 1000 )
		return true;

	return false;
}

Pita.prototype.result = function() {

	var pita = new Pita();
	for( var c = 998; c > 2; c-- ) {

		for ( var b = c-1; b > 1; b-- ) {

			for ( var a = b-1; a > 0; a-- ) {

				if ( pita.isThousand(a,b,c) && pita.isPita(a,b,c) )
					return a*b*c;
			}
		}
	}

	return 0;
}


exports.newPita = function() {

	return new Pita();
}

exports.isPita = function(a,b,c) {

	var pita = new Pita();
	return pita.isPita(a,b,c);
}

exports.isThousand = function(a,b,c) {

	var pita = new Pita();
	return pita.isThousand(a,b,c);
}

exports.result = function() {

	var pita = new Pita();
	return pita.result();
}