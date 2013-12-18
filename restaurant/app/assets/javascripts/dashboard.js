//application javascript for dashboard view

var news_content_height = "250px"
var height_news_minimize_tab = "100%"
$(document).ready(function(){


	//News Tab effects.
	$('#news_pull_tab').click(function(){
		$(this).animate({borderTopLeftRadius:"0px"});
		$('#news_content').animate({width:'200px', height:"+" + news_content_height },500).show();
        $('#news_minimize').animate({width:'260px', height:"+=" + height_news_minimize_tab}, 500 ).show();
	    $("#news").animate({width:"260px"},500);
	});

	$('#news_minimize').click(function(){
	  $('#news_pull_tab').animate({height:"250px", borderTopLeftRadius:"10px"},10);
	  $("#news").animate({width:"50px"},1000);
      $('#news_content, #news_minimize').animate({width:'100%', height:"100%"}, 500 ).hide(500);
	});


	//Decorative effects on navigation bar entities
	$('.navigation_element').mouseenter(function(){
		$(this).animate({color: "white" , backgroundColor: "#d2b48c"},800);
	});

	$('.navigation_element').mouseleave(function(){
		$(this).animate({color: "#666666" , backgroundColor: "#112233"},400);
	});


	//ensure at initialization that header and footer are in correct positions
	if ($(document).height() > $(window).height() ){
		$("#footer").css({"position":"relative"});
	}
	else{
		$("#footer").css({"position":"fixed"});
		$("#header").css({"position":"absolute"});
	}





	
});

//ensure upon resize that header and footer are in correct positions
$(window).resize(function(){
	if ($(document).height() > $(window).height() ){
		$("#footer").css({"position":"relative"});
	}
	else{
		$("#footer").css({"position":"fixed"});
		$("#header").css({"position":"absolute"});
	}


});