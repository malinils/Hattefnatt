if ('ontouchstart' in document.documentElement){
	canvas.addEventListener ('touchstart', function(e) {
		handleKeyDown();
	}, false);
}
else {
	document.onkeydown = handleKeyDown;
	document.onmousedown = handleKeyDown;
}

var stage,
	canvas,
	hero,
	img = new Image();

function init() {

	stage = new Stage(gameCanvas);

	img.onload = onImageLoaded;
	img.src = './images/face.png';
}

function onImageLoaded(e) {
	hero = new Hero(img);
	stage.addChild(hero);
	hero.reset();

	Ticker.setFPS(30);
	Ticker.addListener(tick);
}

// move hero down by 1px
// and update/render the stage
function tick() {
	hero.tick();
	stage.update();
}

// whenevwe a key is pressed then hero's
// position will set to y=0;
function handleKeyDown(e)
{
	hero.reset();
}

$(document).ready(function()
{
	init();
});
