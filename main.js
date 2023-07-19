const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const cpassword = document.querySelector("#cpassword");

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateInput();
})

const validateInput = ()=>{
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

    if(usernameVal === ''){
        setError(username,'Username is required');
    }
    else{
        setSuccess(username);
    }
    if(emailVal === ''){
        setError(email,'Email is required');
    }
    else{
        setSuccess(email);
    }
    if(passwordVal === ''){
        setError(password,'Password is required');
    }
    else if(passwordVal.length<8){
        setError(password,'Minimum 8 charater');
    }
    else{
        setSuccess(password);
    }
    if(cpasswordVal === ''){
        setError(cpassword,'Password is required');
    }
    else if(passwordVal !== cpasswordVal){
        setError(cpassword,'Password does not match');
    }
    else{
        setSuccess(cpassword);
    }


}

const setError = (element,message) =>{
    const inputGroup = element.parentElement;
    const errorVal = inputGroup.querySelector(".error");

    errorVal.innerText = message;
    inputGroup.classList.add("fail");
    inputGroup.classList.remove("success");
}
const setSuccess = (element) =>{
    const inputGroup = element.parentElement;
    const errorVal = inputGroup.querySelector(".error");

    errorVal.innerText="";
    inputGroup.classList.add("success");
    inputGroup.classList.remove("fail");
}
