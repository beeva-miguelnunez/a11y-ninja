$(function() {

  $('.icon-like').click(function(){
    $(this).toggleClass('selected').siblings().removeClass('selected');
    $('#feedback-msg').text('Gracias por tu valoración.');
  });

  $('.icon-dislike').click(function(){
    $(this).toggleClass('selected').siblings().removeClass('selected');
    $('#feedback-msg').text('');
    if($(this).hasClass('selected')){
      // Muestra la modal
      $('.feedback-form').show();
	  setTimeout(function() {
		$('.feedback-form').focus();
	}, 50);

	  $('main').attr('aria-hidden', 'true');
    }
  });

  $('.submit').click(function(){
    // Oculta la modal
    $('.feedback-form').hide();
	$('main').attr('aria-hidden', 'false');
	$('.icon-dislike').focus();
    $('#feedback-msg').text('Lamentamos que no te haya gustado.');
  })






});
