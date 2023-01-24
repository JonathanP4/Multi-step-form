/*Elements*/

const containerMain = document.querySelector('.container--main')
const nextStepBtn = document.querySelector('.btn--next')
const prevStepBtn = document.querySelector('.btn--previous')

const dataInput = document.querySelectorAll('.data-input')
const nameInputField = document.getElementById('name')
const emailInputField = document.getElementById('email')
const phoneInputField = document.getElementById('phone')

const plan = document.querySelectorAll('.plan')
const planPrice = document.querySelectorAll('.plan--price')
const planTime = document.getElementById('time__Select')
const planPromo = document.querySelectorAll('.plan-promo')

const addon = document.querySelectorAll('.addon')
const selectTime = document.getElementById('time__Select')
const addonTime = document.getElementById('plan_Time')
const addonPrice = document.querySelectorAll('.addon-price')

const warningText = document.querySelectorAll('.label--warning')
const check = document.querySelectorAll('.bi-check-square-fill')

const finishForm = document.querySelector('.finish-up--form')
const finishUpTitle = document.querySelector('.finish-up--title')
const finishUpPrice = document.querySelector('.finish-up-price--title')

const change = document.querySelector('.change')
const footer = document.querySelector('.footer')
const totalText = document.querySelector('.total--text')
const totalPrice = document.querySelector('.total--price')


let x = 0
selectTime.value = 0

const planPrices = [9, 12, 15];
const addonPrices = [1, 2, 2];

const yearlyPlanPrices = planPrices.map(el => el * 10)
const yearlyAddonPrices = addonPrices.map(el => el * 10)

const selectedItems = {
   plan: 'Arcade',
   time: 'Monthly',
   timeLabel: 'mo',
   planPrices: planPrices,
   addonPrices: addonPrices,
}

const changeVisible = val => {
   $(`.menu-${val}`).addClass('menu--visible')
   $(`.menu-${val}`).siblings().removeClass('menu--visible')

   $('.step').each(function () {
      $(this).removeClass('step--active')
   })

   $(`.step__${val}`).addClass('step--active')
}

const addWarning = arr => {
   arr.forEach((el, i) => {
      if (el === false) {
         dataInput[i].classList.add('warning-state')
         warningText[i].textContent =
            `${dataInput[i].value === '' ? 'This field is required' : 'Invalid format'}`
      } else {
         dataInput[i].classList.remove('warning-state')
         warningText[i].textContent = ''
      }
   })
   return document.querySelectorAll('.warning-state').length
}

const checkData = () => {
   const nameRegex = new RegExp(/[a-z]+\s[a-z]+/gi)
   const emailRegex = new RegExp(/\w+@\w{2,}.com/gi)
   const phoneRegex = new RegExp(/\+\d{1,3}\s\d{3}\s\d{3}\s\d{3}/)

   const results = [
      nameRegex.test(nameInputField.value),
      emailRegex.test(emailInputField.value),
      phoneRegex.test(phoneInputField.value),
   ]
   if (addWarning(results) === 0) {
      x <= 3 ? x++ : void 0
      changeVisible(x)
   }
}

const checkPlan = (el) => {
   const mapObj = { 0: 'Arcade', 1: 'Advanced', 2: 'Pro' }
   const nodeArr = Array.from(plan)
   const i = nodeArr.indexOf(el)

   selectedItems.plan = mapObj[nodeArr.indexOf(el)]
   addonPrice.textContent = `${selectedItems.planPrices[i]}`

   finishUpTitle.textContent = `${selectedItems.plan}(${selectedItems.time})`
   finishUpPrice.textContent = `$${selectedItems.planPrices[i]}/${selectedItems.timeLabel}`
}

const toggleActiveText = n => {
   if (n === 1) {
      yearly.classList.remove('time-text--inactive')
      monthly.classList.add('time-text--inactive')
   } else {
      yearly.classList.add('time-text--inactive')
      monthly.classList.remove('time-text--inactive')
   }
}

const updateText = () => {
   const timeLabel = selectedItems.timeLabel;
   planPrice.forEach((el, i) => {
      el.textContent =
         `$${selectedItems.planPrices[i]}/${timeLabel}`;

      addonPrice[i].textContent =
         `$${selectedItems.addonPrices[i]}/${timeLabel}`;
   })
}

