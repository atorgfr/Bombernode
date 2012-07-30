socket.on('connected',function(data){
	socket.emit('enterroom',{id:1234});
});


$("div").hammer().bind("tap", moving).bind("doubletap", moving).bind("hold", moving).bind("release", stopmoving);

function moving(ev)
{
	socket.emit('move', { move: $(this).attr("class")});
}

function stopmoving(ev)
{
	socket.emit('move', { move: "stop"});
}