back.onclick = function () {
    /* let curDate = new Date(yearContainer.textContent, monthName.indexOf(monthContainer.textContent)); */
    let curDate = DatefromPage
    curDate.setMonth(curDate.getMonth() - 1);
    Calendar.curYear = curDate.getFullYear(),
    Calendar.curMonth = curDate.getMonth();
    writeItem(Calendar.monthId, Calendar.getFullNameMonth())
    writeItem(Calendar.yearId, Calendar.curYear)

    apdateApp()
    

}
next.onclick = function () {
    let curDate = DatefromPage
    curDate.setMonth(curDate.getMonth() + 1);
    Calendar.curYear = curDate.getFullYear(),
    Calendar.curMonth = curDate.getMonth();
    writeItem(Calendar.monthId, Calendar.getFullNameMonth())
    writeItem(Calendar.yearId, Calendar.curYear)

    apdateApp()
    
}


