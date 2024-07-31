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
    
    let nickValue = modalNick.value;
    let passValue = modalPass.value;
    let checkValue = modalCheck.value;
    if(nickValue.length === 0){
        alert('Нік має містити якісь літери')
        setTimeout(function(){
            nickModal.classList.add('nick__in-modal')
        },3000)
        return;
    }
    else if(passValue.length < 7){
        alert('В паролі має міститися більше 7 символів')
        setTimeout(function(){
            passModal.classList.remove('pass__in-modal')
        },3000)
        return;
    }
    else if(checkValue.checked){
        alert('Натисніть будь ласка на галочку')
        setTimeout(function(){     
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



//TOURS
const tours = [
        {
        city: "Париж",
        duration: "Тривалість: 7 днів",
        type: "Тип: Романтичний",
        accommodation: "Готель: Готель 4*",
        food: "Їжа: Сніданок",
        transport: "Транспорт: літак",
        additionalServices: "Додаткові послуги: Екскурсії, круїз по Сені",
        price: "Ціна: 1200$",
        description: "Романтичний тур у Париж з екскурсіями по головним визначним місцям та круїзом по річці Сена.",
    },
        {
        city: "Барселона",
        duration: "Тривалість: 10 днів",
        type: "Тип: Пляжний",
        accommodation: "Готель: Готель 5*",
        food: "Їжа: Все включено",
        transport: "Транспорт: літак",
        additionalServices: "Додаткові послуги: Трансфер до пляжу, вечірні шоу",
        price: "Ціна: 1500$",
        description: "Відпочинок на пляжах Барселони з проживанням у готелі 5* та вечірніми шоу."
        },
        {
        city: "Рим",
        duration: "Тривалість: 8 днів",
        type: "Тип: Культурний",
        accommodation: "Готель: Готель 3*",
        food: "Їжа: Сніданок",
        transport: "Транспорт: літак",
        additionalServices: "Додаткові послуги: Екскурсії по місту, відвідування музеїв",
        price: "Ціна: 1000$",
        description: "Культурний тур у Рим з екскурсіями по історичним місцям та відвідуванням музеїв."
        },
        {
        city: "Нью-Йорк",
        duration: "Тривалість: 10 днів",
        type: "Тип: Дослідницький",
        accommodation: "Готель: Готель 4*",
        food: "Їжа: Сніданок",
        transport: "Транспорт: літак",
        additionalServices: "Додаткові послуги: Тур по Манхеттену, відвідування Бродвею",
        price: "Ціна: 2000$",
        description: "Дослідницький тур у Нью-Йорк з оглядом Манхеттену та відвідуванням Бродвейських шоу."
        },
        {
        city: "Токіо",
        duration: "Тривалість: 12 днів",
        type: "Тип: Історичний",
        accommodation: "Готель: Готель 4*",
        food: "Їжа: Сніданок і вечеря",
        transport: "Транспорт: літак",
        additionalServices: "Додаткові послуги: Екскурсії по старовинних храмах, відвідування імператорського палацу",
        price: "Ціна: 1800$",
        description: "Історичний тур у Токіо з відвідуванням старовинних храмів та імператорського палацу."
        },
        {
        city: "Кейптаун",
        duration: "Тривалість: 15 днів",
        type: "Тип: Екстремальний",
        accommodation: "Готель: Готель 5*",
        food: "Їжа: Все включено",
        transport: "Транспорт: літак",
        additionalServices: "Додаткові послуги: Сафарі, дайвінг з акулами",
        price: "Ціна: 2500$",
        description: "Екстремальний тур у Кейптаун з сафарі та дайвінгом з акулами."
        },
        {
        city: "Сідней",
        duration: "Тривалість: 14 днів",
        type: "Тип: Пляжний",
        accommodation: "Готель: Готель 4*",
        food: "Їжа: Все включено",
        transport: "Транспорт: літак",
        additionalServices: "Додаткові послуги: Серфінг, екскурсії по місту",
        price: "Ціна: 2200$",
        description: "Відпочинок на пляжах Сіднея з можливістю зайнятися серфінгом та екскурсіями по місту."
        },
        {
        city: "Амстердам",
        duration: "Тривалість: 7 днів",
        type: "Тип: Культурний",
        accommodation: "Готель: Готель 3*",
        food: "Їжа: Сніданок",
        transport: "Транспорт: літак",
        additionalServices: "Додаткові послуги: Екскурсії по каналах, відвідування музеїв",
        price: "Ціна: 1300$",
        description: "Культурний тур в Амстердам з екскурсіями по каналах та відвідуванням музеїв."
        },
        {
        city: "Дубай",
        duration: "Тривалість: 10 днів",
        type: "Тип: Пляжний",
        accommodation: "Готель: Готель 5*",
        food: "Їжа: Все включено",
        transport: "Транспорт: літак",
        additionalServices: "Додаткові послуги: Шопінг тури, сафарі по пустелі",
        price: "Ціна: 2100$",
        description: "Розкішний пляжний відпочинок в Дубаї з шопінг турами та сафарі по пустелі."
        },
        {
        city: "Київ",
        duration: "Тривалість: 6 днів",
        type: "Тип: Культурний",
        accommodation: "Готель: Готель 3*",
        food: "Їжа: Сніданок",
        transport: "Транспорт: літак",
        additionalServices: "Додаткові послуги: Екскурсії по місту, відвідування Лаври",
        price: "Ціна: 700$",
        description: "Культурний тур у Київ з екскурсіями по місту та відвідуванням Києво-Печерської Лаври."
        },
        {
        city: "Бангкок",
        duration: "Тривалість: 12 днів",
        type: "Тип: Екстремальний",
        accommodation: "Готель: Готель 4*",
        food: "Їжа: Сніданок і вечеря",
        transport: "Транспорт: літак",
        additionalServices: "Додаткові послуги: Поїздки на слонах, тайський бокс",
        price: "Ціна: 1700$",
        description: "Екстремальний тур у Бангкок з поїздками на слонах та уроками тайського боксу."
        },
        {
        city: "Лондон",
        duration: "Тривалість: 8 днів",
        type: "Тип: Історичний",
        accommodation: "Готель: Готель 4*",
        food: "Їжа: Сніданок",
        transport: "Транспорт: літак",
        additionalServices: "Додаткові послуги: Екскурсії по місту, відвідування Тауеру",
        price: "Ціна: 1400$",
        description: "Історичний тур у Лондон з екскурсіями по місту та відвідуванням Тауеру."
        },
        {
        city: "Венеція",
        duration: "Тривалість: 7 днів",
        type: "Тип: Романтичний",
        accommodation: "Готель: Готель 4*",
        food: "Їжа: Сніданок",
        transport: "Транспорт: літак",
        additionalServices: "Додаткові послуги: Гондольєрські прогулянки, екскурсії по місту",
        price: "Ціна: 1300$",
        description: "Романтичний тур у Венецію з гондольєрськими прогулянками та екскурсіями по місту."
        },
        {
        city: "Майамі",
        duration: "Тривалість: 10 днів",
        type: "Тип: Пляжний",
        accommodation: "Готель: Готель 5*",
        food: "Їжа: Все включено",
        transport: "Транспорт: літак",
        additionalServices: "Додаткові послуги: Водні види спорту, вечірки на пляжі",
        price: "Ціна: 2000$",
        description: "Пляжний відпочинок у Майамі з водними видами спорту та вечірками на пляжі."
        },
        {
        city: "Пекін",
        duration: "Тривалість: 12 днів",
        type: "Тип: Історичний",
        accommodation: "Готель: Готель 4*",
        food: "Їжа: Сніданок і обід",
        transport: "Транспорт: літак",
        additionalServices: "Додаткові послуги: Екскурсії по Великій стіні, відвідування Забороненого міста",
        price: "Ціна: 1600$",
        description: "Історичний тур у Пекін з відвідуванням Великої Китайської стіни та Забороненого міста."
        },
        {
        city: "Ріо-де-Жанейро",
        duration: "Тривалість: 10 днів",
        type: "Тип: Пляжний",
        accommodation: "Готель: Готель 4*",
        food: "Їжа: Сніданок",
        transport: "Транспорт: літак",
        additionalServices: "Додаткові послуги: Танці самби, екскурсії по місту",
        price: "Ціна: 1800$",
        description: "Пляжний відпочинок у Ріо-де-Жанейро з танцями самби та екскурсіями по місту."
        },
        {
        city: "Прага",
        duration: "Тривалість: 7 днів",
        type: "Тип: Романтичний",
        accommodation: "Готель: Готель 3*",
        food: "Їжа: Сніданок",
        transport: "Транспорт: літак",
        additionalServices: "Додаткові послуги: Екскурсії по місту, вечірні круїзи",
        price: "Ціна: 1100$",
        description: "Романтичний тур у Прагу з екскурсіями по місту та вечірніми круїзами."
        },
        {
        city: "Сингапур",
        duration: "Тривалість: 8 днів",
        type: "Тип: Дослідницький",
        accommodation: "Готель: Готель 4*",
        food: "Їжа: Сніданок",
        transport: "Транспорт: літак",
        additionalServices: "Додаткові послуги: Екскурсії по місту, відвідування зоопарку",
        price: "Ціна: 1700$",
        description: "Дослідницький тур у Сингапур з екскурсіями по місту та відвідуванням зоопарку."
        },
        {
        city: "Канкун",
        duration: "Тривалість: 14 днів",
        type: "Тип: Пляжний",
        accommodation: "Готель: Готель 5*",
        food: "Їжа: Все включено",
        transport: "Транспорт: літак",
        additionalServices: "Додаткові послуги: Дайвінг, вечірні шоу",
        price: "Ціна: 2300$",
        description: "Пляжний відпочинок у Канкуні з дайвінгом та вечірніми шоу."
        },
        {
            place: "Ейфелева вежа, Париж",
            duration: "Тривалість: 7 днів",
            type: "Тип: Культурний",
            accommodation: "Готель: Готель 4*",
            food: "Їжа: Сніданок",
            transport: "Транспорт: літак",
            additionalServices: "Додаткові послуги: Екскурсії по місту, круїз по Сені",
            price: "Ціна: 1200$",
            description: "Культурний тур до Ейфелевої вежі з екскурсіями по місту та круїзом по річці Сена."
        },
        {
            place: "Колізей, Рим",
            duration: "Тривалість: 8 днів",
            type: "Тип: Історичний",
            accommodation: "Готель: Готель 3*",
            food: "Їжа: Сніданок",
            transport: "Транспорт: літак",
            additionalServices: "Додаткові послуги: Екскурсії по місту, відвідування музеїв",
            price: "Ціна: 1000$",
            description: "Історичний тур до Колізею з екскурсіями по Риму та відвідуванням музеїв."
        },
        {
            place: "Велика китайська стіна, Пекін",
            duration: "Тривалість: 12 днів",
            type: "Тип: Історичний",
            accommodation: "Готель: Готель 4*",
            food: "Їжа: Сніданок і обід",
            transport: "Транспорт: літак",
            additionalServices: "Додаткові послуги: Екскурсії по стіні, відвідування Забороненого міста",
            price: "Ціна: 1600$",
            description: "Історичний тур до Великої китайської стіни з відвідуванням Забороненого міста."
        },
        {
            place: "Статуя Свободи, Нью-Йорк",
            duration: "Тривалість: 10 днів",
            type: "Тип: Дослідницький",
            accommodation: "Готель: Готель 4*",
            food: "Їжа: Сніданок",
            transport: "Транспорт: літак",
            additionalServices: "Додаткові послуги: Тур по Манхеттену, відвідування Бродвею",
            price: "Ціна: 2000$",
            description: "Дослідницький тур до Статуї Свободи з оглядом Манхеттену та відвідуванням Бродвейських шоу."
        },
        {
            place: "Сіднейська опера, Сідней",
            duration: "Тривалість: 14 днів",
            type: "Тип: Пляжний",
            accommodation: "Готель: Готель 4*",
            food: "Їжа: Все включено",
            transport: "Транспорт: літак",
            additionalServices: "Додаткові послуги: Серфінг, екскурсії по місту",
            price: "Ціна: 2200$",
            description: "Відпочинок у Сіднеї з відвідуванням Оперного театру, можливістю зайнятися серфінгом та екскурсіями по місту."
        },
        {
            place: "Мачу-Пікчу, Перу",
            duration: "Тривалість: 15 днів",
            type: "Тип: Дослідницький",
            accommodation: "Готель: Готель 3*",
            food: "Їжа: Сніданок",
            transport: "Транспорт: літак",
            additionalServices: "Додаткові послуги: Екскурсії по горах, відвідування стародавніх руїн",
            price: "Ціна: 2500$",
            description: "Дослідницький тур до Мачу-Пікчу з екскурсіями по горах та відвідуванням стародавніх руїн."
    },
        {
            place: "Собор Святого Петра, Ватикан",
            duration: "Тривалість: 6 днів",
            type: "Тип: Історичний",
            accommodation: "Готель: Готель 3*",
            food: "Їжа: Сніданок",
            transport: "Транспорт: літак",
            additionalServices: "Додаткові послуги: Екскурсії по Ватикану, відвідування музеїв",
            price: "Ціна: 1200$",
            description: "Історичний тур до Собору Святого Петра з екскурсіями по Ватикану та відвідуванням музеїв."
        },
        {
            place: "Ангкор-Ват, Камбоджа",
            duration: "Тривалість: 10 днів",
            type: "Тип: Дослідницький",
            accommodation: "Готель: Готель 4*",
            food: "Їжа: Сніданок і вечеря",
            transport: "Транспорт: літак",
            additionalServices: "Додаткові послуги: Екскурсії по храмовому комплексу, поїздки на слонах",
            price: "Ціна: 1800$",
            description: "Дослідницький тур до Ангкор-Ват з екскурсіями по храмовому комплексу та поїздками на слонах."
        },
        {
            place: "Собор святої Софії, Київ",
            duration: "Тривалість: 6 днів",
            type: "Тип: Історичний",
            accommodation: "Готель: Готель 3*",
            food: "Їжа: Сніданок",
            transport: "Транспорт: літак",
            additionalServices: "Додаткові послуги: Екскурсії по місту, відвідування Лаври",
            price: "Ціна: 700$",
            description: "Історичний тур до Києва з відвідуванням Собору святої Софії, екскурсіями по місту та Лаври."
        },
        {
            place: "Храм Кійомідзу, Кіото",
            duration: "Тривалість: 12 днів",
            type: "Тип: Історичний",
            accommodation: "Готель: Готель 4*",
            food: "Їжа: Сніданок і вечеря",
            transport: "Транспорт: літак",
            additionalServices: "Додаткові послуги: Екскурсії по старовинних храмах, відвідування садів",
            price: "Ціна: 1800$",
            description: "Історичний тур до Кіото з відвідуванням Храму Кійомідзу, екскурсіями по старовинних храмах та садах."
        },
        {
            place: "Музей Ван Гога, Амстердам",
            duration: "Тривалість: 7 днів",
            type: "Тип: Культурний",
            accommodation: "Готель: Готель 3*",
            food: "Їжа: Сніданок",
            transport: "Транспорт: літак",
            additionalServices: "Додаткові послуги: Екскурсії по каналах, відвідування музеїв",
            price: "Ціна: 1300$",
            description: "Культурний тур до Амстердаму з відвідуванням музею Ван Гога, екскурсіями по каналах та музеям."
        }
        ];
    console.log(tours.length)

    let prodCont = document.querySelector('.product__container')
    let toursBox = document.querySelector('.tours__box')
    let tourBox = document.querySelector('.tour__box')
    let toursTitle = document.querySelector('.tours__box-title')



    tours.forEach(item =>{
        let tourBox = document.createElement('div')
        let modal = document.createElement('div')
        let modalBox = document.createElement('div')
        let modalBuy = document.createElement('div')
        let modalTitle = document.createElement('div')
        let modalCard = document.createElement('input')
        let modalPass = document.createElement('input')
        let close = document.createElement('span')
        let info = document.createElement('div')
        let button = document.createElement('div')
        let buttons = document.createElement('div')
        let buy = document.createElement('div')
        let btn = document.createElement('div')
        let title = document.createElement('div')
        let text = document.createElement('div')
        let duration = document.createElement('div')
        let type = document.createElement('div')
        let accommodation = document.createElement('div')
        let food = document.createElement('div')
        let transport = document.createElement('div')
        let additional = document.createElement('div')
        let price = document.createElement('div')

        tourBox.classList.add('tour__box')
        modal.classList.add('modal')
        modalBox.classList.add('modal__box')
        modalBuy.classList.add('buy__modal')
        modalTitle.classList.add('buy__title')
        modalCard.classList.add('buy__card')
        modalPass.classList.add('buy__pass')
        close.classList.add('modal__close')
        btn.classList.add('modal__btn')
        info.classList.add('tour__box-info')
        title.classList.add('tour__box-title')
        button.classList.add('tour__box-button')
        buttons.classList.add('tour__box-buttons')
        buy.classList.add('tour__box-buy')
        text.classList.add('tour__box-text')
        duration.classList.add('tour__box-duration')
        type.classList.add('tour__box-type')
        accommodation.classList.add('tour__box-accomodation')
        food.classList.add('tour__box-food')
        transport.classList.add('tour__box-transport')
        additional.classList.add('tour__box-additional')
        price.classList.add('tour__box-price')

        text.textContent = item.description
        title.textContent = item.city
        button.textContent = 'Детальніше...'
        close.textContent = 'X'
        buy.textContent = 'Купити'
        btn.textContent = 'Купити'
        duration.textContent = item.duration
        type.textContent = item.type
        accommodation.textContent = item.accommodation
        food.textContent = item.food
        transport.textContent = item.transport
        additional.textContent = item.additionalServices
        price.textContent = item.price

        modal.appendChild(close)
        modal.appendChild(duration)
        modal.appendChild(type)
        modal.appendChild(accommodation)
        modal.appendChild(food)
        modal.appendChild(transport)
        modal.appendChild(additional)
        modal.appendChild(price)
        modal.appendChild(btn)
        info.appendChild(title)
        info.appendChild(text)
        modalBox.appendChild(modal)
        buttons.appendChild(button)
        buttons.appendChild(buy)
        tourBox.appendChild(info)
        tourBox.appendChild(buttons)
        tourBox.appendChild(modalBox)
        toursBox.appendChild(tourBox)

        button.addEventListener('click', function(){
            if (modal.style.display === 'flex') {
                modal.style.display = 'none'
            } 
            else {
                modal.style.display = 'flex'

            }    
        })
        close.addEventListener('click', function(){
            modal.style.display = 'none'
        })
        buy.addEventListener('click', function(){
            if (modalBuy.style.display === 'flex') {
                modalBuy.style.display = 'none'
            } 
            else {
                modalBuy.style.display = 'flex'
            }    
        })
    })
