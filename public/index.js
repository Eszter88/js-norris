function fetchJsonApi(url) {
  return fetch(url) // minden ezen belul az egy darab utasitas ( functioncall lanc egy ertekkel)
    .then(function (response) {
      //.then letolti a funciot amit utana adunk ha esemenyt kapott
      console.log(response);
      return response.json();
    });
}

function fetchMyJoke() {
  return fetchJsonApi("/jokes"); // --> {text:""}
} //--> Promise<{ text: '' }>

function fetchApiJoke() {
  return fetchJsonApi("https://api.chucknorris.io/jokes/random") //
    .then(function (joke) {
      return { text: joke.value }; // -->{ text: ""}
    });
} //--> Promise<{ text: '' }>

function displayJoke(joke) {
  const text = joke.text; // kiolvassa textet
  const jokeDiv = document.createElement("div");
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
