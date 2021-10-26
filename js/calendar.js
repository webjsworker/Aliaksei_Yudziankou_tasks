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


let Calendar = {
    nowDate: nowDate,
    nowMonth: nowMonth,
    monthId: 'month',
    curMonth: 1, // number
    maxDaysInMonth: 1,
    getCurMonth: function () {
        return monthName[this.nowMonth]
    },
    getFullNameMonth: function () {
        return monthName[this.curMonth]
    },
    monthName: monthName,
    FullnameMonth: FullnameMonth,
    alldaysarr: [],
    nowYear: nowYear,
    yearId: 'year',
    curYear: 1,
    getYearContent: function () {
        return document.getElementById('year').textContent
    },
    daysName: [],
    language: 0, // 0 or  1 
    NumberOfFirstDay: 1,
    alldays: [],
    dayInMonth: 1,

    week_1: function () {
        return this.alldays.slice([0], [7])
    },
    week_2: function () {
        return this.alldays.slice([7], [14])
    },
    week_3: function () {
        return this.alldays.slice([14], [21])
    },
    week_4: function () {
        return this.alldays.slice([21], [28])
    },
    week_5: function () {
        return this.alldays.slice([28], [35])
    },
    week_6: function () {
        return this.alldays.slice([35], [42])
    },
    afterdays: 0,

};
initialisation()
// получить текущий месяц и год со страницы 
let DatefromPage = new Date(Calendar.getYearContent(), monthName.indexOf(Calendar.getFullNameMonth()));

let apdateApp = function () {
    set_week_name(Calendar.language);// установка надписей дней недели 
    setMaxDaysInMonth() //получить число дней выбранного месяца // number
    getNumberOfFirstDay() // номер дня начала месяца

    // заполенние массива дней
    setPrevDays();
    setCurDays()
    setLastDays()

    let arrId = ["week_1", "week_2", "week_3", "week_4", "week_5", "week_6"];
    let arrweek = [Calendar.week_1(), Calendar.week_2(), Calendar.week_3(), Calendar.week_4(), Calendar.week_5(), Calendar.week_6()]
    setAllDay(arrId, arrweek)
    setCurDay(arrId, arrweek)

    PaintdyasBefore(Calendar.NumberOfFirstDay)

  
    setDaysInMonth()
    setAfterDays(DAYINCALENDAR, Calendar.NumberOfFirstDay, Calendar.dayInMonth)

    console.log("Calendar.afterdays = " + Calendar.afterdays)





    function PaintdyasAfter(afterdays) {
        var elem = document.getElementById('show');
        var node5 = document.getElementById("week_5").getElementsByTagName("div");
        var node6 = document.getElementById("week_6").getElementsByTagName("div");
        let nodelength = node5.length;
    
        for (let i = 0; i < node5.length; i++) {
            node5[i].classList.remove("different_month")
            node6[i].classList.remove("different_month")
        }
    
        /* if (elem.checked) { */
    
    
            if (afterdays > 7) {
                for (let i = 0; i < afterdays - 1; i++) {
                    console.log("i = " + i)
                    node6[i].classList.add("different_month")
                }
            }
    
           /*  if (afterdays > 7) {
                lastElements = (afterdays) - 7
                for (let i = 0; i <= lastElements - 1; i++) {
                    let dif = 6 - i;
                    node5[dif].classList.add("different_month")
                }
    
                for (let i = 0; i < 7; i++) {
                    node6[i].classList.add("different_month")
                }
    
            }
            } */
        }
    PaintdyasAfter(Calendar.afterdays)



}
apdateApp()



