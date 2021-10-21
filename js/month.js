function monthYear() {
    /* debugger */
    let date = new Date();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let monthYear = months[date.getMonth()] + ' ' + date.getFullYear()
    document.getElementById("monthYear").innerText = monthYear;
    let currentMonth = setTimeout(function () { monthYear() }, 86400000);
}
monthYear();