/* 타입스크립트 기본타입 */

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
enum Avengers { capt , IronMan, Thor }
let hero: Avengers = Avengers.capt;
document.write( hero +'<br>')

/* 인덱스 번호로 접근하기 */
let hero1 = Avengers[1];
document.write('Avengers '+ hero1 +'<br>') //IronMan

/* 인덱스 변경해서 사용하기*/
enum Avengers2 { capt = 2 , IronMan, Thor }
let hero2 = Avengers2[2];
let hero3 = Avengers2[4];
document.write('Avengers2 '+ hero2 +'<br>') //capt
document.write('Avengers2 '+ hero3 +'<br>') //Thor

//any 
/* 기존에 자바스크립트로 구현되어 있는 웹 서비스 코드에 타입스크립트를 점진적으로 적용할 때 활용, 모든 타입에 대해서 허용한다는 의미를 가짐 */
let str: any = "hi";
let num: any = 10;
let arr: any = ['a',2,true];

//void
/* 변수에는 undefind와 null만 할당하고 함수에는 반환 값을 설정할 수 없는 타입 */
let unuseful: void = undefined;
document.write('unuseful '+ unuseful +'<br>')
function notuse():void {
    document.write('sth '+ '<br>')
}
notuse();

//never
/* 함수의 끝에 절대 도달하지 않는다는 의미를 지닌 타입 */
// function neverEnd():never {
//     while(true) {

//     }
// }
// neverEnd()

console.log('test')

//ts 에러 방지
export{};