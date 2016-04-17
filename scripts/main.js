(function($) {

  $('a.tab-nav-item').on('click', function(evt) {
    evt.preventDefault();

    var currentAttrValue = $(this).attr('href')
        currentEl = $(this).attr('id');

    // Toggle tab content
    $('.tab-content ' + currentAttrValue).show().siblings().hide();
    $(this).parent('li').addClass('active').siblings().removeClass('active');

    // Toggle adding of border
    if (currentEl === 'userTab') {
      $('#settingTab').toggleClass('right-border');
      $('#contactTab').toggleClass('no-left-space');
    } else {
      $('#settingTab').removeClass('right-border');
      $('#contactTab').removeClass('no-left-space');
    }

    if (currentEl === 'contactTab') {
      $('#userTab').toggleClass('right-border');
      $('#settingTab').toggleClass('no-left-space');
    } else {
      $('#userTab').removeClass('right-border');
      $('#settingTab').removeClass('no-left-space');
    }

  })

})(jQuery);
