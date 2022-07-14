$('.team-carousel').slick({
	arrows: false,
	autoplay: true,
	autoplaySpeed: 2000,
	mobileFirst: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 576,
			settings: { slidesToShow: 2 },
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			},
		},
		{
			breakpoint: 1050,
			settings: {
				slidesToShow: 3,
				arrows: true,
				draggable: false,
				prevArrow:
					'<button type="button" class="slick-prev btn btn-outline-light"><i class="fas fa-angle-left"></i></button>',
				nextArrow:
					'<button type="button" class="slick-next btn btn-outline-light"><i class="fas fa-angle-right"></i></button>',
			},
		},
	],
});

$('.portfolio-slider').slick({
	arrows: false,
	autoplay: true,
	autoplaySpeed: 2000,
	mobileFirst: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1050,
			settings: {
				arrows: true,
				draggable: false,
				prevArrow:
					'<button type="button" class="slick-prev btn btn-outline-light"><i class="fas fa-angle-left"></i></button>',
				nextArrow:
					'<button type="button" class="slick-next btn btn-outline-light"><i class="fas fa-angle-right"></i></button>',
			},
		},
	],
});