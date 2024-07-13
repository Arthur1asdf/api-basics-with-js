const foxResult = document.getElementById("catResult");
const dogResult = document.getElementById("dogResult");
const foxBtn = document.getElementById("catBtn");
const dogBtn = document.getElementById("dogBtn");

foxBtn.addEventListener("click", getRandomFox);
dogBtn.addEventListener("click", getRandomDog);

function getRandomFox() {
  fetch("https://random-d.uk/api/random")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      foxResult.innerHTML = `<img src= "${data.url}"/>`;
    })
    .catch((error) => {
      console.error("Error fetching fox image:", error);
    });
}
function getRandomDog() {
  fetch("https://randomfox.ca/floof/")
    .then((res) => res.json())
    .then((data) => {
      dogResult.innerHTML = `<img src= "${data.url}"/>`;
    })
    .catch((error) => {
      console.error("Error fetching cat image:", error);
    });
}
