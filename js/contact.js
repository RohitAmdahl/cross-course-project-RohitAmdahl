const form = document.querySelector(".account");
 
const yourName = document.querySelector("#name");
const fullNameError = document.querySelector("#fullNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const address= document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const phoneNumber = document.querySelector("#phone");
const RepeatError = document.querySelector("#phoneError");
const submitBtn = document.querySelector(".cta")


function LogInForm(event) {
  event.preventDefault();

  if (checkInputLength(yourName.value, 2) === true) {
    fullNameError.style.display = "none";
    
  }else{
    fullNameError.style.display = "block";
  }

  
  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  }
  else{
    emailError.style.display = "block";
  }


  if (checkInputLength(address.value, 20) === true) {
    addressError.style.display = "none";
  }
  else{
    addressError.style.display = "block";
  }

  if (checkInputLength(phoneNumber.value, 12) === true) {
    phoneError.style.display = "none";
  }
  else{
    phoneError.style.display = "block";
  }

}

submitBtn.addEventListener("submit",LogInForm);

 form.addEventListener("submit", LogInForm);
 email.addEventListener("submit", LogInForm);
 address.addEventListener("submit", LogInForm);
 phoneNumber.addEventListener("submit", LogInForm);


function checkInputLength(value, input){
  if (value.trim().length > input) {
    return true;
  }else{
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}