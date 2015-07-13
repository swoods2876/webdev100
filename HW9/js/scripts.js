$(document).ready(function(){

    $("#ball").click(function(){
        $("#demo").slideDown("slow");
    });

    $("#ball2").click(function(){
        $("#demo2").slideDown("slow");
    });

    $("#ball3").click(function(){
        $("#demo3").slideDown("slow");
    });

    $("#ball4").click(function(){
        $("#demo4").slideDown("slow");

    });

    var isOPEN = false;
     
	$(".container").click(function(){
    			
    			if(isOPEN){

                    //
                    $('body').animate({

                        scrollTop: $("body").offset().top - 600
                        }, 2000);

                    isOPEN = false;
                }else{
                    //
                    $('body').animate({

                        scrollTop: $("body").offset().top + 600
                        }, 1000);


                    isOPEN = true;
                }
    			

	})

});
