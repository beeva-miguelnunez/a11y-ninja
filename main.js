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
    }
  });
  
  $('.submit').click(function(){
    // Oculta la modal
    $('.feedback-form').hide();
    $('#feedback-msg').text('Lamentamos que no te haya gustado.');
  })
  
  
  
  
  
  
});