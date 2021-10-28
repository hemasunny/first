const express=require('express');
const { Server } = require('socket.io');

var app=express();

var PORT=process.env.PORT||3000;

app.listen(PORT,()=>{console.log("App is listening")});
