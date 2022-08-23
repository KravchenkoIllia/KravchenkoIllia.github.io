const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    nav: false,
    autoplay: false,
    controls: false,
    responsive: {
      576: {
        items: 1,
        autoplay: false,
        controls: false,
        nav: true
      },
      990: {
        nav: false,
        items: 1,
        autoplay: false,
        controls: false
      }

    }
  });

document.querySelector('.next').addEventListener('click', function () {
  slider.goTo('next');})

document.querySelector('.prev').addEventListener('click', function () {
  slider.goTo('prev');}) 

$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
  $(this)
    .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
    .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
});

function toggleSlide(item) {
  $(item).each(function(i) {
    $(this).on('click', function(e) {
      e.preventDefault();
      $('.catalog__item_content').eq(i).toggleClass('catalog__item_content_active');
      $('.catalog__item_list').eq(i).toggleClass('catalog__item_list_active');
    })
  })
};

toggleSlide('.catalog__item_back');
toggleSlide('.catalog__item_link');


$('[data-modal=consultation]').on('click' , function() {
  $('.overlay, #consultation').fadeIn('slow');
});
$('.modal__close').on('click', function() {
  $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
});

$('.button_mini').each(function(i) {
  $(this).on('click', function() {
    $('#order .modal__subtitle').text($('.catalog__item_subtitle').eq(i).text());
    $('.overlay, #order').fadeIn('slow');
  })
});

function validateForms (item) {
  $(item).validate({
    rules: {
       name: "required",
       tel: "required",
       email: {
         required: true,
         email: true
       }
     },
     messages: {
       name: "Please specify your name",
       tel: "Please specify your number",
       email: {
         required: "We need your email address to contact you",
         email: "Your email address must be in the format of name@domain.com"
       }
     }
   });
}

validateForms('#consultation form');
validateForms('#order form');
validateForms('#consultation_form form');

$(window).scroll(function() {
	if ($(this).scrollTop() > 1000) {
		$('.pageup').fadeIn();
	} else {
		$('.pageup').fadeOut();
	}

});