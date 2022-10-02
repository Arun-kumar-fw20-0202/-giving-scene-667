
function user(n,e,p,c){
    this.name=n;
    this.email=e;
    this.password=p;
    this.confirm_password=c;
}
let btn=document.querySelector("#submit-btn");
btn.addEventListener("click",savedata)
let data=[];
function savedata(){
    event.preventDefault();
   let obj={
    name:document.getElementById("name").value,
    email:document.getElementById("email").value,
    password:document.getElementById("password").value,
    cpassword:document.getElementById("confirm_password").value,
   }
   if(obj.name==""||obj.email==""||obj.password==""||obj.cpassword==""){
    alert("Fill credentials")
   }else if(obj.password!==obj.cpassword){
    alert("Password not matched")
   }
   else{
    data.push(obj);
    console.log(data);
    localStorage.setItem("user",JSON.stringify(data))
    window.location.href="./index.html"
   }
  
}
// function storeData(event){
//     event.preventDefault();

//     let form=document.getElementById("form");

//     let name=form.name.value;
//     let email=form.email.value;
//     let password=form.password.value;
//     let confirm_password=form.confirm_password.value;

//     let s1=new user(  name, email,password,confirm_password);
//     // console.log(s1)\


//     let products=JSON.parse(localStorage.getItem("data"))||[];
//   products.push(s1);
//     localStorage.setItem("data",JSON.stringify(products))
//     window.location.href="./login.html"
// }