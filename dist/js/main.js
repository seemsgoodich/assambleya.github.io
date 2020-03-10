$(function(){

  $('.nav-mobile-click').click(function(){
    $('.nav__list').fadeToggle();
    $('.nav-decoration').toggleClass('active');
 });

$('.slider__init').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    arrows:true,
    loop: true,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/left-arrow.svg" alt="left-arrow"></img>',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/right-arrow.svg" alt="right-arrow"></img>',
    autoplay: true,
    autoplaySpeed: 5000,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1570,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
        breakpoint: 1171,
        settings: {
          slidesToScroll: 1,
          arrows: false,
          dots: true
        },
      }
    ]
  
});
});