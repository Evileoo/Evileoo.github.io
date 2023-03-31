$(document).ready(function(){
    $("#home").on("click", function(){
        $(".home").animate({marginLeft: "0"}, 1000);
        $(".about").animate({marginTop: "0"}, 1000);
    });

    $("#about").on("click", function(){
        $(".home").animate({marginLeft:"-100vw"}, 1000);
        $(".about").animate({marginTop: "-100vh"}, 1000);
    });

    $("#projects").on("click", function(){
        $(".home").animate({marginLeft:"-100vw"}, 1000);
        $(".about").animate({marginTop: "0"}, 1000);
    });

    $("#contact").on("click", function(){
        $(".home").animate({marginLeft:"-100vw"}, 1000);
        $(".about").animate({marginTop: "0"}, 1000);
    });
});