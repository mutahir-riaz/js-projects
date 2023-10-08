let signupEmail = document.getElementById("email")
let signupPass = document.getElementById("password")
let subBtn = document.getElementById("Signin")
subBtn.addEventListener("click",(event)=>{
    event.preventDefault()
    let Email = signupEmail.value
    
    let Password = signupPass.value
    a = localStorage.getItem(Email)
    // console.log(typeofa);
    // // if()
    if(a===Password){
        console.log("Password is right")
    }
    else{
        console.log("not");
    }
})