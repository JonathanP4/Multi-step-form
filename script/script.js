'use strict';

$('.step-number').click(function () {
  $('.step-number').removeClass('active');
  $(this).addClass('active')
})
$('.step-number')[0].addEventListener('click', () => {
  $('.form').addClass('inactive')
  $('#step_1').removeClass('inactive')
})
$('.step-number')[1].addEventListener('click', () => {
  $('.form').addClass('inactive')
  $('#step_2').removeClass('inactive')
})
$('.step-number')[2].addEventListener('click', () => {
  $('.form').addClass('inactive')
  $('#step_3').removeClass('inactive')
})
$('.step-number')[3].addEventListener('click', () => {
  $('.form').addClass('inactive')
  $('#step_4').removeClass('inactive')
})


