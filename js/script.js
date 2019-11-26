$(window).scroll(function () { 
	var scroll_emerging_header = $(window).scrollTop();
	if (scroll_emerging_header > 300) {
		$('.emerging-header').css({'transform':'translateY(0px)'});
	} else {
		$('.emerging-header').css({'transform':'translateY(-110px)'});
	}
});

var rellax = new Rellax('.rellax');

var window_width = $(window).width();
    
$(window).scroll(function () { 
	var scroll_position = $(window).scrollTop();
	var object_position_left = (scroll_position*6)*(scroll_position/window_width);
	$('#object').css({'right':object_position_left});
});

$('.video-reviews-slider').slick({
	dots: true,
	arrows: true,
	speed: 300,
	slidesToShow: 2,
	slidesToScroll: 1,
	autoplay: false,
	infinite: true,
	autoplaySpeed: 2000,
	centerMode: true,
	centerPadding: '60px',
	responsive: [
	  {
		breakpoint: 1170,
		settings: {
		  arrows: false,
		  dots: false,
		  centerMode: false,
		  slidesToShow: 1
		}
	  }
	]
  });
  $('.stop-unraveling-item-slider').slick({
	dots: true,
	arrows: true,
	speed: 300,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: false,
	infinite: true,
	autoplaySpeed: 2000,
	responsive: [
	  {
		breakpoint: 768,
		settings: {
		  arrows: false,
		  slidesToShow: 1
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  arrows: false,
		  slidesToShow: 1
		}
	  }
	]
  });
  $('.stop-unraveling-item-slider-w').slick({
	dots: true,
	arrows: true,
	speed: 300,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: false,
	infinite: true,
	autoplaySpeed: 2000,
	responsive: [
	  {
		breakpoint: 768,
		settings: {
		  arrows: false,
		  slidesToShow: 1
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  arrows: false,
		  slidesToShow: 1
		}
	  }
	]
  });

  $(".chouse-color").click(function(){
	$(".chouse-color").removeClass("active");
	$(this).addClass("active");
  });

  $(".chouse-color").click(function(){
	$(".chouse-color").removeClass("active");
	$(this).addClass("active");
  });

  $("#white-images-btn").click(function(){
	$("#white-images").css({'visibility':'visible'});
	$("#black-images").css({'visibility':'hidden'});
  });

  $("#black-images-btn").click(function(){
	$("#black-images").css({'visibility':'visible'});
	$("#white-images").css({'visibility':'hidden'});
  });

// var whiteImagesBtn = document.getElementById('white-images-btn');
// if(whiteImagesBtn != null) {
// 	whiteImagesBtn.onclick = function getModal() {
// 	var whiteImages = document.getElementById('white-images')
// 	var blackImages = document.getElementById('black-images')

// 		blackImages.style.visibility = 'hidden';
// 		whiteImages.style.visibility = 'visible';
			
// 	}
// }
// var blackImagesBtn = document.getElementById('black-images-btn');
// if(blackImagesBtn != null) {
// 	blackImagesBtn.onclick = function getModal() {
// 	var whiteImages = document.getElementById('white-images')
// 	var blackImages = document.getElementById('black-images')

// 		whiteImages.style.visibility = 'hidden';
// 		blackImages.style.visibility = 'visible';
// 	}
// }



$(window).scroll(function () { 
	var scroll_position = $(window).scrollTop();
	if (scroll_position > 6600) {
		$('#object2').css({'transform':'translateX(-260px)'});
	} else {
		$('#object2').css({'transform':'translateX(0px)'});
	}
});

// $(".user-reviews-tab_item").not(":first").hide();
// $(".user-reviews-wrapper_tabs .user-reviews-tab").click(function() {
// 	$(".user-reviews-wrapper_tabs .user-reviews-tab").removeClass("active").eq($(this).index()).addClass("active");
// 	$(".user-reviews-tab_item").hide().eq($(this).index()).fadeIn()
// }).eq(0).addClass("active");


  $('.user-reviews-slider').slick({
	arrows: true,
	speed: 300,
	slidesToShow: 2,
	slidesToScroll: 1,
	responsive: [
		{
		  breakpoint: 810,
		  settings: {
			arrows: false,
			slidesToShow: 1
		  }
		}
	  ]
	});


  $('.questions-arrow').click(function(){
    $(this).find('~ .questions-text').toggle('fast')
  });



  $('.burger').click(function(){
    $('.menu').css({'display':'block'})
  });
  $('.close-menu').click(function(){
    $('.menu').css({'display':'none'})
  });

  $('.user-reviews-video-slider').slick({
	dots: true,
	arrows: true,
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: false,
	infinite: true,
	responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 1,
			infinite: true,
			dots: true
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	  ]
  });

  $("#user-reviews-tab-1").click(function(){
	$("#user-reviews-tab_item-1-wrapper").css({'visibility':'visible'});
	$("#user-reviews-tab_item-2-wrapper").css({'visibility':'hidden'});
	$("#user-reviews-tab_item-3-wrapper").css({'visibility':'hidden'});
  });

  $("#user-reviews-tab-2").click(function(){
	$("#user-reviews-tab_item-1-wrapper").css({'visibility':'hidden'});
	$("#user-reviews-tab_item-2-wrapper").css({'visibility':'visible'});
	$("#user-reviews-tab_item-3-wrapper").css({'visibility':'hidden'});
  });
  $("#user-reviews-tab-3").click(function(){
	$("#user-reviews-tab_item-1-wrapper").css({'visibility':'hidden'});
	$("#user-reviews-tab_item-2-wrapper").css({'visibility':'hidden'});
	$("#user-reviews-tab_item-3-wrapper").css({'visibility':'visible'});
  });

  $(".user-reviews-tab").click(function(){
	$(".user-reviews-tab").removeClass("active");
	$(this).addClass("active");
  });

  $('.user-reviews-messengers-slider').slick({
	dots: true,
	arrows: true,
	speed: 300,
	slidesToShow: 4,
	slidesToScroll: 1,
	autoplay: false,
	infinite: true,
	responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 1,
			infinite: true,
			dots: true
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	  ]
  });