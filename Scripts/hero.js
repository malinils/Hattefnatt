(function (window) {
	function Hero(image) {
		this.initialize(image);
	}
	Hero.prototype = new Bitmap();

	//save the original init-method 
	// so it wont be gone after overwriting it.
	Hero.prototype.Bitmap_initialize =  Hero.prototype.initialize;

	// initialize the object
	Hero.prototype.initialize = function (image) {
		this.Bitmap_initialize(image);
		this.name = "Hero";
		this.snapToPixel = true;

		this.velocity = {x:0,y:12};
	};

	// We call this function every frame to
	Hero.prototype.tick = function () {
		this.velocity.y += 1;
		this.y += this.velocity.y;
	};

	// this will reset the position of the hero
	// we can call this e.g. whenever a key is pressed
	Hero.prototype.reset = function(){
		this.y = 220;
		this.velocity.y = -15;
	};
	window.Hero = Hero;

} (window));