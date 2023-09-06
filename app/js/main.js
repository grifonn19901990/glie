$(function () {
  $('.filter__price-input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data){
      $('.filter__price-from').text(data.from);
      $('.filter__price-to').text(data.to);
    },
    onChange: function (data) {
      $('.filter__price-from').text(data.from);
      $('.filter__price-to').text(data.to);
    },
  });

  $('.content2__item-like1').on('click', function () {
    $('.catalog__content2-item1').addClass('catalog__content2-item--like');
  });
  $('.catalog__content2-item-btn1').on('click', function () {
    $('.catalog__content2-item1').removeClass('catalog__content2-item--like');
  });
  $('.content2__item-like2').on('click', function () {
    $('.catalog__content2-item2').addClass('catalog__content2-item--like');
  });
  $('.catalog__content2-item-btn2').on('click', function () {
    $('.catalog__content2-item2').removeClass('catalog__content2-item--like');
  });
  $('.content2__item-like3').on('click', function () {
    $('.catalog__content2-item3').addClass('catalog__content2-item--like');
  });
  $('.catalog__content2-item-btn3').on('click', function () {
    $('.catalog__content2-item3').removeClass('catalog__content2-item--like');
  });
  $('.content2__item-like4').on('click', function () {
    $('.catalog__content2-item4').addClass('catalog__content2-item--like');
  });
  $('.catalog__content2-item-btn4').on('click', function () {
    $('.catalog__content2-item4').removeClass('catalog__content2-item--like');
  });


  $('.recent__products-star').rateYo({
    
    starWidth: "10px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffd633",
    readOnly: true
   
  });

  $('.catalog__content2-item-star').rateYo({

    starWidth: "18px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffd633",
    readOnly: true

  });

  $('.top__slider-inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  })

});

$(function () {
  var mixer = mixitup('.products__content');

});

$(function () {
  var mixer = mixitup('.desing__content');

});

