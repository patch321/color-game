var numSquares = 6;
var colors = [];
var pickedColor;

var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

//GAME IS INITIALIZED AND STARTS HERE
init();

//ACTIONS FOR NEW-COLORS/PLAY-AGAIN BUTTON
resetButton.addEventListener("click",function(){
	reset();
});

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
	//LISTENERS FOR EASY/HARD BUTTONS
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add('selected');
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){
		//add initial color to squares
		squares[i].style.background = colors[i];
		//add click listeners to squares
		squares[i].addEventListener("click", function(){
			if(this.style.background === pickedColor){
				messageDisplay.textContent = "CORRECT!";
				changeColors(pickedColor);
				h1.style.background = pickedColor;
				resetButton.textContent = "Play Again?";
			}else{
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again!";
			}
		});
	}
}

function reset(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.visibility = "visible";
			squares[i].style.background = colors[i];
		}
		else{
			squares[i].style.visibility = "hidden";
		}
	}
	//reset board buttons/colors
	h1.style.background = "steelblue";
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
}

function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//repeat num times
	for(var i = 0; i < num; i++){
		//get random color and push into array
		arr.push(randomColor());
	}
	//return array
	return arr;
}

function randomColor(){
	//pick a red
	var red = Math.floor(Math.random() * 256);
	//pick a green
	var green = Math.floor(Math.random() * 256);
	//pick a blue
	var blue = Math.floor(Math.random() * 256);

	return "rgb(" + red + ", " + green + ", " + blue + ")";
}














