let submit = document.getElementById('submit');
const userName = document.getElementById("userName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
let validName = false;
let validEmail = false;
let validPhone = false;

// console.log(userName, email, phone);

userName.addEventListener("blur", () => {
  //Blur:-click away from that element
  console.log("userName is blurred");
  //todo validate userName here
  const regex = /^[a-zA-z]([0-9a-zA-Z\s+]){2,20}$/; //regex  must starts with a-z, A-Z, and must ends with
  //{2,10} it means charecters must be 3-10
  let str = userName.value; //value coming from the inputed value
  console.log(regex, str);
  if (regex.test(str)) {
    //if str matches with the regex
    console.log("Your name is matched");
    userName.classList.remove("is-invalid");
    validName = true;
  } else {
    console.log(`doesn't match`);
    userName.classList.add("is-invalid");
  }
  if (validName && validEmail && validPhone) {
    submit.disabled = false;
}
});


email.addEventListener("blur", () => {
  console.log("Your name is matched");
  //todo validate email here
  const regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,8}$/;
  let str = email.value;
  console.log(regex, str); 
  if (regex.test(str)) {
    console.log("Your email is matched");
    email.classList.remove("is-invalid");
    validEmail = true;
  } else {
    console.log(`doesn't match`);
    email.classList.add("is-invalid");
  }
  if (validName && validEmail && validPhone) {
    submit.disabled = false;
}
});


phone.addEventListener("blur", () => {
  console.log("phone is blurred");
  //todo validate phone number here
  const regex = /^[0-9]{10}$/;                                        
  let str = phone.value;                         
  console.log(regex, str);
  if (regex.test(str)) {                             
    console.log("Your phone is matched");
    phone.classList.remove("is-invalid");
    validPhone = true;
  } else {
    console.log(`doesn't match`);
    phone.classList.add("is-invalid");
  }
  if (validName && validEmail && validPhone) {
      submit.disabled = false;
  }
});

submit.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('Form Submitted Successfull');
    let success = document.getElementById('success');
    success.classList.add('show');
})