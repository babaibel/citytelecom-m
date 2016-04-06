$(document).ready(function() {

	$('.js-select-basic').select2({
	    minimumResultsForSearch: -1
	});

	$('.js-my-city-container .my-city__item').click(function(){
	    $(this).addClass('active');
	    $(".js-my-city-container .my-city__item").not(this).removeClass('active');
	});

	$('.js-open-terminals').click(function(){
	    $(this).toggleClass('active');
	   	$(this).next('.js-terminals-list').slideToggle();
	});

	$('.js-mob-menu-btn').click(function(){
	    $('.js-canvas').toggleClass('layout__canvas_show');
	});

	$('.js-fixed-menu-close').click(function(){
	    $('.js-canvas').removeClass('layout__canvas_show');
	});

	$('.js-hidden-info-topline').click(function(){
		if ($('.js-hidden-info-topline').hasClass('active')){
			$(".js-hidden-info-topline").removeClass('active');
			$('.hidden-info-box').slideUp();
		} else{
			$(this).toggleClass('active');
	    	$('.hidden-info-box').slideDown();
		}
	});


	$('.js-partners-slider').slick({
	  dots: true,
	  arrows: false,
	  infinite: false,
	  speed: 300,
	  slidesToShow: 3,
	  slidesToScroll: 3,
	  responsive: [
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});

	$(function () {

        if(!$('#statement-form').length) return;

        $('#statement-form').submit(function(){
			$.magnificPopup.open({
				items: {
					src: '#success-modal'
				},
				type: 'inline',
				preloader: false,
				focus: '#username',
				closeBtnInside: true
			}, 0);
			return false;
		});

    });


});

$(function(){

	var $parent = $('.tariff-table__slider1');
	if (!$parent.length) return;

	var $wr = $parent.find('.tariff-table__slider-wrap'),
		$prevArrow = $parent.find('.js-prev-btn'),
		$nextArrow = $parent.find('.js-next-btn'),
		wWidth = $(window).width(),
		resizeFix,
		n = $parent.find('tr:first-child td').length,
		step = 0,
		backStep = 0,
		tdWidth = 25,
		last = 0,
		tableWidth = 0;

	console.log(n);

	var newParametrs = function (){
		if (wWidth > 600){
			tableWidth = n * 50;
			last = n - 2;
		} else{
			tableWidth = n * 100;
			last = n - 1;
		}
		console.log($wr);
		$wr.css('width', tableWidth + '%');
		$wr.css('transform', 'translate(0px, 0px)');
		$prevArrow.css('opacity','0.5');
		$nextArrow.css('opacity','1');
	}
	newParametrs();
	
	$(window).resize(function() {
	    clearTimeout(resizeFix);
	    resizeFix = setTimeout(doneResizing, 100);
	});

	function doneResizing(){
	  	wWidth = $(window).width();
	  	newParametrs();
		step = 0;
	}

	$('.js-prev-btn').click(function(){
		if (step == 0){
		} 
		else{
			step --;
			if (step == 0){
				$prevArrow.css('opacity','0.5');
			} else{
				$prevArrow.css('opacity','1');
				$nextArrow.css('opacity','1');
			}
			backStep = tdWidth * step;
		    $wr.css('transform', 'translate(-' + backStep + '%, 0px)');
		}
	    return false;
	});
	$('.js-next-btn').click(function(){
		if (step == last){

		} 
		else{
			step ++;
			if (step == last){
				$nextArrow.css('opacity','0.5');
			} else{
				$prevArrow.css('opacity','1');
				$nextArrow.css('opacity','1');
			}
		    $wr.css('transform', 'translate(-' + tdWidth * step + '%, 0px)');
		}
		return false;
	});
});