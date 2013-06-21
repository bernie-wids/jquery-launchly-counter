$(document).ready(function() {

	var counter = $('#counter').launchlyCounter({
		start: 0,
		end: 100,
		duration: 1000
	});
	
	counter.go(1);

});