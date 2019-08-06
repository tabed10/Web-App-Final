var http = require('http');
var express = require('express');
var app = express();
var server= http.Server(app);
var bodyParser=require ('body-parser');
var mongo = require('mongodb');

var db_url= ""
var db;
var mongoose = require("mongoose");

mongoose.connect(db_url, { useNewUrlParser: true });
mongoose.connection.on('error', function(err){
  
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

 app.get('/',function(req,res){
     res.sendFile(__dirname+'/view/formView.html')
})
app.get('/article',function(req,res){
       res.sendFile(__dirname+'/view/singleView.html')
 })
 server.listen(3000, 'localhost', function(){
     console.log('Server running');
    });