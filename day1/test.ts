//문자
let strTxt: string = 'hi';
//숫자
let numTxt: Number = 10;
//논리
let isTrueTxt: boolean = false;
//배열
let array: number[] = [1,2,3];
let array1 : Array<number> = [1,2,3]; //제네릭 사용법
//배열의 고정요소 타입
let array2 : [string, number] = ['hi', 10];

//오류
//console.log(arr[1].concat('!');) // Error, 'number' does not have 'concat'
//console.log(arr[5] = 'hello') // Error, Property '5' does not exist on type '[string, number]'.

//enum
/* 이넘은 c, java와 같은 다른 언어에서 흔하게 쓰이는 타입으로 특정 값(상수)들의 집합을 의미합니다. */
enum Avengers { capt, IronMan, Thor }
let hero: Avengers = Avengers.capt;
console.log(hero);
/* 인덱스 번호로 접근하기 */
let hero1: Avengers = Avengers[1];
console.log('Avengers' + hero1); //IronMan
/* 인덱스 변경해서 사용하기*/
enum Avengers2 { capt = 2 , IronMan, Thor }
let hero2: Avengers2 = Avengers2[2];
let hero3: Avengers2 = Avengers2[4];
console.log('Avengers2' + hero2) //capt
console.log('Avengers2' + hero3) //Thor


console.log('test')

//ts 에러 방지
export{};