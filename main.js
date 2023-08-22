const counter = document.querySelector(".counter");
const quotes = document.querySelector(".quotes");
const dice = document.querySelector(".dice");

dice.addEventListener("click", () => {
  console.log("hhh");
  countData()
});

async function countData() {
  const res = await fetch("https://api.adviceslip.com/advice");
  const info = await res.json();
  counter.textContent = `Advice #${info.slip.id}`;
  quotes.textContent = `"${info.slip.advice}"`;
}
countData();
