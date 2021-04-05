$(document).ready(function(){
  $('body').mousemove(function (e) {
      parallax(e, document.getElementById('movableDiv'), 1);
  });

  $('#nav-icon3').click(function(){
    let sideWidth = $('#mySidenav')[0].offsetWidth;
    if (sideWidth == 0) {
      openNav();
      $(this).addClass('open');
    } else {
      closeNav();
      $(this).removeClass('open');
    }
	});

  const scroll = new LocomotiveScroll({
    el: document.querySelector("body"),
    smooth: true
  });

  $('.sidenav a').click(function(el) {
    if (el.currentTarget.id !== "a-resume") {
      const targetId = "#" + el.currentTarget.id + "-div";
      const target = document.querySelector(targetId);
      scroll.scrollTo(target);
      closeNav();
      $('#nav-icon3').removeClass('open');
    }
  });
});

function parallax(e, target, layer) {
  var layer_coeff = 10 / layer;
  var x = (($(window).width() - target.offsetWidth) / 2 - (e.pageX - ($(window).width() / 2)) / layer_coeff) + 208;
  var y = (($(window).height() - target.offsetHeight) / 2 - (e.pageY - ($(window).height() / 2)) / layer_coeff) + 48;
  $(target).offset({ top: y ,left : x });
};

function openNav() {
  document.getElementById("mySidenav").style.width = "40%";
};

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
};