canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image();
	img_imgTag.onload = uploadimg; 
	img_imgTag.src = img_image;
}

function uploadimg() {
	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);

	//For Alphabet Keys
	if ((keyPressed >= 97 && keyPressed <= 122) || (keyPressed >= 65 && keyPressed <= 90)) {
		alphabetkey();
		document.getElementById("d1").innerHTML = "You pressed a Alphabet Key!";
		console.log("alphabet key pressed");
	}
	//For Numerical Keys
	if (keyPressed >=48 && keyPressed<=57) {
		numberkey();
		document.getElementById("d1").innerHTML = "You pressed a Numerial Key!";
		console.log("numerical key pressed");
	}
	//For Arrow Keys
	if (keyPressed >=37 && keyPressed<=40) {
		arrowkey();
		document.getElementById("d1").innerHTML = "You pressed a Arrow Key!";
		console.log("arrow key pressed");
	}
	//For Special Key_Ctrl
	if (keyPressed==17) {
		specialkey();
		document.getElementById("d1").innerHTML = "You pressed a Special Key!";
		console.log("special key pressed");
	}
	//For Special Key_Alt
	if (keyPressed==18) {
		specialkey();
		document.getElementById("d1").innerHTML = "You pressed a Special Key!";
		console.log("special key pressed");
	}
	//For Special Key_Esc
	if (keyPressed==27) {
		specialkey();
		document.getElementById("d1").innerHTML = "You pressed a Special Key!";
		console.log("special key pressed");
	}
	//For Other Keys_Space
	if (keyPressed==32) {
		otherkey();
		document.getElementById("d1").innerHTML = "You pressed a Other Key!";
		console.log("other key pressed");
	}
	//For Other Keys_Enter
	if (keyPressed==13) {
		otherkey();
		document.getElementById("d1").innerHTML = "You pressed a Other Key!";
		console.log("other key pressed");
	}
	//For Other Keys_Shift
	if (keyPressed==16) {
		otherkey();
		document.getElementById("d1").innerHTML = "You pressed a Other Key!";
		console.log("other key pressed");
	}
}

function alphabetkey() {
	img_image = "Alpkey.png";
	add();
}

function numberkey() {
	img_image = "numkey.png";
	add();
}

function arrowkey(){
	img_image = "Arrkey.png";
	add();
}

function specialkey() {
	img_image = "spkey.png";
	add();
}

function otherkey() {
	img_image = "otherkey.png";
	add();
}