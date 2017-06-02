$(function() {


	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {
	};


	//No drag
	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
