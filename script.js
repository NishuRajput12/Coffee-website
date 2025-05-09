const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const add = document.querySelectorAll(".add");

menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});
menuCloseButton.addEventListener("click", () => {
    menuOpenButton.click();
});


add.forEach(button => {
    button.addEventListener('click', () => {
      const question = button.closest('.question');
      const paragraph = question.querySelector('p');
      const plusIcon = button.querySelector('.fa-plus');
      const minusIcon = button.querySelector('.fa-minus');
  
      paragraph.classList.toggle('show');
      plusIcon.classList.toggle('hide');
      minusIcon.classList.toggle('hide'); // Toggle between hide/show
    });
  });
  
  const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  
  const userIcon = document.querySelector("#user-icon");
  const signupFormContainer = document.querySelector("#signup-form-container");
  const closeSignupForm = document.querySelector("#close-signup-form");
  const signupForm = document.querySelector("#signup-form");
  const successPopup = document.querySelector("#success-popup");

  window.addEventListener('load', () => {
    signupFormContainer.style.display = "flex";
  });
  userIcon.addEventListener("click", () => {
    signupFormContainer.style.display = "flex";
  });

 
  closeSignupForm.addEventListener("click", () => {
    signupFormContainer.style.display = "none";
  });


  signupForm.addEventListener("submit", (e) => {
    e.preventDefault(); 

   
    const username = document.querySelector("#username").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

  

    
    successPopup.style.display = "block";

    setTimeout(() => {
      window.location.href = "/"; // )
    }, 3000); 
  });