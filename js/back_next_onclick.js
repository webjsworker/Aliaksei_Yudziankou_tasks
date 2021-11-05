import {Fulldate, back , next, language, Calendar} from './calendar.js'
import {DatefromPage} from '../index.js'
import {apdateApp, writeItem , initialisation , arrId} from './set.js'
import {removeSelected} from './todo.js'

back.onclick = function () {
    /* let curDate = new Date(yearContainer.textContent, monthName.indexOf(monthContainer.textContent)); */
    let curDate = DatefromPage
    curDate.setMonth(curDate.getMonth() - 1);
    Calendar.curYear = curDate.getFullYear(),
    Calendar.curMonth = curDate.getMonth();
    writeItem(Calendar.monthId, Calendar.getFullNameMonth())
    writeItem(Calendar.yearId, Calendar.curYear)
    apdateApp()
    removeSelected(arrId)
  }
next.onclick = function () {
    let curDate = DatefromPage
    curDate.setMonth(curDate.getMonth() + 1);
    Calendar.curYear = curDate.getFullYear(),
    Calendar.curMonth = curDate.getMonth();
    writeItem(Calendar.monthId, Calendar.getFullNameMonth())
    writeItem(Calendar.yearId, Calendar.curYear)
    apdateApp()
    removeSelected(arrId)
   }

Fulldate.onclick = function () {
    initialisation()
    apdateApp()
}

language.onclick = function () {
    if(language.checked){
        Calendar.language = 1 ; 
    } else {Calendar.language = 0}
    apdateApp()
}

export let a = 10 ;








/* AddEvent.onclick = function () {
    console.log ("Please, Add new event")
} */
