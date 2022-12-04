{
    enum Direction {
        Up, //0
        Down = 4, //4
        Left, //5
        Rgiht, //6
    }

    console.log(Direction);
}
{
    enum Response {
        No = 0,
        Yes = 1,
    }

    function respond(recipient: string, message: Response): void {
        console.log(message);
    }

    respond("Captain Pangyo", Response.Yes);
}
{
    enum Direction {
        Up = "UP",
        Down = "DOWN",
        Left = "LEFT",
        Right = "RIGHT",
    }
}
{
    enum BooleanEnum {
        No = 0,
        Yes = "YES",
    }
}
{
    enum E {
        X,
        Y,
        Z,
    }

    function getX(obj: { X: number }) {
        return obj.X;
    }
    getX(E); // 이넘 E의 X는 숫자이기 때문에 정상 동작
}
{
    enum LogLevel {
        ERROR,
        WARN,
        INFO,
        DEBUG,
    }

    // 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';
    type LogLevelStrings = keyof typeof LogLevel;

    function printImportant(key: LogLevelStrings, message: string) {
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
    enum Answer {
        Yes = "Y",
        No = "N",
    }

    function askQuestion(answer: Answer) {
        if (answer === Answer.Yes) {
            console.log("정답");
        } else if (answer === Answer.No) {
            console.log("오답");
        }
    }

    askQuestion(Answer.Yes);
}
