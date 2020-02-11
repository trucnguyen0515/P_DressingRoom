const express = require('express');
const app = express();
const path = require('path');
var compression = require('compression');
app.use(compression());

app.use(express.static(path.join(__dirname,"build"),{ maxage: '365d' }));

// Set view engine as EJS
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', './build');


app.listen(process.env.PORT || 4000, function(){
    console.log('Server started!');
})

app.get('*', function (req, res, next) {
    res.setHeader("Cache-Control", "build, max-age=2592000");
    res.setHeader("Expires", new Date(Date.now() + 2592000000).toUTCString());
    next();
});

app.get('*.js', function (req, res, next) {
    req.url = req.url + '.gz';
    res.set('Content-Encoding', 'gzip');
    next();
});

app.get('/', function(req,res){
    res.render('index');
})