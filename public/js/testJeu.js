
var PLAYGROUND_WIDTH	= 480;
var PLAYGROUND_HEIGHT	= 320;
var REFRESH_RATE	= 30;


var bomberman = [];
// Deplacement Horizontal Gauche
bomberman["idledown"] = new $.gQ.Animation({
	imageURL: "img/bomberman2.gif",
	numberOfFrame: 3,
	delta: 20,
	rate: 250,
	type: $.gQ.ANIMATION_HORIZONTAL,
	offsetx:0,
	offsety:0
});

bomberman["idleup"] = new $.gQ.Animation({
	imageURL: "img/bomberman2.gif",
	numberOfFrame: 3,
	delta: 20,
	rate: 250,
	type: $.gQ.ANIMATION_HORIZONTAL,
	offsetx:0,
	offsety:64
});

bomberman["idleleft"] = new $.gQ.Animation({
	imageURL: "img/bomberman2.gif",
	numberOfFrame: 3,
	delta: 20,
	rate: 250,
	type: $.gQ.ANIMATION_HORIZONTAL,
	offsetx:0,
	offsety:32
});

 bomberman["up"] = new $.gQ.Animation({
	imageURL: "img/bomberman2.gif",
	numberOfFrame: 8,
	delta: 20,
	rate: 60,
	type: $.gQ.ANIMATION_HORIZONTAL,
	offsetx:60,
	offsety:64
});

 bomberman["down"] = new $.gQ.Animation({
	imageURL: "img/bomberman2.gif",
	numberOfFrame: 8,
	delta: 20,
	rate: 60,
	type: $.gQ.ANIMATION_HORIZONTAL,
	offsetx:60,
	offsety:0
});

 bomberman["left"] = new $.gQ.Animation({
	imageURL: "img/bomberman2.gif",
	numberOfFrame: 8,
	delta: 20,
	rate: 60,
	type: $.gQ.ANIMATION_HORIZONTAL,
	offsetx:60,
	offsety:32
});

 
$("#playground").playground({height: PLAYGROUND_HEIGHT, width: PLAYGROUND_WIDTH, keyTracker: true}).addSprite("bomber", {
		animation: bomberman["idledown"],
		width:20,
		height:32,
		posx:200,
		posy:200
	}
);

	var mov = -1; //Position 0 down (default), 1 up, 2 left, 3 right
	var bouge = false; // Est ce que je bouge ? false: non, true: oui

	$.playground().registerCallback(function(){
				console.log(bouge + mov);
				if(bouge && mov==2)
				{ 
					var nextpos = $("#bomber").x()-5;
					if(nextpos > 0){
						$("#bomber").x(nextpos);
					}
				}
				if(bouge && mov==3)
				{ 
					var nextpos = $("#bomber").x()+5;
					if(nextpos < PLAYGROUND_WIDTH - 20){
						$("#bomber").x(nextpos);
					}
				}
				if(bouge && mov==0){ //this is up! (w)
					var nextpos = $("#bomber").y()-5;
					if(nextpos > 0){
						$("#bomber").y(nextpos);
					}
				}
				if(bouge && mov==1){ //this is down! (s)
					var nextpos = $("#bomber").y()+5;
					if(nextpos < PLAYGROUND_HEIGHT - 32){
						$("#bomber").y(nextpos);
					}
				}
	}, REFRESH_RATE);


function stopMove()
{
		bouge = false;
		switch(mov){
            case 0: //this is down!
              $("#bomber").setAnimation(bomberman["idleup"]);
              break;
            case 1: //this is up!
              $("#bomber").setAnimation(bomberman["idledown"]);
              break;
            case 2: //this is left!
              $("#bomber").setAnimation(bomberman["idleleft"]).fliph(false);
              break;
            case 3: //this is left!
              $("#bomber").setAnimation(bomberman["idleleft"]).fliph(true);
              break;
          }
}



// this sets the id of the loading bar:
	$.loadCallback(function(percent){
		$("#loading").width(400*percent);
	});

//initialize the start button
$("a").click(function(){
	$.playground().startGame(function(){
		$("a").remove();
	});
})

