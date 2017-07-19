var express = require('express');
var app = express();

app.use('/app', express.static(__dirname + '/app'));
app.use('/res', express.static(__dirname + '/res'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/lib', express.static(__dirname + '/lib'));

app.get('/home',function(req,res){
   res.sendFile(__dirname+'/index.html');
})

app.listen(8080,function(){
    console.log("Running on port 8080");
});