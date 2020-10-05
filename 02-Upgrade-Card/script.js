const closeBtn = document.querySelector(".card__close-btn");
const card = document.querySelector(".card");

setTimeout(() => {
  card.classList.add("appear");
}, 1000);

closeBtn.addEventListener("click", () => {
  card.classList.add("card__hide");
});
