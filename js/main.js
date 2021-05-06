$(function(){
    $('.fix_icon img').on('click', function() {
        $('.box').toggleClass('active');
        $('.box').css('z-index','10');
    });
});