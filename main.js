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
//SLIDER
let slider = document.querySelector('.slider')
let sliderSlide = document.querySelectorAll('.slider__slide')
let markers = document.querySelectorAll('.slider__menu-nav-item')
let currentIndex = 0
function showTheSlide(index){
    slider.style.transform = `translateX(-${index * 100}%)`
}
// function colorChange(index){
//     document.body.style.backgroundColor = colors[index]
// }
function whatTheSlide(slide){
    currentIndex = slide
    showTheSlide(currentIndex)
    colorChange(currentIndex)
}
function goPrevSlide(){
    currentIndex = (currentIndex - 1 + sliderSlide.length) % sliderSlide.length
    showTheSlide(currentIndex)
}
function goNextSlide(){
    currentIndex = (currentIndex + 1) % sliderSlide.length
    showTheSlide(currentIndex)
}
for(let i = 0; i < markers.length; i++){
    markers[i].addEventListener('click', function(){
        whatTheSlide(i)
    })
}
//ACCORDION
let accordions = [
    {
        title: 'Як обрати тур?',
        info: 'Подумайте про свої інтереси та переваги: ​​пляжний відпочинок, екскурсії, активний туризм. Ми пропонуємо різноманітні тури на будь-який смак',
    },
    {
        title: 'Як я можу забронювати тур?',
        info: ' Ви можете забронювати тур через наш сайт, зателефонувавши нам або написавши на електронну пошту',
    },
    {
        title: 'Що входить у вартість туру?',
        info: 'Вартість туру зазвичай включає переліт, проживання, трансфери та екскурсійну програму. Деталі залежить від конкретного туру.',
    },
    {
        title: 'Які документи потрібні для подорожі?',
        info: 'Для міжнародних поїздок потрібен закордонний паспорт. У деяких країнах також потрібна віза. Детальну інформацію можна знайти в описі кожного туру.',
    },
    {
        title: 'Які туристичні послуги ми надаємо?',
        info: 'Організація турів, візи та страхування, готелі, переліти і т.д.',
    }
]

let accordion = document.querySelector('.accordion')

accordions.forEach(item => {
    let box = document.createElement('div')
    let title = document.createElement('div')
    let content = document.createElement('div')

    box.classList.add('accordion__box')
    title.classList.add('accordion__box-title')
    content.classList.add('accordion__box-info')

    title.textContent = item.title
    content.textContent = item.info
    content.style.display = 'none'

    box.appendChild(title)
    box.appendChild(content)
    accordion.appendChild(box)

    title.addEventListener('click', function() {
        if (content.style.display === 'block') {
            content.style.display = 'none'
        } else {
            content.style.display = 'block'
        }
    })
})