function fetchJoke() {
  // HTTP GET -> http://localhost:8080/jokes  --- sajat szerverre kuldom akkor rakom be /
  // without / nem talalja meg az aloldalt
  //then-nek mindig egy fuctiont kell atadni, ez egy esemenykezelo.
  return fetch("/jokes")
    .then(function (response) {
      console.log(response);
      return response.json(); // kicsomagolja a http valaszt, valaszbol egy JS objectumot csinal
    })
    .then(function (data) {
      //jokeAPIResponse (nem az mint fentebb) lesz az objektum
      displayJoke(data); // kezeli a csomagot, freeDOM
    });
}

function fetchJsonApi(url, dataGetter) {
  // inkabb dataFormatternek hivjuk
  return fetch(url) // minden ezen belul az egy darab utasitas ( functioncall lanc egy ertekkel)
    .then(function (response) {
      //.then letolti a funciot amit utana adunk ha esemenyt kapott
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      return dataGetter(data);
    }) // PROMISE nevu objectum a then nevu fuggvenyben, .then lancolhatok fuggvenyen kivul is
    .then(function (data) {
      //itt mar atalakitott adatok lesznek, nem text field a datagetter miatt
      console.log(data);
      displayJoke(data); // olvashatatlanna teszi a kodot
    });
}

function fetchMyJoke() {
  fetchJsonApi("/jokes").then(function (joke) {
    displayJoke(joke);
  });

  fetchJsonApi("https://api.chucknorris.io/jokes/random", function (joke) {
    return { text: joke.value }; // atalakitljuk a textet valuera
  });
}

function displayJoke(joke) {
  const text = joke.text; // kiolvassa textet
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
