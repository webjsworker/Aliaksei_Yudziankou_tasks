
console.log("------------ task_3 ")
let str = "aaaabbcdefffffffg";
let doublbrakets = (inputString) => {
    if (typeof (inputString) != "string") {
        return "Please enter a valid string"
    }
    let result = ''
    let count = 0;
    let strToArray = inputString.split('');
    for (let i = 0; i <= strToArray.length - 1; i++) {
        if (strToArray[i] === strToArray[i + 1]) {
            count++;
        } else {
            if (count === 0) {
                result += String(strToArray[i]);
                count = 0;
            }
            if (count === 1) {
                result += String(strToArray[i]).repeat(count + 1);
                count = 0;
            }
            if (count >= 2) {
                result += String(strToArray[i]).repeat(2) + '[' + String(strToArray[i]).repeat(count - 1) + "]";
                count = 0;
            }
        }
    }
    return result
}
console.log(doublbrakets(str))