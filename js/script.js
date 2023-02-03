
$(window).scroll(function(event){
       var s=0-$(this).scrollTop()/3;
       $('.mainblock__image').css('transform','translate3d(0, '+s+'px, 0)');
});



     