function fetchJoke() {
  return fetch("/jokes")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      displayJoke(data);
    });
}

function displayJoke(joke) {
  const text = joke.text;
  const jokeDiv = document.createElement("div");
  jokeDiv.className = "joke-div";
  jokeDiv.innerText = text;
  document.querySelector("#joke-panel").append(jokeDiv);
}

function main() {
  let jokeBtn = document.querySelector("#joke-btn");
  jokeBtn.addEventListener("click", fetchJoke);
}

window.addEventListener("load", main);
