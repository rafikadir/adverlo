// Navbar Shrink
$(window).on("scroll",function(){
    $(this).scrollTop()>100?$(".main-nav").addClass("nav-shrink"):$(".main-nav").removeClass("nav-shrink");
 });


// Back to top
$(document).ready(function(){
	$(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
});

 $('#back-to-top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 400);
    return false;
});

// AOS
AOS.init();








