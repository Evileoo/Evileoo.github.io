$(document).ready(function(){
    $(".projects").css({marginTop:"-300vh"});
    $(".contact").css({marginTop:"0vh", marginLeft:"100vw"});

    $("#home").on("click", function(){
        $(".home").animate({marginLeft: "0"}, 1000);
        $(".about").animate({marginTop: "0"}, 1000);
        $(".projects").animate({marginTop: "-300vh"}, 1000);
        $(".contact").animate({marginLeft:"100vw"}, 1000);
    });

    $("#about").on("click", function(){
        $(".home").animate({marginLeft:"-100vw"}, 1000);
        $(".about").animate({marginTop: "-100vh"}, 1000);
        $(".projects").animate({marginTop: "-300vh"}, 1000);
        $(".contact").animate({marginLeft:"100vw", marginTop:"100vh"}, 1000);
    });

    $("#projects").on("click", function(){
        $(".home").animate({marginLeft:"-100vw"}, 1000);
        $(".about").animate({marginTop: "0"}, 1000);
        $(".projects").animate({marginTop: "-200vh"}, 1000);
        $(".contact").animate({marginLeft:"100vw", marginTop:"-100vh"}, 1000);
    });

    $("#contact").on("click", function(){
        $(".home").animate({marginLeft:"-100vw"}, 1000);
        $(".about").animate({marginTop: "0"}, 1000);
        $(".projects").animate({marginTop: "-300vh"}, 1000);
        $(".contact").animate({marginLeft: "0", marginTop:"0"}, 1000);
    });

    $(".project").on("click", function(){
        var id = $(this).attr('id');
        if($("#"+id+" .fullview").css("width") === "0px"){
            $("#"+id+" .fullview").animate({width:"60%"});
            $("#"+id+" .preview").animate({width:"40%"});
            $("#"+id).animate({width:"40vw"});
        } else {
            $("#"+id+" .fullview").animate({width:"0"});
            $("#"+id+" .preview").animate({width:"100%"});
            $("#"+id).animate({width:"20vw"});
        }
    });
});