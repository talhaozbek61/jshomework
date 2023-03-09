let userName = prompt('Adınız:')
let myName   = document.querySelector('#myName')
myName.innerHTML = userName

function showTime() {
    let myClock = document.querySelector('#myClock')
    let date = new Date();
    let days = ['Pazar',' Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi']
    myClock.innerHTML = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()} ${days[date.getDay()]} `
}

setInterval(showTime,100);