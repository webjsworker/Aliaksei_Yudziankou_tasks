import { AddEvent, eventInput, eventText, Calendar } from './calendar.js'
import { arrId, writeItem } from './set.js'

let todo = {
    /* text: [], */
    day: 1,
    fullDate: '',
    eventDataId: 'event__data',
}

let setMesage = function (text, fullDate) {
    if (todo[fullDate] === undefined) {
        todo[fullDate] = [];
        todo[fullDate].push(text)
    } else todo[fullDate].push(text)
    /* console.log("todo[fullDate] = " + todo[fullDate]) */
}

let addText = function () {
    removeText()
    for (let key in todo) {
        if (key == todo.fullDate) {
            console.log(todo.day)
            if(todo[todo.fullDate].length != 0){
               addicone(todo.day, 0)  
            }
           
            insertText(key)
        }
    }
}

let insertText = function (key) {
    for (let i = 0; i < todo[key].length; i++) {
        let div = document.createElement('div')
        eventText.appendChild(div)
        let nodes = eventText.getElementsByTagName("div");
        nodes[i].innerText = todo[key][i];
        addDel(nodes[i])
    }
    eventInput.value = "";
}

let addDel = function (node) {
    let span = document.createElement('span')
    span.id = "message"
    span.style.color = 'red';
    span.style.fontSize = '15px'
    node.appendChild(span).innerText = 'Delete'
   
}
let messageItem = document.getElementById('event__text')

messageItem.onclick = function (event) {
    let node = document.getElementById('event__text').getElementsByTagName("span")
    for (let i = 0; i < node.length; i++) {
        if (node[i] == event.target) {
            let index = todo[todo.fullDate].indexOf(todo[todo.fullDate][i])
            todo[todo.fullDate].splice(index, 1)
            addText()
        }
    }
    if (todo[todo.fullDate].length === 0) {
        addicone(todo.day, 1)
    }
}

let addicone = function (day, number) {
    let elem = document.getElementsByClassName('days_number')
    /*  console.log('isArray = ' + Array.isArray(elem)) */
    /*  elem[day].classList.style.color="green" */
    for (let i = 0; i < elem.length; i++) {
        if (!elem[i].classList.contains('different_month')) {
            /*  let index = elem.indexOf(elem[i])
             elem.splice(index, 1 ) */
            if (elem[i].innerText == day && number === 0) {
                elem[i].style.color = "green"
            }
            if (elem[i].innerText == day && number === 1) {
                elem[i].style.color = "white"
            }
        }
    }
}

let removeText = function () {
    let nodes = eventText.getElementsByTagName("div");
    let length = nodes.length;
    if (length > 0) {
        for (let i = 0; i < length; i++) {
            nodes[0].remove()
        }
    }
}

AddEvent.onclick = function () {
        if (eventInput.value !== "") {
        let text = eventInput.value;
        setMesage(text, todo.fullDate)
        addText()
    }
}

let full_month = document.getElementById('full_month')

full_month.onclick = function (event) {
    removeSelected(arrId)
    getDay(event)
    setSelectedDateEvent()
    writeItem(todo.eventDataId, todo.fullDate)
    addText()
};

let getDay = function (event) {
    if (!event.target.classList.contains('different_month')) {
        let value = event.target.innerText
        event.target.classList.add("selected_day")
        todo.day = Number(value);
    }
}

export let removeSelected = function (arrId) {
    for (let i = 0; i < 6; i++) {
        let nodes = document.getElementById(arrId[i]).getElementsByTagName("div");
        for (let x = 0; x < 7; x++) {
            nodes[x].classList.remove("selected_day")
        }
    }
}

let setSelectedDateEvent = function () {
    let day = todo.day;
    let monthNumber = Calendar.curMonth;
    let year = Calendar.getYearContent();
    let dateEvent = new Date(year, monthNumber, day).toDateString();
    todo.fullDate = dateEvent;
}


 /*  let day = elem[i].innerText
             let d = todo.day
             if(day == d ){
              console.log('Ok')
              elem[i].classList.style.color="green"
      
             } */
            /* console.log(day)
            console.log(todo.fullDate)
            console.log('todo.day = ' + d ) */
            /*  elem[i].style.color = 'green'; */