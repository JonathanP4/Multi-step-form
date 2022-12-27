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

  $('.price-summary-title').text($('.plan-active p').text());

  let planOfChoice = $('.plan-active h1').text();
  selectedPlan.text(`${planOfChoice}`)
});
const planPrices = $('.detail-price');
const summaryPrices = $('.price-marine');
const addonPrices = $('.price');
const summaryPrice = $('.price-summary-title');

$('#range_input').click(function () {
  if ($('#range_input').val() === '0') {
    planPrices[0].textContent = '$9/mo'
    planPrices[1].textContent = '$12/mo'
    planPrices[2].textContent = '$15/mo'

    addonPrices[0].textContent = '$1/mo'
    addonPrices[1].textContent = '$2/mo'
    addonPrices[2].textContent = '$2/mo'

    summaryPrices[0].textContent = '$1/mo'
    summaryPrices[1].textContent = '$2/mo'
    summaryPrices[2].textContent = '$2/mo'

    planTime = '(Monthly)'
    $('#time').text(planTime)
  } else {
    planPrices[0].textContent = '$90/yr'
    planPrices[1].textContent = '$120/yr'
    planPrices[2].textContent = '$150/yr'

    addonPrices[0].textContent = '$10/yr'
    addonPrices[1].textContent = '$20/yr'
    addonPrices[2].textContent = '$20/yr'

    summaryPrices[0].textContent = '$10/mo'
    summaryPrices[1].textContent = '$20/mo'
    summaryPrices[2].textContent = '$2/mo'

    planTime = '(Yearly)'
    $('#time').text(planTime)
  }
})

const services = document.querySelectorAll('.services')
for (let el = 0; el < services.length; el++) {
  services[el].addEventListener('click', () => {
    services[el].classList.toggle('addon-active')
    if (services[el].classList.contains('addon-active')) {
      document.getElementById(`addon${el}`).classList.remove('d-none')
    } else {
      document.getElementById(`addon${el}`).classList.add('d-none')
    }
  })
}









