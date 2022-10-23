const form = document.querySelector(".account");
const yourName = document.querySelector("#name");
const NameError = document.querySelector("#NameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const password = document.querySelector("#yourPassword");
const passwordError = document.querySelector("#youPasswordError");
const submitBtn = document.querySelector(".cta")

function LogInForm(event) {
  event.preventDefault();

  if (checkInputLength(yourName.value, 2) === true) {
    NameError.style.display = "none";
    
  }else{
    NameError.style.display = "block";
  }

  
  if (validDataEmail(email.value) === true) {
    emailError.style.display = "none";
  }
  else{
    emailError.style.display = "block";
  }


  if (validDataEmail(email.value) === true) {
    passwordError.style.display = "none";
  }
  else{
    passwordError.style.display = "block";
  }

  // if (checkInputLength(password.value) === true) {
  //   passwordError.style.display = "none";
  // }
  // else{
  //   passwordError.style.display = "block";
  // }

}

submitBtn.addEventListener("submit",LogInForm);

 form.addEventListener("submit", LogInForm);
 email.addEventListener("submit", LogInForm);
 password.addEventListener("submit", LogInForm);


function checkInputLength(value, input){
  if (value.trim().length > input) {
    return true;
  }else{
    return false;
  }
}


function validDataEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
   const emailPatternMatches = regEx.test(email);
   return emailPatternMatches; 
 }
