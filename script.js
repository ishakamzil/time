function updatedata() {
    let data = new Date();
    let time = document.getElementById("setTime")
    time.innerHTML = data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds();
    let date = document.getElementById("setDate");
    date.innerHTML = parseInt(data.getDay() + 1 ) + "-" + parseInt(data.getMonth() + 1 ) + "-" + data.getFullYear();
}

setInterval(updatedata, 100)
updatedata()

function color() {
let input = document.getElementById("setColor").value;
localStorage.setItem("color", input)

document.body.style.background = localStorage.getItem("color")   

};
window.onload = function () {
    document.getElementById("setColor").value = localStorage.getItem("color")
document.body.style.background = localStorage.getItem("color")   

}






