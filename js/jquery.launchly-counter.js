(function($){
	
	$.fn.launchlyCounter = function(options) {

		var settings = $.extend({
			start			: 0,
			end				: 0,
			duration	: 0
		}, options);
		
		var current 	= 0;
		var digits 		= 0;
		var interval 	= 0;
		var interv 		= null;
		
		var init = function(el) {
			current = settings.start;
			digits = String(settings.end).length;
			interval = settings.duration / (settings.end - settings.start);
			
			show(el, settings.start);
		}
		
		var show = function(el, num) {
			var txt = String( num + (Math.pow(10, digits)) ).substr(1);
			
			if (num > 999 && $.number)
			{
				txt = $.number(num);
			}

			el.text(txt);
		}
		
		var finish = function() {
			clearInterval(interv);
		}
		
		var run = function(el, step) {
			current += step;
			if (current > settings.end || current < settings.start) {
				finish();
			} else {
				show(el, current);
			}
		}
		
		this.go = function(step) {
			var el = $(this);
			interv = setInterval(function() {
				run(el, step);
			}, interval);
		}
		
		return this.each(function(){
			init($(this));
		});

	}
	
}(jQuery));