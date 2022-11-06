"use strict";
{
    let str = "text";
}
{
    let arr = [1, 2, 3];
    let arrGeneric = [1, 2, 3];
}
{
    let arr = ["hello", 1];
    console.log(arr[0].concat("!"));
}
{
    let Animals;
    (function (Animals) {
        Animals[Animals["cat"] = 0] = "cat";
        Animals[Animals["dog"] = 1] = "dog";
        Animals[Animals["rabbit"] = 2] = "rabbit";
    })(Animals || (Animals = {}));
    let zoo = Animals[0];
}
{
    let undefinedType = undefined;
    // Type 'null' is not assignable to type 'void'.
}
{
    // 이 함수는 절대 함수의 끝까지 실행되지 않는다는 의미
    function neverEnd() {
        while (true) { }
    }
}
