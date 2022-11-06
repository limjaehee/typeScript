{
    let str: string = "text";
}
{
    let arr: number[] = [1, 2, 3];
    let arrGeneric: Array<number> = [1, 2, 3];
}
{
    let arr: [string, number] = ["hello", 1];
    console.log(arr[0].concat("!"));
}
{
    enum Animals {
        cat = 0,
        dog,
        rabbit,
    }

    let zoo = Animals[0];
}
{
    let undefinedType: void = undefined;
    // Type 'null' is not assignable to type 'void'.
}
{
    // 이 함수는 절대 함수의 끝까지 실행되지 않는다는 의미
    function neverEnd(): never {
        while (true) {}
    }
}
