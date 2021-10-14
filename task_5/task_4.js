console.log("----------- task_4 ")

const multiply_Two = (el,m) => el * m;

function multiplyAll(arr) {
    /* debugger */
    return function (v) {
        let ret  = arr.map(item =>multiply_Two(item, v) );
        return ret;
    }
}
console.log('multiplay = ' + multiplyAll([1, 2, 3])(2))