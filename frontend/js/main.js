$('.glide').glide({
  type: 'slider',
  keyboard: false,
  autoplay: false,
  paddings: '0',
  dragDistance: false,
  beforeTransition: beforeCardChange,
});


$('.tip-amt').click(function(){
  $('.glide').glide.dragDistance = false;
});

function beforeCardChange(args) {
var current = $('.glide__slide.active');
  current.removeClass('active');

  var left = args.swipe.distance > 0;
  var direction = left ? args.index - 1 : args.index + 1;
  var newIndex = parseInt(current.attr('data-slide-number')) + (left ? -1 : 1);
  if (newIndex > args.length) {
    newIndex = 1;
  }
  else if (newIndex <= 0) {
    newIndex = args.length;
  }
  $('[data-slide-number="' + newIndex + '"]').addClass('active');

}



$('.glide__arrow').click(function(){
  $(this).removeClass('focused');
});

$(':radio').change(
  function(e){
    $('.next').addClass('focused');
    $('.choice-wrapper').hide().delay('100').fadeIn();
    $('.choice-wrapper').addClass('pop');
      e.preventDefault;

        $('.choice-wrapper').removeClass('pop');
      $('.choice-wrapper').addClass('pop');


    if (this.value == '1') {
      $('.choice').text( "Only 1 star? Sorry to hear, please give us feedback!" );
    }
     if (this.value == '2') {
      $('.choice').text( "Hey, we tried but we know we can do better" );
    }
    if (this.value == '3') {
      $('.choice').text( "We're a work in Progress." );
    }
    if (this.value == '4') {
      $('.choice').text( "Yay, I guess you liked it!" );
    }
     if (this.value == '5') {
      $('.choice').text( "Wow, 5 stars!? Thanks!" );
    }
  }
 )

$('.tip').click(function(){
  $(this).hide();
  $('.tip-wrapper').fadeIn('slow');
  $('.tip-amt').focus();
});



  $('.btn').val("Pay" + " " + "$" + "22.00");


$('.tip-amt').keyup(function(){
var i = 22;
var j = $('.tip-amt').val();
var k = Number(i) + Number(j);
var total = k.toFixed(2)
  $('.btn').val("Pay" + " " + "$" + total);
  });

$('.btn').click(function(){
      if($('.btn').val()=="Pay" + " " + "$" + "22.00"){
      $('.confirm-wrapper').fadeIn();
        $('.confirm-modal').addClass('appear');
      }
  else {
        $('.card').toggleClass('flipped');
    $('.glide__arrow').hide();
    $('.reset').addClass('show');
  }
});


$('.reset').click(function(){
  var glide_api = $("#glide").data('glide_api');
  $('.choice-wrapper').hide();
  $('.card').toggleClass('flipped');
  $('.glide__arrow').fadeIn();
  $('.tip-amt').val('');
  $('.btn').val("Pay $22.00");
  $('input[name=rating]').attr('checked', false);
  $(this).removeClass('show');
  $('.tip-wrapper').hide();
  $('.tip').show();
  glide_api.refresh();


});

$('.confirm-wrapper, .cancel').click(function(){
  $('.confirm-wrapper').fadeOut('fast');
  $('.confirm-modal').removeClass('appear');
    $('.tip').hide();
  $('.tip-wrapper').fadeIn('slow');
  $('.tip-amt').focus();
  $('.tip-amt').focus();
});

$('.yes').click(function(){
  $('.card-wrapper').fadeOut();
    $('.card').toggleClass('flipped');
    $('.glide__arrow').hide();
    $('.reset').addClass('show');
});


