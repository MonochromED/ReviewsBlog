//application javascript for dashboard view

var news_content_height = "250px"
var height_news_minimize_tab = "100%"
$(document).ready(function(){
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



});