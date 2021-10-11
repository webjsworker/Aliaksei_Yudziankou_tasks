console.log("--------------- task - 2 ")
let word = "warfiRe"
let solution = (param) => {
    let result = "";
    let wordPattern = [];
    param = param.toUpperCase();
    let wordToArray = param.split('');
    let uniqueArr = [...new Set(wordToArray)];
    for (i = 0; i <= wordToArray.length - 1; i++) {
        let number = uniqueArr.indexOf(wordToArray[i])
        wordPattern.push(number);
    }
    result = wordPattern.join('.');
    return result
}
console.log(solution(word))
