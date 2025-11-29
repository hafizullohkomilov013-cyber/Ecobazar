




function updateTime () {
    let now = new Date ()
    
    let date = now.getDate()
    let hour = now.getHours()
    let min = now.getMinutes()
    let sec = now.getSeconds()

    if(date < 10) date = "0" + date
    if(hour < 10) hour = "0" + hour
    if(min < 10) min = "0" + min
    if(sec< 10) sec = "0" +sec

    document.getElementById('clock').textContent = `${date}  : ${hour} : ${min} : ${sec}`
}
updateTime()
