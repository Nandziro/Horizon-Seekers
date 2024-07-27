// loading...
let loader = document.querySelector('.loader');

function showLoader() {
  loader.style.display = 'flex';
}

function hideLoader() {
  loader.style.display = 'none';
}


setTimeout(() => {
  showLoader();
  setTimeout(() => {
    hideLoader();
  }, 500); 
}, 500); 
// header
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

// feedbacke
let submitButton = document.getElementById('submit-feedback');
let feedbackList = document.getElementById('feedback-list');
let feedbackForm = document.getElementById('feedback-form');

submitButton.addEventListener('click', () => {
    let name = document.getElementById('name').value;
    let message = document.getElementById('message').value;

    if (name && message) {
        let newFeedback = document.createElement('div');
        newFeedback.classList.add('feedback');

        let title = document.createElement('h3');
        title.textContent = name;
        newFeedback.appendChild(title);

        let feedbackText = document.createElement('p');
        feedbackText.textContent = message;
        newFeedback.appendChild(feedbackText);

        feedbackList.appendChild(newFeedback);

        feedbackForm.reset();
    } else {
        alert("Будь ласка, заповніть поля імені та повідомлення.");
    }
});
// ідея алекса


// clicks
let openClickBtn = document.querySelector('.click_btn')
let clickModal = document.querySelector('.click__inform')
openClickBtn.addEventListener('click', () => {
    clickModal.style.display = 'block';
  });
  
  
  window.addEventListener('click', (event) => {
    if (event.target === clickModal) {
     
        clickModal.style.display = 'none';
    }
  });

let clickCount = 0;

function clickCountFunction(){
    clickCount++
    document.getElementById("clickCount").textContent = clickCount;
}

document.addEventListener('click',clickCountFunction)
// scrll

let elements = document.querySelectorAll('.about-us, .statist, .pricing_plan, .container__team');


window.addEventListener('scroll', function() {
  elements.forEach((element) => {
    if (this.scrollY >= 10 && this.scrollY <= 5300) {
      element.classList.add('animate');
      
    } else {
      element.classList.remove('animate');
      
    }
  });
});
// captcha
let slider = document.querySelector(".captcha-slider");
let resultText = document.querySelector(".result");
let startX, deltaX;

slider.addEventListener("mousedown", (mouseEvent) => {
  startX = mouseEvent.clientX;
  document.addEventListener("mousemove", mouseMove);
  document.addEventListener("mouseup", mouseUp);
});

function mouseMove(mouseEvent) {
  deltaX = mouseEvent.clientX - startX;
  slider.style.transform = `translateX(${deltaX}px)`;
}

function mouseUp() {
  document.removeEventListener("mousemove", mouseMove);
  
  if (deltaX > 550) {
    slider.classList.remove("wrong");
    resultText.classList.remove("wrong")

    resultText.classList.add("success")
    slider.classList.add("success");
    resultText.textContent = "Перевірка пройдена!";
  } else {
    slider.classList.add("wrong");
    resultText.classList.add("wrong")
    resultText.textContent = "Помилка попробуйте ще раз.";
  }
  setTimeout(() => {
    resultText.textContent = ".";
    slider.style.transform = `translateX(0px)`;
    slider.classList.remove("success", "wrong");
    resultText.classList.remove("success", "wrong");
  }, 700); 
}
// гліб
//SIGN IN AND SIGN UP

// модалка +



