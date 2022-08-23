$('ul.nav').on('click', 'li:not(.nav__link-active)', function() {
    $(this)
      .addClass('nav__link-active').siblings().removeClass('nav__link-active');
  });
