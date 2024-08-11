const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const countSpan = document.getElementById("count");
const resetBtn = document.getElementById("reset");

let count = 0;

incrementBtn.addEventListener("click",() => {
    count++;
    updateCount();
});

decrementBtn.addEventListener("click", () => {
    count--;
    updateCount();
})

resetBtn.addEventListener("click", () => {
    count=0;
    updateCount();
})

function updateCount() {
    countSpan.textContent = count;
}