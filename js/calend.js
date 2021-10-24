let nowDate = new Date(),
    nowDateNumber = nowDate.getDate(),
    nowMonth = nowDate.getMonth(),
    nowYear = nowDate.getFullYear(),
    container = document.getElementById('month-calendar'),
    monthContainer = document.getElementById('month'),
    yearContainer = document.getElementById('year'),
    /* daysContainer = container.getElementsByClassName('days')[0], */
    back = document.getElementById('back'),
    next = document.getElementById('next'),
    monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const DAYINCALENDAR = 42;
FullnameMonth = monthName[nowDate.getMonth()];
let curDate = nowDate.setMonth(nowDate.getMonth() - 1);
/* console.log(nowDate.getFullYear()); */




function setMonthCalendar(year, month) {
    /* debugger */
    let monthDays = new Date(year, month + 1, 0).getDate();
    let monthPrefix = new Date(year, month, 0).getDay();
    let monthDaysText = '';
    monthContainer.textContent = monthName[month];
    yearContainer.textContent = year;


    //получить дни выбранного месяца 
    let curDate = new Date(yearContainer.textContent, monthName.indexOf(monthContainer.textContent));
    let mn = curDate.getMonth()
    let alldays = new Date(year, mn + 1, 0).getDate();
    /* console.log("alldays = " + alldays) */
    /* console.log("alldays = " + typeof (alldays)) */
    // получить номер первого дня 
    let numberOfday = new Date(year, mn, 1).getDay()

    //создать массив всех дней.
    let alldaysarr = [];
    // массив дней предыдущего месяца 
    for (i = 0; i < numberOfday - 1; i++) {
        // показать дни предыдущего месяца
        ShowPrevDay(alldaysarr, numberOfday, year, month)

    }
    PaintdyasBefore(numberOfday)
    // заполнить массив днями месяца 
    for (i = 1; i <= alldays; i++) {
        alldaysarr.push(String(i))
    }
    // разместить массив дней в массив календаря
    let differ = DAYINCALENDAR - alldaysarr.length
    PaintdyasAfter(differ);

    // заполнить концес массива днями с другого месяца 
    if (alldaysarr.length < DAYINCALENDAR) {
        for (i = 0; i < differ; i++) {
            ShowLastDay(alldaysarr, differ, DAYINCALENDAR)
        }
    }
    // закрасить дни другого месяца 
    /* Paintdyas(numberOfday, differ) */
    /* console.log("alldays with number = " + alldaysarr) */

    // принять массиви 




    // поделить массив календаря на недели
    let week_1 = alldaysarr.slice([0], [7]);
    let week_2 = alldaysarr.slice([7], [14]);
    let week_3 = alldaysarr.slice([14], [21]);
    let week_4 = alldaysarr.slice([21], [28]);
    let week_5 = alldaysarr.slice([28], [35]);
    let week_6 = alldaysarr.slice([35], [42]);
    // промапить масив в календарь


    /* console.log("now day = " + nowDateNumber) */


    var nodes = document.getElementById("week_1").getElementsByTagName("div");
    for (var i = 0; i < nodes.length; i++) {
        nodes[i].innerText = week_1[i];
        CurDay(week_1, i, nodes)
        Set_holiday()
    }

    var nodes2 = document.getElementById("week_2").getElementsByTagName("div");
    for (var i = 0; i < nodes.length; i++) {
        nodes2[i].innerText = week_2[i];
        CurDay(week_2, i, nodes2)
        Set_holiday()
    }

    var nodes3 = document.getElementById("week_3").getElementsByTagName("div");
    for (var i = 0; i < nodes.length; i++) {
        nodes3[i].innerText = week_3[i];
        CurDay(week_3, i, nodes3)
        Set_holiday()
    }

    var nodes4 = document.getElementById("week_4").getElementsByTagName("div");
    for (var i = 0; i < nodes.length; i++) {
        nodes4[i].innerText = week_4[i];
        CurDay(week_4, i, nodes4)
        Set_holiday()
    }
    var nodes5 = document.getElementById("week_5").getElementsByTagName("div");
    for (var i = 0; i < nodes.length; i++) {
        nodes5[i].innerText = week_5[i];
        CurDay(week_5, i, nodes5)
        Set_holiday()
    }
    var nodes6 = document.getElementById("week_6").getElementsByTagName("div");
    for (var i = 0; i < nodes.length; i++) {
        nodes6[i].innerText = week_6[i];
        CurDay(week_6, i, nodes6)
        Set_holiday()
    }

}



setMonthCalendar(nowYear, nowMonth);








function CurDay(week, i, node) {
    let ViewMonth = monthContainer.innerHTML;
    let ViewYear = yearContainer.innerHTML;
    if (week[i] == nowDateNumber && ViewMonth === FullnameMonth && ViewYear == nowYear) {
        node[i].classList.add("current_day")
    } else {
        node[i].classList.remove("current_day")
    }
}

back.onclick = function () {
    let curDate = new Date(yearContainer.textContent, monthName.indexOf(monthContainer.textContent));
    curDate.setMonth(curDate.getMonth() - 1);
    let curYear = curDate.getFullYear(),
        curMonth = curDate.getMonth();
    setMonthCalendar(curYear, curMonth);

}

next.onclick = function () {
    let curDate = new Date(yearContainer.textContent, monthName.indexOf(monthContainer.textContent));
    curDate.setMonth(curDate.getMonth() + 1);
    let curYear = curDate.getFullYear(),
        curMonth = curDate.getMonth();
    setMonthCalendar(curYear, curMonth);
}

function ShowPrevDay(arr, days, year, month) {
    var elem = document.getElementById('show');
    let DaysPrevMonth = new Date(year, month, 0).getDate();
    if (elem.checked) {
        for (i = 0; i < days - 1; i++) {
            arr[(days - 2) - i] = (String(DaysPrevMonth - i))
        }
    } else { arr.push("") }
}

function ShowLastDay(arr, differ, DAYINCALENDAR) {
    var elem = document.getElementById('show');
    if (elem.checked) {
        if (arr.length < DAYINCALENDAR) {
            for (i = 0; i < differ; i++) {
                arr.push(String(i + 1))
            }
        }
    } else { arr.push("") }
}

function PaintdyasBefore(beforeDays) {
    var elem = document.getElementById('show');
    var node = document.getElementById("week_1").getElementsByTagName("div");
    for (let i = 0; i < node.length; i++) {
        node[i].classList.remove("different_month")
    }
    if (elem.checked) {
        for (let i = 0; i < beforeDays - 1; i++) {
            node[i].classList.add("different_month")
        }
    }
}

function PaintdyasAfter(afterdays) {
    var elem = document.getElementById('show');
    var node5 = document.getElementById("week_5").getElementsByTagName("div");
    var node6 = document.getElementById("week_6").getElementsByTagName("div");
    let nodelength = node5.length;
    
    for (let i = 0; i < node5.length; i++) {
            node5[i].classList.remove("different_month")
            node6[i].classList.remove("different_month")
        }

    if (elem.checked) {
        

        if (afterdays <= 7) {
            for (let i = 0; i < afterdays - 1; i++) {
                node6[i].classList.add("different_month")
            }
        }

        if (afterdays > 7) {
            lastElements = (afterdays) - 7
            for (let i = 0; i <= lastElements -1  ; i++) {
                let dif = 6 - i ;
                node5[dif].classList.add("different_month")
            }

            for (let i = 0; i < 7 ; i++) {
                node6[i].classList.add("different_month")
            }

        }

    }






}