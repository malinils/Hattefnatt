
function init(){
	var stage = new createjs.Stage("gameCanvas");
	createjs.Ticker.setFPS(30);
	createjs.Ticker.addEventListener(tick);

	function tick(e){
		stage.update();
	}

	var img = new Image();
	img.src = './images/face.png';
	img.onload = onImageLoaded;

	function onImageLoaded(e){
		var hero = new createjs.Bitmap(img.src);
		hero.x = 60;
		hero.y = 100;
		stage.addChild(hero);
		stage.update();
	}
}

function touchEvents(){
	// check for a touch option
	if('ontouchstart' in document.documentElement){
		canvas.addEventListener('touchstart',function(e) {
			handleKeyDown();
		}, false);

		canvas.addEventListener('touchend', function(e){
			handleKeyUp();
		}, false);
	}
	else {
		document.onkeydown = handleKeyDown;
		document.onkeyup = handleKeyUp;
		document.onmousedown = handleKeyDown;
		document.onmouseup = handleKeyUp;
	}

	function handleKeyDown (e) {
		hero.jump();
	}	

	function handleKeyUp(e) {
		// do something
	}
}



$(document).ready(function(){
	init();
	touchEvents();
	// $("#body").append('<img src="./images/face.png"/>');
});


