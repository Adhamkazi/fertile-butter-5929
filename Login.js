let form=document.querySelector("form");
let signUpLs=JSON.parse(localStorage.getItem("signup")) || [];

form.addEventListener("submit",function (event){
  event.preventDefault();
  if(signUpLs.length==0){
    alret("No User till Now");
    return;
  }

  let obj={
    email:form.name.value,
    password:form.psw.value,
  }

  let flag=false;
  signUpLs.forEach(function (elem){
    
    if(elem.email==obj.email && elem.password==obj.password){
      flag=true;
      localStorage.setItem("Login",JSON.stringify(elem));
      alert("Login Successfull");
      window.location.href="Main.html"
    }
   
  
  });
  if(flag===false){
    alert("User Doesn't Exist")
  } 
  });

  