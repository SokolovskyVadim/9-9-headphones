$(window).scroll(function () { 
	var scroll_emerging_header = $(window).scrollTop();
	if (scroll_emerging_header > 300) {
		$('.emerging-header').css({'transform':'translateY(0px)'});
	} else {
		$('.emerging-header').css({'transform':'translateY(-110px)'});
	}
});

$(window).scroll(function () { 
	var scroll_emerging_header_2 = $(window).scrollTop();
	if (scroll_emerging_header_2 > 300) {
		$('.emerging-header-mobile').css({'transform':'translateY(0px)'});
	} else {
		$('.emerging-header-mobile').css({'transform':'translateY(-110px)'});
	}
});

var rellax = new Rellax('.rellax');

var window_width = $(window).width();
    
$(window).scroll(function () { 
	var scroll_position = $(window).scrollTop();
	var object_position_left = (scroll_position*3)*(scroll_position/window_width);
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
		  slidesToShow: 1
		}
	  },
	  {
		breakpoint: 480,
		settings: {
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
		 
		  slidesToShow: 1
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		 
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


//   $('.questions-arrow').click(function(){
// 	$(this).find('~ .questions-text').toggle('fast');
// 	if (toggle = true) {
// 		$(this).css({"transform":"rotate(90deg)"})
// 	} else {
// 		$(this).css({"transform":"rotate(-90deg)"})
// 	}
//   });


$('.questions-arrow').click(function(){
    $(this).find('~ .questions-text').toggle('fast');
    $(this).toggleClass('active');
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


  $(".tab_item").not(":first").hide();
$(".wrapper_tabs .tab").click(function() {
	$(".wrapper_tabs .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");


$(".black-tab").click(function(){
	$(".tab").css({"color":"white"});
  });
$(".white-tab").click(function(){
	$(".tab").css({"color":"black"});
  });


  $(".tab-comfort").click(function(){
	$(".tab-comfort").removeClass("active-comfort");
	$(this).addClass("active-comfort");
  });


  $("#tab-comfort-2").click(function(){
	$(".tab-item-comfort-2").css({'display':'flex'});
	$(".tab-item-comfort-1").css({'display':'none'});
  });
  $("#tab-comfort-1").click(function(){
	$(".tab-item-comfort-1").css({'display':'flex'});
	$(".tab-item-comfort-2").css({'display':'none'});
  });


  $(".control-block-tab").click(function(){
	$(".control-block-tab").removeClass("active-control");
	$(this).addClass("active-control");
  });

  $("#control-block-3").click(function(){
	$(".control-block-3").css({'display':'block'});
	$(".control-block-2").css({'display':'none'});
	$(".control-block-1").css({'display':'none'});
  });
  $("#control-block-2").click(function(){
	$(".control-block-2").css({'display':'block'});
	$(".control-block-3").css({'display':'none'});
	$(".control-block-1").css({'display':'none'});
  });
  $("#control-block-1").click(function(){
	$(".control-block-1").css({'display':'block'});
	$(".control-block-3").css({'display':'none'});
	$(".control-block-2").css({'display':'none'});
  });

  $(".comparison-modal-tab").click(function(){
	$(".comparison-modal-tab").removeClass("comparison-modal-tab-active");
	$(this).addClass("comparison-modal-tab-active");
  });

  $("#comparison-modal-tab-1").click(function(){
	$(".comparison-modal-tabs-item-1").css({'display':'block'});
	$(".comparison-modal-tabs-item-2").css({'display':'none'});
	$(".comparison-modal-tabs-item-3").css({'display':'none'});
	$(".comparison-modal-tabs-item-4").css({'display':'none'});
  });
  $("#comparison-modal-tab-2").click(function(){
	$(".comparison-modal-tabs-item-2").css({'display':'block'});
	$(".comparison-modal-tabs-item-1").css({'display':'none'});
	$(".comparison-modal-tabs-item-3").css({'display':'none'});
	$(".comparison-modal-tabs-item-4").css({'display':'none'});
  });
  $("#comparison-modal-tab-3").click(function(){
	$(".comparison-modal-tabs-item-3").css({'display':'block'});
	$(".comparison-modal-tabs-item-2").css({'display':'none'});
	$(".comparison-modal-tabs-item-1").css({'display':'none'});
	$(".comparison-modal-tabs-item-4").css({'display':'none'});
  });
  $("#comparison-modal-tab-4").click(function(){
	$(".comparison-modal-tabs-item-4").css({'display':'block'});
	$(".comparison-modal-tabs-item-2").css({'display':'none'});
	$(".comparison-modal-tabs-item-3").css({'display':'none'});
	$(".comparison-modal-tabs-item-1").css({'display':'none'});
  });

  $(document).ready(function($) {
	$('.what-to-choose-button').click(function() {
		$('.popup-comparison').fadeIn();
		return false;
	});	
	
	$('.close-big-modal-2').click(function() {
		$(this).parents('.popup-comparison').fadeOut();
		return false;
	});		
  
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-comparison').fadeOut();
		}
	});
	
	$('.popup-comparison').click(function(e) {
		if ($(e.target).closest('.popup-comparison').length == 0) {
			$(this).fadeOut();					
		}
	});
  });


  

  $('.why__modal').on('click', function(e){
	e.preventDefault();
	var $id = $(this).attr('data-id');
	if($id){
	  $ind = $id;
	}else{
	  $ind = 1;
	}
	  console.log($ind);
	  $('.popup-why-modal').fadeIn();
	  jQuery('.tab[data-id="' + $id + '"]').trigger('click')
  });

$('.close-big-modal').click(function() {
	$(this).parents('.popup-why-modal').fadeOut();
	return false;
});		

$(document).keydown(function(e) {
	if (e.keyCode === 27) {
		e.stopPropagation();
		$('.popup-why-modal').fadeOut();
	}
});

$('.popup-why-modal').click(function(e) {
	if ($(e.target).closest('.popup-why-modal').length == 0) {
		$(this).fadeOut();					
	}
});

$(document).ready(function($) {
	$('.complect-modal-open').click(function() {
		$('.complect-modal').fadeIn();
		return false;
	});	
	
	$('.close-complect-modal').click(function() {
		$(this).parents('.complect-modal').fadeOut();
		return false;
	});		
  
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.complect-modal').fadeOut();
		}
	});
	
	$('.complect-modal').click(function(e) {
		if ($(e.target).closest('.complect-modal-in').length == 0) {
			$(this).fadeOut();					
		}
	});
  });

  $(document).ready(function($) {
	$('.give-number-modal-open').click(function() {
		$('.give-number-modal').fadeIn();
		return false;
	});	
	
	$('.close-give-number-modal').click(function() {
		$(this).parents('.give-number-modal').fadeOut();
		return false;
	});		
  
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.give-number-modal').fadeOut();
		}
	});
	
	$('.give-number-modal').click(function(e) {
		if ($(e.target).closest('.give-number-modal-in').length == 0) {
			$(this).fadeOut();					
		}
	});
  });

  $(document).ready(function($) {
	$('.inter-number-button').click(function() {
		$('.thanks-number-modal').fadeIn();
		$('.give-number-modal').fadeOut();
		$('.give-number-modal-buy').fadeOut();
		return false;
	});	
	
	$('.close-thanks-number-modal').click(function() {
		$(this).parents('.thanks-number-modal').fadeOut();
		return false;
	});		
  
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.thanks-number-modal').fadeOut();
		}
	});
	
	$('.thanks-number-modal').click(function(e) {
		if ($(e.target).closest('.thanks-number-modal-in').length == 0) {
			$(this).fadeOut();					
		}
	});
  });
  
  $(document).ready(function($) {
	$('.give-number-modal-open-buy').click(function() {
		$('.give-number-modal-buy').fadeIn();
		return false;
	});	
	
	$('.close-give-number-modal-buy').click(function() {
		$(this).parents('.give-number-modal-buy').fadeOut();
		return false;
	});		
  
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.give-number-modal-buy').fadeOut();
		}
	});
	
	$('.give-number-modal-buy').click(function(e) {
		if ($(e.target).closest('.give-number-modal-in-buy').length == 0) {
			$(this).fadeOut();					
		}
	});
  });

  $(document).ready(function($) {
	$('.serial-number-modal-open-buy').click(function() {
		$('.serial-number-modal-buy').fadeIn();
		return false;
	});	
	
	$('.close-serial-number-modal-buy').click(function() {
		$(this).parents('.serial-number-modal-buy').fadeOut();
		return false;
	});		
  
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.serial-number-modal-buy').fadeOut();
		}
	});
	
	$('.serial-number-modal-buy').click(function(e) {
		if ($(e.target).closest('.serial-number-modal-in-buy').length == 0) {
			$(this).fadeOut();					
		}
	});
  });

 

  $(function() {
	  var delay_popup = 30000;
	  setTimeout("document.getElementById('question-modal-buy').style.display='block'", delay_popup);
	});
  $(document).ready(function($) {
	$('.close-question-modal-buy').click(function() {
		$(this).parents('.question-modal-buy').fadeOut();
		return false;
	});		
  
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.question-modal-buy').fadeOut();
		}
	});
	
	$('.question-modal-buy').click(function(e) {
		if ($(e.target).closest('.question-modal-in-buy').length == 0) {
			$(this).fadeOut();					
		}
	});
  });

  $(document).ready(function(){
	var dropZone = $('#upload-container');

	$('#file-input').focus(function() {
		$('label').addClass('focus');
	})
	.focusout(function() {
		$('label').removeClass('focus');
	});


	dropZone.on('drag dragstart dragend dragover dragenter dragleave drop', function(){
		return false;
	});

	dropZone.on('dragover dragenter', function() {
		dropZone.addClass('dragover');
	});

	dropZone.on('dragleave', function(e) {
		let dx = e.pageX - dropZone.offset().left;
		let dy = e.pageY - dropZone.offset().top;
		if ((dx < 0) || (dx > dropZone.width()) || (dy < 0) || (dy > dropZone.height())) {
			dropZone.removeClass('dragover');
		}
	});

	dropZone.on('drop', function(e) {
		dropZone.removeClass('dragover');
		let files = e.originalEvent.dataTransfer.files;
		sendFiles(files);
	});

	$('#file-input').change(function() {
		let files = this.files;
		sendFiles(files);
	});


	function sendFiles(files) {
		let maxFileSize = 5242880;
		let Data = new FormData();
		$(files).each(function(index, file) {
			if ((file.size <= maxFileSize) && ((file.type == 'image/png') || (file.type == 'image/jpeg'))) {
				Data.append('images[]', file);
			}
		});

		$.ajax({
			url: dropZone.attr('action'),
			type: dropZone.attr('method'),
			data: Data,
			contentType: false,
			processData: false,
			success: function(data) {
				alert ('Файлы были успешно загружены!');
			}
		});
	}
})

