

function clock() {
    /* debugger */
    let date = new Date().toLocaleTimeString();
    document.getElementById("clock").innerText = date;
    let currentData = setTimeout(function () { clock() }, 1000);
}
clock();


