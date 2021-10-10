console.log(' ---------- task_1 ')


const multiplyTwo = (n) => n * 2;
const minusFour = (n) => n - 4;

function pipe1(...array_of_fn) {
    return function (x) {
        let result = x;
        for (let i = 0; i < array_of_fn.length; i++) {
            let func = array_of_fn[i];
            result = func(result)
        }
        return result;
    }
}
x = pipe1(multiplyTwo, minusFour)(10);
console.log(x)