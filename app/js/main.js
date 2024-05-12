$(function () {

  $('.product-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });

  $('.product-item__num').styler({

  });
  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
    arrows: false,
  });
  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true,
  });

  $('.filter__price-input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
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
$(function () {
  $('.relprod__content').slick({
    nextArrow: '<button type="button" class="slick-next"><img src="images/product/arrow__right.png" alt="arrow__right"></button>',
    prevArrow: '<button type="button" class="slick-prev"><img src="images/product/arrow__left.png" alt="arrow__left"></button>',
    slidesToShow: 4,
    slidesToScroll: 1,
  });

});
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: 29.773238276799987, lng: -95.32314672356658 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 9,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerView({
    map: map,
    position: position,
    title: "Uluru",
  });
}

initMap();


