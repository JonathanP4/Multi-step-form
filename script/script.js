$('.step-number').click(function () {
  $('.step-number').removeClass('active');
  $(this).addClass('active')
});

$('.step-number')[1].addEventListener('click', () => {
  $('#step_1').addClass('inactive')
  $('#step_2').removeClass('inactive')
})
