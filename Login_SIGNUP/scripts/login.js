let saveddata=JSON.parse(localStorage.getItem("user"))
// console.log(saveddata);

document.getElementById("login").addEventListener("click",final)
function final(){
    event.preventDefault()
    let email1=document.getElementById("email").value;
    let pass1=document.getElementById("password").value;
    
  
   for(let i=0;i<saveddata.length;i++){
    if(saveddata[0].email===email1&&saveddata[0].password===pass1){
        alert("Login success");
        localStorage.setItem("name",JSON.stringify(saveddata[0].name))
        window.location.href="../ "
    }else{
        alert("Either email or password is incorrect")
    }
   }
}
// function entry(){
  
// }
// document.getElementById("signup").addEventListener("click",function(){
//     window.location.href="signup.html"
// })