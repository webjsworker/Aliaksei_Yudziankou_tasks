

function clock(id) {
    /* debugger */
    let date = new Date().toLocaleTimeString();
    document.getElementById(id).innerText = date;
    let currentData = setTimeout(function () { clock() }, 1000);
}
clock(clock);


