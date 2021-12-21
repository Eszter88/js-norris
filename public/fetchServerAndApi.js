function fetchJsonApi(url, dataFormatter) {
  return fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return dataFormatter(data);
    })
    .then(function (data) {
      //itt mar atalakitott adatok lesznek, nem text field a dataFormatter miatt;
      displayJoke(data);
    });
}

function fetchMyJoke() {
  fetchJsonApi("/jokes", function (joke) {
    return joke;
  });

  fetchJsonApi("https://api.chucknorris.io/jokes/random", function (joke) {
    return { text: joke.value }; // atalakitljuk a textet valuera
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
  jokeBtn.addEventListener("click", fetchMyJoke);
}

window.addEventListener("load", main);

//then-nek mindig egy fuctiont kell atadni, ez egy esemenykezelo.
//.then letolti a funciot amit utana adunk ha esemenyt kapott
// minden fetchen belul az egy darab utasitas ( functioncall lanc egy ertekkel)
