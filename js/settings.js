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


let hidedays = document.getElementById('show');
hidedays.onclick = function () {
    apdateApp()
}

let firstDay = document.getElementById('first_day');
firstDay.onclick = function () {
    apdateApp()
}


// обработка состояние чекбокс 
//именениея значения переменной вклю.выкл
// создать функцию дополняющую массив предыдущими днями 
// закрашивать предыдущие дни. 
