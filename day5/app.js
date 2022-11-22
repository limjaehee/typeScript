"use strict";
{
    let dog = { name: "coco", age: 5 };
    function logAge(obj) {
        console.log(obj.age);
    }
    logAge(dog);
}
{
    function logAge(obj) {
        console.log(obj.age);
    }
    let dog = { name: "coco", age: 5 };
    logAge(dog);
}
{
    let myCafe = {
        brand: "starbucks",
    };
    // myCafe.brand = "twosome"; // error!
}
{
    console.clear();
    let arr = [1, 2, 3];
    // arr = [2];
    // arr.push(2);
    console.log(arr);
}
{
    console.clear();
    function myCafe(store) {
        console.log(store);
    }
    let cafeInfo = { brandon: "what", orr: "gee" };
    myCafe(cafeInfo);
}
{
    console.clear();
    let loginUser;
    loginUser = function (id, pw) {
        console.log("로그인 했습니다");
        return true;
    };
    loginUser("id", "pw");
}
{
    console.clear();
    //속성 하나만 있어도 되는 경우
    let my = {};
    // 속성 모두 다 있어야 하는 경우
    /*
    let my: Developer = {
        name: "kiki",
        skill: "TypeScript",
    };
    */
    my.name = "kiki";
    my.skill = "TypeScript";
    console.log(my); //{name: 'kiki', skill: 'TypeScript'}
}
