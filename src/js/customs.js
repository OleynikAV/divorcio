$('.slider-item').slick({
    dots: false,
    arrows: true,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 475,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: false,
            }
        },
    ]
});
$(document).ready(function (){
    if($(window).width() < 475){
        $('.right-block__button').html('Start now for just 139$')
            .css({'font-size':'18px','line-height':'24px','text-transform':'inherit'});
        $('').remove()
        $('.block-description__text').html('Court approval guaranteed\n' +
            'If your forms aren’t approved with the court we will refund your money')
    }
    else {
        $('.right-block__button').html('')
            .css({'font-size':'','line-height':'','text-transform':'inherit'})
    }
})
$('.burger-menu').on('click',function (){
    $(this).toggleClass('menu__open');
    $('.mobile-menu').toggleClass('menu__open-link');

    if ($('.mobile-menu').hasClass('menu__open-link')){
        $('body').css({'overflow-y':'hidden'})
    }else {
        $('body').css({'overflow-y':''})
    }
})

