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
