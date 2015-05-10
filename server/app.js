var express = require('express');
var app = express();
var path = require('path');

//Fruit Market App
//var fruit = require('../server/public/assets/scripts/fruitStandExperiment');
//
//app.get('/openMarket', function(request, response){
//    console.log("Here");
//    response.send(fruit.openMarket());
//});
//
//app.get('/buyFruit', function(request, response){
//    console.log("Here");
//    response.send(fruit.buyFruit());
//});
//
//app.get('/sellFruit', function(request, response){
//    console.log("Here");
//    response.send(fruit.sellFruit());
//});

app.set('port', (process.env.PORT || 5000));

//Get Pictures for Carousel on Homepage
app.get('/getPics', function(request, response){
    console.log("/getPics function is happening");
    var file = '/assets/data/data.json';
    response.sendFile(path.join(__dirname, './public', file));
});

//Get Resume Info
app.get('/template', function(request, response){
    console.log("/template function is happening");
    var file = '/views/resume.html';
    response.sendFile(path.join(__dirname, './public', file));
});

//Send initial index.html
app.get('/*', function(request, response){
    var file = request.params[0] || 'views/index.html';
    response.sendFile(path.join(__dirname, './public', file));
});

app.listen(app.get('port'), function(){
    console.log("App is running on port", app.get('port'));
})