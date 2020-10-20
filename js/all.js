; (function () {
  AOS.init({
    duration: 700,
    easing: 'ease-in-out-back'
  });

  $(function () {
    $(window).scroll(function () {
      let scroll = $(window).scrollTop();
      if (scroll >= 10) {
        $('.nav_set').addClass('shadows');
      } else {
        $('.nav_set').removeClass('shadows');
      }
      let el = document.documentElement;
      let _height = el.scrollHeight - el.clientHeight;
      let scrolled = (scroll / _height) * 100;
      $('.process_bar').css({ 'width': `${scrolled}%` })
    });
    $('.nav_set').on('click', '.nav_jq', function (e) {
      e.preventDefault();
      const anchor = $(this).attr('href');
      const linkScroll = $(anchor).offset().top;
      $('html,body')
        .stop()
        .animate(
          {
            scrollTop: linkScroll - 76,
          },
          700
        );
    });
    $('.nav_jq').on('click', function () {
      $('#navbarNavDropdown').removeClass('show');
    });
    // 解決bs4 popup 關掉視窗，影片不能同步關掉的問題
    $('.youtubeVideo').on('click', function () {
      let theModal = $(this).data('target');
      let videoSRCauto = $(this).attr('data-video');
      $(theModal + ' iframe').attr('src', videoSRCauto);
      $(theModal + ' button.close').on('click', function () {
        $(theModal + ' iframe').attr('src', '');
      });
    });
    $('#youtubeVideo').on('hidden.bs.modal', function (e) {
      $('#youtubeVideo').find('iframe').attr('src', '');
    });
    // faq
    $('.ques').on('click', function (e) {
      e.preventDefault();
      $(this).parent('.qabox').toggleClass('active').siblings('.qabox').removeClass('active');
    });
  });
})();