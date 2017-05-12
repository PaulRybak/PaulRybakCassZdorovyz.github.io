$(document).ready(function(){

	var show = true;
	var countbox = "#counts";

    
	$(window).on("scroll", function(){

		if(!show) return false;

		var w_top = $(window).scrollTop();
		var e_top = $(countbox).offset().top-200;

		if(w_top + 200 >= e_top){
			$(".spincrement").spincrement({
				thousandSeparator: "",
				duration: 1200
			});

			show = false;
		}
	});
});