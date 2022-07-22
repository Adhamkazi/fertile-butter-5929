
        let form=document.querySelector("form");

        let signUpLs=JSON.parse(localStorage.getItem("signup")) || [];

        form.addEventListener("submit",function (event){
            event.preventDefault();
            let obj={
                email:form.name.value,
                number:form.Numb.value,
                password:form.psw.value,
            }
            if(obj.email==""){
                alert("Please enter Your Email")
                return
            }
            if( obj.number==""){
                alert("Please enter Your Number")
                return
            }
            if( obj.password==""){
                alert("Please Set Your Pasword")
                return
            }
            console.log(obj)
            signUpLs.push(obj);
            localStorage.setItem("signup",JSON.stringify(signUpLs));
        });







