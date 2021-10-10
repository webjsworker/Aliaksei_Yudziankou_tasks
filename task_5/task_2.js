
console.log("------- task_2")

function memo(fn) {
    /*  debugger */
    return (...arg) => {
        let cache = [[1, 2, 3], [2, 2, 4]]
        for (let i = 0; i < cache.length; i++) {
            if (arg[0] === cache[i][0] || arg[0] === cache[i][1] &&
                arg[1] === cache[i][0] || arg[1] === cache[i][1]) {

                console.log('Fetching from cache');
                return cache[i][2];
            } else {
                console.log('Fetching from function');
                let res = arg[0] + arg[1]
                let elem = [arg[0], arg[1], res]
                cache.push(elem)
                return res
            }
        }
        /*  return arg[0] + arg[1] */
    }
}




const sum = (a, b) => a + b;

const memedSum = memo(sum)

console.log(memo(sum)(3, 1))