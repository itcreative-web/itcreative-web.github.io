$(function () {
	$(".slider").slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 3000,
		lazyLoad: 'progressive',
		responsive: [
			{
				breakpoint: 1080,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 600,
				settings: {
					autoplay: false,
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		]
	})
})



