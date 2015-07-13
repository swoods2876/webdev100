   $(document).ready(function () {

       	alert("hello World");
       	 console.log("hello world");

         


 	$("#box").css({'height':'100px','width':'100px','background-color':'black','position':'fixed','z-index':'5','top':'500px'})
 	$("#box").animate({'left':'1000px'},6000,'linear', function(){
 		alert("done animating")
 	});
    //header will slide down in 3 seconds.
 	$("h2").slideDown(3000);
       //gradient will slide upward in 3 seconds.
       	$("#gradient").slideUp(3000);
          //a click function has been added to start an event. 
          $(".redQtrs").click(function(){
         	$(".redQtrs").fadeOut(function(){
         		$(".redQtrs").fadeIn();

         	});
         });

        });