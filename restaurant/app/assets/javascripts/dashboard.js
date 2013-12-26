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
		$(this).animate({color: "#666666" , backgroundColor: "transparent"},400);
	});



	//ensure at initialization that header and footer are in correct vertical positions
	if ($(document).height() > $(window).height() ){
		$("#footer").css({"position":"relative"});

	}
	//when we have less document than window area
	else{
		$("#footer").css({"position":"absolute"});

	}

	//ensures at initialization that header and footer are correct width
	var dashboardMain_Width = $("#dashboardMain").width();

	$("#footer").css({"width": dashboardMain_Width + "px"});	
	$("#header").css({"width": dashboardMain_Width + "px"});		

	//Ensures that footer gets stuck to the bottom by readjusting its position relative to rest of document
	//when document is first loaded.
	var minDashboardMainHeight = $(document).height() - $("#footer").height();
	$("#dashboardMain").css({"min-height": minDashboardMainHeight + "px"});







	
});

//Ensures correct header and footer properties on browser window resize
$(window).resize(function(){

	//Ensures that footer gets stuck to the bottom by readjusting its position relative to rest of document
	//when document is resized.
	var minDashboardMainHeight = $(document).height() - $("#footer").height();
	$("#dashboardMain").css({"min-height": minDashboardMainHeight + "px"});

	//ensure upon resize that header and footer are in correct vertical positions
	if ($(document).height() > $(window).height() ){
		$("#footer").css({"position":"relative"});
	}
	//when we have less document than window area
	else{
		$("#footer").css({"position":"absolute"});
	}


	//ensures on resize that header and footer are correct width
	var dashboardMain_Width = $("#dashboardMain").width();
	$("#footer").css({"width": dashboardMain_Width + "px"});	
	$("#header").css({"width": dashboardMain_Width + "px"});

});

