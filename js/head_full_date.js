
function FullDate() {
let  date = new Date();
let fulldata = date.toDateString();
document.getElementById("head_full_data").innerText = fulldata;
}
FullDate();