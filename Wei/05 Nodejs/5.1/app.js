var express = require("express");
var app = express();
var request = require("request");
var url = require("url");
var jade = require('jade');

// set that all templates are located in `/views` directory
app.set('views', __dirname + '/views');
app.set('js', __dirname + '/js');
// set `jade` template engine, and the default extension is `jade`
app.set('view engine', 'jade');

app.use('/static', express.static(__dirname + '/public'));


app.get('/amazon/:username', function(req, res){
	var username = req.params.username;
	options = {
		protocol: "http:",
		host: "www.amazon.com",
		pathname: "/s/ref=nb_sb_noss_2",
		query: {"field-keywords": username}
	};
	var twitterUrl = url.format(options);
	request(twitterUrl, function (error, response, body) {
  		if (!error && response.statusCode == 200) {
  			var content = body.trim();
    		res.render("index", { html: content });
  		}
  	})

});


app.listen(8888);



// app.get('/miBand', function(req, res){
// 	res.sendFile(__dirname + "/index.html");

// });


// app.get('/css/:filename', function(req, res){
// 	var filename = req.params.filename;
// 	res.sendFile(__dirname + "/css/" + filename);
// });

// app.get('/js/:filename', function(req, res){
// 	var filename = req.params.filename;
// 	res.sendFile(__dirname + "/js/" + filename);
// });

// app.get('/tweets/:username', function(req, res){
// 	var username = req.params.username;
// 	options = {
// 		protocol: "https:",
// 		host: "twitter.com",
// 		pathname: "/search",
// 		query: {q: username}
// 	};
// 	var twitterUrl = url.format(options);
// 	request(twitterUrl).pipe(res);

// });