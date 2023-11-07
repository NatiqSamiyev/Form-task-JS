let form=document.querySelector('form')
let selectOption=document.querySelector('.select-container')
let btn=document.querySelector('button')
let optionBox=document.querySelector('.option-box')
let svg=document.querySelector('svg')

// form.addEventListener('submit',submitForm)

btn.addEventListener('click',check)
function check() {
   optionBox.classList.toggle('active')
   svg.classList.toggle('svg')
   svg.classList.toggle('rotate')
  
  console.log('sen');
    
} 
