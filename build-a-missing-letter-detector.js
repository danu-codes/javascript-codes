//start of script.js

    function fearNotLetter(str) {
        let alphabeticalOrder = "abcdefghijklmnopqrstuvwxyz";
        let startIndex = alphabeticalOrder.indexOf(str[0]);
        for (let index = 0; index < str.length; index++) {
            if (str[index] !== alphabeticalOrder[startIndex + index]) {
                return alphabeticalOrder[startIndex + index];
            }
        }
        return undefined;
    }

//let result = fearNotLetter("abce");
//let result = fearNotLetter("abcdefghjklmno");
//let result = fearNotLetter("stvwx");
//let result = fearNotLetter("bcdf");
let result = fearNotLetter("abcdefghijklmnopqrstuvwxyz");

console.log(`Missing letter : ${result}`);

//end of script.js

