let nowDate = new Date(),
    nowDateNumber = nowDate.getDate(),
    nowMonth = nowDate.getMonth(),
    nowYear = nowDate.getFullYear(),
    container = document.getElementById('month-calendar'),
    monthContainer = document.getElementById('month'),
    yearContainer = document.getElementById('year'),
    weekItem = document.getElementById("weeks_name").getElementsByTagName("div");
    /* daysContainer = container.getElementsByClassName('days')[0], */
    back = document.getElementById('back'),
    next = document.getElementById('next'),
    AddEvent = document.getElementById('event'),
    eventInput = document.getElementById('event-input'), 
    eventText = document.getElementById('event__text'),   
    language = document.getElementById('language'),
    Fulldate = document.getElementById('head_full_data'),
    monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    dayName = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Suturday", "Sunday"];
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
    weekendDays: [5,6],
    getDaysbefore: function () {
        if (this.NumberOfFirstDay === 0 ) {
            return  this.NumberOfFirstDay
        } else {   return this.NumberOfFirstDay - 1  }


       
    },

};




 

