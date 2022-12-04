"use strict";
{
    let Direction;
    (function (Direction) {
        Direction[Direction["Up"] = 0] = "Up";
        Direction[Direction["Down"] = 4] = "Down";
        Direction[Direction["Left"] = 5] = "Left";
        Direction[Direction["Rgiht"] = 6] = "Rgiht";
    })(Direction || (Direction = {}));
    console.log(Direction);
}
{
    let Response;
    (function (Response) {
        Response[Response["No"] = 0] = "No";
        Response[Response["Yes"] = 1] = "Yes";
    })(Response || (Response = {}));
    function respond(recipient, message) {
        console.log(message);
    }
    respond("Captain Pangyo", Response.Yes);
}
{
    let Direction;
    (function (Direction) {
        Direction["Up"] = "UP";
        Direction["Down"] = "DOWN";
        Direction["Left"] = "LEFT";
        Direction["Right"] = "RIGHT";
    })(Direction || (Direction = {}));
}
{
    let BooleanEnum;
    (function (BooleanEnum) {
        BooleanEnum[BooleanEnum["No"] = 0] = "No";
        BooleanEnum["Yes"] = "YES";
    })(BooleanEnum || (BooleanEnum = {}));
}
{
    let E;
    (function (E) {
        E[E["X"] = 0] = "X";
        E[E["Y"] = 1] = "Y";
        E[E["Z"] = 2] = "Z";
    })(E || (E = {}));
    function getX(obj) {
        return obj.X;
    }
    getX(E); // 이넘 E의 X는 숫자이기 때문에 정상 동작
}
{
    let LogLevel;
    (function (LogLevel) {
        LogLevel[LogLevel["ERROR"] = 0] = "ERROR";
        LogLevel[LogLevel["WARN"] = 1] = "WARN";
        LogLevel[LogLevel["INFO"] = 2] = "INFO";
        LogLevel[LogLevel["DEBUG"] = 3] = "DEBUG";
    })(LogLevel || (LogLevel = {}));
    function printImportant(key, message) {
        const num = LogLevel[key];
        if (num <= LogLevel.WARN) {
            console.log("Log level key is: ", key);
            console.log("Log level value is: ", num);
            console.log("Log level message is: ", message);
        }
    }
    printImportant("ERROR", "This is a message");
}
{
    let Answer;
    (function (Answer) {
        Answer["Yes"] = "Y";
        Answer["No"] = "N";
    })(Answer || (Answer = {}));
    function askQuestion(answer) {
        if (answer === Answer.Yes) {
            console.log("정답");
        }
        else if (answer === Answer.No) {
            console.log("오답");
        }
    }
    askQuestion(Answer.Yes);
}
