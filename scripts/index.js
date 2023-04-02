$(document).ready(function(){
    $(".projects").css({marginTop:"-300vh"});

    $("#home").on("click", function(){
        $(".home").animate({marginLeft: "0"}, 1000);
        $(".about").animate({marginTop: "0"}, 1000);
        $(".projects").animate({marginTop: "-300vh"}, 1000);
    });

    $("#about").on("click", function(){
        $(".home").animate({marginLeft:"-100vw"}, 1000);
        $(".about").animate({marginTop: "-100vh"}, 1000);
        $(".projects").animate({marginTop: "-300vh"}, 1000);
    });

    $("#projects").on("click", function(){
        $(".home").animate({marginLeft:"-100vw"}, 1000);
        $(".about").animate({marginTop: "0"}, 1000);
        $(".projects").animate({marginTop: "-200vh"}, 1000);
    });

    $("#contact").on("click", function(){
        $(".home").animate({marginLeft:"-100vw"}, 1000);
        $(".about").animate({marginTop: "0"}, 1000);
        $(".projects").animate({marginTop: "-300vh"}, 1000);
    });

    $(".preview").hover(
        () => {
            //console.log($(this).index(this));
            //$(this).find(".view").css({transform:"scale(1)", height:"auto", width: "auto"});
        }, 
        () => {
            //$(this).find(".view").css({transform:"scale(0)", height:"0", width: "0"});
        }
    );

    $(".projects > .projectBar > .project").on("click", function(){
        var id = $(this).attr('id');
        console.log($("#"+id+" .view").css("height"));
        if($("#"+id+" .view").css("height") === "0px"){
            $("#"+id+" .view").css({backgroundColor:"white", height:"50vh", transform:"scale(1)"});
        } else {
            $("#"+id+" .view").css({backgroundColor:"black", height:"0px", transform:"scale(0)"});
        }
    });
});