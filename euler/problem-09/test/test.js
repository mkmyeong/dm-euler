var assert = require('assert');
var pita = require('../Problem-09.js');

// 세 자연수 a, b, c 가 피타고라스 정리 a^2 + b^2 = c^2 를 만족하면 피타고라스 수라고 부릅니다 (여기서 a < b < c ).
// 예를 들면 32 + 42 = 9 + 16 = 25 = 52이므로 3, 4, 5는 피타고라스 수입니다.

// a + b + c = 1000 인 피타고라스 수 a, b, c는 한 가지 뿐입니다. 이 때, a × b × c 는 얼마입니까?

describe('Problem 09', function() {

  describe('#', function () {

    it('test is test???????', function () {

      assert.equal( "test", pita.newPita().test );
      assert.equal(-1, [1,2,3].indexOf(0));
    });

    it('Is pita??', function () {

      assert.equal( true, pita.isPita(3,4,5) );
      assert.equal( false, pita.isPita(3,4,6) );
      assert.equal( false, pita.isPita(2,4,5) );
    });

    it('sum is 1000?', function () {

      assert.equal( true, pita.isThousand(4,1,995) );
      assert.equal( false, pita.isThousand(3,4,6) );
      assert.equal( false, pita.isThousand(2,4,5) );
    });

    it('result?', function () {

      assert.equal( 31875000, pita.result() );
      // assert.equal( false, pita.isThousand(3,4,6) );
      // assert.equal( false, pita.isThousand(2,4,5) );
    });


  });
});