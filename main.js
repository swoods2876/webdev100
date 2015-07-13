$(document).ready(function(){
	
	$("li").mouseover(function(){
		$(this).animate({"left":"30px"});
	});	

	$("li").mouseleave(function(){
		$(this).animate({"left":"0px"});
	});
	
});