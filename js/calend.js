let nowDate = new Date(),
    nowDateNumber = nowDate.getDate(),
    nowMonth = nowDate.getMonth(),
    nowYear = nowDate.getFullYear(),

    container = document.getElementById('month-calendar'),

    monthContainer = document.getElementById('month'),
    yearContainer = document.getElementById('year'),

    /* daysContainer = container.getElementsByClassName('days')[0], */

    prev = document.getElementById('prev'),
    next = document.getElementById('next'),
    
    monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let curDate = nowDate.setMonth(nowDate.getMonth() - 1);
/* console.log(nowDate.getFullYear()); */

function setMonthCalendar(year,month) {
    debugger
    let monthDays = new Date(year, month + 1, 0).getDate();
    let monthPrefix = new Date(year, month, 0).getDay();
    let monthDaysText = '';

    monthContainer.textContent = monthName[month]; 
    yearContainer.textContent = year;
    
    
  /*   daysContainer.innerHTML = '';
    if (monthPrefix > 0){
        for (let i = 1  ; i <= monthPrefix; i++){
            monthDaysText += '<li></li>';
        }
    }
    for (let i = 1; i <= monthDays; i++){
        monthDaysText += '<li>' + i + '</li>';
    }
    daysContainer.innerHTML = monthDaysText;
    if (month == nowMonth && year == nowYear){
        days = daysContainer.getElementsByTagName('li');
        days[monthPrefix + nowDateNumber - 1].classList.add('date-now');
    } */
}

setMonthCalendar(nowYear,nowMonth);

prev.onclick = function () {
  /* alert("sdcsdcsdc") */

    let curDate = new Date(yearContainer.textContent,monthName.indexOf(monthContainer.textContent));
    /* let curDate = new Date(); */
    curDate.setMonth(curDate.getMonth() - 1);
    let curYear = curDate.getFullYear(),
        curMonth = curDate.getMonth();
    setMonthCalendar(curYear,curMonth);

}

next.onclick = function () {

    

    let curDate = new Date(yearContainer.textContent,monthName.indexOf(monthContainer.textContent));
    curDate.setMonth(curDate.getMonth() + 1);
    let curYear = curDate.getFullYear(),
        curMonth = curDate.getMonth();
    setMonthCalendar(curYear,curMonth);
}