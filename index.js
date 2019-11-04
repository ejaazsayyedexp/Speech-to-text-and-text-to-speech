var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
app.use(bodyParser.urlencoded());
//app.use(express.static('./view'));


app.get('/tts',(req,res)=>{
    res.sendFile('tts.html',{root:path.join(__dirname,'/view')});
});
app.get('/stt',(req,res)=>{
    res.sendFile('main.html',{root:path.join(__dirname,"/view")})
})


app.listen(process.env.PORT  || 9000,()=>{
    console.log("Server started at 9000");
});