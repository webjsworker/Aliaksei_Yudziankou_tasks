
console.log("------- task_2")

function memo(fn) {
    return (...arg) => {
        let cache = [[1, 2, 3], [2, 2, 4]] // value for example
        for (let i = 0; i < cache.length; i++) {
            if (arg[0] === cache[i][0] || arg[0] === cache[i][1] &&
                arg[1] === cache[i][0] || arg[1] === cache[i][1]) {
                return cache[i][2];
            } else {
                let res = sum(arg[0], arg[1])
                let elem = [arg[0], arg[1], res]
                cache.push(elem)
                return res
            }
        }
    }
}




const sum = (a, b) => a + b;

const memedSum = memo(sum)

console.log(memo(sum)(3, 1))