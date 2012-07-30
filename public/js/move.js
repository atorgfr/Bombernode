var socket = io.connect('http://quiet-waters-9754.herokuapp.com/');
socket.on('connected',function(data){
	socket.emit('enterroom',{id:1234});
});

socket.on('moving', function (data) {
	bouge = true;
	switch(data.move){
            case "up": //this is down!
              mov=0;
              $("#bomber").setAnimation(bomberman["up"]);
              break;
            case "down": //this is up!
              mov=1;
              $("#bomber").setAnimation(bomberman["down"]);
              break;
            case "left": //this is left!
              mov=2;
              $("#bomber").setAnimation(bomberman["left"]).fliph(false);
              break;
            case "right": //this is left!
              mov=3;
              $("#bomber").setAnimation(bomberman["left"]).fliph(true);
              break;
            case "stop": //this is left!
              stopMove();
              break;
          }
});