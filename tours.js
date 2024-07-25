let inBtn = document.querySelector('.header__nav-btnin')
let upBtn = document.querySelector('.header__nav-btnup')
let inMod = document.querySelector('.modal__in')
let inSpan = document.querySelector('.modal__in-close')
let signBtn = document.querySelector('.sign__buttons')
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
        duration: "7 днів",
        destination: "Франція, Париж",
        type: "Романтичний",
        accommodation: "Готель 4*",
        food: "Сніданок",
        transport: "Літак",
        price: 1200,
        additionalServices: "Вечеря біля Ейфелевої вежі, страхування"
    },
    {
        duration: "10 днів",
        destination: "Італія, Рим",
        type: "Культурний",
        accommodation: "Готель 5*",
        food: "Сніданок і вечеря",
        transport: "Літак",
        price: 1800,
        additionalServices: "Екскурсії, трансфер"
    },
    {
        duration: "14 днів",
        destination: "Таїланд, Пхукет",
        type: "Пляжний",
        accommodation: "Готель 4*",
        food: "Все включено",
        transport: "Літак",
        price: 1500,
        additionalServices: "Масаж, екскурсії"
    },
    {
        duration: "5 днів",
        destination: "Німеччина, Берлін",
        type: "Історичний",
        accommodation: "Готель 3*",
        food: "Сніданок",
        transport: "Літак",
        price: 900,
        additionalServices: "Екскурсії, транспортний квиток"
    },
    {
        duration: "7 днів",
        destination: "Іспанія, Барселона",
        type: "Гастрономічний",
        accommodation: "Готель 4*",
        food: "Сніданок і вечеря",
        transport: "Літак",
        price: 1300,
        additionalServices: "Дегустації, кулінарні майстер-класи"
    },
    {
        duration: "12 днів",
        destination: "Японія, Токіо",
        type: "Культурний",
        accommodation: "Готель 5*",
        food: "Сніданок",
        transport: "Літак",
        price: 2200,
        additionalServices: "Екскурсії, гід"
    },
    {
        duration: "14 днів",
        destination: "Мексика, Канкун",
        type: "Пляжний",
        accommodation: "Готель 5*",
        food: "Все включено",
        transport: "Літак",
        price: 2500,
        additionalServices: "Спа, екскурсії"
    },
    {
        duration: "10 днів",
        destination: "Єгипет, Шарм-ель-Шейх",
        type: "Пляжний",
        accommodation: "Готель 4*",
        food: "Все включено",
        transport: "Літак",
        price: 1100,
        additionalServices: "Дайвінг, екскурсії"
    },
    {
        duration: "8 днів",
        destination: "Австралія, Сідней",
        type: "Екскурсійний",
        accommodation: "Готель 4*",
        food: "Сніданок",
        transport: "Літак",
        price: 2600,
        additionalServices: "Екскурсії, сафарі"
    },
    {
        duration: "7 днів",
        destination: "Великобританія, Лондон",
        type: "Культурний",
        accommodation: "Готель 4*",
        food: "Сніданок",
        transport: "Літак",
        price: 1700,
        additionalServices: "Екскурсії, театральні квитки"
    },
    {
        duration: "14 днів",
        destination: "Мальдіви",
        type: "Пляжний",
        accommodation: "Вілла 5*",
        food: "Все включено",
        transport: "Літак",
        price: 3000,
        additionalServices: "Спа, водні види спорту"
    },
    {
        duration: "5 днів",
        destination: "Нідерланди, Амстердам",
        type: "Екскурсійний",
        accommodation: "Готель 3*",
        food: "Сніданок",
        transport: "Літак",
        price: 1000,
        additionalServices: "Екскурсії, прокат велосипедів"
    },
    {
        duration: "7 днів",
        destination: "Греція, Афіни",
        type: "Історичний",
        accommodation: "Готель 4*",
        food: "Сніданок і вечеря",
        transport: "Літак",
        price: 1400,
        additionalServices: "Екскурсії, гід"
    },
    {
        duration: "10 днів",
        destination: "Бразилія, Ріо-де-Жанейро",
        type: "Пригодницький",
        accommodation: "Готель 5*",
        food: "Сніданок",
        transport: "Літак",
        price: 2700,
        additionalServices: "Екскурсії, трекінг"
    },
    {
        duration: "12 днів",
        destination: "Індія, Гоа",
        type: "Пляжний",
        accommodation: "Готель 4*",
        food: "Все включено",
        transport: "Літак",
        price: 1600,
        additionalServices: "Йога, спа"
    },
    {
        duration: "14 днів",
        destination: "В'єтнам, Ханой",
        type: "Культурний",
        accommodation: "Готель 4*",
        food: "Сніданок і вечеря",
        transport: "Літак",
        price: 1900,
        additionalServices: "Екскурсії, кулінарні класи"
    },
    {
        duration: "7 днів",
        destination: "Таїланд, Бангкок",
        type: "Екскурсійний",
        accommodation: "Готель 5*",
        food: "Сніданок",
        transport: "Літак",
        price: 1500,
        additionalServices: "Екскурсії, нічне життя"
    },
    {
        duration: "10 днів",
        destination: "Канада, Ванкувер",
        type: "Пригодницький",
        accommodation: "Готель 4*",
        food: "Сніданок",
        transport: "Літак",
        price: 2300,
        additionalServices: "Трекінг, водні види спорту"
    },
    {
        duration: "7 днів",
        destination: "Швейцарія, Цюріх",
        type: "Екскурсійний",
        accommodation: "Готель 5*",
        food: "Сніданок",
        transport: "Літак",
        price: 2100,
        additionalServices: "Екскурсії, гірські прогулянки"
    },
    {
        duration: "14 днів",
        destination: "Аргентина, Буенос-Айрес",
        type: "Культурний",
        accommodation: "Готель 4*",
        food: "Сніданок і вечеря",
        transport: "Літак",
        price: 2400,
        additionalServices: "Танго-шоу, екскурсії"
    },
    {
        duration: "12 днів",
        destination: "ПАР, Кейптаун",
        type: "Пригодницький",
        accommodation: "Готель 5*",
        food: "Сніданок",
        transport: "Літак",
        price: 2800,
        additionalServices: "Сафарі, екскурсії"
    },
    {
        duration: "10 днів",
        destination: "Чехія, Прага",
        type: "Романтичний",
        accommodation: "Готель 3*",
        food: "Сніданок",
        transport: "Літак",
        price: 1300,
        additionalServices: "Екскурсії, романтична дегустація пива"
    },
    {
        duration: "7 днів",
        destination: "Австрія, Відень",
        type: "Культурний",
        accommodation: "Готель 4*",
        food: "Сніданок",
        transport: "Літак",
        price: 1600,
        additionalServices: "Концерт, екскурсії"
    },
    {
        duration: "14 днів",
        destination: "Кенія, Найробі",
        type: "Пригодницький",
        accommodation: "Готель 5*",
        food: "Все включено",
        transport: "Літак",
        price: 3200,
        additionalServices: "Сафарі, екскурсії"
    },
    {
        duration: "10 днів",
        destination: "Китай, Пекін",
        type: "Культурний",
        accommodation: "Готель 5*",
        food: "Сніданок і вечеря",
        transport: "Літак",
        price: 2000,
        additionalServices: "Екскурсії, гід"
    },
    {
        duration: "7 днів",
        destination: "ОАЕ, Дубай",
        type: "Пляжний",
        accommodation: "Готель 5*",
        food: "Сніданок",
        transport: "Літак",
        price: 3700,
        additionalServices: "Шопінг, екскурсії"
    },
    {
        duration: "14 днів",
        destination: "Індонезія, Балі",
        type: "Пляжний",
        accommodation: "Вілла 5*",
        food: "Все включено",
        transport: "Літак",
        price: 2800,
        additionalServices: "Спа, йога"
    },
    {
        duration: "10 днів",
        destination: "Нова Зеландія, Окленд",
        type: "Пригодницький",
        accommodation: "Готель 4*",
        food: "Сніданок",
        transport: "Літак",
        price: 3000,
        additionalServices: "Трекінг, водні види спорту"
    },
    {
        duration: "7 днів",
        destination: "Португалія, Лісабон",
        type: "Екскурсійний",
        accommodation: "Готель 4*",
        food: "Сніданок",
        transport: "Літак",
        price: 1400,
        additionalServices: "Екскурсії, дегустація вин"
    },
    {
        duration: "12 днів",
        destination: "Туреччина, Стамбул",
        type: "Культурний",
        accommodation: "Готель 4*",
        food: "Сніданок і вечеря",
        transport: "Літак",
        price: 1600,
        additionalServices: "Екскурсії, хаммам"
    },
    {
        duration: "10 днів",
        destination: "Швеція, Стокгольм",
        type: "Екскурсійний",
        accommodation: "Готель 3*",
        food: "Сніданок",
        transport: "Літак",
        price: 1500,
        additionalServices: "Екскурсії, музейні квитки"
    },
    {
        duration: "14 днів",
        destination: "Норвегія, Осло",
        type: "Пригодницький",
        accommodation: "Готель 4*",
        food: "Сніданок",
        transport: "Літак",
        price: 2700,
        additionalServices: "Трекінг, риболовля"
    },
    {
        duration: "10 днів",
        destination: "Фінляндія, Гельсінкі",
        type: "Екскурсійний",
        accommodation: "Готель 3*",
        food: "Сніданок",
        transport: "Літак",
        price: 1300,
        additionalServices: "Екскурсії, сауна"
    },
    {
        duration: "7 днів",
        destination: "Данія, Копенгаген",
        type: "Екскурсійний",
        accommodation: "Готель 4*",
        food: "Сніданок",
        transport: "Літак",
        price: 1400,
        additionalServices: "Екскурсії, музейні квитки"
    },
    {
        duration: "14 днів",
        destination: "Чилі, Сантьяго",
        type: "Культурний",
        accommodation: "Готель 4*",
        food: "Сніданок і вечеря",
        transport: "Літак",
        price: 2500,
        additionalServices: "Екскурсії, винні тури"
    },
    {
        duration: "12 днів",
        destination: "Перу, Ліма",
        type: "Пригодницький",
        accommodation: "Готель 4*",
        food: "Сніданок",
        transport: "Літак",
        price: 2400,
        additionalServices: "Трекінг, екскурсії"
    },
    {
        duration: "10 днів",
        destination: "Мексика, Мехіко",
        type: "Культурний",
        accommodation: "Готель 4*",
        food: "Сніданок",
        transport: "Літак",
        price: 2000,
        additionalServices: "Екскурсії, музеї"
    },
    {
        duration: "7 днів",
        destination: "Колумбія, Богота",
        type: "Екскурсійний",
        accommodation: "Готель 3*",
        food: "Сніданок",
        transport: "Літак",
        price: 1500,
        additionalServices: "Екскурсії, музеї"
    },
    {
        duration: "14 днів",
        destination: "Куба, Гавана",
        type: "Пляжний",
        accommodation: "Готель 5*",
        food: "Все включено",
        transport: "Літак",
        price: 2200,
        additionalServices: "Спа, екскурсії"
    },
    {
        duration: "12 днів",
        destination: "Коста-Ріка, Сан-Хосе",
        type: "Пригодницький",
        accommodation: "Готель 4*",
        food: "Сніданок",
        transport: "Літак",
        price: 2600,
        additionalServices: "Екскурсії, трекінг"
    },
    {
        duration: "10 днів",
        destination: "Ямайка, Кінгстон",
        type: "Пляжний",
        accommodation: "Готель 4*",
        food: "Все включено",
        transport: "Літак",
        price: 1800,
        additionalServices: "Спа, водні види спорту"
    },
    {
        duration: "7 днів",
        destination: "Марокко, Марракеш",
        type: "Екскурсійний",
        accommodation: "Готель 4*",
        food: "Сніданок і вечеря",
        transport: "Літак",
        price: 1400,
        additionalServices: "Екскурсії, хаммам"
    },
    {
        duration: "14 днів",
        destination: "Сейшели",
        type: "Пляжний",
        accommodation: "Вілла 5*",
        food: "Все включено",
        transport: "Літак",
        price: 3200,
        additionalServices: "Спа, водні види спорту"
    },
    {
        duration: "10 днів",
        destination: "Малайзія, Куала-Лумпур",
        type: "Культурний",
        accommodation: "Готель 4*",
        food: "Сніданок і вечеря",
        transport: "Літак",
        price: 2000,
        additionalServices: "Екскурсії, шопінг"
    },
    {
        duration: "7 днів",
        destination: "Сінгапур",
        type: "Екскурсійний",
        accommodation: "Готель 5*",
        food: "Сніданок",
        transport: "Літак",
        price: 2200,
        additionalServices: "Екскурсії, нічне життя"
    },
    {
        duration: "14 днів",
        destination: "Філіппіни, Маніла",
        type: "Пляжний",
        accommodation: "Готель 5*",
        food: "Все включено",
        transport: "Літак",
        price: 2700,
        additionalServices: "Спа, водні види спорту"
    },
    {
        duration: "10 днів",
        destination: "Індонезія, Джакарта",
        type: "Культурний",
        accommodation: "Готель 4*",
        food: "Сніданок і вечеря",
        transport: "Літак",
        price: 1900,
        additionalServices: "Екскурсії, шопінг"
    },
    {
        duration: "7 днів",
        destination: "Південна Корея, Сеул",
        type: "Екскурсійний",
        accommodation: "Готель 4*",
        food: "Сніданок",
        transport: "Літак",
        price: 1800,
        additionalServices: "Екскурсії, музеї"
    },
    {
        duration: "14 днів",
        destination: "ПАР, Йоганнесбург",
        type: "Пригодницький",
        accommodation: "Готель 5*",
        food: "Сніданок",
        transport: "Літак",
        price: 2900,
        additionalServices: "Сафарі, екскурсії"
    },
    {
        duration: "12 днів",
        destination: "Бразилія, Сан-Паулу",
        type: "Культурний",
        accommodation: "Готель 4*",
        food: "Сніданок",
        transport: "Літак",
        price: 2200,
        additionalServices: "Екскурсії, музеї"
    },
    {
        duration: "10 днів",
        destination: "Ісландія, Рейк'явік",
        type: "Пригодницький",
        accommodation: "Готель 4*",
        food: "Сніданок",
        transport: "Літак",
        price: 2500,
        additionalServices: "Трекінг, гарячі джерела"
    }
]
const cruises = [
    {
        duration: "7 днів",
        route: "Маямі, Багами",
        type: "Пляжний",
        accommodation: "Каюта з балконом",
        food: "Все включено",
        price: 1500,
        additionalServices: "Екскурсії, шоу на борту"
    },
    {
        duration: "10 днів",
        route: "Барселона, Рим",
        type: "Культурний",
        accommodation: "Каюта з вікном",
        food: "Все включено",
        price: 2000,
        additionalServices: "Екскурсії, кулінарні класи"
    },
    {
        duration: "14 днів",
        route: "Сідней, Окленд",
        type: "Пригодницький",
        accommodation: "Каюта люкс",
        food: "Все включено",
        price: 3000,
        additionalServices: "Трекінг, водні види спорту"
    },
    {
        duration: "5 днів",
        route: "Венеція, Дубровник",
        type: "Екскурсійний",
        accommodation: "Каюта з вікном",
        food: "Все включено",
        price: 1200,
        additionalServices: "Екскурсії, гід"
    },
    {
        duration: "12 днів",
        route: "Токіо, Сеул",
        type: "Культурний",
        accommodation: "Каюта з балконом",
        food: "Все включено",
        price: 2500,
        additionalServices: "Екскурсії, кулінарні класи"
    },
    {
        duration: "7 днів",
        route: "Лісабон, Канарські острови",
        type: "Пляжний",
        accommodation: "Каюта з вікном",
        food: "Все включено",
        price: 1600,
        additionalServices: "Спа, водні види спорту"
    },
    {
        duration: "14 днів",
        route: "Буенос-Айрес, Ушуайя",
        type: "Пригодницький",
        accommodation: "Каюта люкс",
        food: "Все включено",
        price: 3500,
        additionalServices: "Екскурсії, льодовикові тури"
    },
    {
        duration: "10 днів",
        route: "Сінгапур, Балі",
        type: "Культурний",
        accommodation: "Каюта з балконом",
        food: "Все включено",
        price: 2200,
        additionalServices: "Екскурсії, шопінг"
    },
    {
        duration: "8 днів",
        route: "Кейптаун, Мадагаскар",
        type: "Пригодницький",
        accommodation: "Каюта з вікном",
        food: "Все включено",
        price: 2800,
        additionalServices: "Сафарі, водні види спорту"
    },
    {
        duration: "12 днів",
        route: "Сан-Франциско, Аляска",
        type: "Екскурсійний",
        accommodation: "Каюта з балконом",
        food: "Все включено",
        price: 2700,
        additionalServices: "Екскурсії, льодовикові тури"
    }
];
const mountainAdventures = [
    {
        duration: "7 днів",
        location: "Альпи, Франція",
        type: "Лижний тур",
        transport: "Літак",
        food: "Сніданок і вечеря",
        price: 2000,
        additionalServices: "Інструктор, прокат спорядження"
    },
    {
        duration: "10 днів",
        location: "Гімалаї, Непал",
        type: "Трекінг",
        transport: "Літак",
        food: "Повний пансіон",
        price: 2500,
        additionalServices: "Гід, перенесення вантажу"
    },
    {
        duration: "14 днів",
        location: "Анди, Перу",
        type: "Альпінізм",
        transport: "Літак",
        food: "Сніданок, обід і вечеря",
        price: 3000,
        additionalServices: "Екскурсії, інструктор"
    },
    {
        duration: "7 днів",
        location: "Рокі Маунтінс, Канада",
        type: "Снігохідний тур",
        transport: "Літак",
        food: "Сніданок",
        price: 2200,
        additionalServices: "Оренда снігоходів, інструктор"
    },
    {
        duration: "5 днів",
        location: "Карпати, Україна",
        type: "Гірський велосипедний тур",
        transport: "Автобус",
        food: "Сніданок",
        price: 1200,
        additionalServices: "Оренда велосипедів, гід"
    },
    {
        duration: "10 днів",
        location: "Доломітові Альпи, Італія",
        type: "Скелелазіння",
        transport: "Літак",
        food: "Сніданок і вечеря",
        price: 2500,
        additionalServices: "Інструктор, спорядження"
    },
    {
        duration: "12 днів",
        location: "Піренеї, Іспанія",
        type: "Трекінг",
        transport: "Літак",
        food: "Повний пансіон",
        price: 2400,
        additionalServices: "Гід, перенесення вантажу"
    },
    {
        duration: "8 днів",
        location: "Кавказ, Грузія",
        type: "Альпінізм",
        transport: "Літак",
        food: "Сніданок і вечеря",
        price: 2300,
        additionalServices: "Інструктор, спорядження"
    }
];
const pilgrimageRoutes = [
    {
        duration: "10 днів",
        destination: "Ізраїль, Єрусалим",
        type: "Християнський паломницький тур",
        food: "Сніданок і вечеря",
        transport: "Літак",
        price: 1800,
        additionalServices: "Екскурсії, гід"
    },
    {
        duration: "7 днів",
        destination: "Саудівська Аравія, Мекка",
        type: "Мусульманський паломницький тур",
        food: "Повний пансіон",
        transport: "Літак",
        price: 2500,
        additionalServices: "Гід, медична підтримка"
    },
    {
        duration: "5 днів",
        destination: "Індія, Варанасі",
        type: "Індуїстський паломницький тур",
        food: "Сніданок",
        transport: "Літак",
        price: 1500,
        additionalServices: "Медитаційні сесії, йога"
    },
    {
        duration: "12 днів",
        destination: "Тибет, Лхаса",
        type: "Буддистський паломницький тур",
        food: "Сніданок і вечеря",
        transport: "Літак",
        price: 3000,
        additionalServices: "Медитаційні сесії, екскурсії"
    }
];
