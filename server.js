var express = require("express");
var app = express();
const cheerio = require('cheerio');
const request = require('request');
const PORT = process.env.PORT || 3000

app.get("/api/ytpic", (req, res, next) => {
    const dimana = req.query.url 
    const apa = dimana 
    var url = apa
    try {
        request.get({
            headers: {
                'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:74.0) Gecko/20100101 Firefox/74.0'
            },
            url: url,
        }, function(err, response, body) {
            let $ = cheerio.load(body);
            let cerpen = [];

            $('link[rel="image_src"]').each(function(i, e) {
                cerpen = $(this).attr("href");
            }); 
                function hasil(status,message,data){
                    return {
                        status: status,
                        message : 'powered by gimenz.id',
                        result : data
                    }
                    }
                    return res.json(hasil(true, "", cerpen));
            })
    } catch (err) {
        function hasil(status,message,data){
            return {
                status: status,
                message : 'powered by gimenz.id',
                result : 'Mmmm... query cannot be empty'
            }
            }
            return res.json(hasil(false, "", err));

      }

});

app.listen(PORT, () => {
 console.log("Server running on port 3000");
});
