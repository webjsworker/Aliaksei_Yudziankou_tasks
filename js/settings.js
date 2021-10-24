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
}


// конфигурация блока настроек
var elem = document.getElementById('show');

elem.onclick = function () {
    setMonthCalendar(nowYear, nowMonth);
}

// обработка состояние чекбокс 
//именениея значения переменной вклю.выкл
// создать функцию дополняющую массив предыдущими днями 
// закрашивать предыдущие дни. 
