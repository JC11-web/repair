 var scroll = $('#scroll');

 $(scroll).click( function(event) {
        $('html, body').animate({scrollTop:0});
        event.preventDefault();
});