const path = require('path');
const http = require('http');
const publicPath=path.join(__dirname,'../public');
const express = require('express');
const socketIO = require('socket.io');
var port=process.env.PORT||3000;
var app=express();
const server=http.createServer(app);
var io=socketIO(server);
app.use(express.static(publicPath));

io.on('connection',()=>{
  console.log("connected");
});
server.listen(port,()=>{
  console.log(`listen to port${port}`);
});
