{
    let dog = { name: "coco", age: 5 };

    function logAge(obj: { age: number }) {
        console.log(obj.age);
    }
    logAge(dog);
}
{
    interface animalAge {
        age: number;
        address?: string;
    }

    function logAge(obj: animalAge) {
        console.log(obj.age);
    }
    let dog = { name: "coco", age: 5 };
    logAge(dog);
}
{
    interface cafe {
        readonly brand: string;
    }

    let myCafe: cafe = {
        brand: "starbucks",
    };
    // myCafe.brand = "twosome"; // error!
}
{
    console.clear();

    let arr: ReadonlyArray<number> = [1, 2, 3];

    // arr = [2];
    // arr.push(2);

    console.log(arr);
}
{
    console.clear();

    interface cafe {
        brand?: string;
        [propName: string]: any;
    }

    function myCafe(store: cafe) {
        console.log(store);
    }

    let cafeInfo = { brandon: "what", orr: "gee" };
    myCafe(cafeInfo);
}
{
    console.clear();

    interface login {
        (id: string, pw: string): boolean;
    }

    let loginUser: login;
    loginUser = function (id: string, pw: string) {
        console.log("로그인 했습니다");
        return true;
    };

    loginUser("id", "pw");
}
{
    console.clear();

    interface Person {
        name: string;
    }
    interface Developer extends Person {
        skill: string;
    }

    //속성 하나만 있어도 되는 경우
    let my = {} as Developer;

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
