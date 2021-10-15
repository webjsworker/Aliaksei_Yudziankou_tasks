let obj = {
    name: "Bob",
    job:"driver",
    age: {
        month: "March",
        day: 20, 
        year: 2020,
    },
    experience: {
        track:{
            first: "man",
            second:"maz",
        }
    }
}

let copyObj = {};

copyObj = Object.assign({}, obj)



console.log( obj) 
console.log(copyObj) 

if( obj == copyObj) {
    console.log("don't work")
} else { 
    console.log("work")
}