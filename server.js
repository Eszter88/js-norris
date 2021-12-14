const express = require("express");
const path = require("path");

const publicDir = path.join(__dirname, "public");
const app = express();

/* itt sajat eroforrast hivunk le, nem kulsot
//request, response, next nevu function mindig megjelenik,mert a pozicio szamit

app.use(function (req, res, next) {
  console.log(req.url, req.method);
  next();
});
*/

app.get("/jokes", function (req, res) {
  let jokes = [
    "Chuck elszamolt vegtelenig ketszer",
    "Chuck a szulinapjan kivalaszt egy szerencses gyereket es beledobja a napba",
  ];

  let index = Math.floor(Math.random() * jokes.length);
  return res.json({ text: jokes[index] }); //http responset allit elo, csomagol (nem kibont)
});

app.use(express.static(publicDir));

app.listen(8080, function () {
  console.log("App is running on 8080");
});

// consolelog a terminalba logol, nem az inspectben
