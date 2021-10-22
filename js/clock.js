

function clock(id) {
    /* debugger */
    let time = new Date().toLocaleTimeString();
    document.getElementById(id).innerText = time;
    let currentData = setTimeout(function () { clock("clock") }, 1000);
}
clock("clock");


