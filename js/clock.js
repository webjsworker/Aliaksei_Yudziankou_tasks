
let Clock = {
    time: "00:00:00",
    id: "clock",
    fulldate: "Wed Oct 20 2021",
    fulldataId: "head_full_data",
}
function writeItem(id, value) {
    document.getElementById(id).textContent = value;
}
function SetTime() {
    Clock.time = new Date().toLocaleTimeString();
    writeItem(Clock.id, Clock.time)
}
let currentData = setInterval(function () { SetTime() }, 1000);
function SetFullDate() {
    let date = new Date();
    Clock.fulldate = date.toDateString();
    writeItem(Clock.fulldataId, Clock.fulldate)
}
SetFullDate();



/*
function clock(id) {
    debugger
    let time1 = new Date().toLocaleTimeString();
    document.getElementById(id).innerText = time1;
    let currentData = setTimeout(function () { clock("clock") }, 1000);
}
clock("clock");
 */

