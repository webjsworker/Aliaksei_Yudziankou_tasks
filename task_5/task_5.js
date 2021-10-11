
console.log("----------- task_5")

const giffer = (el, vul) => {
    if (el === vul) {
        return "0"
    } else { return el }
};
function arrayDiff(...arg) {
    let firstArg = arg[0];
    let secondArg = arg[1];
    let diff = ["--"]
    if (arg[0].length === 0) {
        return []
    }
    if (arg[1].length === 0) {
        return arg[0]
    }
    for (i = 0; i < secondArg.length; i++) {
        diff = firstArg.map(item => giffer(item, secondArg[i]));
        console.log("dif = " + diff)
        diff = diff.filter(elem => elem != "0");
        firstArg = diff;
    }
    return diff
}

console.log("arrayDiff = " + arrayDiff([1, 2, 3], [1, 2]))
