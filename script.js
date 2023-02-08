
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




function names() {
    
    nameInput.addEventListener('input', function() {
        nameOutput.value = this.value
        
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    names()

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