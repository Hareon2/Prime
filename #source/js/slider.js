if($('.slider__body').length>0){
    $('.slider__body').slick({
        dots: true,
        arrows: false,
        accessibility: false,
        slidesToShow: 1,
        autoplaySpeed: 3000,
        responsive:[{
            breakpoint:768,
            settings:{}
        }]
    });
}