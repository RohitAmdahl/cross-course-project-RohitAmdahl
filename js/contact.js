const form = document.querySelector(".account");
 console.log(form);

const yourName = document.querySelector("#name");
 console.log(yourName);
const fullNameError = document.querySelector("#fullNameError");
console.log(fullNameError);

const email = document.querySelector("#email");
 console.log(email);
const emailError = document.querySelector("#emailError");
console.log(emailError);

const address= document.querySelector("#address");
console.log(address);
const addressError = document.querySelector("#addressError");
console.log(addressError);

const phoneNumber = document.querySelector("#phone");
console.log(phoneNumber);
const RepeatError = document.querySelector("#phoneError");
console.log(RepeatError);


const submitBtn = document.querySelector(".cta")
console.log(submitBtn);

function LogInForm(event) {
  event.preventDefault();

  if (checkInputLength(yourName.value, 2) === true) {
    fullNameError.style.display = "none";
    
  }else{
    fullNameError.style.display = "block";
  }

  
  if (checkInputLength(email.value) === true) {
    emailError.style.display = "none";
  }
  else{
    emailError.style.display = "block";
  }


  if (checkInputLength(address.value, 40) === true) {
    addressError.style.display = "none";
  }
  else{
    addressError.style.display = "block";
  }

  if (checkInputLength(phoneNumber.value, 10) === true) {
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


function validDataEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
   const emailPatternMatches = regEx.test(email);
   return emailPatternMatches; 
 }
