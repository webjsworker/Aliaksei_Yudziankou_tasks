import {initialisation, apdateApp} from './js/set.js'
import {Calendar, monthName} from './js/calendar.js'

import {a} from './js/back_next_onclick.js'
console.log(a)


initialisation()
export let DatefromPage = new Date(Calendar.getYearContent(), monthName.indexOf(Calendar.getFullNameMonth()));
apdateApp()


