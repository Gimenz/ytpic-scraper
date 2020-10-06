import axios from "axios";
import pkg from "cheerio";
import DataResponse from "../utils/dataResponse.js";
import ErrorResponse from "../utils/errorResponse.js";
const { load } = pkg;

export const getData = async (req, res) => {
  try {
    const url = req.query.url;

    if (!url) {
      throw new Error("Url query is invalid!");
    }

    const opts = {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64; rv:74.0) Gecko/20100101 Firefox/74.0",
      },
    };

    const response = await axios.get(url, opts);

    let $ = load(response.data);
    let cerpen = [];

    $('link[rel="image_src"]').each(function () {
      cerpen = $(this).attr("href");
    });

    return res.json(new DataResponse(true, cerpen));
  } catch (err) {
    return res.json(new ErrorResponse(false, err.message));
  }
};
