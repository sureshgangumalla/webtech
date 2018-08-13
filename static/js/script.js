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

$('.search-filter').click(function(e) {
    e.preventDefault();
    $('.showing-results').css('display','none');
   $nearby= $('.nearBy').val();
    $roomtype=$('.TypeOfRoom').val();
    $sharing=$('.sharingroom').val();

    $('.clearFilter').css('display','block');
    $('.card').css('display','none');
    $('.shownoapartmentmessage').css('display','block');
        $(".card").each(function() {

         if(($(this).hasClass($nearby))){
             if(($(this).hasClass($roomtype))) {
                 if(($(this).hasClass($sharing)))
                 {
                     $('.shownoapartmentmessage').css('display','none');
                 $(this).css('display', 'inline-block');
             }
             }
         }
    });

});

$('.clearFilter').click(function(e) {
    e.preventDefault();
    $('.shownoapartmentmessage').css('display','none');
        $('.showing-results').css('display','inherit');
    $('.card').css('display','inline-block');
    $(this).css('display','none');

});

$('.Searchbar .searchicon').on('click',function(){
  $('form[name="SearchForm"]').submit();
});



});