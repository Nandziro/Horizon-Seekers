//SIGN IN AND SIGN UP
let inBtn = document.querySelector('.header__nav-btnin')
let upBtn = document.querySelector('.header__nav-btnup')
let inMod = document.querySelector('.modal__in')
let inSpan = document.querySelector('.modal__in-close')
let signBtn = document.querySelector('.sign__buttons')
let headBurger = document.querySelector('.header__burger')
let burgerMod = document.querySelector('.modal__burger')
let BurgSpan = document.querySelector('.modal__burger-close')
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

// BURGER
headBurger.addEventListener('click', function() {
    burgerMod.classList.add("burger__mod");
    BurgSpan.style.display = "flex"
}) 
BurgSpan.addEventListener('click', function(){
    burgerMod.classList.remove("burger__mod");
    BurgSpan.style.display = "none"
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