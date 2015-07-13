$(document).ready(function(){


   
    $("#Name").click(function validateForm(){

        var x = document.forms["myForm"]["name"].value;
       
        if (x == null || x == "") {
            alert("Name must be filled out");
            return false; 
        } 
    });



    $("#Zip").click(function myFunction(){

    var Blah = document.getElementById("Zipcode");
    if (Blah.checkValidity() == false) {
        document.getElementById("Zip").innerHTML = Blah.validationMessage;
    } else {
        document.getElementById("Zip").innerHTML = "Thank You SOUPerteer";
    }

    })


    $("#GiveMoney").click(function(){
        $("html, body").css({
                'overflow': 'hidden',
                'height': '100$'
             });
       
            $("#lightbox").fadeIn();
     });
            

});