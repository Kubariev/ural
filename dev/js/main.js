$(document).ready(function() {
    tabs();

    $("form").submit(function( event ) {
        if ( !$(this).find('.order-call')[0].className.match(/active/g)) {
            $('.order-call').addClass('active');
            $('body').addClass('show-form');
            event.preventDefault();
        } else {
            alert ('Submit form');
            return;
        }
    });

    $('.btn-close', '.contact-form').click(function () {
        $('.order-call').removeClass('active');
        $('body').removeClass('show-form');
    })
});

function tabs(){
    $(".tab-content").hide(); //Hide all content
    $(".tabs li:first").addClass("active").show(); //Activate first tab
    $(".tab-content:first").show(); //Show first tab content
    //On Click Event
    $(".tabs li").click(function() {
        $(".tabs li").removeClass("active"); //Remove any "active" class
        $(this).addClass("active"); //Add "active" class to selected tab
        $(".tab-content").hide(); //Hide all tab content
        var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
        $(activeTab).fadeIn(); //Fade in the active content
        return false;
    });
}