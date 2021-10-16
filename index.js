let obj = {
    name: "Bob",
    job: "driver",
    age: {
        month: "March",
        day: 20,
        year: 2020,
    },
    experience: {
        track: {
            first: "man",
            second: "maz",
        }
    }
}

let copyObj = Object.assign({}, obj)
/* console.log(copyObj)  */

function clone(object) {
    let newObject = {}
    for (let key in object) {
        if (typeof object[key] !== 'object') {
            newObject[key] = object[key]
        } else {
            newObject[key] = clone(object[key])
        }
    }
    return newObject
}
console.log(clone(obj))
