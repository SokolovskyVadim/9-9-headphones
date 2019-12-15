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

var window_width = $(window).width();
    
$(window).scroll(function () { 
	var scroll_position = $(window).scrollTop();
	var object_position_left = (scroll_position*5)*(scroll_position/window_width);
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
		  arrows: true,
		  dots: true,
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
	$("#white-images").css({'visibility':'visible', 'opacity':'1', 'transition':'0.5s'});
	$("#black-images").css({'visibility':'hidden', 'opacity':'0', 'transition':'0.5s'});
  });
  $("#black-images-btn").click(function(){
	$("#black-images").css({'visibility':'visible', 'opacity':'1', 'transition':'0.5s'});
	$("#white-images").css({'visibility':'hidden', 'opacity':'0', 'transition':'0.5s'});
  });





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
			arrows: true,
			slidesToShow: 1
		  }
		}
	  ]
	});




$(function () { 
$('.questions-item-in').click(function(e){
    $(this).find('.questions-text').toggle('fast');
	$(this).find('.questions-arrow').toggleClass('active');
  });
  $('.questions-item-in .questions-text').on('click', function(e){
	e.stopPropagation();
  });
});


  $('.burger').click(function(){
	$('.menu').css({'transform':'translateX(0px)'})
	$('.menu').css({'visibility':'visible'})
	$('.menu').css({'opacity':'1'})
	$('.bg-layer').css({'visibility':'visible'})
	$('.bg-layer').css({'opacity':'1'})
  });
  $('.close-menu').click(function(){
	$('.menu').css({'transform':'translateX(-2000px)'})
	$('.menu').css({'visibility':'hidden'})
	$('.menu').css({'opacity':'0'})
	$('.bg-layer').css({'visibility':'hidden'})
	$('.bg-layer').css({'opacity':'0'})
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
	  ]
  });

  $("#user-reviews-tab-1").click(function(){
	$("#user-reviews-tab_item-1-wrapper").css({'visibility':'visible', 'opacity':'1', 'transition':'0.5s'});
	$("#user-reviews-tab_item-2-wrapper").css({'visibility':'hidden', 'opacity':'0', 'transition':'0.5s'});
	$("#user-reviews-tab_item-3-wrapper").css({'visibility':'hidden', 'opacity':'0', 'transition':'0.5s'});
  });

  $("#user-reviews-tab-2").click(function(){
	$("#user-reviews-tab_item-1-wrapper").css({'visibility':'hidden', 'opacity':'0', 'transition':'0.5s'});
	$("#user-reviews-tab_item-2-wrapper").css({'visibility':'visible', 'opacity':'1', 'transition':'0.5s'});
	$("#user-reviews-tab_item-3-wrapper").css({'visibility':'hidden', 'opacity':'0', 'transition':'0.5s'});
  });
  $("#user-reviews-tab-3").click(function(){
	$("#user-reviews-tab_item-1-wrapper").css({'visibility':'hidden', 'opacity':'0', 'transition':'0.5s'});
	$("#user-reviews-tab_item-2-wrapper").css({'visibility':'hidden', 'opacity':'0', 'transition':'0.5s'});
	$("#user-reviews-tab_item-3-wrapper").css({'visibility':'visible', 'opacity':'1', 'transition':'0.5s'});
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
	$('.inter-number-button-sub').click(function() {
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
	$('.give-number-modal-open-buy1').click(function() {
		$('.give-number-modal-buy1').fadeIn();
		return false;
	});	
	
	$('.close-give-number-modal-buy1').click(function() {
		$(this).parents('.give-number-modal-buy1').fadeOut();
		return false;
	});		
  
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.give-number-modal-buy1').fadeOut();
		}
	});
	
	$('.give-number-modal-buy1').click(function(e) {
		if ($(e.target).closest('.give-number-modal-in-buy1').length == 0) {
			$(this).fadeOut();					
		}
	});
  });

  $(document).ready(function($) {
	$('.give-number-modal-open-buy2').click(function() {
		$('.give-number-modal-buy2').fadeIn();
		return false;
	});	
	
	$('.close-give-number-modal-buy2').click(function() {
		$(this).parents('.give-number-modal-buy2').fadeOut();
		return false;
	});		
  
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.give-number-modal-buy2').fadeOut();
		}
	});
	
	$('.give-number-modal-buy2').click(function(e) {
		if ($(e.target).closest('.give-number-modal-in-buy2').length == 0) {
			$(this).fadeOut();					
		}
	});
  });


  $(document).ready(function($) {
	$('.give-number-modal-open-buy3').click(function() {
		$('.give-number-modal-buy3').fadeIn();
		return false;
	});	
	
	$('.close-give-number-modal-buy3').click(function() {
		$(this).parents('.give-number-modal-buy3').fadeOut();
		return false;
	});		
  
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.give-number-modal-buy3').fadeOut();
		}
	});
	
	$('.give-number-modal-buy3').click(function(e) {
		if ($(e.target).closest('.give-number-modal-in-buy3').length == 0) {
			$(this).fadeOut();					
		}
	});
  });


  $(document).ready(function($) {
	$('.give-number-modal-open-buy4').click(function() {
		$('.give-number-modal-buy4').fadeIn();
		return false;
	});	
	
	$('.close-give-number-modal-buy4').click(function() {
		$(this).parents('.give-number-modal-buy4').fadeOut();
		return false;
	});		
  
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.give-number-modal-buy4').fadeOut();
		}
	});
	
	$('.give-number-modal-buy4').click(function(e) {
		if ($(e.target).closest('.give-number-modal-in-buy4').length == 0) {
			$(this).fadeOut();					
		}
	});
  });

  $(document).ready(function($) {
	$('.give-number-modal-open-buy5').click(function() {
		$('.give-number-modal-buy5').fadeIn();
		return false;
	});	
	
	$('.close-give-number-modal-buy5').click(function() {
		$(this).parents('.give-number-modal-buy5').fadeOut();
		return false;
	});		
  
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.give-number-modal-buy5').fadeOut();
		}
	});
	
	$('.give-number-modal-buy5').click(function(e) {
		if ($(e.target).closest('.give-number-modal-in-buy5').length == 0) {
			$(this).fadeOut();					
		}
	});
  });


  $(document).ready(function($) {
	$('.give-number-modal-open-buy6').click(function() {
		$('.give-number-modal-buy6').fadeIn();
		return false;
	});	
	
	$('.close-give-number-modal-buy6').click(function() {
		$(this).parents('.give-number-modal-buy6').fadeOut();
		return false;
	});		
  
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.give-number-modal-buy6').fadeOut();
		}
	});
	
	$('.give-number-modal-buy6').click(function(e) {
		if ($(e.target).closest('.give-number-modal-in-buy6').length == 0) {
			$(this).fadeOut();					
		}
	});
  });


  $(document).ready(function($) {
	$('.give-number-modal-open-buy7').click(function() {
		$('.give-number-modal-buy7').fadeIn();
		return false;
	});	
	
	$('.close-give-number-modal-buy7').click(function() {
		$(this).parents('.give-number-modal-buy7').fadeOut();
		return false;
	});		
  
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.give-number-modal-buy7').fadeOut();
		}
	});
	
	$('.give-number-modal-buy7').click(function(e) {
		if ($(e.target).closest('.give-number-modal-in-buy7').length == 0) {
			$(this).fadeOut();					
		}
	});
  });

  $(document).ready(function($) {
	$('.give-number-modal-open-buy8').click(function() {
		$('.give-number-modal-buy8').fadeIn();
		return false;
	});	
	
	$('.close-give-number-modal-buy8').click(function() {
		$(this).parents('.give-number-modal-buy8').fadeOut();
		return false;
	});		
  
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.give-number-modal-buy8').fadeOut();
		}
	});
	
	$('.give-number-modal-buy8').click(function(e) {
		if ($(e.target).closest('.give-number-modal-in-buy8').length == 0) {
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

 


  $(document).ready(function($) {
	$('.close-question-modal-buy').click(function() {
		$(this).parents('.question-modal-buy').fadeOut();
		return false;
	});		



	$(document).ready(function(){
		$('#setCookie').click(function () {
		$.cookie('popup', '24house', {expires: 0} );
		$('#question-modal-buy').hide();
		});
		 
		if ( $.cookie('popup') == null )
		{
		setTimeout(function(){
		$('#question-modal-buy').show();
		}, 5000)
		}
		else { $('#question-modal-buy').hide();
		}
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
	$('.conf-modal-open-buy').click(function() {
		$('.conf-modal-buy').fadeIn();
		return false;
	});	
	
	$('.close-conf-modal-buy').click(function() {
		$(this).parents('.conf-modal-buy').fadeOut();
		return false;
	});		
  
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.conf-modal-buy').fadeOut();
		}
	});
	
	$('.conf-modal-buy').click(function(e) {
		if ($(e.target).closest('.conf-modal-buy-in').length == 0) {
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

  $(function(){
	$(".inter-number-input").mask("+375(99)999-99-99");
  });


  $('.reviews-video-slider').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	arrows: true,
	responsive: [{
	 breakpoint: 1200,
	 settings: {
	  slidesToShow: 2
	 }
	},
	{
	 breakpoint: 768,
	 settings: {
	  slidesToShow: 1
	 }
	}]
   });

   $('.reviews-insta-slider').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	arrows: true,
	responsive: [{
	 breakpoint: 1200,
	 settings: {
	  slidesToShow: 3
	 }
	},
	{
	 breakpoint: 992,
	 settings: {
	  slidesToShow: 2
	 }
	},
	{
	 breakpoint: 576,
	 settings: {
	  slidesToShow: 1
	 }
	}]
   });

   


   $(".give-number-modal-in-buy form").submit(function (e) {
	e.preventDefault();
	$.post("../mailsender.php", $(this).serialize(), function (data) {
		if (data == 'error_tel') {
			$(".inter-number-input").append("<p class='error__number'>Неправильно введен номер</p>");
		} else {
			$(".give-number-modal-buy").fadeOut()
			$('.thanks-number-modal').fadeIn();
			ym(56526394, 'reachGoal', 'modal_success');
		}
	});
});

$(".give-number-modal-in-buy form").submit(function (e) {
	e.preventDefault();
	$.post("../mailsender.php", $(this).serialize(), function (data) {
		if (data == 'error_tel') {
			$(".inter-number-input").append("<p class='error__number'>Неправильно введен номер</p>");
		} else {
			$(".give-number-modal-buy").fadeOut()
			$('.thanks-number-modal').fadeIn();
			ym(56526394, 'reachGoal', 'modal_success');
		}
	});
});
$(".give-number-modal-in-buy1 form").submit(function (e) {
	e.preventDefault();
	$.post("../mailsender.php", $(this).serialize(), function (data) {
		if (data == 'error_tel') {
			$(".inter-number-input").append("<div class='error__number'>Неправильно введен номер</div>");
		} else {
			$(".give-number-modal-buy1").fadeOut()
			$('.thanks-number-modal').fadeIn();
			ym(56526394, 'reachGoal', 'modal_success');
		}
	});
});
$(".give-number-modal-in-buy2 form").submit(function (e) {
	e.preventDefault();
	$.post("../mailsender.php", $(this).serialize(), function (data) {
		if (data == 'error_tel') {
			$(".inter-number-input").append("<p class='error__number'>Неправильно введен номер</p>");
		} else {
			$(".give-number-modal-buy2").fadeOut()
			$('.thanks-number-modal').fadeIn();
			ym(56526394, 'reachGoal', 'modal_success');
		}
	});
});
$(".give-number-modal-in-buy3 form").submit(function (e) {
	e.preventDefault();
	$.post("../mailsender.php", $(this).serialize(), function (data) {
		if (data == 'error_tel') {
			$(".inter-number-input").append("<div class='error__number'>Неправильно введен номер</div>");
		} else {
			$(".give-number-modal-buy3").fadeOut()
			$('.thanks-number-modal').fadeIn();
			ym(56526394, 'reachGoal', 'modal_success');
		}
	});
});
$(".give-number-modal-in-buy4 form").submit(function (e) {
	e.preventDefault();
	$.post("../mailsender.php", $(this).serialize(), function (data) {
		if (data == 'error_tel') {
			$(".inter-number-input").append("<p class='error__number'>Неправильно введен номер</p>");
		} else {
			$(".give-number-modal-buy4").fadeOut()
			$('.thanks-number-modal').fadeIn();
			ym(56526394, 'reachGoal', 'modal_success');
		}
	});
});
$(".give-number-modal-in-buy5 form").submit(function (e) {
	e.preventDefault();
	$.post("../mailsender.php", $(this).serialize(), function (data) {
		if (data == 'error_tel') {
			$(".inter-number-input").append("<p class='error__number'>Неправильно введен номер</p>");
		} else {
			$(".give-number-modal-buy5").fadeOut()
			$('.thanks-number-modal').fadeIn();
			ym(56526394, 'reachGoal', 'modal_success');
		}
	});
});
$(".give-number-modal-in-buy6 form").submit(function (e) {
	e.preventDefault();
	$.post("../mailsender.php", $(this).serialize(), function (data) {
		if (data == 'error_tel') {
			$(".inter-number-input").append("<p class='error__number'>Неправильно введен номер</p>");
		} else {
			$(".give-number-modal-buy6").fadeOut()
			$('.thanks-number-modal').fadeIn();
			ym(56526394, 'reachGoal', 'modal_success');
		}
	});
});
$(".give-number-modal-in-buy7 form").submit(function (e) {
	e.preventDefault();
	$.post("../mailsender.php", $(this).serialize(), function (data) {
		if (data == 'error_tel') {
			$(".inter-number-input").append("<p class='error__number'>Неправильно введен номер</p>");
		} else {
			$(".give-number-modal-buy7").fadeOut()
			$('.thanks-number-modal').fadeIn();
			ym(56526394, 'reachGoal', 'modal_success');
		}
	});
});
$(".give-number-modal-in-buy8 form").submit(function (e) {
	e.preventDefault();
	$.post("../mailsender.php", $(this).serialize(), function (data) {
		if (data == 'error_tel') {
			$(".inter-number-input").append("<div class='error__number'>Неправильно введен номер</div>");
		} else {
			$(".give-number-modal-buy8").fadeOut()
			$('.thanks-number-modal').fadeIn();
			ym(56526394, 'reachGoal', 'modal_success');
		}
	});
});

$(".question-modal-in-buy form").submit(function (e) {
	e.preventDefault();
	$.post("../mailsender.php", $(this).serialize(), function (data) {
		if (data == 'error_tel') {
			$(".inter-number-input").append("<p class='error__number'>Неправильно введен номер</p>");
		} else {
			$(".question-modal-buy").fadeOut()
			$('.thanks-number-modal').fadeIn();
			ym(56526394, 'reachGoal', 'modal_success');
		}
	});
});

$(".give-number-modal-in form").submit(function (e) {
	e.preventDefault();
	$.post("../mailsender.php", $(this).serialize(), function (data) {
		if (data == 'error_tel') {
			$(".inter-number-input").append("<p class='error__number'>Неправильно введен номер</p>");
		} else {
			$(".give-number-modal").fadeOut()
			$('.thanks-number-modal').fadeIn();
			ym(56526394, 'reachGoal', 'modal_success');
		}
	});
});

$(".review-modal-in-buy form").submit(function (e) {
	e.preventDefault();
	$.post("../mailsender.php", $(this).serialize(), function (data) {
		if (data == 'error_tel') {
			$(".inter-number-input").append("<p class='error__number'>Неправильно введен номер</p>");
		} else {
			$(".give-number-modal").fadeOut()
			$('.thanks-number-modal').fadeIn();
			ym(56526394, 'reachGoal', 'modal_success');
		}
	});
});

$('.brief-information-in-mob-slider').slick({
	dots: true,
	arrows: false,
	infinite: false,
	speed: 300,
	slidesToShow: 4,
	slidesToScroll: 1,
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
	]
  });




  $(".reviews-btn").on("click", function () {
	$(".overlay-review").addClass("overlay-active");
   });
   $(".popup-close").on("click", function () {
	$(".overlay").removeClass("overlay-active");
   });
   $("form.popup-review-form").submit(function (r) {
	return r.preventDefault(),
	 $.ajax({
	  type: "POST",
	  url: "../mail1.php",
	  data: $(this).serialize()
	 }).done(function () {
	  $(this).find("input").val(""),
	   $(".overlay-review").removeClass("overlay-active"),
	   $(".overlay-thx").addClass("overlay-active"),
	   $("form").trigger("reset");
			ym(56526394, 'reachGoal', 'modal_success');
	 })
   });
   $(".catalog-product").on("click", function(){
	$(this).next(".overlay-product").addClass("overlay-active");
   });


   $(document).ready(function($) {
	$('.open-serf').click(function() {
		$('.open-serf-modal').css({'visibility':'visible', 'opacity':'1', 'transition':'0.5s'});
		
		
	});	
	
	$('.close-open-serf-modal').click(function() {
		$(this).parents('.open-serf-modal').css({'visibility':'hidden', 'opacity':'0', 'transition':'0.5s'});
	});		
});

$('.open-serf-slider').slick({
	dots: true,
	infinite: false,
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 1,
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
	
	]
	});



	// var rellax = new Rellax('.rellax');

// var window_width = $(window).width();

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

//   $('.questions-arrow').click(function(){
    // 	$(this).find('~ .questions-text').toggle('fast');
    // 	if (toggle = true) {
    // 		$(this).css({"transform":"rotate(90deg)"})
    // 	} else {
    // 		$(this).css({"transform":"rotate(-90deg)"})
    // 	}
    //   });

    //   $(function() {
        // 	  var delay_popup = 30000;
        // 	  setTimeout("document.getElementById('question-modal-buy').style.display='block'", delay_popup);
        // 	});

   function handleFileSelect(evt) {
	var files = evt.target.files; 
   
	
	for (var i = 0, f; f = files[i]; i++) {
   
	 // Only process image files.
	 if (!f.type.match('image.*')) {
	  continue;
	 }
   
	 var reader = new FileReader();
   
	 // Closure to capture the file information.
	 reader.onload = (function (theFile) {
	  return function (e) {
	   // Render thumbnail.
	   var span = document.createElement('span');
	   span.innerHTML = ['<img class="thumb" src="', e.target.result,
		'" title="', escape(theFile.name), '"/>'
	   ].join('');
	   document.getElementById('list').insertBefore(span, null);
	  };
	 })(f);
   
	 // Read in the image file as a data URL.
	 reader.readAsDataURL(f);
	}
   }
   
   document.getElementById('files').addEventListener('change', handleFileSelect, false);