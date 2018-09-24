  var socket=io();
  socket.on('connect',function(){
    console.log('connected');
    socket.emit('create message',{
      text:'hello',
      from:'amal@example.com',
      at:'22/9'

  });



});


  socket.on('disconnect',function(){
    console.log('disconnected');
  });

jQuery('#message-form').on('submit',function (e) {
  e.preventDefault();
  var text=jQuery('[name=message]').val();
  var message={
    from:'amal Ali',
    text};

  socket.emit('create message',message);
});
socket.on('new massage',function (massage) {
  console.log(massage);
  var li=jQuery('<li></li>');
  li.text(`from:${massage.from} message:${massage.text}`);
  jQuery('#messages').append(li);
});


socket.on('newlocationmassage',function (message) {
  console.log(message);
  var li=jQuery('<li></li>');
  li.text(`from:${message.from}`)
  var a=jQuery('<a target="_blank">my location</a>');
   a.attr('href',message.url);
   li.append(a);
  jQuery('#messages').append(li);

});


var sendgeolocation=jQuery('#Send-geolocation');
sendgeolocation.on('click',function () {
  if(!navigator.geolocation){
    return alert("no location found");
  }
  navigator.geolocation.getCurrentPosition(function (position) {
    console.log(position);
    socket.emit('locationMessage',{
    latitude:  position.coords.latitude,
    longitude:    position.coords.longitude
  });
  },function () {
     alert("no location found");

  });
});
