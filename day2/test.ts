/* 타입스크립트에서의 함수, 매개변수 초기화 */
function Sum(a: number, b = 100 ):number {
    return a + b;
}
console.log(Sum(10, undefined));

