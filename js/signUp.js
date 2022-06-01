const form = document.querySelector(".account");
 console.log(form);

const yourName = document.querySelector("#name");
 console.log(yourName);
const NameError = document.querySelector("#NameError");
console.log(NameError);

const email = document.querySelector("#email");
 console.log(email);
const emailError = document.querySelector("#emailError");
console.log(emailError);

const password = document.querySelector("#yourPassword");
console.log(password);
const passwordError = document.querySelector("#youPasswordError");
console.log(passwordError);

const RepeatPassword = document.querySelector("#RepeatPassword");
console.log(RepeatPassword);
const RepeatError = document.querySelector("#RepeatError");
console.log(RepeatError);


const submitBtn = document.querySelector(".cta")
console.log(submitBtn);

function LogInForm(event) {
  event.preventDefault();

  if (checkInputLength(yourName.value, 2) === true) {
    NameError.style.display = "none";
    
  }else{
    NameError.style.display = "block";
  }

  
  if (checkInputLength(email.value) === true) {
    emailError.style.display = "none";
  }
  else{
    emailError.style.display = "block";
  }


  if (checkInputLength(email.value ) === true) {
    passwordError.style.display = "none";
  }
  else{
    passwordError.style.display = "block";
  }

  if (checkInputLength(password.value) === true) {
    passwordError.style.display = "none";
  }
  else{
    passwordError.style.display = "block";
  }


  if (checkInputLength(password.value) === true) {
    RepeatError.style.display = "none";
  }
  else{
    RepeatError.style.display = "block";
  }

}

submitBtn.addEventListener("submit",LogInForm);

 form.addEventListener("submit", LogInForm);
 email.addEventListener("submit", LogInForm);
 password.addEventListener("submit", LogInForm);
 RepeatPassword.addEventListener("submit", LogInForm);


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
