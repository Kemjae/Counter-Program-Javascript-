

const increaseBtn =document.getElementById("increaseBtn");
const decreaseBtn =document.getElementById("decreaseBtn");
const resetBtn =document.getElementById("resetBtn");
const oddBtn =document.getElementById("oddBtn");
const evenBtn =document.getElementById("evenBtn");
const countNum =document.getElementById("countNum");
let count = 0;

increaseBtn.onclick = function(){
    count ++;
    countNum.textContent = count;
}

decreaseBtn.onclick = function(){
    count --;
    countNum.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countNum.textContent = count;
}

oddBtn.onclick = function(){
    if (count % 2 === 0) {
        count += 1;
    } else {
        count += 2;
    }
    countNum.textContent = count;
}

evenBtn.onclick = function(){
    if (count % 2 === 0) {
        count += 2;
    } else {
        count += 1;
    }
    countNum.textContent = count;
}



