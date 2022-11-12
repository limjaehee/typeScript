"use strict";
{
    function sum(a, b) {
        console.log(`sum ${a + b}`);
        return a + b;
    }
    sum(10, 20);
    //An argument for 'b' was not provided.
    //sum(10);
    // Argument of type 'string' is not assignable to parameter of type 'number'.
    //sum(10, "a");
    //Argument of type 'null' is not assignable to parameter of type 'number'.
    // sum(10, null);
    /// error, too many parameters
    // sum(10, 20, 30);
}
{
    function notReturnSum(a, b) {
        console.log(`notReturnSum ${a + b}`);
    }
    notReturnSum(10, 20);
}
{
    function sum(a, b) {
        if (b) {
            return a + b;
        }
        return a;
    }
    sum(10);
}
{
    function sum(a, b = 100) {
        console.log(`initializationSum ${a + b}`);
        return a + b;
    }
    sum(10);
    sum(10, undefined);
    // sum(10, null);
}
{
    function sum(a, ...nums) {
        let total = 0;
        // nums.forEach((num) => (total += num));
        for (let num of nums) {
            total += num;
        }
        return a + total;
    }
    console.log(sum(10, 30, 40, 50));
}
{
    let deck = {
        suits: ["hearts", "spades", "clubs", "diamonds"],
        cards: Array(52),
        createCardPicker: function () {
            // NOTE: 아랫줄은 화살표 함수로써, 'this'를 이곳에서 캡처할 수 있도록 합니다
            return () => {
                let pickedCard = Math.floor(Math.random() * 52);
                let pickedSuit = Math.floor(pickedCard / 13);
                return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
            };
        },
    };
    let cardPicker = deck.createCardPicker();
    let pickedCard = cardPicker();
    console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
}
