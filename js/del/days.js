
const ELEMENT = 'div';
const WEEKLENGTH = 31;


function setdays(id, week) {
    var nodes = document.getElementById(id).getElementsByTagName(ELEMENT);
    for (var i = 0; i < nodes.length; i++) {
        nodes[i].innerText = week[i];
    }
}

/* function getNamberOfWeek(date) { 
    let day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
  } */

function days(id) {
    /* debugger */
    let date = new Date();
    let days = []
    for (i = 0; i < WEEKLENGTH; i++) {
        let day = date.getDate() + i
        days.push(day)
    }
    setdays(id, days)
}


days("week_1");
days("week_2");
days("week_3");
days("week_4");
days("week_5");
days("week_6");