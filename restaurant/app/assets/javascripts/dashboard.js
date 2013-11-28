//application javascript for dashboard view

$(document).ready(function(){
	$('#news_pull_tab').click(function(){
        $('#news #news_content, #news_minimize').animate({width:'75%', height:"100%"}, 500 ).show();
	    $("#news").animate({width:"26%"},1000);
	    $("#main").animate({width:"50%"},1000);
	    $(this).animate({height:"240px"},10);


	});

	$('#news_minimize').click(function(){
	  $('#news_pull_tab').animate({height:"250px"},10);
	  $("#news").animate({width:"80px"},1000);
	  $("#main").animate({width:"70%"},1000);
      $('#news_content, #news_minimize').animate({width:'100%', height:"100%"}, 500 ).hide(500);
	});



});