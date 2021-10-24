let dayOfweek_EN = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]
let dayOfweek_RU = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]
let language = 0;
function Set_week_name(lang) {
    language === 0 ? dayOfweek = dayOfweek_EN : dayOfweek = dayOfweek_RU;
    let weeksnodes = document.getElementById("weeks_name").getElementsByTagName("div");
    for (var i = 0; i < weeksnodes.length; i++) {
        weeksnodes[i].innerText = dayOfweek[i];
    }
}
Set_week_name(language);