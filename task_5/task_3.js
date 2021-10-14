console.log("---------- task_3 ")

let obj = {
    firstName: "Ivan",
    secondName: "Ivanov",
};
let arg = ["Vasia", "Vasianon"]
function apply(Fn, obj, arg) {
    obj.firstName = arg[0];
    obj.secondName = arg[1];
    
     obj.Fm = Fn;
    return     obj.Fm()
}
function Fn() {
    return this.firstName;
}
console.log( `apply = ${apply(Fn, obj, arg)} `  ) 