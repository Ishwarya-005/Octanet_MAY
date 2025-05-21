function validForm(){

const userName = document.getElementById("name").value.trim();
const userNumber = document.getElementById("phone").value.trim();
const userEmail = document.getElementById("email").value.trim();
const userMessage = document.getElementById("message").value.trim();

const emailPattern = /^[a-zA-Z0-9_\.\-]+@[a-z]+\.[a-z]{2,5}$/;
const numberPattern = /^[0-9]{10}$/;
const namePattern = /^[A-Z]{1}[a-z]+$/
let formIsValid = true;
let errors = [];


  if(!emailPattern.test(userEmail)){
    formIsValid = false;
    errors.push("Please enter a valid email address.");
  }

  if(!numberPattern.test(userNumber)){
    formIsValid=false;
    errors.push("Please enter a valid phone number.");
  }
  
  if(!namePattern.test(userName)){
    formIsValid=false;
    errors.push("Please enter a valid name.");
  }

  if(userMessage.length===0){
    formIsValid=false;
    errors.push("Message cannot be empty.");
  }

  if(!formIsValid){
    alert(errors.join("\n"));
    return false;
  }else{
    alert("Successfully submitted the form");
    document.getElementById("name").value ="";
    document.getElementById("phone").value ="";
    document.getElementById("email").value ="";
    document.getElementById("message").value ="";
  }
  
}