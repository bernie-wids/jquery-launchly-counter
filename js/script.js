$(document).ready(function() {

	var counter = $('#counter').launchlyCounter({
		start: 0,
		end: 100,
		duration: 5000
	});
	
	$('#counter').hover(function(){
		$(this).addClass('come-in');
		counter.go(1);
	},function(){
		$(this).removeClass('come-in');
		counter.go(-1);
	});
	
});