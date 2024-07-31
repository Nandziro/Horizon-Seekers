


document.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    let windowHeight = window.innerHeight;
    let documentHeight = document.body.offsetHeight;

    let maxScroll = documentHeight - windowHeight;
    let scrollPercentage = scrollPosition / maxScroll;

    let bisqueColor = [202, 229, 204]; 
    let oliveColor = [166, 226, 175]; 

    let r = Math.floor(bisqueColor[0] + scrollPercentage * ( oliveColor[0] - bisqueColor[0]));
    let g = Math.floor(bisqueColor[1] + scrollPercentage * ( oliveColor[1] - bisqueColor[1]));
    let b = Math.floor(bisqueColor[2] + scrollPercentage * ( oliveColor[2] - bisqueColor[2]));

    document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
});  


let siteLogo = document.querySelector('.header__logo-box')
siteLogo.addEventListener('click', function() {
    window.location.href = "./index.html";
}) 
//SIGN IN AND SIGN UP
let inBtn = document.querySelector('.header__nav-btnin')
let upBtn = document.querySelector('.header__nav-btnup')
let inMod = document.querySelector('.modal__in')
let inSpan = document.querySelector('.modal__in-close')
let upMod = document.querySelector('.modal__up')
let upSpan = document.querySelector('.modal__up-close')
let signBtn = document.querySelector('.sign__buttons')
let modalPass = document.querySelector('.modal_in-pass'); 
let modalNick = document.querySelector('.modal_in-nick')
let modalCheck = document.querySelector('.modal__in-check')
let modalButton = document.querySelector('.modal__in-btn')

let nickValue = modalNick.value;
let passValue = modalPass.value;
let checkValue = modalCheck.value;
inBtn.addEventListener('click', function() {
    inMod.classList.add("active");
    document.body.style.cssText = `
    overflow: hidden
    `
}) 
inSpan.addEventListener('click', function(){
    inMod.classList.remove("active");
    document.body.style.cssText = '';
})


upBtn.addEventListener('click', function() {
    upMod.classList.add("active");
    document.body.style.cssText = `
    overflow: hidden
    `
}) 
upSpan.addEventListener('click', function(){
    upMod.classList.remove("active");
    document.body.style.cssText = '';
})


modalButton.addEventListener('click', function(){
    if(passValue.length < 7){
        let passModal = document.createElement('div')
        passModal.classList.add('pass__in-modal')
        passModal.textContent = 'В паролі має міститися більше 7 символів'
        setTimeout(function(){
            passModal.classList.remove('pass__in-modal')
        },3000)
        return;
    }
    else if(nickValue.length === 0){
        let nickModal = document.createElement('div')
        nickModal.classList.add('nick__in-modal')
        nickModal.textContent = 'Нік має містити якісь літери'
        setTimeout(function(){
            nickModal.classList.add('nick__in-modal')
        },3000)
        return;
    }
    else if(!checkValue.checked){
        let checkModal = document.createElement('div')
        checkModal.classList.add('check__in-modal')      
        checkModal.textContent = 'Натисніть будь ласка на галочку'
        setTimeout(function(){
            checkModal.classList.add('check__in-modal')        
        },3000)
        return;
    }
    else{
        window.location.href = "./tours.html";
    }
})

// BURGER
let headBurg = document.querySelector(".header__burger");
let burgMod = document.querySelector(".modal__burger");
let burgClose = document.querySelector(".header__burger-close");
headBurg.addEventListener('click', function(){
    if (burgMod.style.display === "block") {
        burgMod.style.display = "none";
    } 
    else {
        burgMod.style.display = "block";
    }
})
burgClose.addEventListener('click', function(){
    burgMod.style.display = "none";
})



let modalBlock = document.querySelector('.modalka')
let buttonForm = document.querySelector('.sponsors__button')

buttonForm.addEventListener('click', function(){
    if(modalBlock.className === 'modalka'){
        modalBlock.classList.add('active')
    }
    else{
        modalBlock.classList.remove('active')
    }
})

let modalBnlock = document.querySelector('.modalksa')
let buttonFnorm = document.querySelector('.sponsors__buttonfp')

buttonFnorm.addEventListener('click', function(){
    if(modalBnlock.className === 'modalksa'){
        modalBnlock.classList.add('active')
    }
    else{
        modalBnlock.classList.remove('active')
    }
})

let modalBnlockl = document.querySelector('.modalksaa')
let buttonFnorml = document.querySelector('.sponsors__buttonfe')

buttonFnorml.addEventListener('click', function(){
    if(modalBnlockl.className === 'modalksaa'){
        modalBnlockl.classList.add('active')
    }
    else{
        modalBnlockl.classList.remove('active')
    }
})

let modalBnlockls = document.querySelector('.modalksaaa')
let buttonFnormls = document.querySelector('.sponsors__buttonhf')

buttonFnormls.addEventListener('click', function(){
    if(modalBnlockls.className === 'modalksaaa'){
        modalBnlockls.classList.add('active')
    }
    else{
        modalBnlockls.classList.remove('active')
    }
})

