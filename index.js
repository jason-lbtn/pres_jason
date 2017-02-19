$('.fixedSummaryLink').mouseenter(function() {
    $('.fixedSummaryLink').css({'opacity': 0.5});
    $(this).css({'opacity': 1});
});

$('.fixedSummaryLink').mouseleave(function() {
    $('.fixedSummaryLink').css({'opacity': 1});
});

$('.fixedSummaryLink').on('click', function() {
    $(this).css({'background-size': '8vw 16vh'});
    setInterval(function(){
        $(this).css({'background-size': '5vw 10vh'});
    }, 2000);
});

$('.fixedSummaryLink').mouseleave(function() {
    $(this).css({'background-size': '0 0 '});
});

$('.fixedSummaryLink').mouseenter(function() {
    $(this).css({'background-size': '5vw 10vh '});
});