const updateElements = n => {
   if (n === 1) {
      selectedItems.planPrices = yearlyPlanPrices
      selectedItems.addonPrices = yearlyAddonPrices

      selectedItems.time = 'Yearly'
      selectedItems.timeLabel = 'yr'
   } else {
      selectedItems.planPrices = planPrices
      selectedItems.addonPrices = addonPrices

      selectedItems.time = 'Monthly'
      selectedItems.timeLabel = 'mo'
   }
   updateText()
}

const addElement = (i, el) => {
   const time = +selectTime.value
   const title = document.querySelectorAll('.addon--title')
   const price = document.querySelectorAll('.addon-price')

   if (el.classList.contains('addon--selected')) {
      finishForm.insertAdjacentHTML('beforeend',
         `<div class="finish-up--plan addon--plan">
      <div>
        <p href="#" class="addon-intro finish--intro">${title[i].textContent}</p>
      </div>
      <p class="finish-up-price">
         ${price[i].textContent}
      </p>
    </div>`)
   } else {
      const currentAddon = document.querySelectorAll('.addon--plan')
      currentAddon[i].remove()
   }
}

const changeFinishPrices = n => {
   const price = document.querySelectorAll('.addon--plan .finish-up-price')

   price.forEach(el => {
      const thisPrice = el.textContent.match(/\d+/g)
      el.textContent = n === 1 ? `$${+thisPrice * 10}/yr` : `$${+thisPrice / 10}/mo`
   })
}

const toggleVisibility = x => {
   x === 0 ? prevStepBtn.classList.add("btn--inactive")
      : prevStepBtn.classList.remove("btn--inactive")
}

const changeBtn = (x) => {
   if (x === 3) {
      nextStepBtn.textContent = 'Confirm'
      nextStepBtn.style.backgroundColor = 'var(--Purplish-blue)'
   } else {
      nextStepBtn.textContent = 'Next Step'
      nextStepBtn.style.backgroundColor = 'var(--Marine-blue)'
   }
}

const totalUpdater = () => {
   const n = +selectTime.value
   const selectedAddonPrices = document.querySelectorAll('.finish-up-price')
   const totalArr = []

   const selectedPlanPrice = +finishUpPrice.textContent.match(/\d+/g)

   if (finishForm.innerHTML.match('addon--plan')) {
      selectedAddonPrices.forEach(el => {
         totalArr.push(+el.textContent.match(/\d+/g))
      })
   }

   const total = totalArr.reduce((acc, i) => acc + i, 0);
   totalPrice.textContent = `+$${total + selectedPlanPrice}/${selectedItems.timeLabel}`;

   totalText.textContent = `Total (per ${n === 0 ? 'month' : 'year'})`

}
const finished = () => {
   footer.remove()
   $('.step__3').addClass('step--active')

   const arr = []
   const addons = document.querySelectorAll('.addon--plan')
   addons.forEach((el, i) => {
      arr.push(el.textContent.replace(/\n|\r|\s+/g, ' '))
   })

   const obj = {
      name: nameInputField.value,
      phone: phoneInputField.value,
      email: emailInputField.value,
      plan: selectedItems.plan,
      time: selectedItems.time,
      addons: arr,
   }
   localStorage.setItem(1, JSON.stringify(obj))
}

nextStepBtn.addEventListener('click', () => {
   if (x === 0) {
      checkData()
   }
   else {
      x <= 4 ? x++ : void 0
      changeVisible(x)
   }
   if (x === 4) finished()
   changeBtn(x)
   toggleVisibility(x)
   totalUpdater()
})

prevStepBtn.addEventListener('click', () => {
   x >= 0 ? x-- : 0
   changeVisible(x)
   changeBtn(x)
   toggleVisibility(x)
})

selectTime.addEventListener('mouseup', () => {
   const val = +selectTime.value
   const plan = document.querySelector('.plan--selected')

   toggleActiveText(val)
   updateElements(val)
   checkPlan(plan)
   totalUpdater()

   if (finishForm.innerHTML.match('addon--plan')) {
      changeFinishPrices(val)
   }
})

change.addEventListener('click', () => {
   x = 1
   changeVisible(x)
   changeBtn(x)
})

$('.plan').click(function () {
   $(this).addClass('plan--selected')
   $(this).siblings().removeClass('plan--selected')

   const plan = document.querySelector('.plan--selected')
   checkPlan(plan)
   totalUpdater()
})

addon.forEach((el, i) => {
   el.addEventListener('click', () => {
      el.classList.toggle('addon--selected')
      check[i].classList.toggle('bi--visible')

      addElement(i, el)
      totalUpdater()
   })
})
