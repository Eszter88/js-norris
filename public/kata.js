function fetchJsonApi(url) {
  return fetch(url).then(function (response) {
    return response.json();
  });
}

function fetchMyJoke() {
  return fetchJsonApi("/jokes");
}

function fetchApiJoke() {
  return fetchJsonApi("https://api.chucknorris.io/jokes/random").then(function (
    joke
  ) {
    return { text: joke.value };
  });
}

function displayJoke(joke) {
  let text = joke.text;
  let jokeDiv = document.createElement("div");
  jokeDiv.className = "joke-div";
  jokeDiv.innerText = text;
  document.querySelector("#joke-panel").append(jokeDiv);
}

function renderJokesFromMany() {
  fetchMyJoke().then(displayJoke);
  fetchApiJoke().then(displayJoke);
}

function main() {
  let jokeBtn = document.querySelector("#joke-btn");
  jokeBtn.addEventListener("click", renderJokesFromMany);
}

window.addEventListener("load", main);
