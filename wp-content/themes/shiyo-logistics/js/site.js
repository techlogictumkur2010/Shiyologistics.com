// JavaScript Document

jQuery(document).ready(function() {






	
// ADD FIRST AND LAST CLASSES ON FOOTER NAV
jQuery('.careers .subpages li')
    .eq(0).addClass('first').end()
    .eq(-1).addClass('last').end();
	
// ADD FIRST AND LAST CLASSES ON FOOTER NAV
jQuery('.footer-nav ul li')
    .eq(0).addClass('first').end()
    .eq(-1).addClass('last').end();
	
	
	
	// Add classes sequentially to items up 4 and then start over
$("#gallery li").each(function (i) {
    $(this).addClass("item-00" + (i % 4 + 1));
});
	
	
	
	//change width value on load
jQuery(document).ready(function(){
	  responsive_resize();
});

//change width value on resize
jQuery(window).resize(function(){
     responsive_resize();
});

  function responsive_resize(){
	 var current_width = jQuery(window).width();
    //do something with the width value here!

 
    if(current_width < 600){
      jQuery('html').addClass("mobile-menu")
	
	}
 
    if(current_width > 600){
      jQuery('html').removeClass("mobile-menu");

	}
	    if(current_width > 1024){
      jQuery('html').addClass("desktop");

	}
	
	    if(current_width < 1024){
      jQuery('html').removeClass("desktop");

	}

  }
	
	
	
	
	
	
// jQUERY PAGE TABS - by Ryan Brackett & Jeremy Clements

var selectedTab = 0;

// Add classes and ids to tabs and panels for unique styling
$("#tabs").children().each(function (i) {
    i = i + 1;
    $(this).attr('id', "tab-" + i).addClass("tab");
});
$("#panels").children().each(function (i) {
    i = i + 1;
    $(this).attr('id', "panel-" + i).addClass("panel");
});


// Activate first tab/panel group on load
$("#tabs").children().eq(selectedTab).addClass("xactive");
$("#panels").children().eq(selectedTab).addClass("xactive");

// Activate & deactivate tab/panel groups on click
$("#tabs > li").click(function () {
    $("#tabs > li, #panels > li").removeClass("xactive");
    $(this).toggleClass('xactive');
    $("#panels > li").eq($(this).index()).toggleClass('xactive');
});
	
	
	
	
	
	
	
	
	
	
});