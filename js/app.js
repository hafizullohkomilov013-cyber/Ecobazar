




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

setInterval(updateTime, 1000)




let counts = Array(16).fill(0);

const totalEl = document.querySelector(".count2");
const products = document.querySelectorAll(".count-product");

function updateTotal() {
  const total = counts.reduce((a, b) => a + b, 0);
  totalEl.textContent = total;
}

function plus(id) {
  counts[id - 1]++; 
  updateEl(id);
  updateTotal();
}

function minus(id) {
  if (counts[id - 1] <= 0) return;
  counts[id - 1]--;
  updateEl(id);
  updateTotal();
}

function updateEl(id) {
  products[id - 1].textContent = counts[id - 1];
}
