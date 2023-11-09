let form=document.querySelector('form')
let selectContainer=document.querySelector('.select-container')
let btn=document.querySelector('button')
let optionBox=document.querySelector('.option-box')
let svg=document.querySelector('svg')
let p=document.querySelectorAll('p')
let selectOption=document.querySelector('.select-option')


btn.addEventListener('click',check)
function check() {
   optionBox.classList.toggle('active')

   svg.classList.toggle('rotate')
  
  // console.log('sen');




    
} 



// p.forEach((element) => {
// element.addEventListener('click', handleOption)
// } )

for (let index = 0; index < p.length; index++) {
  p[index].addEventListener('click', () => handleOption(p[index]))
 
  
}

// option acion

function handleOption(event) {
 
 btn.innerText = event.innerText;
 
 check();
 
console.log('da');
}

 






