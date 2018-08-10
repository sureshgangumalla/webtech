 switch_tabs = function(elm,index){
    $('.parent-tabs').removeClass('active');              
    $(elm).addClass('active')
    $('.tabs-child').removeClass('active');
    $('.tabs-child').eq(index-1).addClass('active');
 }
 book_now_click = function(){
        $('.quick-view-details').css('display','block');
        $('.overlay-layer').css('display','block');
 }
 new_booking = function(){
    $('.free-view-details').css('display','block');
    $('.overlay-layer').css('display','block');
 }
$(document).ready(function(){



 $( ".SignupPage .fields" ).each(function( index ) {
     if(index==4) {
         $data=($(this).children('small').text());
         ($(this).children('small.smalltext').css('display','none'));
         ($(this).append($data));
         ($(this).children('ul').addClass('smalldetails smalltext special'));
     }
});




});