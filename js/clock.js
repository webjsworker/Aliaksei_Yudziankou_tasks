
let Clock = {
    time: "00:00:00",
    id: "clock",
    fulldate: "Wed Oct 20 2021",
    fulldataId: "head_full_data",
}

let currentData = setInterval(function () { SetTime() }, 1000);

SetFullDate();

