// DEMO ONLY
if($.cookie("css")) {
	$("#colour_css").attr("href",$.cookie("css"));
}
else {
	$("#colour_css").attr("href","css/colours/cream-red.css");
}

var style_toggle = "closed";

$(document).ready(function() { 
    
	$(".style_list li a").click(function() { 
		$("#colour_css").attr("href",$(this).attr('rel'));
		$.cookie("css",$(this).attr('rel'), {expires: 365, path: '/'});
		return false;
	});
	
	$(".style_picker_toggle").click(function(){
		if(style_toggle == "closed"){
			$("#style_picker").stop(true, true).animate({left : "0px"}, 300, "linear", function(){
				style_toggle = "open";
				$(".style_picker_toggle").addClass("style_picker_toggle_open");
			});
		};
		if(style_toggle == "open"){
			$("#style_picker").stop(true, true).animate({left : "-147px"}, 300, "linear", function(){
				style_toggle = "closed";
				$(".style_picker_toggle").removeClass("style_picker_toggle_open");
			});
		};
		return false;
    });

	// Drop Down Menu
	$("ul#main-menu").superfish({ 
        delay:       0,
        animation:   {opacity:'show',height:'show'},
        speed:       'fast',
        autoArrows:  true,
        dropShadows: true
    });

	// Accordion
	$(".accordion").accordion( { autoHeight: false } );

	// Toggle
	$(".toggle > .inner").hide();
	$(".toggle .title").toggle(function(){
		$(this).addClass("active").closest('.toggle').find('.inner').slideDown(200, 'easeOutCirc');
	}, function () {
		$(this).removeClass("active").closest('.toggle').find('.inner').slideUp(200, 'easeOutCirc');
	});

	// Tabs
	$(function() {
		$("#tabs").tabs();
	});
	
	// Gallery Hover Effect
	$(".gallery-item .gallery-thumbnail .zoom-wrapper").hover(function(){		
		$(this).animate({ opacity: 1 }, 300);
	}, function(){
		$(this).animate({ opacity: 0 }, 300);
	});
	
	// PrettyPhoto
	$(document).ready(function(){
		$("a[rel^='prettyPhoto']").prettyPhoto();
	});
	
	// Slides Loader
	$("#slides").removeClass("slide-loader");
	
	// Slider
	$("#slides").slides({
		effect: 'slide',
		preload: false,
		generatePagination: false,
		autoHeight: false,
		next: 'next',
		prev: 'prev',
		play: false,
		pause: 2500,
		slideSpeed: 600,
		hoverPause: true,
		slideEasing: "easeOutQuad",
		slidesLoaded: function () { $("#slides a.prev, #slides a.next").fadeIn(300);  }
	});
	
	// Slider
	$("#slides1").slides({
		effect: 'slide',
		preload: false,
		generatePagination: false,
		autoHeight: false,
		next: 'next',
		prev: 'prev',
		play: false,
		pause: 2500,
		slideSpeed: 600,
		hoverPause: true,
		slideEasing: "easeOutQuad",
		slidesLoaded: function () { $("#slides a.prev, #slides a.next").fadeIn(300);  }
	});
	
	// Datepicker
	$(".datepicker").datepicker();
	
	var map_toggle  = "closed";
	
	// Google Map
	$(".gmap-btn").click(function(){
		
		$('#header-google-map').slideToggle('slow');
		
		if (!map) {
			initialize();
		}
		
		$('.gmap-btn').toggleClass('gmap-btn-hover');
		
	});	
	
});