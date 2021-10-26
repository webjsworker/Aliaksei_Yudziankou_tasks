// номер дня начала месяца 
let getNumberOfFirstDay = function () {
    Calendar.NumberOfFirstDay =  new Date(Calendar.getYearContent(), Calendar.curMonth, 1).getDay()
}