$('.dowload-video').change(function(){
	files = this.files;
});
  
$(document).ready(function($) {
	$('.review-modal-open-buy').click(function() {
		$('.review-modal-buy').fadeIn();
		return false;
	});	
	
	$('.close-review-modal-buy').click(function() {
		$(this).parents('.review-modal-buy').fadeOut();
		return false;
	});		
  
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.review-modal-buy').fadeOut();
		}
	});
	
	$('.review-modal-buy').click(function(e) {
		if ($(e.target).closest('.review-modal-in-buy').length == 0) {
			$(this).fadeOut();					
		}
	});
  });
  $(document).ready(function($) {
	$('.youtube-modal-open-buy').click(function() {
		$('.youtube-modal-buy').fadeIn();
		return false;
	});	
	
	$('.close-youtube-modal-buy').click(function() {
		$(this).parents('.youtube-modal-buy').fadeOut();
		return false;
	});		
  
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.youtube-modal-buy').fadeOut();
		}
	});
	
	$('.youtube-modal-buy').click(function(e) {
		if ($(e.target).closest('.youtube-modal-buy-in').length == 0) {
			$(this).fadeOut();					
		}
	});
  });
  $(document).ready(function($) {
	$('.official-modal-open-buy').click(function() {
		$('.official-modal-buy').fadeIn();
		return false;
	});	
	
	$('.close-official-modal-buy').click(function() {
		$(this).parents('.official-modal-buy').fadeOut();
		return false;
	});		
  
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.official-modal-buy').fadeOut();
		}
	});
	
	$('.official-modal-buy').click(function(e) {
		if ($(e.target).closest('.official-modal-buy-in').length == 0) {
			$(this).fadeOut();					
		}
	});
  });