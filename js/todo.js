

let todo = {
    /* text: [], */
    day: 1,
    fullDate: '',
    eventDataId: 'event__data',

}

let setMesage = function (text, fullDate) {


if(todo[fullDate] === undefined) {
    todo[fullDate] = [];
           todo[fullDate].push(text)
} else todo[fullDate].push(text)

    console.log("todo[fullDate] = " + todo[fullDate]) 
    
}

let addText = function () {
    removeText()
    for (key in todo) {
        if (key == todo.fullDate) {
            insertText(key)
        }
    }
}

let insertText = function (key) {
   
    
 for (let i= 0 ; i < todo[key].length; i++ ){
      let div = document.createElement('div')
     eventText.appendChild(div)
    let nodes = eventText.getElementsByTagName("div");
     nodes[i].innerText = todo[key][i];
 }
    
    
    eventInput.value = "";
}
let removeText = function () {
    let nodes = eventText.getElementsByTagName("div");
    let length = nodes.length ;
    if (length >  0 ) {
for (let i = 0; i < length; i++) {
        nodes[0].remove()
    }

    }
    
}

AddEvent.onclick = function () {
    let text = eventInput.value;
    setMesage(text, todo.fullDate)
    addText()
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

let removeSelected = function (arrId) {
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

/* let setText = function (text) {
    todo.text.push(text)
} */

/* let div = document.createElement('div');
eventText.append(div)
let nodes = eventText.getElementsByTagName("div");
for (let i = 0; i < nodes.length; i++) {
    nodes[i].innerText = todo.text[i];
}
eventInput.value = ""; */

/*  console.log("text message = " + todo[todo.fullDate]) */

// получить значение выбранного дня. Дочернего элемента.
// сформировать дату из этого дня и отображаемого месяца и года 
// вставить эту дату перед input 
// сохранениен данных ключ:значение  ключ-дата значение-текст.
// при отрисовке сравнить выбранную дату с датой в ключ-значение

