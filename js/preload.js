schedule("window", preloadImages);

var currentLanguage = document.documentElement.lang;
var navUp = "";
if (currentLanguage != "en-us") { navUp = "../";}

var imageArray = [navUp + "images/bomb.png", navUp + "images/bunny.png", navUp + "images/bunny1.png", navUp + "images/bunny2.png", navUp + "images/bunny3.png", navUp + "images/bunny4.png", navUp + "images/bunny5.png", navUp + "images/button_green.gif", navUp + "images/button_red.gif", navUp + "images/cloud.png", navUp + "images/cloud2.png", navUp + "images/hill.png", navUp + "images/hill2.png", navUp + "images/hills.png", navUp + "images/lives.gif", navUp + "images/stage.jpg"];

var imageObjects = [];
var currImage = 0;

function preloadImages()
{
	var loadingMessage = document.getElementById("loadingMessage");
	var loadingMessageP = loadingMessage.getElementsByTagName("p")[0];
	
	if (currImage >= imageArray.length)
	{
		loadingMessage.innerHTML = '<h1>' + _('Bunny') + '<br>' + _('Hunt IV') + '</h1><p>' + _('The Good Friday Massacre') + '</p>';
		loadingMessage.innerHTML += ('<input class="button" id="startButton" type="button" value=' + _('let\'s shoot some bunnies!') + ' onClick="ready()">');
		
	}
	else
	{
		imageObjects[currImage] = new Image();
		imageObjects[currImage].onload = preloadImages;
		imageObjects[currImage].src = imageArray[currImage] + "?" + Math.random();
		
		loadingMessageP.innerHTML = "Images loaded: <strong>" + (currImage + 1) + "/"+ imageArray.length + "</strong>";

		var loadingBar = loadingMessage.getElementsByTagName("div")[1];
		loadingBar.style.width = Math.ceil((currImage + 1) / imageArray.length * 100) + "%";

		currImage++;
	}
	
	return true;
};

function ready()
{
	var stage = document.getElementById("stage");
	stage.className = "ready";
	
	var splash = document.getElementById("splash");
	splash.className = "ready";
	
	initBunnies();
	
	return true;
};