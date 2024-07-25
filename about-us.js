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
  }, 1500); 
}, 1000); 
//Logo
let siteLogo = document.querySelector('.header__logo-box')
siteLogo.addEventListener('click', function() {
    window.location.href = "./index.html";
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
    if (this.scrollY >= 10 && this.scrollY <= 5000) {
      element.classList.add('animate');
      element.style.transform = 'translateX(0)';
    } else {
      element.classList.remove('animate');
      element.style.transform = 'translateX(-400%)';
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