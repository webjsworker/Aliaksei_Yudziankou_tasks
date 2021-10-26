let initialisation = function () {
    // установили номер текущего месяца.
    setCurMonth()
    // записать значение месяца и года
    writeItem(Calendar.monthId, Calendar.getFullNameMonth())
    writeItem(Calendar.yearId, Calendar.nowYear)
}

// установили номер текущего месяца. 
let setCurMonth = function () {
    Calendar.curMonth = nowDate.getMonth() + 1;
}

//получить дни выбранного месяца // number
let setMaxDaysInMonth = function () {
    Calendar.maxDaysInMonth = new Date(Calendar.getYearContent(), Calendar.curMonth + 1, 0).getDate();
}

function set_week_name(language) {
    let dayOfweek_EN = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]
    let dayOfweek_RU = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]
    language === 0 ? dayOfweek = dayOfweek_EN : dayOfweek = dayOfweek_RU;
    let weeksnodes = document.getElementById("weeks_name").getElementsByTagName("div");
    for (var i = 0; i < weeksnodes.length; i++) {
        weeksnodes[i].innerText = dayOfweek[i];
    }
};


let setPrevDays = function () {
    Calendar.alldays = [];
    let DaysPrevMonth = new Date(Calendar.getYearContent(), monthName.indexOf(Calendar.getFullNameMonth()), 0).getDate();
    for (let i = 0; i < Calendar.NumberOfFirstDay; i++) {

        Calendar.alldays[(Calendar.NumberOfFirstDay - 1) - i] = (String(DaysPrevMonth - i))

    }
}

let setCurDays = function () {
    let alldays = new Date(Calendar.getYearContent(), Calendar.curMonth + 1, 0).getDate();
    for (i = 1; i <= alldays; i++) {
        Calendar.alldays.push(String(i))
    }
}

let setLastDays = function () {
    let differ = DAYINCALENDAR - Calendar.alldays.length
    for (i = 0; i < differ; i++) {
        Calendar.alldays.push(String(i + 1))
    }
}


let setAllDay = function (arrId, arrweek) {
    for (var i = 0; i < 6; i++) {
        let nodes = document.getElementById(arrId[i]).getElementsByTagName("div");
        for (var x = 0; x < 7; x++) {
            nodes[x].innerText = arrweek[i][x]
        }
    }
}

function setCurDay(arrId, arrweek) {
    let curday = Calendar.nowDate.getDate() + Calendar.NumberOfFirstDay
    let counter = 0;
    for (var i = 0; i < 6; i++) {
        for (var x = 0; x < 7; x++) {
            counter++
            let nodes = document.getElementById(arrId[i]).getElementsByTagName("div");
            if (curday === counter
                && Calendar.getFullNameMonth() === Calendar.getCurMonth()
                && Calendar.getYearContent() == Calendar.nowYear) {
                nodes[x].classList.add("current_day")
            } else {
                nodes[x].classList.remove("current_day")
            }
        }
    }
}


function PaintdyasBefore(beforeDays) {
    var node = document.getElementById("week_1").getElementsByTagName("div");
    for (let i = 0; i < node.length; i++) {
        node[i].classList.remove("different_month")
    }
    for (let i = 0; i < beforeDays; i++) {
        node[i].classList.add("different_month")
    }


    /* var elem = document.getElementById('show');
    var node = document.getElementById("week_1").getElementsByTagName("div");
    for (let i = 0; i < node.length; i++) {
        node[i].classList.remove("different_month")
    }
      if (elem.checked) {
        for (let i = 0; i < beforeDays - 1; i++) {
            node[i].classList.add("different_month")
        }
    } */
}

let setDaysInMonth = function () {
    Calendar.dayInMonth = new Date(Calendar.nowYear, Calendar.curMonth + 1, 0).getDate();
}


let setAfterDays = function (DAYINCALENDAR, NumberOfFirstDay, dayInMonth) {
    Calendar.afterdays = DAYINCALENDAR - NumberOfFirstDay - dayInMonth
}