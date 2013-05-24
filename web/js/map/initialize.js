/**
 * 'initialize.js' contains layout
 * 
 */

$(document).ready(function(){
	var map_a,map_b;
	var windowDimensions = getWindowDimensions();
	console.log('window-width: '+windowDimensions.split(",")[0]+'\nwindow-height: '+windowDimensions.split(",")[1]);
	var bodyW = windowDimensions.split(",")[0];
	var bodyH = windowDimensions.split(",")[1];
	
	document.getElementById("map_a").style.height = bodyH * 0.9;
	
	map_clone();
});

