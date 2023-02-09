


const form = document.querySelector('.form')
// * name duplicate form to card
const nameInput = document.querySelector('.name-input')
const nameOutput = document.querySelector('.output-name')

// * number duplicate form to card
const numberInput = document.querySelector('.number-input')
const numberOutput = document.querySelector('.output-number')


// * expiry month duplicate form to card
const mmInput = document.querySelector('.exp-mm')
const mmOutput = document.querySelector('.output-mm')

// * expiry year duplicate form to card
const yyInput = document.querySelector('.exp-yy')
const yyOutput = document.querySelector('.output-yy')

// * cvc duplicate form to card
const cvcInput = document.querySelector('.cvc')
const cvcOutput = document.querySelector('.cvc-output-number')

// * input errors
const numberError = document.querySelector('.card-error-message')
const mmError = document.querySelector('.error-message-mm')
const yyError = document.querySelector('.error-message-yy')
const cvcError = document.querySelector('.error-message-cvc')

// * toggle between completed states
const containerTwo = document.querySelector('.container-2')
const completedState = document.querySelector('.completed-state')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const regExp = /^\d+$/
// create a condition that allows the form to be submitted if there are no errors
    let error = false;

    if(regExp.test(numberInput.value)) {
        console.log('valid number')
    } else {
        //console.log('not numbers')
        numberInput.classList.toggle('active')
        numberError.innerHTML = 'Wrong format, numbers only.'
        error = true
    }
    
    if(mmInput.value === '') {
        mmInput.classList.toggle('active')
        mmError.innerHTML = 'Can\'t be blank'
        error = true
    }  
    if (yyInput.value === '') {
        yyInput.classList.toggle('active')
        yyError.innerHTML = 'Can\'t be blank'
        error = true
    }
    if (cvcInput.value === '') {
        cvcInput.classList.toggle('active')
        cvcError.innerHTML = 'Can\'t be blank'
        error = true
    }
    
    if(!error) {
    containerTwo.classList.toggle('hidden')
    completedState.classList.toggle('visible')
    }

})    

// duplicated values from form to card image
nameInput.addEventListener('input', function() {
    nameOutput.value = this.value
})

numberInput.addEventListener('input', function() {
    numberOutput.value = this.value
})

mmInput.addEventListener('input', function() {
    mmOutput.value = this.value
})

yyInput.addEventListener('input', function() {
    yyOutput.value = this.value
})

cvcInput.addEventListener('input', function() {
    cvcOutput.value = this.value   
})


