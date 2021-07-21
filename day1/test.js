"use strict";
exports.__esModule = true;
//문자
var strTxt = 'hi';
//숫자
var numTxt = 10;
//논리
var isTrueTxt = false;
//배열
var array = [1, 2, 3];
var array1 = [1, 2, 3]; //제네릭 사용법
//배열의 고정요소 타입
var array2 = ['hi', 10];
//오류
//console.log(arr[1].concat('!');) // Error, 'number' does not have 'concat'
//console.log(arr[5] = 'hello') // Error, Property '5' does not exist on type '[string, number]'.
//enum
/* 이넘은 c, java와 같은 다른 언어에서 흔하게 쓰이는 타입으로 특정 값(상수)들의 집합을 의미합니다. */
var Avengers;
(function (Avengers) {
    Avengers[Avengers["capt"] = 0] = "capt";
    Avengers[Avengers["IronMan"] = 1] = "IronMan";
    Avengers[Avengers["Thor"] = 2] = "Thor";
})(Avengers || (Avengers = {}));
var hero = Avengers.capt;
console.log(hero);
/* 인덱스 번호로 접근하기 */
var hero1 = Avengers[1];
console.log('Avengers' + hero1); //IronMan
/* 인덱스 변경해서 사용하기*/
var Avengers2;
(function (Avengers2) {
    Avengers2[Avengers2["capt"] = 2] = "capt";
    Avengers2[Avengers2["IronMan"] = 3] = "IronMan";
    Avengers2[Avengers2["Thor"] = 4] = "Thor";
})(Avengers2 || (Avengers2 = {}));
var hero2 = Avengers2[2];
var hero3 = Avengers2[4];
console.log('Avengers2' + hero2); //capt
console.log('Avengers2' + hero3); //Thor
console.log('test');
