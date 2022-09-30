// sign in JS part here

document.querySelector("form").addEventListener("submit", userSign);
let userArr = JSON.parse(localStorage.getItem("userData")) || []

// let userLoginArr = JSON.parse(localStorage.getItem("userLoginData"))  || []
function userSign(event) {
    event.preventDefault();
let userPhone = document.querySelector("#phone").value;
// let userEmail = document.querySelector("#email").value;
// let userPassword = document.querySelector("#password").value;

    console.log("invoking")
    if (userPhone == "" ) {
        alert("Please Sign Up first")
    } else {
        let userObj = {
            userPhone: userPhone,
        }
        userArr.push(userObj);
        localStorage.setItem("userData", JSON.stringify(userArr));
        alert("you are Signup seccessfully");
        window.location.href = "#"
    }
}