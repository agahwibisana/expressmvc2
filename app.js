var express = require('express');
var app = express();

//initialize server
app.listen(1337, function(){
    console.log('server is ready');
});

app.get('/',function(req,res){
    res.send('hello world');
})