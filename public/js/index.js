
  var socket=io();
  socket.on('connect',function(){
    console.log('connected');
    socket.emit('create message',{
      text:'hello',
      to:'amal@example.com',
      at:'22/9'

  });

});

socket.on('new massage',function (massage) {
  console.log(massage);
});

  socket.on('disconnect',function(){
    console.log('disconnected');
  });
