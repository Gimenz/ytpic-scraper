import axios from "axios";
import pkg from "cheerio";
import RetObject from "../utils/retObject.js";
const { load } = pkg;

export const getData = (req, res) => {
  const url = req.query.url;
  axios
    .get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64; rv:74.0) Gecko/20100101 Firefox/74.0",
      },
    })
    .then((response) => {
      let $ = load(response.data);
      let cerpen = [];

      $('link[rel="image_src"]').each(function () {
        cerpen = $(this).attr("href");
      });
      return res.json(new RetObject(true, cerpen));
    })
    .catch((err) => {
      return res.json(new RetObject(false, err));
    });
};
