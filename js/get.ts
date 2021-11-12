import {Calendar} from './calendar.js'

export let getNumberOfFirstDay = function () {
    Calendar.NumberOfFirstDay =  new Date(Number(Calendar.getYearContent()), Calendar.curMonth  , 1).getDay()
}