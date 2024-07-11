const foxResult = document.getElementById("catResult");
const dogResult = document.getElementById("dogResult");
const foxBtn = document.getElementById("catBtn");
const dogBtn = document.getElementById("dogBtn");

foxBtn.addEventListener("click", getRandomFox);
dogBtn.addEventListener("click", getRandomDog);

function getRandomFox() {
  fetch("https://randomfox.ca/floof/")
    .then((res) => res.json())
    .then((data) => {
      foxResult.innerHTML = `<img src= "${data.image}"/>`;
    })
    .catch((error) => {
      console.error("Error fetching cat image:", error);
    });
}
function getRandomDog() {
  fetch("https://random.dog/woof.json")
    .then((res) => res.json())
    .then((data) => {
      dogResult.innerHTML = `<img src= "${data.url}"/>`;
    })
    .catch((error) => {
      console.error("Error fetching cat image:", error);
    });
}
