//nav icon
function clickFunction() {
  var element = document.getElementById('openNav');
  element.classList.toggle('overlay__open');
  var element = document.getElementById('navToggle');
  element.classList.toggle('bar-active');
}

//scroll
var $section = $('.jsScroll');
var $pager = $('#jsSide');
var option = {
  section: '.jsScroll',
  easing: "swing",
  scrollSpeed: 1000,
  scrollbars: false,
  before: function (index, section) {
    setCurrent(index);
    pagerCurrent(index);
  },
  afterRender: function () {
    createPager();
    setCurrent();
  }
};
$(function () {
  $.scrollify(option);
});

function setCurrent(index = 0) {
  $section.removeClass('is-show');
  $section.eq(index).addClass('is-show');
}

function pagerCurrent(index = 0) {
  var $li = $pager.find('li');
  $li.removeClass('is-current');
  $li.eq(index).addClass('is-current');
}

function createPager() {
  $section.each(function (i, e) {
    var sectionName = $(e).attr('data-section-name');
    var addClass = '';
    if (i === 0) {
      addClass = 'is-current';
    }
    var html = '';
    html += '<li class="' + addClass + '">';
    html += '<a href="#' + sectionName + '"></a>';
    html += '</li>';
    $pager.append(html);
  });
  pagerLink();
}

function pagerLink() {
  $pager.find('a').on("click", $.scrollify.move);
}