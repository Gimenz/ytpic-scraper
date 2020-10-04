var express = require("express");
var app = express();
const cheerio = require("cheerio");
const request = require("request");
const axios = require("axios");
const PORT = process.env.PORT || 3000;

app.get("/api/ytpic", (req, res, next) => {
  const dimana = req.query.url;
  const apa = dimana;
  var url = apa;
  axios
    .get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64; rv:74.0) Gecko/20100101 Firefox/74.0",
      },
    })
    .then((response) => {
      let $ = cheerio.load(response.data);
      let cerpen = [];

      $('link[rel="image_src"]').each(function (i, e) {
        cerpen = $(this).attr("href");
      });
      return res.json({
        status: true,
        message: "powered by gimenz.id",
        result: cerpen,
      });
    })
    .catch((err) => {
      return res.json({
        status: true,
        message: "powered by gimenz.id",
        result: err,
      });
    });
});

app.listen(PORT, () => {
  console.log("Server running on port 3000");
});
