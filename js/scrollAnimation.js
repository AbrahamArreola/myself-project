(function ($) {
	'use strict';

	/*-----------------------------------------------------------------
	Scroll animation
	-----------------------------------------------------------------*/
	window.sr = new scrollReveal();

	$(document).ready(function () {
		//smoothscroll
		$('a[href^="#"]').on('click', function (e) {
			if ($(this).attr("id") !== "education-tab" && $(this).attr("id") !== "courses-tab") {
				e.preventDefault();
				$(document).off("scroll");

				var target = this.hash,
					menu = target;
				var target = $(this.hash);
				$('html, body').stop().animate({
					scrollTop: (target.offset().top) - 70
				}, 500, 'swing', function () {
					window.location.hash = target;
				});
			}
		});
	});
	/*-----------------------------------------------------------------*/
})(jQuery)