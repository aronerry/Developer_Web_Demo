/**
 * get browser window's dimensions
 */
function getWindowDimensions() {
	var winWidth = 0;
	var winHeight = 0;
	
	// get the window's width
	if (window.innerWidth) {
		winWidth = window.innerWidth;
	} else if ((document.body) && (document.body.clientWidth)) {
		winWidth = document.body.clientWidth;
	}
	
	// get the window's height
	if (window.innerHeight) {
		winHeight = window.innerHeight;
	} else if ((document.body) && (document.body.clientHeight)) {
		winHeight = document.body.clientHeight;
	}
	
	//check 'body' deep in document and get dimensions
	if (document.documentElement  && document.documentElement.clientHeight && document.documentElement.clientWidth) {
		winHeight = document.documentElement.clientHeight;
		winWidth = document.documentElement.clientWidth;
	}
	
	return winWidth+","+winHeight;
}