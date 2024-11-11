$(document).ready(function () {
    $('#con').hide(1000);
    $('#slideDown').click(function (e) { 
        e.preventDefault();
        $('#con').slideDown(3000);
       
    });

    $('#slideUp').click(function (e) { 
        e.preventDefault();
        $('#con').slideUp(3000);
        $('#con').css('background-color', 'teal');
    });

    $('#slideToggle').click(function (e) { 
        e.preventDefault();
        $('#con').slideToggle(2000 );
    });

});
