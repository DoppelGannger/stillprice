let cardArray = document.querySelectorAll('.work-container');
let btnArray = document.querySelectorAll('.btnProduct');

// console.log(cardArray, btnArray)

btnArray.forEach((e) => {
  e.addEventListener('click', (ev) => {
    console.log(ev.target.dataset.filter)


    if (ev.target.dataset.filter == 'all') {
      for (let i = 0; i < cardArray.length; i++) {
        cardArray[i].classList.remove('btnProductOff');
      }
    } else {
      for (let i = 0; i < cardArray.length; i++) {
        (cardArray[i].dataset.value != ev.target.dataset.filter) ? cardArray[i].classList.add('btnProductOff') : cardArray[i].classList.remove('btnProductOff')
      }
    }
  })
})