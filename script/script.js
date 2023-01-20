/*Elements*/
const nextStepBtn = document.querySelector('.btn--next')
const prevStepBtn = document.querySelector('.btn--previous')

const nameInputField = document.getElementById('name')
const emailInputField = document.getElementById('email')
const phoneInputField = document.getElementById('phone')

const plan = document.querySelectorAll('.plan')
const planPrice = document.querySelectorAll('.plan--price')
const planTime = document.getElementById('time__Select')
const planPromo = document.querySelectorAll('.plan-promo')

const selectTime = document.getElementById('time__Select')
const addonTitle = document.querySelector('.addon--title')
const addonTime = document.getElementById('plan_Time')
const addonPrice = document.querySelectorAll('.addon-price')


let x = 0
selectTime.value = 0

prevStepBtn.style.display = "none"

function stepToggle(val) {
   val === true ? x++ : x--;
   {
      document.querySelector(`.menu-${val == true ? x - 1 : x + 1}`)
         .classList
         .remove('menu--visible');
      document.querySelector(`.menu-${x}`)
         .classList
         .add('menu--visible');
   }

   {
      document.querySelector(`.step__${val == true ? x - 1 : x + 1}`)
         .classList
         .remove('step--active');
      document.querySelector(`.step__${x}`)
         .classList
         .add('step--active');
   }
   prevStepBtn.style.display = `${x !== 0 ? "block" : "none"}`
}

function checkData(input, regex) {
   input.forEach((name, i) => {
      const element = document.getElementById(`${name}`)
      if (!regex[i].test(element.value)) {
         element
            .classList
            .add('warning-state');

         document.getElementById(`${name}_Warning`)
            .textContent = `${element.value === '' ?
               'This field is required' : `Invalid ${name}`}`;
      } else {
         document.getElementById(`${name}`)
            .classList
            .remove('warning-state');
         document.getElementById(`${name}_Warning`)
            .textContent = '';
      }
   })
   document.querySelectorAll('.warning-state').length === 3 && stepToggle(true)
}

nextStepBtn.addEventListener('click', () => {
   if (x === 0) {
      checkData(['name', 'email', 'phone'],
         [
            /[a-z]+\s[a-z]+/gi,
            /\w+@\w{2,}.com/gi,
            /\+\d{1,3}\s\d{3}\s\d{3}\s\d{3}/
         ])
   } else {
      stepToggle(true)
   }
})

prevStepBtn.addEventListener('click', () => {
   stepToggle(false)
})

function changePrices(val) {
   const planPrices = [9, 12, 15]
   const addonPrices = [1, 2, 2]
   if (val === 1) {
      planPrice.forEach((el, i) => {
         el.textContent = `$${planPrices[i] * 10}/yr`
         addonPrice[i].textContent = `$${addonPrices[i] * 10}/yr`
         planPromo[i].textContent = '2 months free'
      })
   } else {
      planPrice.forEach((el, i) => {
         el.textContent = `$${planPrices[i]}/mo`
         addonPrice[i].textContent = `$${addonPrices[i]}/mo`
         planPromo[i].textContent = ''
      })
   }
}

selectTime.addEventListener('click', () => {
   const time = +selectTime.value
   changePrices(time)
   planText()
})

function planText() {
   const selectedPlan = document.querySelector('.plan--selected h1')
   addonTitle.textContent =
      `${selectedPlan?.textContent} ${+selectTime.value === 1 ? '(Yearly)' : '(Monthly)'}`;
}

$('.plan').click(function () {
   $(this).addClass('plan--selected')
   $(this).siblings().removeClass('plan--selected')

   planText()
})




