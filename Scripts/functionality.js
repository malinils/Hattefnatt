
function init(){
	var stage = new createjs.Stage("gameCanvas");
	var ring = new createjs.Shape();
	ring.graphics.beginFill("DeepSkyBlue").drawCircle(0,0,50);
	ring.x = 100;
	ring.y = 100;
	stage.addChild(ring);
	stage.update();
}

$(document).ready(function(){
	init();
});