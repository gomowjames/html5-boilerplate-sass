'use strict';

import '../css/style.scss';

$(document).ready(function() {

/****************************
	BOOTSTRAP OFF-CANVAS MENU
*****************************/
  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  });


/**********************
	SVG WRITE animate
***********************/
	const svgPath = document.querySelectorAll('#logo-animate-1 .path');

	const svgText = anime({
	  targets: svgPath,
	  loop: 4,
	  direction: 'normal',
	  strokeDashoffset: [anime.setDashoffset, 0],
	  easing: 'easeInOutSine',
	  duration: 700,
	  delay: (el, i) => { return i * 500 }
	});

});

/******************
	BUTTON animate
*******************/
var basicTimeline = anime.timeline({
  autoplay: false
});

var pathEls = $(".check");

for (var i = 0; i < pathEls.length; i++) {
  var pathEl = pathEls[i];
  var offset = anime.setDashoffset(pathEl);
  pathEl.setAttribute("stroke-dashoffset", offset);
}

basicTimeline
  .add({
    targets: ".text",
    duration: 1,
    opacity: "0"
  })
  .add({
    targets: ".button",
    duration: 1300,
    height: 10,
    width: 300,
    backgroundColor: "#2B2D2F",
    border: "0",
    borderRadius: 100
  })
  .add({
    targets: ".progress-bar",
    duration: 4000,
    width: 300,
    easing: "linear"
  })
  .add({
    targets: ".button",
    width: 0,
    duration: 1
  })
  .add({
    targets: ".progress-bar",
    width: 80,
    height: 80,
    delay: 500,
    duration: 750,
    borderRadius: 80,
    backgroundColor: "#71DFBE"
  })
  .add({
    targets: pathEl,
    strokeDashoffset: [offset, 0],
    duration: 200,
    easing: "easeInOutSine"
  });

$(".button").click(function() {
  basicTimeline.play();
});

$(".text").click(function() {
  basicTimeline.play();
});