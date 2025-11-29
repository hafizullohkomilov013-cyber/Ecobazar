




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



    // const countEl = document.querySelectorAll(".count-product1");
    // const countEl1 = document.getElementsByClassName("count")[0];

    // let count = Number(countEl[0].textContent);

    // function updateAll() {
    // countEl.forEach((el) => (el.textContent = count));
    // countEl1.textContent = count;
    // }
    // console.log(count);


    // function plus() {
    // count++;
    // updateAll();
    // }

    // function minus() {
    // if (count <= 0) return;
    // count--;
    // updateAll();
    // }
    // const countEl2 = document.querySelectorAll(".count-product2");


    // function updateAll() {
    // countEl2.forEach((el) => (el.textContent = count));
    // countEl1.textContent = count;
    // }
    // console.log(count);


    // function plus2() {
    // count++;
    // updateAll();
    // }

    // function minus2() {
    // if (count <= 0) return;
    // count--;
    // updateAll();
    // }




let counts = Array(16).fill(0);

const totalEl = document.querySelector(".count2");
const products = document.querySelectorAll(".count-product");

function updateTotal() {
  const total = counts.reduce((a, b) => a + b, 0);
  totalEl.textContent = total;
}

function plus(id) {
  counts[id - 1]++; 
  updateElement(id);
  updateTotal();
}

function minus(id) {
  if (counts[id - 1] <= 0) return;
  counts[id - 1]--;
  updateElement(id);
  updateTotal();
}

function updateElement(id) {
  const el = document.querySelector(`.count-product[data-id="${id}"]`);
  el.textContent = counts[id - 1];
}


