$(function() {

	//menu
var animove  = function () {
	  $(".down-link").click(function() {
	    $("html, body").animate({
	      scrollTop: $("header").height()
	    }, "slow");
	    return false;
	  });
	  $("#about").click(function() {
	    $("html, body").animate({
	      scrollTop: $(".about-section").offset().top
	    }, "slow");
	    return false;
	  });
	  $("#works").click(function() {
	    $("html, body").animate({
	      scrollTop: $(".work-section").offset().top
	    }, "slow");
	    return false;
	  });
	  $("#contact").click(function() {
	    $("html, body").animate({
	      scrollTop: $("footer").offset().top
	    }, "slow");
	    return false;
	  });

	  $("body").on("click", ".top", function() {
	    $("html, body").animate({
	      scrollTop: 0
	    }, "slow");
	  });
};

animove();

	$(".sf-menu").after("<div id='my-menu'>");
	$(".sf-menu").clone().appendTo("#my-menu");
	$("#my-menu").find("*").attr("style", "");
	$("#my-menu").find("ul").removeClass("sf-menu");
	$("#my-menu").mmenu({
		 extensions: ["fx-menu-fade"],
		navbar: {
			title: "Menu"
		}
	});


	var api = $("#my-menu").data("mmenu");
	api.bind("closed", function () {
		$(".toggle-mnu").removeClass("on");
	});

	$(".mobile-mnu").click(function() {
		var mmAPI = $("#my-menu").data( "mmenu" );
		mmAPI.open();
		var thiss = $(this).find(".toggle-mnu");
		thiss.toggleClass("on");
		$(".main-mnu").slideToggle();
		return false;
	});

animove();

  // $(".serv-item").animated("fadeInRight");

  $("body").append('<div class="top"><i class="fa fa-angle-double-up" aria-hidden="true"></i>');


  $(window).scroll(function() {
    if ($(this).scrollTop() > $(this).height()) {
      $(".top").addClass("active");
    } else {
      $(".top").removeClass("active");
    }
  });

  //Chrome Smooth Scroll
  try {
    $.browserSelector();
    if ($("html").hasClass("chrome")) {
      $.smoothScroll();
    }
  } catch (err) {};



  //No drag
  $("img, a").on("dragstart", function(event) {
    event.preventDefault();
  });

});
