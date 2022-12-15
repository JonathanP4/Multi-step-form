'use strict';

const allNums = document.querySelectorAll('.step-number')
const allForms = document.querySelectorAll('.form')

const nextStepBtn = document.querySelectorAll('.next-step-btn')
const previousStepBtn = document.querySelectorAll('.back-btn')

const toggleStates = () => {
  allForms.forEach(form => {
    form.classList.add('inactive')
  })
  allNums.forEach(num => {
    num.classList.remove('active')
  })
}

for (let i = 0; i < allNums.length; i++) {
  allNums[i].addEventListener('click', () => {
    toggleStates()
    document.getElementById(`step_${i + 1}`).classList.remove('inactive')
    document.getElementById(`${i + 1}`).classList.add('active')
  })
}

for (let i = 0; i < nextStepBtn.length; i++) {
  nextStepBtn[i].addEventListener('click', () => {
    toggleStates()
    document.getElementById(`step_${i + 2}`).classList.remove('inactive')
    document.getElementById(`${i + 2}`).classList.add('active')
  })
}

for (let i = 1; i < previousStepBtn.length; i++) {
  previousStepBtn[i].addEventListener('click', () => {
    toggleStates()
    document.getElementById(`step_${i}`).classList.toggle('inactive')
    document.getElementById(`${i}`).classList.toggle('active')
  })
}
let planTime;
let selectedPlan = $('#selected-plan');

$('.plan').click(function () {
  $('.plan').removeClass("plan-active");
  $(this).addClass("plan-active");

  let planOfChoice = $('.plan-active h1').text();
  selectedPlan.text(`${planOfChoice}`)
});
const planPrices = $('.detail-price');
const addonPrices = $('.price')

$('#range_input').click(function () {
  if ($('#range_input').val() === '0') {
    planPrices[0].textContent = '$9/mo'
    planPrices[1].textContent = '$12/mo'
    planPrices[2].textContent = '$15/mo'

    addonPrices[0].textContent = '$1/mo'
    addonPrices[1].textContent = '$2/mo'
    addonPrices[2].textContent = '$2/mo'

    planTime = '(Monthly)'
    $('#time').text(planTime)
  } else {
    planPrices[0].textContent = '$90/yr'
    planPrices[1].textContent = '$120/yr'
    planPrices[2].textContent = '$150/yr'

    addonPrices[0].textContent = '$10/yr'
    addonPrices[1].textContent = '$20/yr'
    addonPrices[2].textContent = '$20/yr'

    planTime = '(Yearly)'
    $('#time').text(planTime)
  }
})

/*const services = document.querySelectorAll('.services')
services.forEach(el => {
  el.addEventListener('click', () => {
    el.classList.toggle('addon-active')
  })
})*/
$('.services').each(function () {
  $('.services').click(function () {
    $(this).toggleClass('addon-active')
  })
})






