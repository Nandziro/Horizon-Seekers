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

// modal

let modal = document.getElementById('registration-modal');
let openModalBtn = document.querySelector('.modal__btn')


openModalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});


window.addEventListener('click', (event) => {
  if (event.target === modal) {
   
   modal.style.display = 'none';
  }
});
// register
let eMail = document.querySelector(".form__email");
let pAssword = document.querySelector(".form__pas");
let bUtton = document.querySelector(".form__btn");
let cHeckbox = document.querySelector(".form__checked");

eMail.addEventListener("input", function () {
  let emailValue = eMail.value;

  if (
    emailValue.length > 5 &&
    emailValue.includes("@") &&
    emailValue.includes(".")
  ) {
    eMail.classList.add("active");
    eMail.classList.remove("deactive");
  } else if (emailValue.length === 0) {
    eMail.classList.remove("deactive");
    eMail.classList.remove("active");
  } else {
    eMail.classList.remove("active");
    eMail.classList.add("deactive");
  }
});

pAssword.addEventListener("input", function () {
  let passwordValue = pAssword.value;
  let passwordFirstChar = passwordValue[0];

  if (
    passwordValue.length > 8 &&
    passwordFirstChar === passwordFirstChar.toUpperCase()
  ) {
    pAssword.classList.remove("deactive");
    pAssword.classList.add("active");
  } else if (passwordValue.length === 0) {
    pAssword.classList.remove("deactive");
    pAssword.classList.remove("active");
  } else {
    pAssword.classList.remove("active");
    pAssword.classList.add("deactive");
  }
});

bUtton.addEventListener("click", function () {
  let eMail = document.querySelector(".form__email");
  let pAssword = document.querySelector(".form__pas");
  let cHeckbox = document.querySelector(".form__checked");
  let naMe = document.querySelector(".form__name");
  let ascNumber = document.querySelector(".form__number");

  let checKed = cHeckbox.value;
  let emailValue = eMail.value;
  let passwordValue = pAssword.value;
  let nameValue = naMe.value;
  let newNumberValue = ascNumber.value;

  if (
    emailValue.length < 5 &&
    !emailValue.includes("@") &&
    !emailValue.includes(".")
  ) {
    
    let modalkaEMail = document.querySelector('.form__modalka_email')
    modalkaEMail.classList.add("open");
    eMail.classList.add("active");
    eMail.classList.remove("deactive");
    return;
  } else if (passwordValue.length < 7) {
    let modalkaPassword = document.querySelector('.form__modalka_password')
    
    modalkaPassword.classList.add("open");
    pAssword.classList.remove("deactive");
    pAssword.classList.add("active");
    
    return;
  } else if (nameValue.length === 0) {
    let modalkaName = document.querySelector('.form__modalka_name')
    modalkaName.classList.add("open")
    return;
  } else if (newNumberValue.length !== 13 && !newNumberValue.includes("+")) {
    
    let modalkaTel = document.querySelector('.form__modalka_tel')
    modalkaTel.classList.add("open")
    return;
  } else if (!cHeckbox.checked) {
    
    let modalkaCHECKBOX = document.querySelector('.form__modalka_checkbox')
    modalkaCHECKBOX.classList.add("open")
    return;
  } else {
      sessionStorage.setItem("nameValue", nameValue);
    window.location.href = "./about-us.html";
  }
});
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
    if (this.scrollY >= 100 && this.scrollY <= 5200) {
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