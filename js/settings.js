let Blocksettings = document.getElementById('settings')
let Blockdays = document.getElementById('days')
let Blockmenu = document.getElementById('menu')
let Blockback = document.getElementById('menu_back')

Blocksettings.onclick = function () {
    Blockdays.style.display = "none"
    Blockmenu.style.display = "block"
}
Blockback.onclick = function () {
    Blockmenu.style.display = "none"
    Blockdays.style.display = "block"
    
    apdateApp()
    
    /* setAllDay(arrId, arrweek); */
}

let hidedays = document.getElementById('show');
hidedays.onclick = function () {
    apdateApp()
}

let firstDay = document.getElementById('first_day');
firstDay.onclick = function () {

    if (firstDay.checked) {
       Calendar.weekendDays[0] = Calendar.weekendDays[0] + 1  
        if (Calendar.weekendDays[0] > 6 ) {Calendar.weekendDays[0] = 0}
        Calendar.weekendDays[1] = Calendar.weekendDays[1] + 1 
        if (Calendar.weekendDays[1] > 6 ) {Calendar.weekendDays[1] = 0}
    } 




    apdateApp()
}



