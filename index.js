let signupEmail = document.getElementById("email")
let signupName = document.getElementById("name")
let signupPhone = document.getElementById("phone")
let signupPass = document.getElementById("password")
let subBtn = document.getElementById("Signin")
subBtn.addEventListener("click",(event)=>{
    event.preventDefault()
   let Email = signupEmail.value
   let Name = signupName.value
   let Phone = signupPhone.value
   let Password = signupPass.value
   let user = {
    email:Email,
    name:Name,
    phone:Phone,
    password:Password
}
localStorage.setItem(user.email,user.password)
a = localStorage.getItem(user.email)
console.log(a);
// console.log("Name : ",user.name , "\nEmail :",user.email)
signupEmail.value = "";
    signupName.value = "";
    signupPhone.value = "";
    signupPass.value = "";
})
// let user = {
//     email:signupEmail,
//     Name:signupName,
//     Phone:signupPhone,
//     password:signupPass
// }
// console.log()