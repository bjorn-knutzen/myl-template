
//ANIMATION HAMBURGER MENU
$(document).ready(function(){
    $('#nav-button').click(function(){
        $(this).toggleClass('nav-button--open');
        $(".main-nav").toggleClass("nav-button--open");
    });

    $('.link').click(function(){
        $(".main-nav").removeClass("nav-button--open");
    });

    $('.link').click(function(){
        $("#nav-button").removeClass("nav-button--open");
    });

    $('.default-state').each(function(i){
        var row = $(this);
        setTimeout(function() {
        row.toggleClass('active', !row.hasClass('active'));
        }, 100*i);
    });

    $('#nav-button').click(function(){
        $(".pic-mainheader").toggleClass("pic-mainheader--open");
    });
});

$(".hamburger-menu").click(function(){
    $(".pic-mainmenu").toggleClass("pic-mainmenu--active");
});
