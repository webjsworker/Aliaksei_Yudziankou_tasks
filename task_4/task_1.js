console.log("-------------- task 1 -------------")

 let data = 'hello worldd' 


let calculate = (str) => {
let arr = str.split( ' ')  ;
for (i = 0; i <= arr.length -1 ; i++ ){
     arr[i] = arr[i] + " " + String(arr[i].length); 
 }
 return arr
}
console.log(calculate(data))
