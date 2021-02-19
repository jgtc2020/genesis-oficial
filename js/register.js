
$('.title-options-register-bar').click(function(){
  $('.active-register-bar').removeClass("active-register-bar");
  $(this).addClass("active-register-bar");
});

$('.btn-register').click(function(){
  window.open('validate.html','_top');
});
